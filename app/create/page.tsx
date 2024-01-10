"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Modal from "@/components/Modal";
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
import TextAreaWithLimit from "@/components/TextAreaWIthLimit";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { formTypes } from "@/types";

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(25, { message: "Full name cannot exceed 25 characters" }),
  email: z.string().trim().email().or(z.string().length(0)),
  companyName: z
    .string()
    .trim()
    .min(1, { message: "Company name is required" }),
  positionApplyingFor: z
    .string()
    .trim()
    .min(1, { message: "Position is required" }),
  mostRecentPosition: z.string().trim(),
  skills: z
    .string()
    .trim()
    .max(150, { message: "Skills are too long. Only include key skills" }),
  accomplishmentsOrProjects: z
    .string()
    .trim()
    .max(600, { message: "Accomplishments cannot exceed 600 characters" }),
  reasonForInterest: z
    .string()
    .trim()
    .max(200, { message: "Reason cannot exceed 200 characters" }),
});

export default function Create() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      positionApplyingFor: "",
      mostRecentPosition: "",
      skills: "",
      accomplishmentsOrProjects: "",
      reasonForInterest: "",
    },
  });
  const { toast } = useToast();
  const [coverLetter, setCoverLetter] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log("values is ", values);
    // get rid of all keys that are empty
    Object.keys(values).forEach((key) => {
      const validKey = key as keyof formTypes;
      values[validKey] = values[validKey].trim();
      if (values[validKey] === "") {
        delete values[validKey];
      }
    });
    setLoading(true);
    const resp = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await resp.json();
    if (!resp.ok) {
      toast({
        title: data.error,
        description: data.desc,
      });
    } else {
      // console.log('data is ', data);
      setCoverLetter(data.result);
    }
    // setTimeout(() => {
    //     setLoading(false)
    // }, 4000);
    setLoading(false);
  }
  return (
    <div className="m-14">
      <Form {...form}>
        <h1 className="text-4xl md:text-6xl font-secondary py-2">
          Tell us a bit about yourself
        </h1>
        <p>
          The more questions you answer, the less generic the cover letter will
          be!
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 my-10"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mostRecentPosition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current position or most recent position</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Key skills</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Enter as a comma separated list.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="accomplishmentsOrProjects"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Major accomplishments or projects</FormLabel>
                <FormControl>
                  <TextAreaWithLimit
                    {...field}
                    limit={600}
                    sameLine={false}
                    desc={
                      "e.g. My efforts led to a 30% increase in user engagement, led a team that delivered a new product feature that boosted sales by 15%, etc."
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h1 className="text-4xl md:text-6xl font-secondary py-2">
            Tell us about the job
          </h1>
          <p className="!mt-0">
            Remember, the more questions you answer, the less generic the cover
            letter will be!
          </p>

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="positionApplyingFor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reasonForInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for interest</FormLabel>
                <FormControl>
                  <TextAreaWithLimit
                    {...field}
                    limit={200}
                    sameLine={true}
                    desc={"Why do you want to work here?"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Modal
            title={`${form.getValues(
              "fullName",
            )}'s Cover Letter for ${form.getValues("companyName")}`}
            text={coverLetter}
            btnContent="Generate"
            isGenerateBtn={true}
            isExample={false}
            loading={loading}
            disabled={!form.formState.isValid}
          />
        </form>
      </Form>
    </div>
  );
}
