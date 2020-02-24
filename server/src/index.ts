//SERVER SETTINGS

//Import express
import express, { Application } from "express";
//Importing routes
import indexRoutes from "./routes/indexRoutes";
import productsRoutes from "./routes/productsRoutes";
import addressRoutes from "./routes/addressRoutes";
import orderRoutes from "./routes/orderRoutes";
// import productsCategoryRoutes from "./routes/productsCategoryRoutes";

//Importing modules
import morgan from "morgan";
import cors from "cors";

class Server {
  //Se crea propiedad app para guardar el objeto que devuelve el metodo express();
  public app: Application;

  // Crear contructor que es un metodo que se ejecuta al intanciar la clase
  constructor() {
    //Aqui el constructor va a inicializar express. Express devuelve un objeto que se debe guardar
    // en una propiedad.
    this.app = express();
    this.config();
    this.routes();
  }

  //Metodo config(); es para configurar la propiedad app
  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  // metodo routes(); es para definir las rutas del servidor
  routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/api/products", productsRoutes);
    this.app.use("/api/address", addressRoutes);
    this.app.use("/api/order", orderRoutes);
  }

  //Metodo start(); inicializa el servidor
  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server running on port", this.app.get("port"));
    });
  }
}

//Esto ejecuta la clase y devuelve un objeto tipo Server y se guarda en una constante
const server = new Server();
//ejecutar metodo start();
server.start();
