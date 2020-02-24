import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, RouterLink, Router } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-resumen",
  templateUrl: "./resumen.component.html",
  styleUrls: ["./resumen.component.css"]
})
export class ResumenComponent implements OnInit {
  public nav: boolean;
  paymentID: string;
  total: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.nav = true;
    this.data.showNavigation(this.nav);
    this.data.currentNav.subscribe(nav => (this.nav = nav));
    this.activatedRoute.params.subscribe(params => {
      this.paymentID = params.paymentID;
      this.total = params.total;
    });
  }

  // clearOrder() {
  //   this.router.navigate(["/products"]);
  // }
}
