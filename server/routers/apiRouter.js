const apiRouter = require("express").Router();
const categoryRouter = require("./categoryRouter");
const productsRouter = require("./productRouter");

apiRouter.use("/category", categoryRouter);
apiRouter.use("/products", productsRouter);

module.exports = apiRouter;
