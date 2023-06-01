import avatar from "../models/avatar.js";
import post from "../models/post.js";

async function insertOne(req, res){
    const object= req.body;
    post.insertOne(object)
    .then(data => {
        res.status(200).json({
            message: 'insert ok'
        })
    })
    .catch(err => console.log(err))
}

async function getAll(req, res){
    try {
        const posts = await post.find({});
       
        posts.reverse()
        
        res.status(200).json({
          data: posts,
          message: "get all ok",
        });
      } catch (err) {
        console.log(err);
      }
}

async function getById(req,res){
    const postId= req.params.id;
    post.findById(postId)
    .then(post =>{
        
            res.status(200).json({
                message: 'ok',
                data: post,               
            })
             
    })
    .catch(err =>{
        console.log(err);
    })
}

async function deleteById(req,res){
    try {
        const postId = req.params.id;
        const imageId = req.body.imageId;
        await Promise.all([post.deleteOneById(postId), avatar.deleteById(imageId)]) ;
        res.status(200).json({
            message : 'ok'
        })
    
    } catch (error) {
        console.log(error)
    }
    

}
export {getAll,getById,insertOne,deleteById}