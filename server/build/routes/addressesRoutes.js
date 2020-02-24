"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import Router para crear un enrutados del servidor
var express_1 = require("express");
var ProductsRoutes = /** @class */ (function () {
    function ProductsRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ProductsRoutes.prototype.config = function () {
        this.router.get("/", productsController.list);
        this.router.get("/:id", productsController.getOne);
        this.router.post("/", productsController.create);
        this.router.delete("/:id", productsController.delete);
        this.router.put("/:id", productsController.update);
        this.router.get("/category/:catId", productsController.getByCategory);
    };
    return ProductsRoutes;
}());
var productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
