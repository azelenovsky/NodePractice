const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'Insert into products (title, price, imageURL, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById() {
  }

  static fetchAll() {
    return db.execute("Select * from products");
  }

  static findById(id) {
    return db.execute("Select * from products where id = ?", [id]);
  }
};