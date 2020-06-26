// let postId = 1;


// const posts =[
//     {
//         id:1,
//         title:'제목',
//         body:'내용',
//     },
// ];

// //게시글 작성 POSTt /api/posts
// exports.write = ctx =>{
//     const{title,body}=ctx.request.body;
//     postId+=1;
//     const post = {id:postId,title,body};
//     posts.push(post);
//     ctx.body=post;
// }

// //게시글 목록 GET /api/posts

// exports.list = ctx=>{
//     ctx.body=posts;
// };

// exports.read=ctx=>{
//     const {id} = ctx.params;
//     //주어진 id값으로 포스트를 검색
//     //파라미터로 받아온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
//     //비교할 p.id 값을 문자열로 변경해야합니다
//     const post = posts.find(p=>p.id.toString()===id);
//     if(!post){
//         ctx.status = 404;
//         ctx.body = {
//             message:'포스트가 존재하지 않습니다.',
//         };
//         return;
//     }
//     ctx.body=post;
// }

// exports.remove=ctx=>{
//     const {id} = ctx.params;
//     const index = posts.findIndex(p=>p.id.toString()===id);

//     if(index===-1){
//         ctx.status = 404;
//         ctx.body = {
//             message:'포스트가 존재하지 않습니다',
//         };
//         return;
//     }
//     posts.splice(index,1);
//     ctx.status = 204; //No content
// }

// exports.replace = ctx=>{
//     const {id} = ctx.params;
//     const index  = posts.findIndex(p=>p.id.toString()===id);
//     if(index===1){
//         ctx.status = 404;
//         ctx.body= {
//             message:'포스트가 존재하지 않습니다',
//         };
//         return;
//     }
//     posts[index]={
//         id,
//         ...ctx.request.body,
//     };
//     ctx.body = postId[index];
// }

// //포스트 수정

//  exports.update =  ctx=>{
//      const {id} = ctx.params;
//      const index = posts.findIndex(p=>p.id.toString()===id);
//      if(index===-1){
//          ctx.status = 404;
//          ctx.body = {
//              message:'포스트 업슴',
//          };
//          return;
//      }
//      posts[index] = {
//          ...posts[index],
//          ...ctx.request.body,
//      };
//      ctx.body = posts[index];
//  }

import Post from '../../models/post'
import mongoose from 'mongoose'
import Joi from '@hapi/joi'

const { ObjectId } = mongoose.Types

export const getPostById = async(ctx, next) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400
        return;
    }
    try {
        const post = await Post.findById(id);
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.state.post = post;
        return next();
    } catch (e) {
        ctx.throw(500,e)
    }
    return next();
}

export const write = async ctx => {
    
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array()
            .items(Joi.string())
            .required(),
    })

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status=400;
        ctx.body = result.error;
        return
    }

    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
        user:ctx.state.user,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }

};

export const list = async ctx => {
    console.log(ctx)
    const page = parseInt(ctx.query.page||'1',10)//쿼리는 문자열일기 때문에 정수로 캐스팅 값이 주어지지 않았다면 1을 기본값으로 사용하겠다고 선언함

    if(page<1){
        ctx.status=400;
        return
    }
    const {tag,username}= ctx.query;
    const query = {
        ...(username?{'user.username':username}:{}),
        ...(tag?{tags:tag}:{}),
    }

    try {
        const posts = await Post.find()
        .sort({_id:-1})
        .lean()
        .skip((page-1)*10)//skip 처음 열개를 제외하고 다음 10개를 불러옴
        .limit(10)//리스트에 보여줄 목록 제한
        .exec();//sort({_id:-1}) 아이디를 기준으로 역순정렬
        const postCount = await Post.countDocuments().exec();
        ctx.set('Last-Page',Math.ceil(postCount/10));
        ctx.body = posts.map(post=>({
            ...post,
            body:
            post.body.length<300?post.body:`${post.body.slice(0,300)}...`,
        }))
    } catch (e) {
        ctx.throw(500, e);
    }

};

//특정 포스트 조회
export const read = async ctx => {
    ctx.body = ctx.state.post;
    // const { id } = ctx.params;
    // try {
    //     const post = await Post.findById(id).exec();
    //     if (!post) {
    //         ctx.status = 404;
    //         return
    //     }
    //     ctx.body = post;
    // } catch (e) {
    //     ctx.throw(500, e);
    // }
};

export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch (e) {
        ctx.throw(500, e)
    }
};

export const update = async ctx => {

    const { id } = ctx.params;
    const schema = Joi.object().keys({
        title:Joi.string(),
        body:Joi.string(),
        tags:Joi.array().items(Joi.string()),
    })

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return
    }

    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, { new: true }).exec();
        if (!post) {
            ctx.status = 404;
            return
        }
        ctx.body = post
    } catch (e) {
        ctx.throw(500, e)
    }
};

export const checkOwnPost = (ctx,next)=>{
    const {user,post}= ctx.state;
    if(post.user._id.toString()!==user._id){
        ctx.status = 403;
        return;
    }
    return next();
}

