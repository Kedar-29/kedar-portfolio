"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full pt-16 pb-4 px-6 md:px-10 lg:px-16 overflow-hidden bg-background"
    >
      {/* ================= Animated Background ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-full blur-3xl opacity-50 animate-blob top-[-120px] left-[-120px]" />
        <div className="absolute w-[260px] h-[260px] bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 rounded-full blur-2xl opacity-40 animate-blob animation-delay-2000 top-[55%] left-[65%]" />
        <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000 bottom-[-180px] right-[-180px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* ================= Title ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-2 text-base md:text-lg">
            Feel free to reach out anytime.
          </p>
        </motion.div>

        {/* ================= Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ================= Left ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Let’s work together
            </h3>

            <p className="text-base text-muted-foreground max-w-md">
              I&apos;m available for full-time roles & freelance projects.
            </p>

            <p className="text-muted-foreground max-w-md leading-relaxed text-sm md:text-base">
              My inbox is always open — whether you have a question, want to
              collaborate, or just want to say hi.
            </p>

            <a
              href="mailto:kedarmhetre29@gmail.com"
              className="inline-block text-primary text-base md:text-lg font-semibold underline hover:text-primary/80 transition"
            >
              kedarmhetre29@gmail.com
            </a>
          </motion.div>

          {/* ================= Right (Form) ================= */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 p-4 rounded-2xl bg-background/50 backdrop-blur border border-border/40 shadow-[0_0_25px_-5px_rgba(0,0,0,0.15)]"
          >
            <div className="space-y-1">
              <label className="text-sm font-medium">Name</label>
              <Input
                placeholder="Your Name"
                required
                className="h-10 rounded-xl bg-background/60 focus-visible:ring-2 focus-visible:ring-primary/50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="hello@gmail.com"
                required
                className="h-10 rounded-xl bg-background/60 focus-visible:ring-2 focus-visible:ring-primary/50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Message</label>
              <Textarea
                placeholder="Hello! What's up?"
                required
                className="min-h-[110px] rounded-xl bg-background/60 focus-visible:ring-2 focus-visible:ring-primary/50"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-10 text-base rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </motion.div>

      {/* ================= Blob Animation ================= */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(25px, -40px) scale(1.08);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.92);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
