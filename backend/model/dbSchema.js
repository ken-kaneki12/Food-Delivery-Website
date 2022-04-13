const mongoose=require('mongoose');

//for foods  details and catagory

const schema1=mongoose.Schema({
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
   },
       orderTime:{
           type:Date,
           default:Date.now
       }
   
   
   });

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
   
const foodSchema =mongoose.model('foods',schema1);
const userSchema =mongoose.model('users',schema2);//user can be admin or customer
const orderSchema =mongoose.model('orders',schema3);
const cartSchema =mongoose.model('cart',schema4);

module.exports={foodSchema,userSchema,orderSchema,cartSchema};