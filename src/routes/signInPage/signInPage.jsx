import React from 'react'
import { SignIn } from "@clerk/clerk-react"

function Signinpage() {
  return (
    <div>
       <SignIn path="/sign-in" />
    </div>
  )
}

export default Signinpage