import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-primary flex justify-center items-center border-t-8 border-logo p-4'>
      <form method='post' action="https://getform.io/f/bcca38f3-ddcb-4587-8372-f04f116322f0" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-logo text-beige'>Contact</p>
          <p className='text-beige py-4'>Fill out the form below or send me an email for inquiries - franktimmonspdx@gmail.com</p>
        </div>
        <input className='bg-ash-gray p-2 placeholder:text-secondary' type="text" placeholder='Name' name="name"/>
        <input className='my-4 bg-ash-gray p-2 placeholder:text-secondary' type="email" placeholder='Email' name="email" />
        <textarea className='bg-ash-gray p-2 placeholder:text-secondary' name="message" placeholder="Message" rows="10"></textarea>
        <button className='text-beige border-2 hover:bg-logo hover:border-logo px-4 py-3 my-8 mx-auto flex items-center duration-200'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact