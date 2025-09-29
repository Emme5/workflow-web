"use client";

import React from 'react'
import { useForm } from 'react-hook-form';

const SignupForm = () => {

  const form = useForm({
  resolove: zodResolver(schema)
})

  return (
    <div>
      MySignupform
    </div>
  )
}

export default SignupForm
