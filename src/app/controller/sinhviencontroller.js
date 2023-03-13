
import SinhVien from '../models/SinhVien.js';



// POST a student
export function createStudent(req, res) {

    const sv = req.body;
    console.log(sv);
    SinhVien.insertOne(sv)
        .then((sv) => {
            return res.status(201).json({
                success: true,
                message: 'New student created successfully',
                SinhVien: sv,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}

// Get all stds
export function getAllStudent(req, res) {
    SinhVien.find({})
        //.select('_id title description')
        .then((allStudent) => {

            return res.status(200).json({
                success: true,
                message: 'A list of all course',
                SinhVien: allStudent,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        });
}

export function getStudentById(req, res) {
    const id = req.params.id;
    console.log(id);
    SinhVien.findById(id)
        .then((student) => {
            return res.status(200).json({
                success: true,
                message: 'student has id ',
                SinhVien: student,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                success: false,
                message: 'Server error. Please try again. ',
                err: err.message,
            });
        })
}

// Update
export function updateStudent(req, res) {
    const id = req.params.id;
    const updateSt = req.body;
    SinhVien.updatebyid(id, updateSt)

        //.select('_id title description')
        .then(() => {
            return res.status(200).json({
                success: true,
                message: 'updated',
                SinhVienUpdated: updateSt,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        });
}

// DELETE A STUDENT
export async function deleteOneStudent(req, res) {
    const id = req.params.id;
    SinhVien.findById(id)
        .then(
            sv => {
                console.log(sv);
                if (sv == null) {
                    return res.status(404).json({
                        success: false,
                        message: 'student not exists',
                    })
                }
                else {
                    SinhVien.deleteOneById(id)
                        .then((sv) => {
                            return res.status(200).json({
                                success: true,
                                message: 'delete this student successfully',
                                student: sv
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                success: false,
                                message: 'sever error. Try again',
                                error: err.message
                            })
                        })
                }
            }
        )
        .catch(err => {
            res.status(500).json({
                success: false,
                message: 'sever error. Try again',
                error: err.message
            })
        })

}
// GET BY CLASS NAME
export function getStudentByClassName(req, res) {
    const className = req.query.className;
    console.log(className);
    SinhVien.findbyClassName(className)
        .then((student) => {
            return res.status(200).json({
                success: true,
                message: 'list of students in this class ',
                SinhVien: student,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                success: false,
                message: 'Server error. Please try again. ',
                err: err.message,
            });
        })
}


