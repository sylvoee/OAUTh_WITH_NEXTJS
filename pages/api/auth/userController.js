
// import connectMongo from "@/database/conn";
import connection from '@/database/conn';
import Users from '@/model/UserSchema';
import {hash} from 'bcrypt';
const bcrypt = require('bcrypt')
import mongoose from 'mongoose';


let saltRounds = 5;
const salt = bcrypt.genSaltSync(saltRounds);


const signUpHandler = async(req, res)=>{
   
   let err = [];
    // Gettint the post method
    if(req.method == 'POST'){
      
    
    // distructuring request.body
    const{email, password, name} = req.body ; 

    // validate user password length
    if(password.toString().length < 8){
      err.push({errMsg : "You must enter atleast 8 character password"})
      console.log("You must enter atleast 8 character password");
      ;
    }
      // Check to see if the name character is empty
    if(name.toString().length < 1){
      err.push({errMsg : "name field can not be blank"});
      console.log("name field can not be blank");
    }

    // to check if the email is more than five characters
    if(email.toString().length < 5){
      err.push({errMsg : "email field must not be less than 4 characters"});
      console.log("email field must not be less than 4 characters");
      
    }

        // Checking to see if email contains @ character
    if(email.toString().includes('@') == false){
      err.push({errMsg : "Email must contian @ character"});
      res.send({errMsg : "Email must contian @ character"});
    }



  // To check to see if username as already be used
  let data = await Users.findOne({email}).exec(); 
  if(data){
    if(data.email == email){
      err.push({errMsg : 'User already exist'});
  
    }
  }else{
    console.log("Unique user");
  }
  
  
      

  // if validation is passed ?
  if(err.length < 1 ){
   
    // hashing password
    let hasPassword = bcrypt.hashSync(password, salt);
    
    // saving data to database
    const record = new Users({name, email, password: hasPassword});
    let aUserData = record.save();
    res.send({data : aUserData, msg: "Signup successful"});
    console.log(aUserData)
   }else{
    res.json(err)
    console.log(err)
   }



    
    }else{
        res.status(500).json({message : "Only post method is allowed"});
    }

}

export default signUpHandler ;