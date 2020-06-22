// const Koa = require('koa');
// const Router = require('koa-router');
// const posts = require('./api/index')
// const mongoose = require('mongoose')
// const bodyparser = require('koa-bodyparser')

import Koa from 'koa';
import Router from 'koa-router';
import bodyparser from 'koa-bodyparser';
import mongoose from 'mongoose'

import api from './api'
import jwtMiddleware from'./lib/jwtmiddleware'

const PORT = 4400;
const MONGO_URI ="mongodb+srv://test:9710@cluster0-u2nng.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI,{useNewUrlParser:true,useFindAndModify:false})
.then(()=>{
    console.log('DB Connect');
})
.catch(e=>{
    console.error(e);
})


const app = new Koa();
const router = new Router();


router.get("/",ctx=>{
    ctx.body='홈';
});

router.get("/about/:name?",ctx=>{
    const {name}= ctx.params;
    ctx.body=name?`포스트 #${name}의 소개`:'소개';
});

router.get('/posts',ctx=>{
    const {id} = ctx.query;
    ctx.body=id? `포스트 #${id}`:'포스트 아이디가 없습니다'
    
});


app.use(jwtMiddleware)
app.use(router.routes()).use(router.allowedMethods());
app.use(bodyparser());


app.listen(PORT,()=>{
    console.log('sever now on! port:%d',PORT)
});