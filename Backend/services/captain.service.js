const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    firstname,
    lastname,
    email,
    password,
    plate,
}) => {
    if (!firstname || !lastname || !email || !password || !plate) {
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
        vehicle:{
            plate
        }
    });

    return captain;

}
