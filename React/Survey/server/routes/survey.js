var express = require('express');
var app = express();
var Survey = require('../models/survey')
var cors = require('cors')

const router = express.Router();
app.use(cors());


router.post('/',(req,res)=>{
    const survey = new Survey({
        gender:req.body.gender,
        animal:req.body.animal
    })
    survey.save()
    .then((result)=>{
        console.log(result);
        res.status(201).json(result)
    })
})

module.exports=router;