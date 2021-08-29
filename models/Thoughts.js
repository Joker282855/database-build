const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: [true, 'please enter your thoughts'],
        minLength: [1, 'has to at least be one character long'],
        maxLength: [128, 'has to be no more than 128 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: [true, 'please enter your username']
    },
    reations: []
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;