import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductService } from "../../../services/product.service";
import { DataService } from "../../../services/data.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  public id: any;
  public product: any = [];
  public totalItems: any = [];
  public shoppingCart: any = [];
  public temp2: any = [];
  public suma = 0;

  //Property in this component to have the specific value we want to work with.
  public qty: number;
  public nav: boolean;

  //Array to pass the shopping Cart
  public cartToPass: any = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit() {
    this.nav = true;
    this.data.showNavigation(this.nav);
    this.data.currentNav.subscribe(nav => (this.nav = nav));
    //Se verifica si el localStorage del navegador tiene informacion almacenada
    //Si no tiene se inicia el array shoppingCart en cero, si tiene informacion
    //se parsea a un objeto JSON para utilizar sus valores
    if (localStorage.getItem("sc") == null) {
      this.shoppingCart = [];
    } else {
      this.shoppingCart = JSON.parse(localStorage.getItem("sc"));
    }

    //Getting the product id that comes through the url
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;

      if (this.id == null) {
        // this.route.="['/products/category', '3']"
      } else {
        this.getProductById(this.id);
      }
    });

    this.data.currentQty.subscribe(qty => (this.qty = qty));
    this.data.currentCart.subscribe(cart => (this.cartToPass = cart));
  }

  //Get a product by id
  getProductById(id: any) {
    this.productService.getOneProduct(id).subscribe(
      res => {
        this.product = res;
        // console.log(res);
      },
      err => console.log(err)
    );
  }

  addToCart() {
    var itemInfo = this.product[0];

    var itemInCart = false;
    this.shoppingCart.forEach(function(item, index) {
      if (item.id == itemInfo.id) {
        item.qty++;
        itemInCart = true;
      }
    });

    if (itemInCart) {
      localStorage.setItem("sc", JSON.stringify(this.shoppingCart));
    }

    if (!itemInCart) {
      this.shoppingCart.push(itemInfo);

      localStorage.setItem("sc", JSON.stringify(this.shoppingCart));
    }

    this.getTotalItems();
    Swal.fire("Product Added!", "", "success");
  }

  passToCart() {
    this.cartToPass = this.shoppingCart;
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
    this.suma = 0;
  }
}
