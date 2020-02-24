import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { User } from "../shared/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: User;
  constructor(
    public router: Router,
    public ngZone: NgZone,
    public afAuth: AngularFireAuth,
    private angularFireAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  // Firebase SignInWithPopup
  OAuthProvider(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        this.ngZone.run(() => {
          this.router.navigate(["products"]);
        });
      })
      .catch(error => {
        window.alert(error);
      });
  }

  // Firebase Google Sign-in
  SigninWithGoogle() {
    return this.OAuthProvider(new auth.GoogleAuthProvider())
      .then(res => {
        console.log("Successfully logged in!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Firebase Google Sign-in
  SigninWithFacebook() {
    return this.OAuthProvider(new auth.FacebookAuthProvider())
      .then(res => {
        console.log("Successfully logged in!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Firebase Logout
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["login"]);
    });
  }
}
