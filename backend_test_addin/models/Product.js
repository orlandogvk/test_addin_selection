const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type :  String,
        required : true
    },
    image :{
        type : String,
        required : false
    },
    price : {
        type :  Number,
        required : true
    },
    user : {
        type :  Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true,
    versionKey: false
})

module.exports = model('Product', productSchema)