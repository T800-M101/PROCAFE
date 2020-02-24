"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import Router para crear un enrutados del servidor
var express_1 = require("express");
var productsCodeController_1 = __importDefault(require("../controllers/productsCodeController"));
var ProductsRoutes = /** @class */ (function () {
    function ProductsRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ProductsRoutes.prototype.config = function () {
        this.router.get("/:code", productsCodeController_1.default.getByCode);
    };
    return ProductsRoutes;
}());
var productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
