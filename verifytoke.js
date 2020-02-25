const jwt = require("jsonwebtoken")

module.exports= function (req,res,next){


const token =req.header("auth-token");
    if (!token)  return res.status(400).send("access denied")
    try{
        const verified = jwt.verify(token,process.env.TOKEN_SECRET)
        req.user= verified;
    ///   res.json(verified)
       next()

    }catch (err){
       // res.json(err)

        res.status(400).send('invalid token')
    }
}


