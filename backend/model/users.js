import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import validator from 'validator';

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [
            validator.isEmail,
            "please enter a valid email"
        ]
    },
    password: {
        type: String,
        required: true
    }
});

usersSchema.methods.matchPasswords = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('Users', usersSchema);
