import jwt from 'jsonwebtoken';
import User from '../models/post'

const JWT_SECRET = "asdag1231asd123fasda123"

const jwtMiddleware = async(ctx, next) => {
    const token = ctx.cookies.get('access_token');
    if (!token) return next();
    try {
        const decoded = jwt.verify(token, JWT_SCERET);
        ctx.state.user={
            _id:decoded._id,
            username:decoded.username,
        }
        console.log(decoded)
        const now = Math.floor(Date.now()/1000);
        if(decoded.exp-now<60*60*24*3.5){
            const  user = await User.findById(decoded._id);
            const token = user.generateToken();
            ctx.cookies.ser('access_token',token,{
                maxAge:100*60*60*24*7,
                httpOnly:true,
            })
        }
        return next();
    }catch(e){
        return next();
    }
};


export default jwtMiddleware;