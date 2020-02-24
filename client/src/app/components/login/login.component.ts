import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/auth.service";
import { Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  //Property in this component to have the specific value we want to work with.
  public nav: boolean;
  constructor(
    private data: DataService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.nav = false;
    this.data.showNavigation(this.nav);
    this.data.currentNav.subscribe(nav => (this.nav = nav));
  }

  // onLoginGoogle() {
  //   this.afAuth.auth
  //     .signInWithPopup(new auth.GoogleAuthProvider())
  //     .then(credentials => {
  //       console.log(credentials);
  //     });

  // this.router.navigate(["products"]);
  // }
}
