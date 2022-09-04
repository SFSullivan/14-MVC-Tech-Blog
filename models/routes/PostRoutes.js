const router = require('express').Router();
const Post = require('Posts');




router.post("/",async (req,res)=>{
    try{
        const post = await Post.create(req.body);
        req.session.post_id = post.post_id;
        res.redirect('/dashboard');
    } catch(error){
        res.status(400).json(error);
    }
});



module.exports = router;