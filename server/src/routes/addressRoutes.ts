//Import Router para crear un enrutados del servidor
import { Router } from "express";
import addressController from "../controllers/addressController";

class AddressRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", addressController.list);
    this.router.get("/:email", addressController.getAddress);
    // this.router.post("/", addressController.create);
    // this.router.delete("/:id", addressController.delete);
    // this.router.put("/:id", addressController.update);
    // this.router.get("/category/:catId", addressController.getByCategory);
  }
}

const addressRoutes = new AddressRoutes();
export default addressRoutes.router;
