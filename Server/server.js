import { errorHandler, notFound } from "./MiddleWare/Errors.js";

import ImportData from "./DataImport.js";
import { connectDatabase } from "./config/MongoDb.js";
import dotenv from "dotenv";
import express from "express";
import productRoute from "./Routes/ProductRoutes.js";

// import products from "./Data/Product.js";

dotenv.config();
connectDatabase();
const app = express();

// API
app.use('/api/import', ImportData)
app.use('/api/products', productRoute)


// // getallproducts
// app.get('/api/products', (req, res) => { res.json(products); });

// // getsingleproduct
// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id)
//   res.json(product);
// });

// errors handlers
app.use(notFound)
app.use(errorHandler)

// app.get('/', (req, res) => { res.send("API is running at port 5000") })

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server Running listening to port ${PORT}...`))
