const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = require('mongoose').Schema

const AccessorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    imageUrl: {
        type: String,
        required: true
    },
    cubes: [{
        type: ObjectId,
        ref: 'Cube'
    }]
})

module.exports = mongoose.model('Accessory', AccessorySchema)