import React from 'react'
import './signInPage.css'
import { SignIn } from "@clerk/clerk-react"

function Signinpage() {
  return (
    <div className='Signinpage'>
       <SignIn path="/sign-in" signUpUrl='/sign-up' forceRedirectUrl="/dashboard"/>
    </div>
  )
}

export default Signinpage