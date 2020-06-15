let postId = 1;

const posts =[
    {
        id:1,
        title:'제목',
        body:'내용',
    },
];

//게시글 작성 POSTt /api/posts
exports.write = ctx =>{
    const{title,body}=ctx.request.body;
    postId+=1;
    const post = {id:postId,title,body};
    posts.push(post);
    ctx.body=post;
}

//게시글 목록 GET /api/posts

exports.list = ctx=>{
    ctx.body=posts;
};

exports.read=ctx=>{
    const {id} = ctx.params;
    //주어진 id값으로 포스트를 검색
    //파라미터로 받아온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
    //비교할 p.id 값을 문자열로 변경해야합니다
    const post = posts.find(p=>p.id.toString()===id);
    if(!post){
        ctx.status = 404;
        ctx.body = {
            message:'포스트가 존재하지 않습니다.',
        };
        return;
    }
    ctx.body=post;
}

exports.remove=ctx=>{
    const {id} = ctx.params;
    const index = posts.findIndex(p=>p.id.toString()===id);

    if(index===-1){
        ctx.status = 404;
        ctx.body = {
            message:'포스트가 존재하지 않습니다',
        };
        return;
    }
    posts.splice(index,1);
    ctx.status = 204; //No content
}

exports.replace = ctx=>{
    const {id} = ctx.params;
    const index  = posts.findIndex(p=>p.id.toString()===id);
    if(index===1){
        ctx.status = 404;
        ctx.body= {
            message:'포스트가 존재하지 않습니다',
        };
        return;
    }
    posts[index]={
        id,
        ...ctx.request.body,
    };
    ctx.body = postId[index];
}

//포스트 수정

 exports.update =  ctx=>{
     const {id} = ctx.params;
     const index = posts.findIndex(p=>p.id.toString()===id);
     if(index===-1){
         ctx.status = 404;
         ctx.body = {
             message:'포스트 업슴',
         };
         return;
     }
     posts[index] = {
         ...posts[index],
         ...ctx.request.body,
     };
     ctx.body = posts[index];
 }