import { Component, OnInit, DoCheck } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";

import { ActivatedRoute, Params } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

import { User } from "../../shared/user";
import Swal from "sweetalert2";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit, DoCheck {
  public user: User;
  public email: string;
  //Array to pass the shopping Cart
  public productsInCart: any = [];
  public productIndex: any;
  public temp2: any = [];
  public suma = 0;
  public subTItems = 0;
  public total = 0;

  //Property in this component to have the specific value we want to work with.
  public qty: number;
  public nav: boolean;

  constructor(
    private data: DataService,
    public router: Router,
    private route: ActivatedRoute,
    public afAuth: AngularFireAuth,
    private angularFireAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.nav = true;
    this.data.showNavigation(this.nav);
    this.data.currentNav.subscribe(nav => (this.nav = nav));

    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.email = this.user.email;
    });

    this.productsInCart = JSON.parse(localStorage.getItem("sc"));

    this.data.currentQty.subscribe(qty => (this.qty = qty));
    this.getTotalItems();
    this.getTotal();
  }

  ngDoCheck() {
    if (this.productsInCart == "") {
      this.subTItems = 0;
      this.total = 0;
      this.qty = 0;
      this.data.increaseQty(this.qty);
      this.router.navigate(["cartempty"]);
    }
  }

  //Adding additional product to cart
  addOneToCart(i: any) {
    event.preventDefault();
    this.productIndex = i;
    this.productsInCart = JSON.parse(localStorage.getItem("sc"));

    this.productsInCart[this.productIndex].qty++;
    localStorage.setItem("sc", JSON.stringify(this.productsInCart));

    this.getTotalItems();
    this.getTotal();
  }

  //Removing one product from cart
  removeOneFromCart(i: any) {
    event.preventDefault();
    this.productIndex = i;
    this.productsInCart = JSON.parse(localStorage.getItem("sc"));

    this.productsInCart[this.productIndex].qty--;
    localStorage.setItem("sc", JSON.stringify(this.productsInCart));
    this.getTotalItems();
    this.getTotal();
  }

  //Removing the product from the cart
  removeProduct(i: any) {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.productIndex = i;
        this.productsInCart = JSON.parse(localStorage.getItem("sc"));

        if (this.productsInCart.length > 0) {
          this.productsInCart.splice(this.productIndex, 1);
          localStorage.setItem("sc", JSON.stringify(this.productsInCart));
        }
        this.getTotalItems();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  getTotalItems() {
    var temp = JSON.parse(localStorage.getItem("sc"));

    for (var i = 0; i < temp.length; i++) {
      this.temp2[i] = temp[i].qty;
    }
    for (var i = 0; i < temp.length; i++) {
      this.suma = this.suma + this.temp2[i];
    }

    this.qty = this.suma;
    this.data.increaseQty(this.qty);
    this.subTItems = this.suma;
    this.suma = 0;
  }
  getTotal() {
    var temporal = JSON.parse(localStorage.getItem("sc"));
    var getSubtotal = 0;
    var subtotal = 0;
    for (var i = 0; i < temporal.length; i++) {
      getSubtotal += temporal[i].qty * temporal[i].price;

      this.total = getSubtotal;
    }
    return this.total;
  }
}
