import { Request, Response } from "express";

import pool from "../database";

class ProductsController {
  //Metodo para listar todos los productos
  public async list(req: Request, res: Response) {
    const products = await pool.query("SELECT * FROM products");
    res.json(products);
  }

  //Metodo para obtener 1 producto
  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const products = await pool.query("SELECT * FROM products WHERE id= ?", [
      id
    ]);
    if (products.length > 0) {
      return res.json(products);
    } else {
      res.status(404).json({ text: "The id provided does not exist." });
    }
  }
  //Metodo para crear un producto
  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO products set ?", [req.body]);
    res.json({ message: "Product created" });
  }

  //Metodo para eliminar un producto
  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("DELETE FROM products WHERE id = ?", [id]);
    res.json({ message: "Product was deleted " });
  }

  //Metodo para actualizar un producto
  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("UPDATE products SET ? WHERE id = ?", [req.body, id]);
    res.json({ message: "Product was updated" });
  }

  // Metodo para obtener productos por categoria
  public async getByCategory(req: Request, res: Response): Promise<any> {
    const { catId } = req.params;
    const products = await pool.query(
      "SELECT * FROM products WHERE catId = ?",
      [catId]
    );
    if (products.length > 0) {
      return res.json(products);
    } else {
      res
        .status(404)
        .json({ text: "The category Id provided does not exist." });
    }
  }
}

const productsController = new ProductsController();

export default productsController;
