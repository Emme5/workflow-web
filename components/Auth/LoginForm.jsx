"use client";

import { loginSchema } from "@/schema/validationSchema"; // ✅ ใช้ schema ของ login
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleButton from "../Buttons/GoogleButton";
import GithubButton from "../Buttons/GithubButton";
import Separator from "../Common/Separator";
import { Form } from "../ui/form";
import CustomFormField from "../Form/CustomFormField";
import Link from "next/link";
import { Button } from "../ui/button";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema), // ✅ เปลี่ยน schema
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    console.log(values, "login form values");
    // TODO: เรียก API login ที่คุณเตรียมไว้
  };

  return (
    <div className="grid w-full items-center gap-4">
      {/* ปุ่ม Social Login */}
      <div className="flex items-center gap-3.5">
        <GoogleButton text="Login with Google" />
        <GithubButton text="Login with Github" />
      </div>

      <Separator />

      {/* ฟอร์ม Login */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <CustomFormField
              control={form.control}
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
            />
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
            />
          </div>

          <Button variant="primary" className="mt-5 w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>

      {/* ลิงก์ไปหน้า Signup */}
      <p className="text-sm font-light text-muted-foreground">
        Don’t have an account?
        <Link
          href="/register"
          className="font-medium text-blue-500 hover:underline ml-1"
        >
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;