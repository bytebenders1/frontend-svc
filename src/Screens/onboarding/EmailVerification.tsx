"use client";
import OnboardingLayout from "@/src/layout/OnboardingLayout";
import { Button } from "@/src/components/ui/button";

import { ArrowLeft } from "lucide-react";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/src/components/ui/form";
import Link from "next/link";

import OtpInput from "react-otp-input";

function EmailVerification() {
  return (
    <OnboardingLayout>
      <div className="h-[95%] md:h-[73%] w-11/12 md:w-8/12 flex flex-col items-center">
        <h1 className="text-3xl mt-2 font-semibold z-30">Check your email</h1>
        {/* <div className="mt-8 z-30"> */}
        {/* tabs */}
        {/* <TabComp /> */}
        {/* </div> */}
        <p
          // htmlFor="checkbox"
          className="text-secondary py-4 text-wrap bg-white text-center"
        >
          We sent a verification link to <br /> olivia@untitledui.com
        </p>
        <EmailComp />
      </div>
    </OnboardingLayout>
  );
}

export default EmailVerification;

const formSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

function EmailComp() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="mt-8 z-50">
      <Form {...form}>
        <form className="flex justify-center">
          <OTPinput />
        </form>
      </Form>

      {/* <div className='mt-10' /> */}
      <Button
        type="button"
        className="w-full h-12 z-[9999] bg-primary hover:bg-primary30 rounded-lg text-white mt-10"
        //   onClick={form.handleSubmit(onSubmit)}
        //   disabled={isPending}
      >
        Verify Email
      </Button>
      <div className="flex space-x-2 my-4 justify-center  ">
        <div className="flex items-center gap-3">
          <label
            htmlFor="checkbox"
            className="text-secondary text-sm font-semibold"
          >
            Didn&rsquo;t receive the email?
          </label>
        </div>
        <Link
          href="/login"
          className="text-primary text-sm font-semibold hover:underline"
        >
          Click to resend
        </Link>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <ArrowLeft className="w-5 h-5 text-secondary font-semibold" />
        {/* <span className="font-semibold text-secondary">Back to login</span> */}
        <Link href="/login" className="font-semibold text-secondary">
          Back to login
        </Link>
      </div>
    </div>
  );
}

function OTPinput() {
  const [otp, setOtp] = useState("");

  const handleChange = (otp: any) => setOtp(otp);
  return (
    <OtpInput
      value={otp}
      onChange={handleChange}
      numInputs={4}
      renderSeparator={<span style={{ width: "12px" }}></span>}
      // separator={<span style={{ width: "8px" }}></span>}
      renderInput={(props) => <input {...props} />}
      inputStyle={{
        border: "3px solid #15A588",
        borderRadius: "8px",
        width: "64px",
        height: "64px",
        fontSize: "48px",
        color: "#15A588",
        fontWeight: "400",
        caretColor: "blue",
        outline: "none",
      }}
    />
  );
}
