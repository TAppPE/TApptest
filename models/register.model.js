const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema ({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    schoolName: { type: String, required: true },
    schoolRole: { type: String, required: true },
}, {
    timestamps: true,
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;