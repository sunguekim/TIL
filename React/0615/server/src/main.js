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

const PORT = 4000;
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

app.use(bodyparser());//bodyparser는 항상 라우터 전에 선언해야한다
router.use('/api',api.routes())

app.use(jwtMiddleware)
app.use(router.routes()).use(router.allowedMethods());


app.listen(PORT,()=>{
    console.log('sever now on! port:%d',PORT)
});