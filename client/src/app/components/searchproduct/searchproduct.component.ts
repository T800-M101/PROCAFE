import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-searchproduct",
  templateUrl: "./searchproduct.component.html",
  styleUrls: ["./searchproduct.component.css"]
})
export class SearchproductComponent implements OnInit {
  term: string;
  products: any[] = [];
  allProducts: any = [];
  results: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.term = params["term"];
      console.log(params["term"]);
      this.products = this._productService.searchProducts(params["term"]);
      console.log(this.products);
      // if (this.products.length == 0) {
      //   this.router.navigate(["/noresults", params["term"]]);
      // }
    });
  }
}
