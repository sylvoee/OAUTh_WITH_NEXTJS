
import { useSession } from "next-auth/react" ;
import Head from "next/head" ;
import Image from "next/image";

export default function Component() {
  const { data: session, status } = useSession()
     


  if (status === "authenticated") {
    console.log(session.user)
    return (
      <>
      <Head>
             <title>{session.user.name}</title>
      </Head>

      <div className="user-auth">
       <Image src={session.user.image} width ={40} height ={40}></Image>
     <p> Signed in as {session.user.email}</p>
     <p> Signed in as {session.user.name}</p>
     <div className="bg-info">
      <button className="btn btn-danger">Logout</button>
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