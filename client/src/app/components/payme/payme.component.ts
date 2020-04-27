import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
declare var paypal;

@Component({
  selector: "app-payme",
  templateUrl: "./payme.component.html",
  styleUrls: ["./payme.component.css"],
})
export class PaymeComponent implements OnInit {
  // @ViewChild("paypal", { static: true }) paypalElement: ElementRef;

  // product = {
  //   price: 800.0,
  //   description: "Jarabe para cafe",
  //   img: "assets/img/jarabe_Amareto.jpg",
  // };

  // paifFor = false;

  constructor() {}

  ngOnInit() {
    // paypal
    //   .Buttons({
    //     createOrder: (data, actions) => {
    //       return actions.order.create({
    //         purchase_units: [
    //           {
    //             description: this.product.description,
    //             amount: {
    //               currency_code: "USD",
    //               value: this.product.price
    //             }
    //           }
    //         ]
    //       });
    //     },
    //     onApprove: async (data, actions) => {
    //       const order = await actions.order.capture();
    //       this.paifFor = true;
    //       console.log(order);
    //     }
    //   })
    //   .render(this.paypalElement.nativeElement);
  }
}
