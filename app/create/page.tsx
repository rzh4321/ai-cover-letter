'use client';

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import TextAreaWithLimit from "@/components/TextAreaWIthLimit";

const formSchema = z.object({
    fullName: z.string().min(1, {message: "Name is required"}).max(25, {message: "Full name cannot exceed 25 characters"}),
    email: z.string().email().or(z.string().length(0)).optional(),
    companyName: z.string().min(1, {message: "Company name is required"}),
    position: z.string().min(1, {message: "Position is required"}),
    mostRecentPosition: z.string(),
    skills: z.string().max(150, {message: "Skills are too long. Only include key skills"}),
    accomplishments: z.string().max(600, {message: "Accomplishments exceed 800 characters"}),
    reason: z.string().max(200, {message: "Reason cannot exceed 200 characters"}),
})

export default function Create() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fullName: "",
          email: "",
          companyName: "",
          position: "",
          mostRecentPosition: "",
          skills: "",
          accomplishments: "",
          reason: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }

      return (
        <div className="m-14">
        <Form {...form}>
            <h1 className="text-4xl md:text-6xl font-secondary py-2">Tell us a bit about yourself</h1>
            <p>The more questions you answer, the less generic the cover letter will be.</p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-10">
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
              name="accomplishments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Major accomplishments or projects</FormLabel>
                  <FormControl>
                    <TextAreaWithLimit {...field} limit={600} sameLine={false} desc={'e.g. My efforts led to a 30% increase in user engagement, led a team that delivered a new product feature that boosted sales by 15%, etc.'} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h1 className="text-4xl md:text-6xl font-secondary py-2">Tell us a bit about the company</h1>
            <p className="!mt-0">Remember, the more questions you answer, the less generic the cover letter will be.</p>

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
              name="position"
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
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for interest</FormLabel>
                  <FormControl>
                    <TextAreaWithLimit {...field} limit={200} sameLine={true} desc={'Why do you want to work here?'} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant={'generate'} type="submit">Generate</Button>
          </form>
        </Form>

        </div>
      )
}