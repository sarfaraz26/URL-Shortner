const express = require('express');
const dbModel = require('../models/db');
const router = express.Router();


router.get('/',async (req,res)=>{
    res.render('index',{data : ''});
});

router.post('/',async (req,res)=>{
    const post = new dbModel({
        longurl : req.body.longurl
    });

    const savedPost = await post.save();
    const singlePost = await dbModel.findOne({longurl : req.body.longurl});

    // short_url: `${req.headers.host}/${urlExists.shortId}`,
    res.render('index',{data : `${req.headers.host}/${singlePost.short}`,newdata : singlePost});
})

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('*',(req,res)=>{
    res.render('404');
});

module.exports = router;
