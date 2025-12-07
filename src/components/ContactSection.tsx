"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-28 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-background via-background/80 to-background/40"
    >
      {/* SECTION TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mt-3 text-lg">
          Feel free to reach out anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Let’s work together
          </h2>

          <p className="text-lg text-muted-foreground max-w-md">
            I&apos;m available for full-time roles & freelance projects.
          </p>

          <p className="text-muted-foreground max-w-md leading-relaxed">
            My inbox is always open — whether you have a question, want to
            collaborate, or just want to say hi.
          </p>

          <a
            href="mailto:kedarmhetre29@gmail.com"
            className="inline-block text-primary text-lg font-semibold underline hover:text-primary/80 transition"
          >
            kedarmhetre29@gmail.com
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          className="space-y-6 p-6 rounded-2xl bg-background/50 backdrop-blur border border-border/40 shadow-[0_0_25px_-5px_rgba(0,0,0,0.15)]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input
              placeholder="Your Name"
              required
              className="h-12 rounded-xl border-border bg-background/60 focus-visible:ring-2 focus-visible:ring-primary/50"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="hello@gmail.com"
              required
              className="h-12 rounded-xl border-border bg-background/60 focus-visible:ring-2 focus-visible:ring-primary/50"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              placeholder="Hello! What's up?"
              className="min-h-[140px] rounded-xl border-border bg-background/60 focus-visible:ring-2 focus-visible:ring-primary/50"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 text-lg rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
