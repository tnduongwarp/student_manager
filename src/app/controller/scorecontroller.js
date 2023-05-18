import diem from "../models/diem.js";

export function getAll(req, res){
    diem.find({})
        .then(data =>{
            return res.status(200).json({
                success: true,
                data: data,
            })
        })
        .catch(err =>{
            res.status(500).json({
                success: false,
                error: err.message
            })
        })
}

export function getByMSSV(req, res){
    diem.find({MSSV : req.params.mssv})
        .then( data => {
            return res.status(200).json({
                success : true,
                data : data
            })
        })
        .catch( err => {
            console.log(err)
        })
}
export function add(req, res){
    const idata= req.body.data;
    diem.findBySemester(idata.semester, idata.MSSV)
        .then(data =>{
            console.log(data.length)
            if(data.length>0){
                console.log('ki', data.l)
                return res.status(501).json({
                    success: false,
                    message: 'semester invalid'
                })
            }
            else {
                console.log(idata)
                diem.insertOne(idata)
                .then(data =>{
                    return res.status(200).json({
                        success: true,
                        data: data,
                    })
                })
                .catch(err =>{
                    res.status(500).json({
                        success: false,
                        error: err.message,
                        message: 'lỗi insert'
                    })
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: 'sever error. Try again',
                error: err.message
            })
        })
            
}