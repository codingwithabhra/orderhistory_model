const mongoose = require("mongoose");

const orderhistorySchema = new mongoose.Schema({
    orderItemHeader: String,
    orderItemQuantity: Number,
    orderItemPrice: Number,
    selectedAddress: String,
    totalamount: Number,
},
{
    timestamps: true,
});

const orderhistoryData = mongoose.model("orderhistoryData", orderhistorySchema);

module.exports = orderhistoryData ;