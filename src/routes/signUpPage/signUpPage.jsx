import React from 'react'
import './signUpPage.css'
import { SignUp } from "@clerk/clerk-react"

function signUpPage() {
  return (
    <div className='signUpPage'>
      <SignUp  path="/sign-up" signInUrl='/sign-in'/>
    </div>
  )
}

export default signUpPage