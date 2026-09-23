import http from "http";

import {
  getAllProducts,
  addProduct,
  deleteProduct,
  getProductById,
  updateProduct,
} from "./products.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
    const data = getAllProducts();

    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        count: data.length,
        data,
      }),
    );
  }

  else if (req.url === "/api/v1/products" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const product = JSON.parse(body);
      const item = addProduct(product);

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");

      res.end(
        JSON.stringify({
          msg: "product added",
          data: item,
        }),
      );
    });
  }

  else if (
    req.url.startsWith("/api/v1/products/") &&
    req.method === "PUT"
  ) {
    const productID = Number(req.url.split("/").pop());

    console.log("Update Product id:", productID);

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      console.log("BODY:", body);

      try {
        const product = JSON.parse(body);

        product.id = productID;

        const updatedPrd = updateProduct(productID, product);

        res.setHeader("Content-Type", "application/json");

        if (!updatedPrd) {
          res.statusCode = 404;

          res.end(
            JSON.stringify({
              msg: `id ${productID} not found`,
            }),
          );
        } else {
          res.statusCode = 200;

          res.end(
            JSON.stringify({
              msg: "product updated",
              data: updatedPrd,
            }),
          );
        }
      } catch (error) {
        console.log(error);

        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");

        res.end(
          JSON.stringify({
            msg: "Invalid JSON body",
          }),
        );
      }
    });
  }

  else if (
    req.url.startsWith("/api/v1/products/") &&
    req.method === "DELETE"
  ) {
    const pid = Number(req.url.split("/").pop());

    if (deleteProduct(pid)) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");

      res.end(
        JSON.stringify({
          msg: "item deleted",
        }),
      );
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");

      res.end(
        JSON.stringify({
          msg: `product with id ${pid} not found`,
        }),
      );
    }
  }

  else if (
    req.url.startsWith("/api/v1/products/") &&
    req.method === "GET"
  ) {
    const pid = Number(req.url.split("/").pop());

    const product = getProductById(pid);

    res.setHeader("Content-Type", "application/json");

    if (product) {
      res.statusCode = 200;

      res.end(
        JSON.stringify({
          data: product,
        }),
      );
    } else {
      res.statusCode = 404;

      res.end(
        JSON.stringify({
          msg: `product with id ${pid} not found`,
        }),
      );
    }
  }

  else {
    res.statusCode = 404;
    res.end("request not found");
  }
});

server.listen(5001, () => {
  console.log("prg6 is running");
});