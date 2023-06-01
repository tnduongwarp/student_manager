import user from "../models/User.js";
import avatar from "../models/avatar.js";
import bcrypt from 'bcrypt'

async function insertOne(req, res){
    const object= req.body;
    const salt = bcrypt.genSaltSync(8);
     object.password = bcrypt.hashSync(object.password,salt);
    console.log(object);
    user.insertOne(object)
    .then(data => {
        res.status(200).json({
            message: 'insert ok'
        })
    })
    .catch(err => console.log(err)) 
};

async function getAll(req, res){
    try {
        const users = await user.find({});
        
        users.reverse()
        
        res.status(200).json({
          data: users,
          message: "get all ok",
        });
      } catch (err) {
        console.log(err);
      }
};

async function updateById(req,res){
    try {
        const userId = req.params.id;
        console.log(userId)
        const editedUser = req.body;
        console.log(req.body)
        await user.updatebyid(userId, editedUser)
        
        res.status(200).json({
            message : 'ok'
        })
    } catch (error) {
        console.log(error)
    }
}

async function deleteOne(req, res){
    user.deleteOneById(req.params.id)
    .then(data => {
        res.status(200).json({
            message: 'ok'
        })
    })
    .catch(e =>{
        console.log(e);
    })
}
export {getAll, updateById, insertOne, deleteOne}


