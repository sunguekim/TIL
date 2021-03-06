import Joi from '@hapi/joi';
import User from '../../models/user';

export const register = async ctx => {
    console.log('register call')
    const schema = Joi.object().keys({
        username: Joi.string()
            .alphanum()//특스문자 필터링
            .min(3)
            .max(20)
            .required(),
        password: Joi.string().required(),
    })
    
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }
    const { username, password } = ctx.request.body;
    try {
        
        const exist = await User.findByUsername(username);
        if (exist) {
            ctx.status = 409;
            return
        }
        const user = new User({
            username,
        });
        await user.setPassword(password);
        await user.save();
        
        ctx.body = user.serialize();
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 100 * 60 * 60 * 24 * 7,//7일
            httpOnly: true,
        });
    } catch (e) {
        ctx.throw(500, e)
    }
}

export const login = async ctx => {
    const { username, password } = ctx.request.body;
    if (!username || !password) {
        ctx.status = 401;
        return
    }
    try {
        const user = await User.findByUsername(username)
        if (!user) {
            ctx.status = 401;
            return
        }
        const valid = await user.checkPassword(password);
        if (!valid) {
            ctx.status = 401;
            return;
        }
        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 100 * 60 * 60 * 24 * 7,//7일
            httpOnly: true,
        });
    } catch (e) {
        ctx.throw(500, e)
    }
}

export const check = async ctx=>{
    const {user} = ctx.state;
    if(!user){
        ctx.status = 401;
        return
    }
    ctx.body=user;
}

export const logout = async ctx=>{
    ctx.cookies.set('access_token');
    ctx.status = 204;
}

export const list = async ctx=>{
    try {
        const user = await User.find().sort()
        ctx.body = user
    } catch (e) {
        ctx.throw(500,e)
    }
}

export const update = async ctx=>{
    
}