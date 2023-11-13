const jwt = require("jsonwebtoken")
const secret_key = process.env.SECRET_KEY

const authJwt = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Extract token from the Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, secret_key); // Replace 'your_secret_key' with your actual secret key
        req.user = decoded; // Set user data in the request object for further use
        next();
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ message: 'Invalid token.' });
    }
};


const checkRoleSeller = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: `Access Denied. No token provided` })
    }

    try {
        const decodedToken = jwt.verify(token, secret_key)
        if (decodedToken.role !== `seller`) {
            return res.status(403).json({ message: 'Unauthorized. Only sellers can create products.' });
        }
        next()
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ message: 'Invalid token.' });
    }
}


const checkRoleBuyer = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: `Access Denied. No token provided` })
    }

    try {
        const decodedToken = jwt.verify(token, secret_key)
        req.user = decodedToken;
        console.log(decodedToken)
        if (decodedToken.role !== `buyer`) {
            return res.status(403).json({ message: 'Unauthorized. Only buyers can buy products.' });
        }
        next()
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ message: 'Invalid token.' });
    }
}



module.exports = {
    authJwt,
    checkRoleSeller,
    checkRoleBuyer
} 