import { Request, Response } from "express";

import pool from "../database";

class AddressController {
  //Metodo para listar todos los productos
  public async list(req: Request, res: Response) {
    const address = await pool.query("SELECT * FROM addresses");
    res.json(address);
  }

  // Metodo para obtener 1 address
  public async getAddress(req: Request, res: Response): Promise<any> {
    const { email } = req.params;
    const customerAddress = await pool.query(
      "SELECT * FROM addresses WHERE user = ?",
      [email]
    );
    if (customerAddress.length > 0) {
      return res.json(customerAddress);
    } else {
      res.status(404).json({ text: "The email provided does not exist." });
    }
  }

  //Metodo para crear un producto
  // public async create(req: Request, res: Response): Promise<void> {
  //   await pool.query("INSERT INTO products set ?", [req.body]);
  //   res.json({ message: "Product created" });
  // }

  //Metodo para eliminar un producto
  // public async delete(req: Request, res: Response): Promise<void> {
  //   const { id } = req.params;
  //   await pool.query("DELETE FROM products WHERE id = ?", [id]);
  //   res.json({ message: "Product was deleted " });
  // }

  //Metodo para actualizar un producto
  // public async update(req: Request, res: Response): Promise<void> {
  //   const { id } = req.params;
  //   await pool.query("UPDATE products SET ? WHERE id = ?", [req.body, id]);
  //   res.json({ message: "Product was updated" });
  // }

  // Metodo para obtener productos por categoria
  //   public async getByCategory(req: Request, res: Response): Promise<any> {
  //     const { catId } = req.params;
  //     const products = await pool.query(
  //       "SELECT * FROM products WHERE catId = ?",
  //       [catId]
  //     );
  //     if (products.length > 0) {
  //       return res.json(products);
  //     } else {
  //       res
  //         .status(404)
  //         .json({ text: "The category Id provided does not exist." });
  //     }
  //   }
}

const addressController = new AddressController();

export default addressController;
