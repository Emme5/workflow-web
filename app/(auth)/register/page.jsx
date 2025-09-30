import React from "react";
import SignupForm from "@/components/Auth/SignupForm";
import { ModeToggle } from "@/components/ThemeSwitcher";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignupPage = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-background px-4">
      {/* ปุ่มสลับโหมด */}
      <div className="fixed top-5 right-5">
        <ModeToggle />
      </div>

      {/* กล่อง Card */}
      <Card className="w-full max-w-md rounded-lg border border-input shadow-lg sm:max-w-lg md:max-w-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>
            Let's get started. No credit card needed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default SignupPage;