import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductOrder } from "../models/productOrder";
import { Order } from "../models/order";
import { Observable } from "rxjs";
import { PaymentID } from "../models/paymentID";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  API_URI = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  //   getAllAddresses() {
  //     return this.http.get(`${this.API_URI}/address`);
  //   }

  getOrderId(email: string) {
    return this.http.get(`${this.API_URI}/order`);
  }

  //////////////////////////
  getOrderList(user: string) {
    return this.http.get(`${this.API_URI}/order/list/${user}`);
  }

  //////////////////////////
  getProductsDetails(user: string) {
    return this.http.get(`${this.API_URI}/order/details/${user}`);
  }

  //   getByCategory(catId: any) {
  //     return this.http.get(`${this.API_URI}/products/category/${catId}`);
  //   }

  saveOrder(order: Order) {
    return this.http.post(`${this.API_URI}/order`, order);
  }

  saveTracking(paymentID: PaymentID) {
    return this.http.post(`${this.API_URI}/order/tracking`, paymentID);
  }

  saveList(orderProducts: ProductOrder) {
    return this.http.post(`${this.API_URI}/order/list`, orderProducts);
  }

  //   deleteProduct(id: any) {
  //     return this.http.delete(`${this.API_URI}/products/${id}`);
  //   }

  //   updateProduct(id: any, updatedProduct: Product): Observable<Product> {
  //     return this.http.put(`${this.API_URI}/${id}`, updatedProduct);
  //   }
}
