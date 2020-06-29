import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "asdag1231asd123fasda123"

const UserSchema = new Schema({
    username: { type: String, required: true },
    hashedPassword: { type: String, required: true }
}, {
    versionKey: false,
});

UserSchema.methods.setPassword = async function (password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

UserSchema.methods.checkPassword = async function (password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
}

// UserSchema.statics.findByUsername=function (username) {
//     return this.findOne({username});
// }

UserSchema.statics.findByUsername = function (username) {
    return this.findOne({username})
}

UserSchema.methods.serialize = function () {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

UserSchema.methods.generateToken = function () {
    const token = jwt.sign(
        {
            _id: this.id,
            usernmae: this.usernmae,
        },
        JWT_SECRET,
        {
            expiresIn: '7d',
        }
    )
    return token;
}

const User = mongoose.model('User', UserSchema);
export default User;



