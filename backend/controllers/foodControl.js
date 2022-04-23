const { foodvalidate } = require("../validator/validate");

const{foodSchema}=require('../model/dbSchema');


const foodsCtrl={

    postFood:async(req,res)=>{
try{
      const { error } = foodvalidate(req.body);

      if (error) return res.status(400).send(error.details[0].message);
      const { foodId,foodName,foodPrice,foodDescription,foodCategory,foodStock,foodRating,foodImg} = req.body;
      const foodidchek = await foodSchema.findOne({ foodId });
      const foodname = await foodSchema.findOne({ foodName });

      if (foodidchek) return res.status(400).send("FoodId already exist");
      if (foodname) return res.status(400).send("Try Different FoodName");

      // const { foodName,foodPrice,foodDescription,foodCategory,foodStock, foodRating,foodImg} = req.body;


      const obj = new foodSchema({
        foodId,
        foodName,
        foodPrice,
        foodDescription,
        foodCategory,
        foodStock,
        foodRating,
        foodImg
         
      });

         await obj.save();
    
        // res.json(cfood);
        res.status(200).send('Create new food success');

      } catch (err) {
        res.status(400).send(err.message);
      }
    },

    getSingleFood:async(req,res)=>{
   
      const foods= await foodSchema.findById(req.params.id);
        try{
          res.status(200).send(foods)
          
        }catch(err){
          return res.status(400).send(err)
        }
    },
    getSearchFood:async(req,res)=>{
      const foodRestId = req.query.foodRestId;
      const foodName=req.query.foodName; 
    //  console.log(foodRestId)
         try{
          const foods=await foodSchema.find({
            $and:[
              {foodRestId:foodRestId},
              {foodName:{
               $regex:req.query.foodName
              }
              
              }
            ]
            });
          res.status(200).send(foods)
          
        }catch(err){
          return res.status(400).send(err)
        }
    },

    getAllFoods:async(req,res)=>{
      // console.log(req.query)
 
 const foodRestId = req.query.restId;


        try{
          const foods=await foodSchema.find({foodRestId:foodRestId})
          res.status(200).send(foods)
          
        }catch(err){
          return res.status(400).send(err)
        }
    },

    updateFood:async(req,res)=>{
     
      const { foodName,foodPrice,foodDescription,foodCategory,foodStock, foodRating,foodImg} = req.body;

      try{ 
        const updatepost= await foodSchema.findOneAndUpdate( req.params.id, {
          $set:req.body
      },{
        new:true
      }
      ) 
        res.json(updatepost);
     }catch(err){
       res.json({message:err}); 
     }
    },

    deleteFood:async(req,res)=>{
      try{
        const delpost=await foodSchema.findByIdAndDelete(req.params.id);  
        res.status(200).send('foodItem delete successful');
     }catch(err){
              res.status(200).send('foodItem delete successful');
     }
    }
};


module.exports=foodsCtrl;
