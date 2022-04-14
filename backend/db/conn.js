const{mongoose,dotenv}=require('../library');
dotenv.config({path:'./config/hidden.env'});
const db=process.env.db_url;
// console.log(db);
mongoose.connect(db,{useNewUrlParser:true},(err,res)=>{
    if(err){
       return console.log('unable to connect mongoose');
    }
    console.log('mongoose connection successful');
   });
   
   