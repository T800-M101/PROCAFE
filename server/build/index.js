"use strict";
//SERVER SETTINGS
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import express
var express_1 = __importDefault(require("express"));
//Importing routes
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
var addressRoutes_1 = __importDefault(require("./routes/addressRoutes"));
var orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
// import productsCategoryRoutes from "./routes/productsCategoryRoutes";
//Importing modules
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    // Crear contructor que es un metodo que se ejecuta al intanciar la clase
    function Server() {
        //Aqui el constructor va a inicializar express. Express devuelve un objeto que se debe guardar
        // en una propiedad.
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Metodo config(); es para configurar la propiedad app
    Server.prototype.config = function () {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    // metodo routes(); es para definir las rutas del servidor
    Server.prototype.routes = function () {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/api/products", productsRoutes_1.default);
        this.app.use("/api/address", addressRoutes_1.default);
        this.app.use("/api/order", orderRoutes_1.default);
    };
    //Metodo start(); inicializa el servidor
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get("port"), function () {
            console.log("Server running on port", _this.app.get("port"));
        });
    };
    return Server;
}());
//Esto ejecuta la clase y devuelve un objeto tipo Server y se guarda en una constante
var server = new Server();
//ejecutar metodo start();
server.start();
