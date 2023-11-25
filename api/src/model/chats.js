const mongoose = require('mongoose');
const { randomUUID } = require('crypto');

const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID
    },
    role: {
        type: String,
        required: true,
    },
    messages: {
        type: Array,
        required: true
    }
})

module.exports = chatSchema