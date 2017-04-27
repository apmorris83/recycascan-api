const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packagingSchema = new Schema({
    packaging: String,
    material: String
});

module.exports = mongoose.model('packaging', packagingSchema);