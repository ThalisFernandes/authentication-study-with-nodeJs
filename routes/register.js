const dotEnv = require('dotenv');
const config = dotEnv.config();
const jwt = require('jsonwebtoken');
async function generateAuthToken(userName){
    try{
        let token = await jwt.sign(userName, process.env.TOKEN_JWT, {expiresIn: '15s'});
        console.log(token);
        return token;
    } catch(err){
        console.log(err);
        return err;
    }
    
};

const registerRoute = app =>{
    app.route('/register')
    .get()
    .post(async (req,res)=>{
        let params = req.body;
        let token = await generateAuthToken({username: req.body.nome});
        res.send({'Token': token}).status(200)
    })
}

module.exports = registerRoute;