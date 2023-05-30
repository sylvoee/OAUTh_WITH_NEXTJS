import { Mea_Culpa } from "next/font/google";
import Head from "next/head";
import { Children, useState } from "react";
import { metadata } from "./layout";
import {useSession, SessionProvider} from 'next-auth/react';
import{session} from 'next-auth';



const Home = () => {
  
  metadata.description = "This is the new heading";
  metadata.title = "Home" ;
  const { data: session, status } = useSession() ;

  return (

    <>
  
    <div className="container-fluid">
    {session ? User() : Guest()}
    </div>
    
    </>
  );
  
}


// GUEST uSER
const Guest = () => {
  metadata.title = "Home Guest"
  return ( 
    <>
   
    <div className="content">
      <h3 className="h3">Guest users</h3>
      <button className="btn btn-default login">Login</button>
    </div>
   
    </>
   );
}
 


//  AUTHORISED USER
const User =({session})=>{
  metadata.title = ""
  return(
    <>
    <h3 className="h3">{session.user.name} </h3>
    <i>{session.user.email}</i>
    <button className="btn btn-danger">Logout</button>
    
    </>
  );
}


 
export default Home;
