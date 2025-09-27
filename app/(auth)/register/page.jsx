import SignupForm from '@/components/Auth/SignupForm'
import { ModeToggle } from '@/components/ThemeSwitcher'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const SignupPage = () => {
  return (
    <section className='flex items-center justify-center h-screen'>
     <div className='fixed top-5 right-5'>
      <ModeToggle />
     </div>

    <Card className='w-full rounded-lg shadow border border-input md:mt-8 sm:max-w-[32rem] xl:p=0'>
      <CardHeader>
        <CardTitle>
          create an account
        </CardTitle>
      </CardHeader>

    </Card>

      <SignupForm />
    </section>
  )
}

export default SignupPage
