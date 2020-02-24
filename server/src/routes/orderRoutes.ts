//Import Router para crear un enrutados del servidor
import { Router } from "express";
import orderController from "../controllers/orderController";

class OrderRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", orderController.getOrderId);
    this.router.get("/list/:user", orderController.getOrderList);
    this.router.get("/details/:user", orderController.getProductsDetails);
    this.router.post("/", orderController.createOrder);
    this.router.post("/list/", orderController.saveList);
    this.router.post("/tracking/", orderController.createTracking);
  }
}

const orderRoutes = new OrderRoutes();
export default orderRoutes.router;
