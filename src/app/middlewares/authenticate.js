import jwt from 'jsonwebtoken'


const config = process.env;

const verifyToken = (req, res, next) => {
    let token = req.session.token;

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;

    } catch (err) {
        console.log(err)
        return res.status(401).send("Unauthorized");
    }
    return next();
};

const isAdmin = (req, res, next) => {


    if (req.user.role === "admin") {
        next();
        return;
    }
    else {
        res.status(403).send({ message: "Required Admin Role!" });
        return;
    }

}

const isStudent = (req, res, next) => {
    if(req.user.role === "student"){
        next();
        return;
    }
    else {
        res.status(403).send({message: "Required Student Role!"})
    }
}
const isSystemAdmin = (req, res, next) => {
    if(req.user.role === "systemadmin"){
        next();
        return;
    }
    else{
        res.status(403).send({message : "Not System Admin"})
    }
}


const authenticate = {
    verifyToken,
    isAdmin,
    isStudent,
    isSystemAdmin
};
export default authenticate;