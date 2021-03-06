//Import Router para crear un enrutados del servidor
import { Router } from "express";
import productsController from "../controllers/productsController";

class ProductsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", productsController.list);
    this.router.get("/:id", productsController.getOne);
    this.router.post("/", productsController.create);
    this.router.delete("/:id", productsController.delete);
    this.router.put("/:id", productsController.update);
    this.router.get("/category/:catId", productsController.getByCategory);
  }
}

const productsRoutes = new ProductsRoutes();
export default productsRoutes.router;
