import "dotenv/config.js";

import express from "express";
import cors from "cors";
import morgan from "morgan";
import routerV1 from "./routes/v1/index.js";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(
  cors({ origin: "*", methods: ["GET", "HEAD", "POST", "EDIT", "DELETE"] })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// ROUTES
app.use("/api/v1", routerV1);

// CONFIG
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "API Grafica Popular",
      version: "1.0.0",
      description:
        "Proyecto que permite recopilar y mostrar todos los artes urbanos de las cuidades del Ecuador",
      contact: {
        name: "ESPOL",
        url: "https://www.espol.edu.ec",
        email: "info@espol.edu.ec",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ['src/routes/v1/*.routes.js'],
};

// API DOCUMENTATION
const specs = swaggerJsdoc(options);
app.use(
  "/api/document",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}. \nLink: http://localhost:${PORT}/ \nDocument API: http://localhost:${PORT}/api/document`
  );
});
