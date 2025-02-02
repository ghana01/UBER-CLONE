import React,{useState} from 'react'
import {Link}from 'react-router-dom'
const Userlogin = () => {
    const  [email, setEmail] = useState('')
    const [password,setPassword]=useState('')
    const [userData,SetUserData]=useState({})

    const submitHandler =(e)=>{
        e.preventDefault();
        SetUserData({
            email:email,
            password:password,
        })
        console.log(email,password)
        setEmail('')
        setPassword('')
       }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-10'
        src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg"
        alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} action="" >
            <h3 className='text-lg font-medium mb-2'> What`s your emai</h3>
            <input required type="email"
                    value ={email} 
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                   className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                   placeholder='email@example.com'/>
            <h3 className='text-lg font-medium mb-2'> Enter Password</h3>
            <input 
             value ={password} 
             onChange={(e)=>{
                 setPassword(e.target.value)
             }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
            required type="passsword" 
            placeholder='passsword' />
            <button 
            className='bg-black text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
              Login
            </button>
        </form>
        <p className='text-center'> Register as a USER? <Link to='/signup' className='text- block text-[#10b461]'>Signup</Link></p>
       </div>
       <div>
      <Link to={'/captain-login'}
         className='bg-[#10b461] text-white  flex items-center justify-center font-semibold mb-5 mt-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >
        Sign in as Captain</Link>
       </div>
    </div>
  )
}

export default Userlogin