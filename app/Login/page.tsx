import React from 'react'
import Hero from '@/app/Login/Hero'
import Nav from '@/components/Nav'

function page() {
  return (
    <>
    {/* Nav */}
    <section>
      <Nav/>
    </section>
    {/* End Nav */}
    {/* Hero Section */}
    <section className='pt-32 pb-32 bg-sky-100'>
      <Hero/>
    </section>
    {/* End Hero Section */}
    </>
  )
} 

export default page
