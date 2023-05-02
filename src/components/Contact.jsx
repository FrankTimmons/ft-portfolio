import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="block h-2 w-full bg-red"/>
      <div className="block h-2 w-full bg-yellow"/>
      <div className="block h-2 w-full bg-light-blue"/>
    <div name='contact' className='w-full h-screen bg-primary flex justify-center items-center'>
      <form method='post' action="https://getform.io/f/bcca38f3-ddcb-4587-8372-f04f116322f0" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow text-light-text'>Contact</p>
          <p className='text-light-text py-4'>Fill out the form below or send me an email for inquiries - franktimmonspdx@gmail.com</p>
        </div>
        <input className='bg-light-text p-2 placeholder:text-secondary-text' type="text" placeholder='Name' name="name"/>
        <input className='my-4 bg-light-text p-2 placeholder:text-secondary-text' type="email" placeholder='Email' name="email" />
        <textarea className='bg-light-text p-2 placeholder:text-secondary-text' name="message" placeholder="Message" rows="10"></textarea>
        <button className='text-light-text border-2 hover:bg-yellow hover:border-yellow px-4 py-3 my-8 mx-auto flex items-center duration-200'>
          Send Message
        </button>
      </form>
    </div>
    </div>
  )
}

export default Contact