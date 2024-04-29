const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
    producer: {
        type: String,
        required: [true, "this is required"],
    },
    variety: {
        type: String,
        required: [true, "this is required"]
    },
    roast: {
        type: String,
        enum: ["claro", "medio", "oscuro"],
        required: [true, "this is required"]
    },
    weight: {
        type: Number,
        enum: [200, 380, 500, 1000],
        required: [true, "this is required"]
    },
    grinding: {
        type: String,
        enum: ["molido", "grano entero"],
        required: [true, "this is required"]
    },
    region: {
        type: String,
        enum: ["valle central", "tres rios", "turrialba", "brunca", "guanacaste", "tarrazu", "orosi", "valle oriental"],
        required: [true, "this is required"]
    },
    process: {
        type: String,
        enum: ["lavado", "natural", "honey"],
        required: [true, "this is required"]
    },
    description: {
        type: String,
        required: [true, "this is required"]
    },
    price: {
        type: Number,
        required:[true, "this is required"]
    },
    discount: {
        type: Number,
    },
    discount_start_date: {
        type: Date,
    },
    discount_end_date: {
        type: Date,
    },
    SKU: {
        type: String,
        required: [true, "this is required"]
    }
});

const Coffee = mongoose.model("Coffee", coffeeSchema);
module.exports = Coffee;

