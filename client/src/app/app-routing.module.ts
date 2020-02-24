import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductDetailComponent } from "./components/products-list/product-detail/product-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from "./components/cart/cart.component";
import { CartEmptyComponent } from "./components/cart/cart-empty/cart-empty.component";

import { AuthGuard } from "./guards/auth.guard";
import { ShippingComponent } from "./components/cart/shipping/shipping.component";
import { SearchproductComponent } from "./components/searchproduct/searchproduct.component";
import { PaymeComponent } from "./components/payme/payme.component";
import { ResumenComponent } from "./components/resumen/resumen.component";
import { YourordesComponent } from "./components/yourordes/yourordes.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "products",
    component: ProductsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "products/category/:catId",
    component: ProductsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "products/:id",
    component: ProductDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "cartempty",
    component: CartEmptyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "shipping/:email",
    component: ShippingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "searchproduct/:term",
    component: SearchproductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "payments",
    component: PaymeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "resumen/:paymentID/:total",
    component: ResumenComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "yourorders",
    component: YourordesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
