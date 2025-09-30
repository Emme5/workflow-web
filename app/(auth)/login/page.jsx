import React from "react";
import LoginForm from "@/components/Auth/LoginForm"; // ✅ เปลี่ยนเป็น LoginForm
import { ModeToggle } from "@/components/ThemeSwitcher";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginPage = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted to-background px-4">
      {/* ปุ่มสลับโหมด */}
      <div className="absolute top-5 right-5">
        <ModeToggle />
      </div>

      {/* กล่อง Card */}
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-input/50 shadow-xl backdrop-blur-sm bg-background/80">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Login to continue to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm /> {/* ✅ ใช้ LoginForm */}
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginPage;
