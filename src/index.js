import express from "express";
import cors from "cors";
import handleProducts from "./data.js";

const app = express();
app.use(express.json());

app.use(cors());

app.get('/api/products', (req, res) => {

    const products = handleProducts(20);

    res.json(products);

    console.log(products);
})

app.get('/', (req, res) => {
    res.send("Server is ready");
})

app.listen(3333, () => {
    console.log("Server running at http://localhost:3333");
})