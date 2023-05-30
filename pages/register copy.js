
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import './layout' ;
import { metadata } from './layout';
import { FaEnvelope, FaLock, FaDashboarded, FaUser } from 'react-icons/fa';
import { } from "react-icons/ai";
import { useState } from 'react';


const Dashboard = () => {
   metadata.title = "Dashboard";
  

    
    return ( 
        <>
        
         <Head>
            
            <title>{metadata.title}</title>
         </Head>

        <div className="Dashboard-container container-fluid content">
            <h3>Dashboard....</h3>

        </div>
        </>
     );
}
 
export default Dashboard;