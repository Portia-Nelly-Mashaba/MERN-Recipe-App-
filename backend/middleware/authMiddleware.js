import jwt from 'jsonwebtoken';
import Users from '../model/users.js'

const protect = async (req, res, next) => {
    let token;
    
    console.log(req.headers.authorization);
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await Users.findById(decode.id).select('-password')
            next()
        } catch (error) {
            console.error(error);
            
           res.status(401).json({ error: error})
        }
    } 
// else {
//         res.status(401).json({ error: "Not Authorized, No token"})
//     }
}

export default protect