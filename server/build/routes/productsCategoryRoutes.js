"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import Router para crear un enrutados del servidor
var express_1 = require("express");
var ProductsRoutes = /** @class */ (function () {
    function ProductsRoutes() {
        //   this.config();
        // }
        this.router = express_1.Router();
        this.productsRoutes = new ProductsRoutes();
        // config(): void {
        //   this.router.get("/:catId", productsCategoryController.getByCategory);
        // }
    }
    return ProductsRoutes;
}());
// export default productsRoutes.router;
