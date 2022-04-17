const Joi = require('@hapi/joi');

//food validation
const foodvalidate=(data)=>{  

    const schema=Joi.object({
        foodId:Joi.string().required(),
        foodName:Joi.string().min(4).required(),
        foodPrice:Joi.number().required(),
        foodDescription:Joi.string().min(4).required(),
        foodCategory:Joi.string().min(4).required(),
        foodStock:Joi.number().required().default(1),
        foodRating:Joi.number().default(0),
        foodImg:Joi.string().required()
      }
    )
    
 
   return Joi.validate(data,schema)
};

//user validation

const registervalidate=(data)=>{  

   const schema=Joi.object({
         
       name:Joi.string().min(4).required(),
       email: Joi.string().email().required(),
       password:Joi.string().min(6).required(),
       confirm_password:Joi.string().min(6).required(),
       role:Joi.number().default(0)
     }
   )

  return Joi.validate(data,schema)
};

const loginvalidate=(data)=>{  

  const schema=Joi.object({
      email: Joi.string().email().required(),
      password:Joi.string().min(6).required()
     
    }
  )

 return Joi.validate(data,schema)
};

const forgotpassvalidate=(data)=>{
  const schema=Joi.object({
    email: Joi.string().email().required(),

  }
)
return Joi.validate(data,schema)
}
module.exports={foodvalidate,registervalidate,loginvalidate,forgotpassvalidate};