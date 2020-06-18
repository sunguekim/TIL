import mongoose,{Schema} from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    usernmae:{type:String,required:true},
    hashedPassword:{type:String,required:true}
});

UserSchema.methods.setPassword = async function (password) {
    const hash = await bcrypt.hash(password,10);
    this.hashedPassword=hash;
}

UserSchema.methods.checkPassword = async function (password) {
    const result = await bcrypt.compare(password,this.hashedPassword);
    return result;
}

UserSchema.statics.findUsername=function (usernmae) {
    return this.findOne({usernmae});
}

const User = mongoose.model('User',UserSchema);
export default User;



