const mongoose=require('mongoose');

//for foods  details and catagory
const schema1=mongoose.Schema({
    
    foodRestId:{
   type:String,
   required:true
    } ,
  foodId:{
   type:String,
   required:true
  },  

 foodName:{
     type:String,
     required:true
 },  


 foodPrice:{
    type:Number,
    required:true
},

foodDescription:{
    type:String,
    required:true
}, 
foodCategory:{
type:String,
required:true
},

foodStock:{
type:Number,
required:true,
default:1
},

foodRating:{
    type:Number,
    default:0
},
foodImg:{
    type:String,
    require:true
}

},
{timestamps:true}
);

//for user and admin information -- user can be admin or customer
const schema2 = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique:true,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
    confirm_password: {
      type: String,
      require: true,
    },
    role:{
     type:Number,
     default:0
    },
    avatar:{
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    },
    
    userCreateTime: {
      type: Date,
      default: Date.now,
    },
  });
  
  //food order information
  const schema3=mongoose.Schema({
    userId:{
          type:String,
          required:true
       },
      foods:[
      {
      foodId:{
          type:String
      },
      quantity:{
         type:Number,
         default:1 
      }
       }
   ],
   amount:{
       type:Number,
       required:true
   },
   address:{
       type:Object,
       required:true
   },
   status:{
       type:String,
       default:"pending"
   } 
   },  {timestamps:true});


   // cart information

   const schema4=mongoose.Schema({
    userId:{
          type:String,
          required:true
       },
      foods:[

      {
      foodId:{
          type:String
      },
      quantity:{
         type:Number,
         default:1 
      }
       }
   ],
       cartCreateTime:{
           type:Date,
           default:Date.now
       }
   
   
   });

 //Restaurant Info and name
 
 const schema5=mongoose.Schema({
    RestId:{
        type:String,
        unique:true,
        required:true
       },  
     
      RestName:{
          type:String,
          unique:true,
          required:true
      },  
      RestEmail: {
        type: String,
        unique:true,
        required: true,
      },
      RestLocation:{
         type:String,
         required:true
     },
     
     RestDescription:{
         type:String,
         required:true
     },
   
    RestRating:{
         type:Number,
         default:0
     },
    RestImg:{
         type:String,
         unique:true,
         require:true
     }
     
     },
     {timestamps:true}
 )
   
const foodSchema =mongoose.model('foods',schema1);
const userSchema =mongoose.model('users',schema2);//user can be admin or customer
const orderSchema =mongoose.model('orders',schema3);
const cartSchema =mongoose.model('cart',schema4);
const restSchema =mongoose.model('restaurants',schema5);

module.exports={foodSchema,userSchema,orderSchema,cartSchema,restSchema};