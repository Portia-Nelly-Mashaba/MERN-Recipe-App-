import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt'
import validator from 'validator';

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: [
            validator.isEmail,
            "please enter valid email"
        ]
    },
    password: {
        type: String,
        require: true,
        validate: {
            validator: function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
            },
            message: "Your password should include at least one uppercase letter, one lowercase letter, one digit, one special character and be at least 6 characters long."
        }
    }
});

usersSchema.methods.matchPasswords = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
};

export default mongoose.model('users', usersSchema);

