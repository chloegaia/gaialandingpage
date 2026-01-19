"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzhOSg7iGiBEIvU3xxgQ4cwqMdJkI5pHBTdooddAE9PPxfIIP-O3Gdlpcp4rHc7xMS7yA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Sparkles overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <SparklesCore
          id="gaia-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={50}
          className="h-full w-full"
          particleColor="#F5A623"
          speed={0.8}
        />
      </div>

      {/* Content */}
      <div className="flex min-h-screen flex-col items-center justify-between px-6 py-12 md:py-16">
        {/* Logo */}
        <header className="animate-fade-in">
          <Image
            src="/logo.png"
            alt="Gaia"
            width={120}
            height={40}
            className="h-8 w-auto opacity-0 animate-[fadeIn_1.2s_ease-out_0.2s_forwards] md:h-10"
            priority
          />
        </header>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center">
          {!showForm && !isSuccess && (
            <div className="animate-[fadeIn_1s_ease-out_0.4s_forwards] opacity-0">
              <h1 className="font-serif text-3xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
                Your personal AI for a better,
                <br className="hidden md:block" /> healthier life.
              </h1>
              <p className="mt-6 text-sm font-light tracking-wide text-white/60 md:text-base">
                Bringing clarity to all your health data.
              </p>
              <LiquidButton
                onClick={() => setShowForm(true)}
                size="xl"
                className="mt-10 font-light tracking-wide text-white md:mt-12"
              >
                Join the waiting list
              </LiquidButton>
            </div>
          )}

          {showForm && !isSuccess && (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-sm flex-col items-center animate-[fadeIn_0.6s_ease-out_forwards]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                autoFocus
                className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 text-center text-sm font-light text-white placeholder-white/40 backdrop-blur-sm outline-none transition-all duration-300 focus:border-white/40 focus:bg-white/10 md:text-base"
              />
              <LiquidButton
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="mt-6 font-light tracking-wide text-white"
              >
                {isSubmitting ? "..." : "Submit"}
              </LiquidButton>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="mt-4 text-xs text-white/40 transition-colors duration-300 hover:text-white/60"
              >
                Back
              </button>
            </form>
          )}

          {isSuccess && (
            <div className="animate-[fadeIn_0.6s_ease-out_forwards]">
              <p className="font-serif text-2xl font-light tracking-wide text-white md:text-3xl">
                You're in.
              </p>
            </div>
          )}
        </div>

        {/* Spacer for vertical centering */}
        <div className="h-8 md:h-10" />
      </div>

      {/* Global animation keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
