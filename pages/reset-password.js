
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import './layout' ;
import { metadata } from './layout';
import { FaEnvelope, FaLock, FaRegistered, FaUser } from 'react-icons/fa';
import { AiFillCustomerService, AiFillEye,  AiFillLock, AiFillSetting } from "react-icons/ai";


const ResetPassword = () => {
    metadata.title = "Reset Password";
    
    return ( 
        <>
        
         <Head>
            
            <title>{metadata.title}</title>
         </Head>

        <div className="register-container  container-fluid content">
            <div className="row p-3 reset-password">
                <div className="col-sm-6 register-msg img">
               <Image className='img-responsive d-none d-sm-block' src='/img/img2.JPEG' width={400} height ={400} alt ="An Image"></Image>
               <h3 className="h3">Reset your password</h3>
                </div>

                <div className="col-sm-6 register-form p-2">
                <div className="register col-sm-8 mt-5">
              
              <h3 className="h3"><AiFillSetting size={40}></AiFillSetting> <b className='d-flex justify-content-end'>Reset password</b> </h3>
             
              <hr></hr>
  
              <form action="" className="form-group register-form">
                 <div>
                 <label htmlFor="password">New Password</label>
                 <span className='input-icon'><AiFillLock></AiFillLock></span>
                 <input type="password" className="form-control" name="password"  />
                 </div>
  
                 <div>
                 <label htmlFor="password">Confirm New Password</label>
                 <span className='input-icon'><AiFillEye></AiFillEye></span>
                 <input type="password" className="form-control" name="confirm-password"  />
                 </div>
  
                 <div className='mt-2'>
                 <button className="btn btn-success w-100 border-none">register...</button> 
                 </div>
                 
  
              </form>
  
              </div>
           

                </div>
            </div>

        </div>
        </>
     );
}
 
export default ResetPassword;