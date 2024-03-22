// const http = require("http");
require("dotenv").config();
const express = require("express");
// http.createServer((req,res)=>{})
const cors = require("cors");
const productRouter = require("./routes/product");
const mongoose = require("mongoose");
const path = require("path");
const server = express();
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connted");
}
server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use("/products", productRouter.router);
server.listen(process.env.PORT, () => {
  console.log("server Started");
});
