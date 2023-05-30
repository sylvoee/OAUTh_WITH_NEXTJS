
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import './layout' ;
import { metadata } from './layout';
import { FaEnvelope, FaLock, FaRegistered, FaUser } from 'react-icons/fa';
import { AiFillCustomerService, AiFillExperiment, AiFillEye,  AiFillLock } from "react-icons/ai";


const ConfirmEmail = () => {
    metadata.title = "Confirm Email";
    
    return ( 
        <>
        
         <Head>
            
            <title>{metadata.title}</title>
         </Head>

        <div className="register-container container-fluid content">
         
                <div className="col-sm register-form p-2 offset-3">
                <div className="register confirm-email col-sm-6 mt-4">
              
              <h3 className="h3"><AiFillExperiment size={40}></AiFillExperiment> <b className='d-flex justify-content-end'>Confirm Email</b> </h3>
             
             
             
              <hr></hr>
  
              <form action="" className="form-group register-form">
                 <div>
                 <label htmlFor="username">username/email</label>
                 <span className='input-icon'><FaEnvelope></FaEnvelope></span>
                 <input type="text" className="form-control"name="username" placeholder="sylvoee@gmail.com" />
                 </div>
  
  
                 <div className='mt-2'>
                 <button className="btn btn-success w-100 border-none">register...</button> 
                 </div>

                 <div className="register"><a className='text-decoration-none text-light' href="">I don't have an acoount</a>
                 <a className='text-decoration-none text-warning offset-3' href="">Forget Password</a>
                 </div>
  
              </form>
  
              </div>
           

                </div>
            

        </div>
        </>
     );
}
 
export default ConfirmEmail;