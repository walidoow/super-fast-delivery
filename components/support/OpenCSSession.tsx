"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ReloadIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

//Radio buttons
const FormSchema = z.object({
  type: z.enum(["zoom", "text", "email"], {
    required_error: "You need to select a notification type",
  }),
});

// CS form
const formSchema = z.object({
  field1: z.string().min(2, {
    message: "This field needs to be filled out",
  }),
  field2: z.string().min(2, {
    message: "This field needs to be filled out",
  }),
  field3: z.string().min(2, {
    message: "This field needs to be filled out",
  }),
  type: z.string().min(2, {
    message: "This field needs to be filled out",
  }),
});

export default function OpenCSSession() {
  const [submittedValues, setSubmittedValues] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      field1: "",
      field2: "",
      field3: "",
      type: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    setSubmittedValues(values);
    if (values[3] == "zoom") {
      console.log("https:zoom");
    }
  };

  return (
    <div>
      <div className="my-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2.5">
          Open a Session with Customer Service
        </h4>
        <p className="text-sm text-muted-foreground">
          Open a customer service case and chat with a representative
        </p>
      </div>
      <Separator className="my-6 bg-primary-dark-grey" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="field1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your issue</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message here" {...field} />
                </FormControl>
                <FormDescription>
                  Describe the issue in which you would like to contact customer
                  support
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="field2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order ID</FormLabel>
                <FormControl>
                  <Input placeholder="Type the order ID here" {...field} />
                </FormControl>
                <FormDescription>
                  The order ID concerning this case
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="field3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Package ID</FormLabel>
                <FormControl>
                  <Input placeholder="Type the package ID here" {...field} />
                </FormControl>
                <FormDescription>
                  The package ID concerning this case
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Method of communication</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="zoom" />
                      </FormControl>
                      <FormLabel className="font-normal">Zoom</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="text" />
                      </FormControl>
                      <FormLabel className="font-normal">SMS Text</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="email" />
                      </FormControl>
                      <FormLabel className="font-normal">Email</FormLabel>
                    </FormItem>
                    <FormDescription>
                      SMS texts and emails will be sent to the addresses and
                      phone numbers specified in your Account
                    </FormDescription>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" style={{ margin: "auto", marginTop: "30px" }}>
            Submit
          </Button>
        </form>
      </Form>
      {submittedValues && (
        <div>
          {submittedValues.type === "zoom" ? (
            <p className="mt-5">
              Click the link to start the videoconference:
              https://zoom.com/open-case/#8
            </p>
          ) : (
            <p></p>
          )}
          {submittedValues.type === "text" ? (
            <p className="mt-5">
              We will text you through the phone number provided in your
              Account.
            </p>
          ) : (
            <p></p>
          )}
          {submittedValues.type === "email" ? (
            <p className="mt-5">
              We will email you through the email provided in your Account.
            </p>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
}
