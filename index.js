const express = require("express");
const bookRoutes = require("./routes/book");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

// middleware
app.use(express.json());

// define all our routes
app.use("/", bookRoutes);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pooja Books with swagger api",
      version: "0.1.0",
      description:
        "This is a simple Book API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "skills with arif",
        url: "http://arif.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/",
        // url: "http://192.168.1.169:3000/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
