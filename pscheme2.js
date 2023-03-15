
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const pSchemeii = mongoose.Schema(
    {
        name: String,
        price: [{   
                value : Number,
                size : String,
                currency : String
        }],
        image: String,
        description: String,
        SKU: {
            type: Number,
            unique: true
        }

    }
)

pSchemeii.plugin(mongoosePaginate);
module.exports = mongoose.model('CreatePTii', pSchemeii);



