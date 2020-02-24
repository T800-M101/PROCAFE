import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  //Property in this component to have the specific value we want to work with.
  public nav: boolean;
  year: number;
  constructor(private data: DataService) {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
    this.nav = true;

    this.data.showNavigation(this.nav);
    this.data.currentNav.subscribe(nav => (this.nav = nav));
  }
}
