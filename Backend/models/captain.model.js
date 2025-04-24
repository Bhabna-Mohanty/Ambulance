const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captain = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Firstname must be atleast three Characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'lastname must be atleast three Characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Invalid email'],
        minlength: [5, 'Email must be atleast 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    vehicle: {
        plate: {
            type: String,
            required: true,
            minlength: [3,'Plate must be atleast 3 characters long']
        }
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number
        }
    }

});

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET,{expiresIn: '24hr'})
    return token;
}


captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcypte.hash(password,10);
}

const captainModel = mongoose.model('captain',captainSchema);


module.exports = captainModel;
