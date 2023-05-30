
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import './layout' ;
import { metadata } from './layout';
import { FaEnvelope, FaLock, FaRegistered, FaUser } from 'react-icons/fa';
import { AiFillCustomerService, AiFillEye, AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillLock } from "react-icons/ai";
import { useState } from 'react';


const Register = () => {
   metadata.title = "register";
   const[show, setShow]= useState();

    
    return ( 
        <>
        
         <Head>
            
            <title>{metadata.title}</title>
         </Head>

        <div className="register-container container-fluid content">
            <div className="row p-3">
                <div className="col-sm-6 register-msg img">
               <Image className='img-responsive d-none d-sm-block' src='/img/img3.gif' width={550} height ={400} alt ="An Image"></Image>
               <h4 className="h4">register To The Amazing World Of Perishable Items</h4>
                </div>

                <div className="col-sm-6 register-form p-2">
                <div className="register col-sm-8 mt-5">
              
              <h3 className="h3"><FaUser size={30}></FaUser> <b className='d-flex justify-content-end'>register</b> </h3>
             
             
             
              <hr></hr>
  
              <form action="" className="form-group register-form  ">
                 <div>
                 <label htmlFor="username">username/email</label>
                 <span className='input-icon'><FaEnvelope></FaEnvelope></span>
                 <input type="text" className="form-control"name="username" placeholder="sylvoee@gmail.com" />
                 </div>
  
                 <div>
                 <label htmlFor="password">Password</label>
                 <span className='input-icon'><AiFillLock></AiFillLock></span>
                 <input type={`${show ? "text" : "password"}`} className="form-control" name="password"  />
                 </div>
  
                 <div>
                 <label htmlFor="password">Confirm Password</label>
                 <span className='input-icon'><AiFillLock></AiFillLock></span>
                 <input type={`${show ? "text" : "password"}`} className="form-control" name="confirm-password"  />
                 </div>
  
                 <div className='mt-2'>
                 <button className="btn btn-success w-100 border-none">register...</button> 
                 </div>
              </form>

              <div className="other-register text-center">
                    <div className="google"><a className='text-decoration-none text-light' href="">Sign with Google  <AiFillGoogleCircle ></AiFillGoogleCircle></a></div>
                    <div className="google"><a className='text-decoration-none text-light' href="">Sign with Facenook  <AiFillFacebook></AiFillFacebook></a></div>
                    <div className="github "><a className='text-decoration-none text-light' href="">Sign in github <AiFillGithub></AiFillGithub></a></div>
                 </div>
                 <div className="register"><a className='text-decoration-none text-light' href="/login">Sign in with custom credentials</a>
                 <button onClick={()=>setShow(!show)}  className='btn btn-default offset-2'><AiFillEye className='text-success' size={30}></AiFillEye></button>
                 </div>

  
              </div>
           

                </div>
            </div>

        </div>
        </>
     );
}
 
export default Register;