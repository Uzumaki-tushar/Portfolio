import React, { useState,useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import Loader from '../Components/Loader'
import { Suspense } from 'react';
import useAlert from '../hooks/useAlert';
import Alert from '../Components/Alert';

const Contact = () => {
  const formRef=useRef(null);
  const [form,setForm] =useState({name:"", email:"", message:""})
  const [isLoading,setIsLoading]=useState(false);
  const [currentAnimation,setCurrentAnimation]=useState('idle')

  const {alert,showAlert,hideAlert}=useAlert();

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  };
  const handleFocus=()=>setCurrentAnimation('walk');
  const handleBlur=()=>setCurrentAnimation('idle');

  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Tushar",
        from_email: form.email,
        to_email:'tusharsourav01@gmail.com',
        message:form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false);
      // TODO: Show success message
      showAlert({show:true,
       text:'Message sent sucessfully!',
       type:'sucess'
      })
      
      setTimeout(()=>{
        // TODO: Hide the alert 
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name:"", email:"",message:""});
      },[3000])
      
      
    }).catch((error)=>{
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error);
      // TODO: Show error message
      showAlert({show:true,
      text:'I didnt receive your message',
      type:'danger'
      })
    })
  };

  return (
   <section className='relative flex lg:flex-row flex-col max-container h-[100px]'>
    {alert.show && <Alert {...alert}/>}
    <div className='flex-1 min-w-[50%] flex flex-col'>
      <h1 className='head-text'>Get In Touch</h1>
      <div className='flex'>
      <form
         className='w-full flex flex-col gap-7 mt-14'
         onSubmit={handleSubmit}
      >
        <label className='text-black-500 font-semibold'>
          Name
        </label>
        <input
         type="text"
          name='name'
          className='input'
          placeholder='jonh'
          required value={form.name}
          onChange={handleChange} 
          onFocus={handleFocus} 
          onBlur={handleBlur}
          />
        <label className='text-black-500 font-semibold'>
          Email
        </label>
        <input
         type="email"
          name='email'
          className='input'
          placeholder='jonh@gmail.com'
          required 
          value={form.email}
          onChange={handleChange} 
          onFocus={handleFocus} 
          onBlur={handleBlur}
          />
        <label className='text-black-500 font-semibold'>
          Your Message
        </label>
        <textarea
          name='message'
          className='input'
          placeholder='Let me know how I can help you!'
          required
          value={form.message}
          onChange={handleChange} 
          onFocus={handleFocus} 
          onBlur={handleBlur}
          />

          <button 
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading? 'Sending...':'Send Message'}

          </button>

      </form>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position:[0,0,5],
            fov:75,
            near:0.1,
            far:1000
          }}
        >
          <directionalLight intensity={2.5} position={[0,0,1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5,0.35,0]}
              rotation={[12.6,-0.6,0]}
              scale={[0.5,0.5,0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
      </div>
    </div>
   </section>
  )
}

export default Contact
