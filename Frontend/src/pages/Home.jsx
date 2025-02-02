import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <div className=' bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1730143290241-faa5f87cbed7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8   flex justify-between flex-col w-full bg-red'>
            <img className='w-16 ml-8' src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC8xN1wvNTUxMFwvMmM3MTkyZDM1NGQ0YjA2YWFhZTgzZDc5Yzc2MzYwNWMtMTYyMDM3Nzc0OC5haSJ9:postmates:cvkkT2vHrzRiGiujqpqbVFn9z8dn773yTgVOCePXowk?width=2400" alt="" />
            <div className='bg-white py-5 px-5'>
                <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 pb-7 rounded mt-2'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home;