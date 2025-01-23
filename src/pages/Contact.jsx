import React, { useState } from 'react'

const Contact = () => {
  const [form,setForm] =useState({name:"", email:"", message:""})
  const [isLoading,setLoading]=useState(false);

  const handleChange=()=>{

  }
  const handleFocus=()=>{};
  const handleBlur=()=>{};

  return (
   <section className='relative flex lg:flex-row flex-col max-container'>
    <div className='flex-1 min-w-[50%] flex flex-col'>
      <h1 className='head-text'>Get In Touch</h1>
      <form
         className='w-full flex flex-col gap-7 mt-14'
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
          name='name'
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
    </div>
   </section>
  )
}

export default Contact
