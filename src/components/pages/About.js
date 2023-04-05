import React from 'react'
import img from "../../photo.png";

export default function About() {
  return (
    <div className='flex-col text-center my-40 leading-10 relative'>
      <img src={img} alt='personal' className='absolute right-4'></img>
      <h1>
        Hi, my name is
        <p className='text-3xl font-extrabold tracking-wider text-stone-50'>Lantao Zhang.</p>
        <p>I build things for the web.</p>
      </h1>
      <p>
        I'm a software engineer specializing in building exceptional digital experiences. 
      </p>
      <p>
        Check it out!
      </p>
    </div>
  )
}