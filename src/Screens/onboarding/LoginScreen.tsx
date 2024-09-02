"use client";
import OnboardingLayout from "@/src/layout/OnboardingLayout";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/src/components/ui/form";
import { Lock, Sms } from "iconsax-react";

function LoginScreen() {
  return (
    <OnboardingLayout>
      <div className="h-[95%] md:h-[73%] w-11/12 md:w-8/12 flex flex-col items-center">
        <Image
          src="/images/Logomark.svg"
          width="48"
          height={48}
          alt="logo"
          className="md:h-12 md:w-12 q"
        />
        <h1 className="text-3xl mt-2 font-semibold">Create an account</h1>
        <div className="mt-8 z-10">
          {/* tabs */}
          <TabComp />
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default LoginScreen;

function TabComp() {
  const [activeTab, setActiveTab] = useState("account");

  const onTrigger = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger onClick={() => onTrigger("account")} value="account">
          Account
        </TabsTrigger>
        <TabsTrigger onClick={() => onTrigger("account")} value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Login />
      </TabsContent>
      <TabsContent value="password">
        <div>password</div>
      </TabsContent>
    </Tabs>
  );
}

const formSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // email: 'michael.esenwa@gmail.com',
      // password: 'Test1234@',
      email: "",
      password: "",
    },
  });

  return (
    <div className="mt-8">
      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="joseph@mail.com"
                    {...field}
                    leftIcon={<Sms size="20" variant="Bold" color="gray" />}
                    className="!rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="********"
                      {...field}
                      leftIcon={<Lock size="20" variant="Bold" color="gray" />}
                      type={showPassword ? "text" : "password"}
                      rightIcon={
                        <div
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="cursor-pointer hover:scale-105"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </div>
                      }
                      className="placeholder:tracking-[30px] pt-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <span className="text-xs font-normal mt-4">
            Your password must be at least 8 character long, including 1 capital
            latter and 1 number
          </span>
          {/* <div className='flex justify-between'>
              <div className='flex items-center gap-3'>
                <Checkbox id='checkbox' name='checkbox' />
                <label
                  htmlFor='checkbox'
                  className='text-black text-sm font-bold'
                >
                  Remember me
                </label>
              </div>
              <Link
                href='/forgot-password'
                className='text-black text-sm font-bold hover:underline'
              >
                Forgot Password?
              </Link>
            </div> */}
        </form>
      </Form>
      {/* <div className='mt-10' /> */}
      <Button
        type="button"
        className="w-full h-12 z-[9999] bg-primary hover:bg-primary30 rounded-lg text-white mt-10"
        //   onClick={form.handleSubmit(onSubmit)}
        //   disabled={isPending}
      >
        Login
      </Button>
    </div>
  );
}
