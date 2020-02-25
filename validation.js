var joi =  require('joi')

const registerValidation= data =>{
    const schema = {
        name : joi.string().min(6),
        email : joi.string().min(6).email(),
        password : joi.string().min(6),
        phonenumber:joi.string(),
        fbid: joi.string(),
        gid: joi.string(),
        facebook : joi.string(),
        google:joi.string()       
    }
    return joi.validate(data,schema);
}
const loginValidation=  data =>{
    const schema = {

        email : joi.string().min(6).required().email(),
        password : joi.string().min(6).required(),
        phonenumber:joi.string(),
        fbid: joi.string(),
        gid: joi.string(),
        facebook : joi.string(),
        google:joi.string()       
    }
    return joi.validate(data,schema);
}
module.exports.loginValidation = loginValidation
module.exports.registerValidation= registerValidation