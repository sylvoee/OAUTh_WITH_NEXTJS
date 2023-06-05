

import mongoose from 'mongoose';

const mongoDB = 'mongodb+srv://sylvoee:Sylvic@88@cluster0.0rmssoe.mongodb.net/anAuthDb' ;

const connection = mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (wrr, success)=>{
   if(err){console.log(err)}
      if(success){console.log(success)};
   
});

// const connectMongo = async()=>{
//  try {
//     // connecting to database
//     const{connection} = await mongoose.connect(mongoDB);
//     if(connection.readyState == 1){
//     console.log("You are connected to database");
//     }
    
//  } catch (error) {
//     return error;
//  }
// }

// export default connectMongo;
export default connection