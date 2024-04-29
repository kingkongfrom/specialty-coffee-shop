const mongoose = require('mongoose');

const coffeeSchema = mongoose.Schema({
    producer: {
        type: String,
        required: true,
        unique: true,
    },
    organic:{
        type: Boolean,
        required: true,
    },
    variety:{
        type: String,
        required: true,
    },
    roast:{
        enum: ['claro','medio','oscuro'],
        required: true,
    },
    weight:{
        enum: [200,380,500,1000],
        required: true,
    },
    grindSize:{
        enum: ['molido','grano entero'],
        required: true,
    },
    region:{
        type: ["valle central", "tres rios", "turrialba", "brunca", "guanacaste", "tarrazu", "orosi","valle oriental"],
        required: true,
    },
    process:{
        type: ['lavado','natural','honey'],
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    discount:{
        type: Number,
        required: true,
    },
    discount_start_date:{
        type: Date,
        required: true,
    },
    discount_end_date:{
        type: Date,
        required: true,
    },
    SKU:{
        type: Number,
        required: true,
    }
});

const coffee = mongoose.model('coffee', coffeeSchema);

