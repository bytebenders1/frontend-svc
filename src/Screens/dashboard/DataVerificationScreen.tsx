'use client'
import { Button } from "@/src/components/ui/button";
import { FormField, FormItem, FormControl, FormMessage, FormLabel, Form } from "@/src/components/ui/form";
import { Select, SelectTrigger, SelectValue, SelectGroup, SelectItem } from "@/src/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectContent } from "@radix-ui/react-select";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, Login, Message } from "iconsax-react";
import { UploadCloud } from "lucide-react";
import { Input } from "postcss";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

function DataVerificationScreen() {
  return (
    <div className="mt-4 flex items-center justify-center">
     
     {/* tabs */}
     <TabComp />
     
    </div>
  );
}

export default DataVerificationScreen;

function TabComp() {
    return (
      <Tabs defaultValue="request" className="w-[90vw] md:w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="request">Request Verification</TabsTrigger>
          <TabsTrigger value="verification">Verification Requests</TabsTrigger>
          <TabsTrigger value="dataSharing">Data Sharing</TabsTrigger>
        </TabsList>
        <TabsContent value="request">
          <RequestVerification />
          
        </TabsContent>
        <TabsContent value="verification">
          <Login />
        </TabsContent>
        <TabsContent value="dataSharing">
          <Login />
        </TabsContent>
      </Tabs>
    );
  }

 const formSchema = z.object({
  dropdown1: z.string().min(1, {
    message: "Please select an option from the first dropdown.",
  }),
  dropdown2: z.string().min(1, {
    message: "Please select an option from the second dropdown.",
  }),
  dropdown3: z.string().min(1, {
    message: "Please select an option from the third dropdown.",
  }),
});

function RequestVerification(props: any) {

    const form2 = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          dropdown1: undefined,
          dropdown2: undefined,
          dropdown3:undefined
        },
      });

  
    return (
      <div className="mt-8">
        <Form {...form2}>
          {/* <form className="space-y-6"> */}

            <FormField
              control={form2.control}
              name="dropdown1"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                    <FormLabel>Select a Data</FormLabel>
                    <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={"Help"}>
                                    help
                                </SelectItem>
                                <SelectItem value={"JESUS"}>
                                    help me
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>

                    </Select>
                    </>
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            {/* <FormField
              control={form.control}
              name="dropdown2"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <select
                      {...field}
                      className="block w-full mt-1 border rounded-md"
                    >
                      <option value="">Select an option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <FormField
              control={form.control}
              name="dropdown3"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <select
                      {...field}
                      className="block w-full mt-1 border rounded-md"
                    >
                      <option value="">Select an option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          {/* </form> */}
        </Form>
  
        
      </div>
    );
  }