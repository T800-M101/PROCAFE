import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef
} from "@angular/core";
import { AddressService } from "../../../services/address.service";
import { ActivatedRoute, Params, RouterLink } from "@angular/router";
import { Router } from "@angular/router";
import { Order } from "../../../models/order";
import { ProductOrder } from "../../../models/productOrder";
import { OrderService } from "../../../services/order.service";
import Swal from "sweetalert2";
import { DataService } from "../../../services/data.service";
import { PaymentID } from "src/app/models/paymentID";
declare var paypal;

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  @ViewChild("paypal", { static: true }) paypalElement: ElementRef;

  p = {
    price: this.getTotal()
  };

  //Property in this component to have the specific value we want to work with.
  public nav: boolean;
  //Property in this component to have the specific value we want to work with.
  public qty: number;

  public productsInCart: any = [];
  public subTItems = 0;
  public temp2: any = [];
  public suma = 0;
  public total = 0;
  public address: any = [];
  public email: string;
  // public orderHashed: string;
  // public paid = false;
  public lastOrderId: any;
  public paymentID: string;

  order: Order = {
    payment_ID: "",
    total: 0,
    addressId: 0,
    user: ""
  };
  productOrder: ProductOrder = {
    user: "",
    productList: []
  };

  paymentid: PaymentID = {
    payment_id: ""
  };

  constructor(
    private data: DataService,
    private addressService: AddressService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.nav = false;
    this.data.showNavigation(this.nav);
    this.data.currentNav.subscribe(nav => (this.nav = nav));
    this.route.params.subscribe((params: Params) => {
      this.email = params.email;
      this.addressService.getAddress(this.email).subscribe(
        res => {
          this.address = res;
          console.log(this.address);
        },
        err => console.error(err)
      );
    });

    this.productsInCart = JSON.parse(localStorage.getItem("sc"));
    this.getTotalItems();
    //Hashing an order
    // this.hashOrder();

    paypal
      .Buttons({
        createOrder: (data, actions) => {
          // this.placeOrder();
          return actions.order.create({
            purchase_units: [
              {
                // description: this.productt.description,
                amount: {
                  currency_code: "MXN",
                  // value: this.order.total
                  value: this.p.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          // this.paifFor = true;
          if (order) {
            this.paymentID = order.id;
            this.paymentid.payment_id = order.id;
            console.log("aleluya" + this.paymentid.payment_id);

            // this.invoice.payment_ID = this.paymentID;
            // this.invoice.total = this.p.price;

            // this.invoice.payment_ID = order.id;
            console.log(order);
            this.orderService.saveTracking(this.paymentid).subscribe(
              res => {
                console.log(res);
              },
              err => console.error(err)
            );
            this.placeOrder();

            //  Swal.fire("Order Procesada con exito!", "felicidades!", "success");
          } else {
            Swal.fire(
              "No se pudo procesar el pago!",
              "Intenta nuevamente",
              "error"
            );
            this.router.navigate(["shipping"]);
          }
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  getTotalItems() {
    for (var i = 0; i < this.productsInCart.length; i++) {
      this.temp2[i] = this.productsInCart[i].qty;
    }
    for (var i = 0; i < this.productsInCart.length; i++) {
      this.suma = this.suma + this.temp2[i];
      this.subTItems = this.suma;
    }
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

  // hashOrder() {
  //   // Hashing an order
  //   let random = Math.random()
  //     .toString(36)
  //     .slice(2);

  //   let year = new Date().getFullYear().toString();
  //   let month = (new Date().getMonth() + 1).toString();
  //   let date = new Date();
  //   let day = date.getDay();
  //   this.orderHashed = year + month + day + random;

  //   return this.orderHashed;
  // }

  placeOrder() {
    this.order.payment_ID = this.paymentID;
    this.order.total = this.getTotal();
    this.order.addressId = this.address[0].id;
    this.order.user = this.email;
    //  this.createTracking();

    // console.log("this order:" + this.order);

    this.orderService.saveOrder(this.order).subscribe(
      res => {
        // console.log("ORDER:" + res);
        this.orderService.getOrderId(this.email).subscribe(
          res => {
            this.lastOrderId = res[0].id;
            console.log(this.lastOrderId);
            this.productOrder.orderId = this.lastOrderId;
            this.productOrder.user = this.email;
            this.productOrder.productList = this.productsInCart;

            this.orderService.saveList(this.productOrder).subscribe(
              res => {
                console.log(res);

                this.clearing();
              },
              err => console.error(err)
            );
          },
          err => console.error(err)
        );
        // this.createOrderProducts();
      },
      err => console.error(err)
    );

    this.router.navigate(["resumen", this.paymentID, this.order.total]);
  }

  //Metodo para generar una order_products
  // createOrderProducts() {
  //   this.getId();
  //   this.productOrder.orderId = this.lastOrderId;
  //   this.productOrder.user = this.email;
  //   this.productOrder.productList = this.productsInCart;

  //   this.orderService.saveList(this.productOrder).subscribe(
  //     res => {
  //       console.log(res);
  //       this.clearing();
  //     },
  //     err => console.error(err)
  //   );
  // }

  clearing() {
    //Vaciar localStorage
    localStorage.clear();
    this.qty = 0;
    this.data.increaseQty(this.qty);
    this.productOrder = null;
    // Swal.fire("One more step!", "You clicked the button!", "success");
    // this.router.navigate(["payments"]);
  }

  // createTracking() {
  //   this.orderService.saveTracking(order.id).subscribe(
  //     res => {
  //       console.log(res);
  //     },
  //     err => console.error(err)
  //   );
  // }

  // getId() {
  //   this.orderService.getOrderId(this.email).subscribe(
  //     res => {
  //       this.lastOrderId = res[0].id;
  //       console.log(this.lastOrderId);
  //     },
  //     err => console.error(err)
  //   );
  // }
}
