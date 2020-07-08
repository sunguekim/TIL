import Comment from '../../models/comment';
import mogoose from 'mongoose';
import Joi from '@hapi/joi'

export const write  =async ctx=>{
    
    const {text,postId} = ctx.request.body;
    console.log(ctx.state.user)
    const comment  = new Comment({
        postId,
        text,
        username:ctx.state.user.username, 
    });
    try {
        await  comment.save()
    } catch (e) {
        ctx.throw(500,e)
    }
}

export const getPostById = async(ctx, next) => {
    const { id } = ctx.params;
    console.log('call')
    if (!ObjectId.isValid(id)) {
        ctx.status = 400
        return;
    }
    try {
        const post = await Post.findById(id);
        const comment = await Comment.find({postId:id});
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.state.post = post;
        // ctx.state.comment = comment;

        return next();
    } catch (e) {
        ctx.throw(500,e)
    }
    return next();
}

export const check = ()=>{
    
}

export const getCommentById = async (ctx,next)=>{
    const {id} = ctx.params
    console.log(id);

    try {
        const comment = await Comment.find({postId:id});
        if(!comment){
            ctx.status = 404;
            return;
        }
        ctx.body = comment;
        console.log(comment)
        return next();
    } catch (e) {
        ctx.throw(500,e)
    }
    return next();
}
