//fetch user is a middleware function which will take auth token from the header(which will come from the login end)


const jwt = require('jsonwebtoken')
const JWT_SECRET = 'signedbymirzafuckingghalib'
const fetchuser = (req, res, next) => {
    //getting user from jwt token and adding id of user to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please Authenticate using a valid token" })
    }
    else {
        try {

            const data = jwt.verify(token, JWT_SECRET);
            req.user = data.user;
            next();
        } catch (error) {
            return res.status(401).send({ error: "Please Authenticate using a valid token" })
        }
    }
}

module.exports = fetchuser;