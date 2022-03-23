const { foodvalidate } = require("../validator/validate");

const{foodSchema}=require('../model/dbSchema');

const foodsCtrl={

    postFood:async(req,res)=>{

      const { error } = foodvalidate(req.body);

      if (error) return res.status(400).send(error.details[0].message);

      const {
        foodName,
        foodPrice,
        foodDescription,
        foodCategory,
        foodStock,
        foodRating
      } = req.body;
 
      const obj = new foodSchema({
        foodName,
        foodPrice,
        foodDescription,
        foodCategory,
        foodStock,
        foodRating,
        foodImg: {
          imgId: req.body.foodImg.imgId,
          imgUrl: req.body.foodImg.imgUrl,
        },
      });

      try {
        const cfood = await obj.save();
    
        // res.json(cfood);
        res.status(200).send('Create new food success');

      } catch (err) {
        res.status(400).send(err);
      }
    },

    getFood:async(req,res)=>{
      const foods= await foodSchema.find();
        try{
          res.send(foods)
          
        }catch(err){
          return res.send(err)
        }
    },

    updateFood:async(req,res)=>{
      const {
        foodName,
        foodPrice,
        foodDescription,
        foodCategory,
        foodStock,
        foodRating
      } = req.body;

      try{ 
        const updatepost=await foodSchema.updateOne(
           {_id:req.params.postId},
           {
              $set:{
                foodName,
                foodPrice,
                foodDescription,
                foodCategory,
                foodStock,
                foodRating,
        productImg: {
          imgId: req.body.foodImg.imgId,
          imgUrl: req.body.foodImg.imgUrl,
           }
      }  
    }
       );  
        res.json(updatepost);
     }catch(err){
       res.json({message:err}); 
     }
    },

    deleteFood:async(req,res)=>{
      try{
        const delpost=await foodSchema.remove({_id:req.params.postId});  
        res.json(delpost);
     }catch(err){
       res.json({message:err}); 
     }
    }
};


module.exports=foodsCtrl;
