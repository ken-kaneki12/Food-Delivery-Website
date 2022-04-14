const { foodvalidate } = require("../validator/validate");

const{foodSchema}=require('../model/dbSchema');
class Api{
constructor(query,queryString){
  this.query=query;
  this.queryString=queryString
}

filtering(){
  const queryObj = {...this.queryString} //queryString = req.query
  const excludedFields = ['page', 'sort', 'limit']
  excludedFields.forEach(el => delete(queryObj[el]))
  let queryStr = JSON.stringify(queryObj)
  queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)
//    gte = greater than or equal
//    lte = lesser than or equal
//    lt = lesser than
//    gt = greater than
  this.query.find(JSON.parse(queryStr))  
  return this;
}

sorting(){
   if(this.queryString.sort){
       const sortBy = this.queryString.sort.split(',').join(' ')
       this.query = this.query.sort(sortBy)
   }else{
       this.query = this.query.sort('-createdAt')
   }

   return this;
}

paginating(){
   const page = this.queryString.page * 1 || 1
   const limit = this.queryString.limit * 1 || 9
   const skip = (page - 1) * limit;
   this.query = this.query.skip(skip).limit(limit)
   return this;
}

}
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

    getFoodById:async(req,res)=>{
      const foods= await foodSchema.findById(req.params.id);
        try{
          res.status(200).send(foods)
          
        }catch(err){
          return res.status(400).send(err)
        }
    },
    getAllFoods:async(req,res)=>{
      // console.log(req.query)
      const features=new Api(foodSchema.find({}),req.query).filtering().sorting().paginating()
      
      const foods= await features.query;
        try{
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
