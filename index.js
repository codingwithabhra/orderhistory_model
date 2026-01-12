const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
const corsOption = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOption));

const { initialisedatabase } = require("./db/db.connection");
const orderhistorydata = require("./models/orderhistory.models");

initialisedatabase();

async function createOrderData(newData) {
    try {
        const newOrderData = await orderhistorydata(newData);
        const saveData = newOrderData.save();
        return saveData;
    } catch (error) {
        throw error;
    }
};

app.get("/", (req, res) => {
    res.send("Hello from express server")
});

//for sending new data to DB ----------------------------------
app.post("/orderhistory", async (req, res) => {
    try {
        const orderdata = await createOrderData(req.body);
        res.status(200).json({ message: "Data added successfully", orderdata: orderdata });
    } catch (error) {
        res.status(500).json({ error: "Failed to add data to Database" })
    }
});

//to get all the data from DB -----------------------------------
async function getAllOrders() {
    try {
        const getOrderData = await orderhistorydata.find();
        return getOrderData;
    } catch (error) {
        throw error;
    }
};

app.get("/orderhistory", async (req, res) => {
    try {
        const getData = await getAllOrders();
        if (getData != 0) {
            res.json(getData);
        } else {
            res.status(404).json({ error: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
