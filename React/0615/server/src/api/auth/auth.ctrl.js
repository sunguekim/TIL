import Joi from '@hapi/joi';
import User from '../../models/user';

export const  register = async ctx=>{
    const schema = Joi.object().keys({
        username:Joi.string()
        .alphanum()//특스문자 필터링
        .min(3)
        .max(20)
        .required(),
        password:Joi.string().required(),
    })

     const result = schema.validate(ctx.request.body);
     if(result.error){
         ctx.status=400;
         ctx.body=result.error;
         return;
     }
}