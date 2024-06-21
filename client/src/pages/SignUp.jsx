import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [formdata,setFormdata] = useState({});
  const [errorMessage,setErrorMessage] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const onchangeHandler = (e)=>{
    setFormdata({...formdata,[e.target.id]:e.target.value.trim()});
    // console.log(formdata);
  };

  const submitHandler = async (e)=>{
    e.preventDefault();
    if( !formdata.username || !formdata.password || !formdata.email){
      return setErrorMessage("All fields are mandatory.");
    }

    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/user/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formdata)
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/signin')
      }
    }catch(error){
      setErrorMessage(error.message);
      setLoading(false);
    }

  };


  
  return (
  <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5'>
      {/* left Side */}
      <div className="flex-1">
      <Link
        to="/"
        className=" text-4xl font-bold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Das's
        </span>
        Blog
      </Link>
      <p className='text-sm mt-5 font-semibold'>
      Recusandae qui unde laudantium vel, nisi inventore accusamus ratione quam et aliquid officia nihil praesentium ea eum
      </p>
      </div>
      {/* right Side */}
      <div className='flex-1'>
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <div >
            <Label value="Your Username"/>
            <TextInput
            type='text'
            placeholder='Username'
            id='username' 
            onChange={onchangeHandler}
            />
          </div>
          <div >
            <Label value="Your Email"/> 
            <TextInput
            type='email'
            placeholder='name@company.com'
            id='email' 
            onChange={onchangeHandler}
            />
          </div>
          <div >
            <Label value="Your Password"/>
            <TextInput
            type='password'
            placeholder='Password'
            id='password' 
            onChange={onchangeHandler}
            />
          </div>
          <Button gradientDuoTone="purpleToPink" type='submit' disabled={loading}>
            {
              loading?(
                <>
                <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span>
                </>
              ): 'Sign Up'
            }
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to='/signin' className='text-blue-500' >
          Sign In</Link>
        </div>
        { 
        errorMessage &&
         <Alert className='m-5' color='failure'>{errorMessage}</Alert>
         }
      </div>
    </div>
  </div>
  )
}

export default SignUp
