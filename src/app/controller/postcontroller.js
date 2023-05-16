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
        const promises = posts.map(async (m) => {
          const data = await avatar.findByFile_id(m.imageId);
          m.avatar = data[0].data;
        });
        await Promise.all(promises);
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
        avatar.findByFile_id(post.imageId)
        .then(data =>{           
            post.avatar= data[0].data;
            res.status(200).json({
                message: 'ok',
                data: post,               
            })
        })        
    })
    .catch(err =>{
        console.log(err);
    })
}
export {getAll,getById,insertOne}