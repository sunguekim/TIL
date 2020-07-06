import Comment from '../../models/comment';
import mogoose from 'mongoose';
import Joi from '@hapi/joi'

export const write  =async ctx=>{

    const schema = Joi.object.keys({
        text:Joi.string().required(),
    })

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status=400;
        ctx.body = result.error;
        return
    }

    const {text} = ctx.request.body;
    const comment  = new Comment({
        postId:ctx.state.postId,
        text,
        user:ctx.state.user, 
    });
    try {
        await  comment.save()
    } catch (e) {
        ctx.throw(500,e)
    }

}

