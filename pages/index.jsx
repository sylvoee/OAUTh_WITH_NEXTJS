
import { signOut, useSession } from "next-auth/react" ;
import Head from "next/head" ;
import Image from "next/image";

export default function Component() {
  const { data :session, status } = useSession();

  const handleSignOut =()=>{
    signOut();

  }

  if (status === "authenticated") { 
    return (
      <>
      <Head>
             <title>{session.user.name}</title>
      </Head>
      <div className="user-auth">
       <Image src={session.user.image} width ={40} height ={40} alt ="Profile image"></Image>
     <p> Signed in as {session.user.email}</p>
     <p> Signed in as {session.user.name}</p>
     <div className="bg-info">
      <button onClick={handleSignOut} className="btn btn-danger">Logout</button>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis expedita 
        repudiandae vitae magni laudantium sit dolor modi enim ducimus!</p>
     </div>

      </div>
      </>
    )
    
  }else{
    return(
      <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="not-auth">
        <h3 className="h3">Not Authorised</h3>
      </div>
      </>
    )
  }

  return <a href="/api/auth/signin">Sign in</a>
}