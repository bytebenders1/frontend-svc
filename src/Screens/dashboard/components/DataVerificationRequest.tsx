"use client";
import { Button } from "@/src/components/ui/button";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
  Form,
  FormDescription,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectContent,
} from "@/src/components/ui/select";
import { filePdf, fileXlsx } from "@/src/lib/types/constant";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  fileForVerification: z.string().min(1, {
    message: "Please select an option from the first dropdown.",
  }),
  verificationPurpose: z.string().min(1, {
    message: "Please select an option from the second dropdown.",
  }),
  verifier: z.string().min(1, {
    message: "Please select an option from the third dropdown.",
  }),
});

function DataVerification() {
  const form2 = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileForVerification: undefined,
      verificationPurpose: "",
      verifier: undefined,
    },
  });

  return (
    <div className="mt-8 md:w-8/12 lg:w-6/12 mx-auto pb-10">
      <h1 className="text-lg font-semibold mb-8">Request Verification</h1>
      <Form {...form2}>
        <FormField
          control={form2.control}
          name="fileForVerification"
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
                          <div className="flex items-center gap-2">
                            <Image
                              src={filePdf}
                              alt="file"
                              width={30}
                              height={30}
                            />
                            Tech requirements.pdf
                          </div>
                        </SelectItem>
                        <SelectItem value={"Tech requirements.pdf"}>
                          <div className="flex items-center gap-2">
                            <Image
                              src={fileXlsx}
                              alt="file"
                              width={30}
                              height={30}
                            />
                            Tech requirements.pdf
                          </div>
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

        <FormField
          control={form2.control}
          name="verificationPurpose"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormControl>
                <>
                  <FormLabel>Verification purpose (Optional)</FormLabel>
                  <Input
                    placeholder="Purpose of Verification"
                    {...field}
                    // leftIcon={<Sms size="20" variant="Bold" color="gray" />}
                    className="!rounded-lg"
                  />
                </>
              </FormControl>
              <FormDescription>
                e.g., “Verify for Employment,” “Verify for Loan Application”
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form2.control}
          name="verifier"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormControl>
                <>
                  <FormLabel>Select Verifier</FormLabel>
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
                          Tech requirements.pdf
                        </SelectItem>
                        <SelectItem value={"Tech requirements.pdf"}>
                          Tech requirements.pdf
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </>
              </FormControl>
              <FormDescription>
                e.g., “Verify for Employment,” “Verify for Loan Application”
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-8 h-12 w-full">Request Verification </Button>
      </Form>
    </div>
  );
}

export default DataVerification;
