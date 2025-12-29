const express = require("express");
const responseFormat = require("./src/middlewares/responseFormat");
const notFoundHandler = require("./src/middlewares/notFoundHandler");
const exceptionHandler = require("./src/middlewares/exceptionHandler");
const router = require("./src/router");

const app = express();
app.use(express.json());
app.use(responseFormat);

app.use("/api", router);
app.use(notFoundHandler);
app.use(exceptionHandler);

app.listen(3000, () => console.log("ok"));
