
import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})
  const submitHandler =async (e) => {
          e.preventDefault()
        setUserData({
            fullname:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password
        })
        console.log(userData);
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
    }
  return(
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-10'
        src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg"
        alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} action="" >
            <h3 className='text-base font-medium mb-2'> What`s your name</h3>
            <div className='flex gap-3 mb-5'>
            <input
                 required
                 type="text"
                 className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm' 
                 placeholder='First Name'
                 value={firstName}
                 onChange={(e)=>{
                    setFirstName(e.target.value)
                 }}
                 
                 />
            <input
                 required
                 type="text"
                 className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm' 
                 placeholder='Last Name'
                 value={lastName}
                 onChange={(e)=>{
                    setLastName(e.target.value)
                 }}
                 />
            </div>
            <h3 className='text-base font-medium mb-2'> What`s your email</h3>
            <input required type="email"
                    value ={email} 
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                   className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm' 
                   placeholder='email@example.com'/>
            <h3 className='text-lg font-medium mb-2'> Enter Password</h3>
            <input 
             
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
            required type="passsword" 
            placeholder='passsword'
            value={password}
            onChange={(e)=>{
               setPassword(e.target.value)
            }}
            />
            <button 
              className='bg-black text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-sm'>
              Login
            </button>
         </form>
         <p className='text-center'>Alreadt have an account?<Link to='/login' className='text- block text-[#10b461]'>Login here</Link></p>
       </div>
       <div>
      <p className='text-[10px] leading-tight'> By proceeding ,you consent to get calls , whatsapp or sms message ,including by automated means , from uber and its affiliates to the number provider </p>
       </div>
    </div>
  )
}


export default UserSignup