var express = require('express');
var Survey = require('../models/survey')
var mongoose = require('mongoose');

const router = express.Router();

router.post('/',(req,res)=>{
    let survey = new Survey({
        Question:req.body.question,
        Answer:req.body.answer
    });
    survey.save(err=>{
        if(err)throw err;
        return res.json({success:true});
    })
})

module.exports=router;