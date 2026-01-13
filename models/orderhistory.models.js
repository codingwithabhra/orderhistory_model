const mongoose = require("mongoose");

const orderhistorySchema = new mongoose.Schema({
    items: {
        productId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        variant: {
            color: String,
            ram: String,
            storage: String,
        },
    },
    totalQuantity: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

const orderhistoryData = mongoose.model("orderhistoryData", orderhistorySchema);

module.exports = orderhistoryData;