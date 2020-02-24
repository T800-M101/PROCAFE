import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { OrderService } from "../../services/order.service";

@Component({
  selector: "app-yourordes",
  templateUrl: "./yourordes.component.html",
  styleUrls: ["./yourordes.component.css"]
})
export class YourordesComponent implements OnInit {
  public nav: boolean;
  orderList: any;
  productsDetails: any;
  user = "tuahil@gmail.com";

  constructor(private data: DataService, private orderService: OrderService) {
    this.orderService.getOrderList(this.user).subscribe(res => {
      this.orderList = res;
      console.log(res);
    });

    this.orderService.getProductsDetails(this.user).subscribe(res => {
      this.productsDetails = res;
      console.log(this.productsDetails);
    });
  }

  ngOnInit() {
    this.nav = true;
    this.data.showNavigation(this.nav);
    this.data.currentNav.subscribe(nav => (this.nav = nav));
    // console.log("list: " + this.orderList);
  }

  //Get a list of orders by user
  // getOrderList(user: any) {
  //   this.orderService.getOrderList(user).subscribe(
  //     res => {
  //       this.orderList = JSON.stringify(res);
  //       // console.log("your orders: " + JSON.stringify(this.orderList));
  //     },
  //     err => console.log(err)
  //   );
  // }
}
