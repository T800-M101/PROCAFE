import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/auth.service";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  //Propiedad para recibir el DataService
  qty: number;

  //Property in this component to have the specific value we want to work with.
  public nav: boolean;

  constructor(
    private authService: AuthService,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.nav = true;
    this.data.showNavigation(this.nav);
    this.data.currentNav.subscribe(nav => (this.nav = nav));

    // this.showM = false;
    // this.showP = false;

    this.data.currentQty.subscribe(qty => (this.qty = qty));
  }

  goTo() {
    if (this.qty == 0) {
      this.router.navigate(["/cartempty"]);
    } else {
      this.router.navigate(["/cart"]);
    }
  }

  searchProduct(term: string) {
    if (term == "") {
      return;
    } else {
      this.router.navigate(["/searchproduct", term]);
    }
  }
}
