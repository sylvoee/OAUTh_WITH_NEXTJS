

import mongoose from 'mongoose';


const connection = async() =>{
  await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     })   
   .then(() => console.log("Database connected!"))
   .catch(err => console.log("Connection to database failed"));
   
}



export default connection