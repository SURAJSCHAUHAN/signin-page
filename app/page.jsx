'use client'
import React,{useState} from 'react'
import { CgDarkMode } from "react-icons/cg";

const page = () => {

  const [clicked,setClicked]=useState(false);
  const [login,setLogin]=useState("");
  const [password,setPassword]=useState("");


  return (
    <div className={clicked ?"w-full h-full bg-white text-black":"w-full h-full backg"}>
      <div className=' h-screen flex items-center justify-center flex-col '>
        <h1 className='text-5xl'>Sign in</h1>
        <p className='mt-10'>Sign in and start managing your candidates!</p>

        <form className='flex flex-col mt-2 w-72'>
            <input type="text" placeholder='Login' className={clicked?'my-5 py-2 pl-4 rounded-lg bg-white outline-none':'my-5 py-2 pl-4 rounded-lg inpt'} onChange={(e)=>setLogin(e.target.value)} value={login}/> 
            <input type="text" placeholder='Password' className={clicked?'my-5 py-2 pl-4 rounded-lg bg-white outline-none':'my-5 py-2 pl-4 rounded-lg inpt'} onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <div className='mt-1 flex place-content-between'>
              <div>
                <input type="checkbox"/>
                <label> Remember me</label>
              </div>
              <div className='text-green-500'>
                <span>Forgot password?</span>
              </div>
            </div>
            <button className='w-full mt-4 py-2 rounded-lg outline-none cursor-pointer bg-green-500'>Login</button>
        </form>
      </div>
      <div className='fixed bottom-0 bg-white rounded-full p-2 m-5 text-black'>
        <CgDarkMode size={50} onClick={()=>{
          if(clicked){
            setClicked(false);
          }else{
            setClicked(true);
          }
        }} />
      </div>
    </div>
  )
}

export default page