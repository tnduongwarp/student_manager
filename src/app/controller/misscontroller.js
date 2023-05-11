import miss from "../models/miss.js";
import avatar from "../models/avatar.js";
async function insertOne(req, res){
    const object = req.body;
    miss.insertOne(object)
    .then(data => {
        res.status(200).json({
            message: 'insert ok'
        })
    })
    .catch(err =>{
       console.log(err)
    })
}

async function getAll(req, res){
    miss.find({})
    .then(misses => {
        for(let i=0;i<misses.length;i++){
            avatar.findByFile_id(misses[i].avatarId)
            .then(data =>{
                misses[i].avatar='data:image/jpg;base64,'+ data.data;
            })
        }
        res.status(200).json({
            data: misses,
            message: 'get all ok'
        })
    })
    .catch(err =>{
        console.log(err)
    })
}

async function getById(req,res){
    const missId= req.params.id;
    miss.findById(missId)
    .then(miss =>{
        avatar.findByFile_id(miss.avatarId)
        .then(data =>{
            console.log(data[0]);
            miss.avatar='data:image/jpg;base64,'+ data[0].data;
            res.status(200).json({
                message: 'ok',
                data1: miss,
                data2: data[0].data
            })
        })
        
    })
    .catch(err =>{
        console.log(err);
    })
}
export {getAll,getById,insertOne}