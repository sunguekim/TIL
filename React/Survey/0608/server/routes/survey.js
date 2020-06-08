var express = require('express');
var app = express();
var Survey = require('../models/survey')
var cors = require('cors')

const router = express.Router();
app.use(cors());


router.post('/',async (req,res)=>{
    
    const survey = await new Survey({
        gender:req.body.gender,
        animal:req.body.animal
    })

    await survey.save()
    .then((result)=>{
        console.log(result);
        res.status(201).json(result)
    })
})

router.get('/gender',async(req,res)=>{
    const result = [
        await Survey.countDocuments({gender:"man"}),await  Survey.countDocuments({gender:"woman"})
    ]
    res.json(result)
//    await Survey.countDocuments({gender:"man"},function(err,result){
//         if(err){
//             res.send(err);
//         }else{
//             res.json(result);
//             console.log(result)
//         }
//     })
//     await Survey.countDocuments({gender:"woman"},function(err,result){
//         if(err){
//             res.send(err);
//         }else{
//             res.json(result);
//         }
//     })
    
})

router.get('/man',async(req,res)=>{
    const result = [
        await Survey.countDocuments({gender:"man",animal:"tiger"}),
        await  Survey.countDocuments({gender:"man",animal:"ele"}),
        await  Survey.countDocuments({gender:"man",animal:"egle"}),
    ]
    res.json(result);
})

router.get('/woman',async(req,res)=>{
    const result = [
        await  Survey.countDocuments({gender:"woman",animal:"tiger"}),
        await Survey.countDocuments({gender:"woman",animal:"ele"}),
        await Survey.countDocuments({gender:"woman",animal:"egle"}),
    ]
    res.json(result)
})



module.exports=router;