"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import Router para crear un enrutados del servidor
var express_1 = require("express");
var addressController_1 = __importDefault(require("../controllers/addressController"));
var AddressRoutes = /** @class */ (function () {
    function AddressRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AddressRoutes.prototype.config = function () {
        this.router.get("/", addressController_1.default.list);
        this.router.get("/:email", addressController_1.default.getAddress);
        // this.router.post("/", addressController.create);
        // this.router.delete("/:id", addressController.delete);
        // this.router.put("/:id", addressController.update);
        // this.router.get("/category/:catId", addressController.getByCategory);
    };
    return AddressRoutes;
}());
var addressRoutes = new AddressRoutes();
exports.default = addressRoutes.router;
