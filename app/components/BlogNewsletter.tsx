"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Mail } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

export default function BlogNewsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black/50 rounded-xl p-8 border border-border/40"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="md:w-2/3">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
          </div>
          <p className="text-muted-foreground">
            Stay updated with the latest insights in data engineering, architecture, and analytics. We send a monthly
            digest of our best articles, industry trends, and exclusive content.
          </p>
        </div>
        <div className="md:w-1/3">
          {isSuccess ? (
            <div className="bg-primary/10 text-primary p-4 rounded-lg">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm">You'll receive our next newsletter in your inbox.</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </motion.div>
  )
}
