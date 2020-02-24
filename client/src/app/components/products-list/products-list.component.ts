import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute, Params } from "@angular/router";
import { AuthService } from "src/app/shared/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "../../shared/user";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"]
})
export class ProductsListComponent implements OnInit {
  //Propiedad para carrito
  public shoppingCart: any[];
  //Declara propiedades
  public products: any = [];
  public catId: any;

  //Property in this component to have the specific value we want to work with.
  public nav: boolean;
  public footer: boolean;

  //Get value of productQty with ngModel
  public productQty: number;

  // user: UserInterface;
  public user: User;

  constructor(
    private data: DataService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private authService: AuthService,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.nav = true;
    this.data.showNavigation(this.nav);
    this.data.currentNav.subscribe(nav => (this.nav = nav));

    //Traer de la base de datos el shopping cart

    //Guardar el response en la propiedad Shopping Cart

    //It was imported the DataService and was created a property in the constructos
    // to Subscribe to DataService which has the property currentQty and store
    //the value of qty a receive the source value
    // this.data.currentQty.subscribe(qty => (this.qty = qty));

    // The property user stores the info from the localStorage
    // this.user = JSON.parse(localStorage.getItem("user"));

    //Getting the info of the user
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      // console.log(this.user.displayName);
    });
    // console.log("my data:" + this.user.displayName);
    //Get all products method
    this.route.params.subscribe((params: Params) => {
      this.catId = params.catId;
      if (this.catId == null) {
        this.productService.getAllProducts().subscribe(
          res => {
            this.products = res;
            console.log(JSON.stringify(this.products));
          },
          err => console.error(err)
        );
      } else {
        this.getProductsByCategory(this.catId);
      }
    });
  }

  //Get  products by category
  getProductsByCategory(catId: any) {
    this.productService.getByCategory(catId).subscribe(
      res => {
        this.products = res;
        // console.log(res);
      },
      err => console.log(err)
    );
  }
}
