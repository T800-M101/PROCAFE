"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var OrderController = /** @class */ (function () {
    function OrderController() {
    }
    //Metodo para listar todos los productos
    //   public async list(req: Request, res: Response) {
    //     const products = await pool.query("SELECT * FROM products");
    //     res.json(products);
    //   }
    //Metodo para obtener the order id
    OrderController.prototype.getOrderId = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var orderId, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, database_1.default.query("SELECT * FROM orders  WHERE user = 'tuahil@gmail.com' ORDER BY id DESC LIMIT 1")];
                    case 1:
                        orderId = _a.sent();
                        if (orderId.length > 0) {
                            return [2 /*return*/, res.json(orderId)];
                        }
                        else {
                            res.status(404).json({ text: "There were not results." });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        console.log(ex_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //Metodo para obtener lista de ordenes por usuario
    OrderController.prototype.getOrderList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, orderList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = req.params.user;
                        return [4 /*yield*/, database_1.default.query("SELECT customer_name, lastname, address1,address2,city,postal_code, payment_ID,total,order_placed,status,status_date from customers INNER JOIN  addresses ON customers.user = addresses.user INNER JOIN orders ON customers.user = orders.user INNER JOIN tracking ON orders.payment_ID = tracking.paymentID WHERE customers.user = ?", [user])];
                    case 1:
                        orderList = _a.sent();
                        res.json(orderList);
                        return [2 /*return*/];
                }
            });
        });
    };
    //Metodo para obtener productos por detalle
    OrderController.prototype.getProductsDetails = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, productsDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = req.params.user;
                        return [4 /*yield*/, database_1.default.query("SELECT description, image, price from products INNER JOIN orders_products ON products.id = orders_products.product_id  WHERE orders_products.user = ?", [user])];
                    case 1:
                        productsDetails = _a.sent();
                        res.json(productsDetails);
                        return [2 /*return*/];
                }
            });
        });
    };
    //Metodo para crear una orden
    OrderController.prototype.createOrder = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _paymentID, _total, _addressId, _user, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _paymentID = req.body.payment_ID;
                        _total = req.body.total;
                        _addressId = req.body.addressId;
                        _user = req.body.user;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, database_1.default.query("INSERT INTO orders (payment_ID,total,address_id,user) VALUES ('" +
                                _paymentID +
                                "'," +
                                _total +
                                "," +
                                _addressId +
                                ",'" +
                                _user +
                                "');")];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_2 = _a.sent();
                        console.log(ex_2);
                        return [3 /*break*/, 4];
                    case 4:
                        res.json({ message: "order created" });
                        return [2 /*return*/];
                }
            });
        });
    };
    //create tracking
    OrderController.prototype.createTracking = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _paymentID, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _paymentID = req.body.payment_id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, database_1.default.query("INSERT INTO tracking (paymentID) VALUES ('" + _paymentID + "');")];
                    case 2:
                        _a.sent();
                        res.json({ message: "tracking created" });
                        return [3 /*break*/, 4];
                    case 3:
                        ex_3 = _a.sent();
                        console.log(ex_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //Metodo para insertar productos de una orden
    OrderController.prototype.saveList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _orderId, _user, _prodList, i, ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _orderId = req.body.orderId;
                        _user = req.body.user;
                        _prodList = req.body.productList;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < _prodList.length)) return [3 /*break*/, 6];
                        console.log("ordeID:" + JSON.stringify(_orderId));
                        console.log("_user:" + JSON.stringify(_user));
                        console.log("_prodList:" + JSON.stringify(_prodList[i]));
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, database_1.default.query("INSERT INTO orders_products (orderId,user,product_id,quantity) VALUES (" +
                                _orderId +
                                ",'" +
                                _user +
                                "'," +
                                _prodList[i].id +
                                "," +
                                _prodList[i].qty +
                                ");")];
                    case 3:
                        _a.sent();
                        res.json({ message: "List created" });
                        return [3 /*break*/, 5];
                    case 4:
                        ex_4 = _a.sent();
                        console.log(ex_4);
                        return [3 /*break*/, 5];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return OrderController;
}());
var orderController = new OrderController();
exports.default = orderController;
