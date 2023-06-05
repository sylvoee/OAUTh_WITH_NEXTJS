
// import connectMongo from "@/database/conn";
// import connection from '@/database/conn';
import Users from '@/model/UserSchema';
import {hash} from 'bcrypt';
const bcrypt = require('bcrypt')
import mongoose from 'mongoose';


let saltRounds = 5;
const salt = bcrypt.genSaltSync(saltRounds);


const signUpHandler = async(req, res)=>{
    mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
   let err = [];
    // Gettint the post method
    if(req.method == 'POST'){
      
    
    // distructuring request.body
    const{email, password, name} = req.body ; 

    // validate user password length
    if(password.toString().length < 8){
      err.push({shortPassword : "You must enter atleast 8 character password"})
      console.log("You must enter atleast 8 character password");
      ;
    }
      // Check to see if the name character is empty
    if(name.toString().length < 1){
      err.push({blankName : "name field can not be blank"});
      console.log("name field can not be blank");
    }

    // to check if the email is more than five characters
    if(email.toString().length < 5){
      err.push({shortEmail : "email field must not be less than 4 characters"});
      console.log("email field must not be less than 4 characters");
      
    }

        // Checking to see if email contains @ character
    if(email.toString().includes('@') == false){
      err.push({character : "Email must contian @ character"});
      res.send({character : "Email must contian @ character"});
    }



  // To check to see if username as already be used
  let data = await Users.findOne({email}).exec(); 
  if(data){
    if(data.email == email){
      err.push({data : 'User already exist'});
  
    }
  }else{
    console.log("Unique user");
  }
  
  
      

  // if validation is passed ?
  if(err.length < 1 ){
   
    // hashing password
    let hasPassword = bcrypt.hashSync(password, salt);
    console.log(hasPassword)

    // var hash = bcrypt.hashSync("password", salt);

  //   let myHash = bcrypt.genSalt(saltRounds, function(err, salt) {
  //     bcrypt.hash('myPlaintextPassword', salt, function(err, hash) {
  //         // Store hash in your password DB.
  //     });
  // });

  // console.log(myHash)

    
    const record = new Users({name, email, password: hasPassword});
    let aUserData = record.save();
    res.send(aUserData)
   }else{
    res.json(err)
   }



    


    }else{
    //     res.status(500).json({message : "Only post method is annoy"});
    }

}

export default signUpHandler ;