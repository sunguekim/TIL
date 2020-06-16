// let postId = 1;

import posts from '.';

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

const {ObjectId} = mongoose.Types

export const  checkObjectId = (ctx,next)=>{
    const {id} = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400
        return;
    }
    return next();
}

export const write = async ctx => {
    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }

};

export const list = async ctx => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts
    } catch (e) {
        ctx.throw(500, e);
    }

};

//특정 포스트 조회
export const read = async ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if (!post) {
            ctx.status = 404;
            return
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
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


export default posts;