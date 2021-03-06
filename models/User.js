const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [true, 'Please enter a username'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\wa-z\.-]+)\.([a-z\.]{2,8})$/, "Please enter a valid email address"]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: []
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;