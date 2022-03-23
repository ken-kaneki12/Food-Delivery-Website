const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config({path:'./config/hidden.env'});

// const token=jwt.sign({_id:user._id,email:user.email},process.env.token_secret)

const accessTokenGen=(data)=>{

const obj=jwt.sign(data,process.env.access_token,{
    expiresIn:'1d'
});
return obj;
};

const refreshTokenGen=(data)=>{
    
 const obj=jwt.sign(data,process.env.refresh_token,{
        expiresIn:'1d'
    });
    return obj; 
}

module.exports={accessTokenGen,refreshTokenGen};