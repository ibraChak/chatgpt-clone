import React from 'react'
import './signUpPage.css'
import { SignUp } from "@clerk/clerk-react"

function signUpPage() {
  return (
    <div>
      <SignUp path="/sign-up" />
    </div>
  )
}

export default signUpPage