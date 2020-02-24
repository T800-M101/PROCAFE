"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import Router para crear un enrutados del servidor
var express_1 = require("express");
var orderController_1 = __importDefault(require("../controllers/orderController"));
var OrderRoutes = /** @class */ (function () {
    function OrderRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    OrderRoutes.prototype.config = function () {
        this.router.get("/", orderController_1.default.getOrderId);
        this.router.get("/list/:user", orderController_1.default.getOrderList);
        this.router.get("/details/:user", orderController_1.default.getProductsDetails);
        this.router.post("/", orderController_1.default.createOrder);
        this.router.post("/list/", orderController_1.default.saveList);
        this.router.post("/tracking/", orderController_1.default.createTracking);
    };
    return OrderRoutes;
}());
var orderRoutes = new OrderRoutes();
exports.default = orderRoutes.router;
