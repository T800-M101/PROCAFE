import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";

import { ProductService } from "./services/product.service";
import { OrderService } from "./services/order.service";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from "./components/cart/cart.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { ProductDetailComponent } from "./components/products-list/product-detail/product-detail.component";

import { AuthGuard } from "./guards/auth.guard";
import { CartEmptyComponent } from "./components/cart/cart-empty/cart-empty.component";
import { ShippingComponent } from "./components/cart/shipping/shipping.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SearchproductComponent } from "./components/searchproduct/searchproduct.component";
import { PaymeComponent } from './components/payme/payme.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { YourordesComponent } from './components/yourordes/yourordes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsListComponent,
    LoginComponent,
    ProductDetailComponent,
    CartComponent,
    CartEmptyComponent,
    ShippingComponent,
    FooterComponent,
    SearchproductComponent,
    PaymeComponent,
    ResumenComponent,
    YourordesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ProductService, OrderService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
