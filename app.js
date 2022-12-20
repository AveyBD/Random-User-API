const express = require("express");
const cors = require("cors");
const { hitCheck } = require("./middleware/hitCheck");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(hitCheck);
app.use(express.static("public"));

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Random User API",
    version: "1.0.1",
    description: "A Simple API to play with express and file system module ",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
  ],
};
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);

// default route
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 404 Route
app.all("*", (req, res) => {
  res.status(404).send("Requested Route Not Found");
});

// app start
app.listen(port, () => {
  console.log(`User API app listening on port ${port}`);
});
