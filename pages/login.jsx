
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import './layout' ;
import { metadata } from './layout';
import { FaEnvelope, FaFacebook, FaGithub, FaLock, FaUser } from 'react-icons/fa';
import { AiFillEye, AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillLock } from "react-icons/ai";
import { useCallback, useState } from 'react';
import{useSession, signIn, signOut} from 'next-auth/react' ;


const Login = () => {
    metadata.title = "login";
    const[show, setShow] = useState()

    // Handle Google signIn
     const handlegoogleSignin =()=>{
      signIn('google', {callBackUrl: 'http://localhost:3000'});

    }
    // Handle facebook signIn
      const handleFbSignin =()=>{
      signIn('facebook', {callBackUrl: 'http://localhost:3000'});

    }
    // Handle Github signIn
   const handleGithubSignIn =()=>{
   signIn('github', {callBackUrl: 'http://localhost:3000'});

    }
    
    return ( 
        <>
        
         <Head>
            
            <title>{metadata.title}</title>
         </Head>

        <div className="login-container container-fluid content">
            <div className="row p-3">
                <div className="col-sm-6 login-msg img">
               <Image className='img-responsive d-none d-sm-block' src='/img/img3.gif' width={550} height ={400} alt ="An Image"></Image>
               <h4 className="h4">Login To The Amazing World Of Perishable Items</h4>
                </div>

                <div className="col-sm-6 login-form p-2">
                <div className="login col-sm-8 mt-5">
              
              <h3 className="h3"><FaUser size={30}></FaUser> Login </h3>
             
             
             
              <hr></hr>
  
              <form action="" className="form-group login-form">
                 <div>
                 <label htmlFor="username">username/email</label>
                 <span className='input-icon'><FaEnvelope></FaEnvelope></span>
                 <input type="text" className="form-control"name="username" placeholder="sylvoee@gmail.com" />
                 </div>
  
                 <div>
                 <label htmlFor="password">Password</label>
                 <span className='input-icon'><AiFillLock></AiFillLock></span>
                 <input  type= {`${show ? "text" : "password"}`}  className="form-control" name="password"  />
                 </div>
  
  
                 <div className='mt-2'>
                 <button className="btn btn-success w-100 border-none">Login...</button> 
                 </div>
              </form>

              <div className="other-login text-center row mt-5">
                    <div className="google col-sm-4"><button  onClick={handlegoogleSignin} className='text-decoration-none btn btn-success' href="">Sign In With <AiFillGoogleCircle size={23} ></AiFillGoogleCircle></button></div>
                    <div className="github col-sm-4"><button onClick={handleGithubSignIn}   className='text-decoration-none btn btn-success' href="">Sign In With <FaGithub size={23} ></FaGithub></button></div>
                    <div className="fb col-sm-4"><button onClick={handleFbSignin }   className='text-decoration-none btn btn-success' href="">Sign In With <FaFacebook size={23} ></FaFacebook></button></div>
                 </div>
                 <div className="register"><a className='text-decoration-none text-light' href="/register">I don't have an acoount</a>
                 <button onClick={()=>setShow(!show)}  className='btn btn-default offset-1'><AiFillEye className='text-info' size={30}></AiFillEye></button>
                 <a className='text-decoration-none text-warning offset-1' href="">Forget Password</a>
                 
                 </div>

  
  
              </div>
           

                </div>
            </div>

        </div>
        </>
     );
}
 
export default Login;