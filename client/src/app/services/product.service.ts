import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  allProducts: any = [];

  API_URI = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(`${this.API_URI}/products`);
  }

  getOneProduct(id: any) {
    return this.http.get(`${this.API_URI}/products/${id}`);
  }

  getByCategory(catId: any) {
    return this.http.get(`${this.API_URI}/products/category/${catId}`);
  }

  saveProduct(product: Product) {
    return this.http.post(`${this.API_URI}/products`, product);
  }

  deleteProduct(id: any) {
    return this.http.delete(`${this.API_URI}/products/${id}`);
  }

  updateProduct(id: any, updatedProduct: Product): Observable<Product> {
    return this.http.put(`${this.API_URI}/${id}`, updatedProduct);
  }

  searchProducts(term: string) {
    let productsArr: any[] = [];
    term = term.toLowerCase();

    this.getAllProducts().subscribe(
      res => {
        this.allProducts = res;
      },
      err => console.error(err)
    );

    for (let product of this.allProducts) {
      let name = product.name.toLowerCase();
      let desc = product.description.toLowerCase();
      if (name.indexOf(term) >= 0 || desc.indexOf(term) >= 0) {
        productsArr.push(product);
      }
    }
    return productsArr;
  }
}
