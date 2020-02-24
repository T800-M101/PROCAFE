import { Request, Response } from "express";

import pool from "../database";

class OrderController {
  //Metodo para listar todos los productos
  //   public async list(req: Request, res: Response) {
  //     const products = await pool.query("SELECT * FROM products");
  //     res.json(products);
  //   }

  //Metodo para obtener the order id
  public async getOrderId(req: Request, res: Response): Promise<any> {
    // var _user = req.body.email;

    try {
      const orderId = await pool.query(
        "SELECT * FROM orders  WHERE user = 'tuahil@gmail.com' ORDER BY id DESC LIMIT 1"
      );
      if (orderId.length > 0) {
        return res.json(orderId);
      } else {
        res.status(404).json({ text: "There were not results." });
      }
    } catch (ex) {
      console.log(ex);
    }

    // const orderId = await pool.query("SELECT MAX(id) from orders");
  }

  //Metodo para obtener lista de ordenes por usuario
  public async getOrderList(req: Request, res: Response): Promise<any> {
    const { user } = req.params;
    const orderList = await pool.query(
      "SELECT customer_name, lastname, address1,address2,city,postal_code, payment_ID,total,order_placed,status,status_date from customers INNER JOIN  addresses ON customers.user = addresses.user INNER JOIN orders ON customers.user = orders.user INNER JOIN tracking ON orders.payment_ID = tracking.paymentID WHERE customers.user = ?",
      [user]
    );
    res.json(orderList);
  }

  //Metodo para obtener productos por detalle
  public async getProductsDetails(req: Request, res: Response): Promise<any> {
    const { user } = req.params;
    const productsDetails = await pool.query(
      "SELECT description, image, price from products INNER JOIN orders_products ON products.id = orders_products.product_id  WHERE orders_products.user = ?",
      [user]
    );
    res.json(productsDetails);
  }

  //Metodo para crear una orden
  public async createOrder(req: Request, res: Response): Promise<void> {
    var _paymentID = req.body.payment_ID;
    var _total = req.body.total;
    var _addressId = req.body.addressId;
    var _user = req.body.user;
    try {
      await pool.query(
        "INSERT INTO orders (payment_ID,total,address_id,user) VALUES ('" +
          _paymentID +
          "'," +
          _total +
          "," +
          _addressId +
          ",'" +
          _user +
          "');"
      );
    } catch (ex) {
      console.log(ex);
    }

    res.json({ message: "order created" });
  }

  //create tracking

  public async createTracking(req: Request, res: Response): Promise<void> {
    var _paymentID = req.body.payment_id;
    try {
      await pool.query(
        "INSERT INTO tracking (paymentID) VALUES ('" + _paymentID + "');"
      );
      res.json({ message: "tracking created" });
    } catch (ex) {
      console.log(ex);
    }
  }

  //Metodo para insertar productos de una orden
  public async saveList(req: Request, res: Response): Promise<void> {
    var _orderId = req.body.orderId;
    var _user = req.body.user;
    var _prodList = req.body.productList;

    for (let i = 0; i < _prodList.length; i++) {
      console.log("ordeID:" + JSON.stringify(_orderId));
      console.log("_user:" + JSON.stringify(_user));
      console.log("_prodList:" + JSON.stringify(_prodList[i]));
      try {
        await pool.query(
          "INSERT INTO orders_products (orderId,user,product_id,quantity) VALUES (" +
            _orderId +
            ",'" +
            _user +
            "'," +
            _prodList[i].id +
            "," +
            _prodList[i].qty +
            ");"
        );

        res.json({ message: "List created" });
      } catch (ex) {
        console.log(ex);
      }
    }
  }
}

const orderController = new OrderController();

export default orderController;
