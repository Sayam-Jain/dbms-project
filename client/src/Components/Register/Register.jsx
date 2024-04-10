import React,{useState} from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'



import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";


import video from '../../LoginAssets/video.mp4' 
//import logo from '../../registerAssets/logo.jpg'

const register = () => {
  const[email,setEmail] = useState('')
  const[userName,setUserName] = useState('')
  const[password,setPassword] = useState('')

  const createUser = ()=>{
    Axios.post('http://localhost:5173/register',{
      Email: email,
      UserName: userName,
      Password: password
    }).then(()=>{
      console.log('user has been created')
    })

  }

 return (
   <div className='registerPage flex' style={{backgroundColor: 'paleturquoise' }}>
    <h1 className='heading' style={{ fontSize: '3rem', color: 'indigo', textAlign: 'center', position: 'absolute', top: '7%', left: '50%', transform: 'translateX(-50%)' }}>Opti-Flight</h1>


      <div className="contanier flex" style={{ margin: '200px' , backgroundColor: 'hsl(0, 0%, 91%)' }}>
     


      <div className="videoDiv" style={{ marginLeft: '20px' ,position: 'relative',height: 300 , padding: '0 1.5rem', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', margin: 'auto', borderRadius: '10px', overflow: 'hidden' }}>
  <video src={video} autoPlay muted loop style={{ position: 'absolute', height: '100%', width: '100%', objectFit: 'cover', top: 0, bottom: 0, right: 0, left: 0 }}></video>

  <div className="textDiv" style={{ position: 'relative' }}>
    <h2 className='title' style={{ color: 'var(--whiteColor)', fontSize: '35px', fontWeight: '800' }}>Making Booking Flights Comfortable</h2>
    <p>Plan your trip now!</p>
  </div>
</div>


        
    
    <div className="formDiv flex">
      <div className="headerDiv">
        {/* <img src={logo} alt="logo image" /> */}
        {/* <h3>Welcome back</h3> */}
      </div>
      <form action="" className='from grid'>
        <span></span>
        <div className="inputDiv" style={{ margin: '12px', fontSize: '24px', color: 'red' }}>
          <label htmlFor="email">email</label>
          <div className="input flex">
          <FaUserShield className='icon'/>
          <input type="email" id='email' placeholder='enter email' onChange={(event)=>{
            setEmail(event.target.value)
          }}/>
          </div>
        </div>
        <div className="inputDiv" style={{ margin: '12px', fontSize: '24px', color: 'red' }}>
          <label htmlFor="username">Username</label>
          <div className="input flex">
          <FaUserShield className='icon'/>
          <input type="text" id='username' placeholder='enter username' onChange={(event)=>{
            setUserName(event.target.value)
          }}/>
          </div>
        </div>
        <div className="inputDiv" style={{ margin: '12px', fontSize: '24px', color: 'red' }}>
          <label htmlFor="password">Password</label>
          <div className="input flex">
          <BsFillShieldLockFill className='icon'/>
          <input type="password" id='password' placeholder='enter password' onChange={(event)=>{
            setPassword(event.target.value)
          }}/>
          </div>
        </div>
        <button type='submit' className='btn flex' style={{ margin: '12px', fontSize: '24px', color: 'blue' }} onClick={createUser}>
          <span>register</span>
          <AiOutlineSwapRight className='icon' />
        </button>
        <span className='Forgot Password' style={{ marginLeft: '12px',marginTop: '-12px', fontSize: '12px', color: 'black' }}>
          Forgot your password? <a href=''>Click here</a>
        </span>
        <div className="footerDiv flex" style={{ marginLeft: '20px',marginTop: '-12px', fontSize: '12px', color: 'red' }}>
         <span className="text">Have an account ?</span> 
        <Link to={'/'}>
        <button className='btn' style={{ fontSize: '20px', color: 'blue' }}> Login </button>
        </Link>    
      </div>
      </form>
    </div>
      </div>
   </div>
  )
}

export default register
