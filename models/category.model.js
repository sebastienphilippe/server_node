
/*
Import
*/
const mongoose = require('mongoose')
const { Schema } = mongoose;
//

/*
Definition
*/
const categorySchema = new Schema({
    title: String,
    description: String,
    created_at: Date,
    updated_at: Date
})
//

/*
Methode
*/

//

/*
Export
*/
const categoryModel = mongoose.model('category', categorySchema);
module.exports = categoryModel;
//