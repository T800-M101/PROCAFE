"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductsController = /** @class */ (function () {
    function ProductsController() {
    }
    ProductsController.prototype.index = function (req, res) {
        res.send("Products!");
    };
    return ProductsController;
}());
var productsController = new ProductsController();
exports.default = productsController;
