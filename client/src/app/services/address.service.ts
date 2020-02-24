import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AddressService {
  API_URI = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getAllAddresses() {
    return this.http.get(`${this.API_URI}/address`);
  }

  getAddress(email: any) {
    return this.http.get(`${this.API_URI}/address/${email}`);
  }

  //   getByCategory(catId: any) {
  //     return this.http.get(`${this.API_URI}/products/category/${catId}`);
  //   }

  //   saveProduct(product: Product) {
  //     return this.http.post(`${this.API_URI}/products`, product);
  //   }

  //   deleteProduct(id: any) {
  //     return this.http.delete(`${this.API_URI}/products/${id}`);
  //   }

  //   updateProduct(id: any, updatedProduct: Product): Observable<Product> {
  //     return this.http.put(`${this.API_URI}/${id}`, updatedProduct);
  //   }
}
