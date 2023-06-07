
import NextAuth from "next-auth" ;
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider  from "next-auth/providers/credentials";
import { findDOMNode } from "react-dom";


export default NextAuth({
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
          }),

        GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
          }), 
          
          CredentialsProvider({
          name : "Credentials",
          async authorize(credentials, req){
            // checking user existence
            let result = await Users.findOne({email}).exec(); 
            if(!result){
               result.send("User not register , pls signup");
            }else{
              // check the password
              const checkPassword = bcrypt.compare(credentials.password , result.password);

              // incorrct password 
              if(!checkPassword || result.email != credentials.email){
                result.send("Username or password does not match");

              }
              // if successful
              return result ;

            }
            

          }
        })  
        
    ]

    
});
