import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root"
})
export class DataService {
  // We create a private BehaviorSubject (quantitySource)that will hold the current value of the data of pass.
  private quantitySource = new BehaviorSubject<number>(0);
  private NavigationSource = new BehaviorSubject<boolean>(false);

  // We define the currentQty variable to handle the data stream as an observable that will be used by the components.
  public currentQty = this.quantitySource.asObservable();
  public currentNav = this.NavigationSource.asObservable();

  //Array for cart
  private cartSource = new BehaviorSubject<any>(null);
  public currentCart = this.cartSource.asObservable();

  constructor() {}

  //Lastly, we create function that calls next on the BehaviorSubject to change its value.
  //It receives and passes a value.
  increaseQty(qty: number) {
    this.quantitySource.next(qty);
  }

  showNavigation(myNav: boolean) {
    this.NavigationSource.next(myNav);
  }

  //Methos to change value to array
  passingCart(sc: any) {
    this.cartSource.next(sc);
  }
}
