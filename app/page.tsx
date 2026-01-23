"use client";

import React, { memo, useState } from "react";
import Image from "next/image";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { SparklesCore } from "@/components/ui/sparkles";

// Memoized sparkles to prevent re-renders when typing
const MemoizedSparkles = memo(function MemoizedSparkles() {
  return (
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
  );
});

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = () => {
    setIsSuccess(true);
    setEmail("");
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
      <MemoizedSparkles />

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

              {/* Social proof - Avatar stack */}
              <div className="mt-10 flex flex-col items-center gap-3 md:mt-12">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-black/40 object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-black/40 object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-5a69c17a67c6?w=80&h=80&fit=crop&crop=face"
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-black/40 object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=face"
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-black/40 object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm font-light text-white/70">
                  Join <span className="text-white">+100</span> early users
                </p>
              </div>

              <LiquidButton
                onClick={() => setShowForm(true)}
                size="xl"
                className="mt-8 font-light tracking-wide text-white"
              >
                Join the waiting list
              </LiquidButton>

              <p className="mt-8 text-xs font-light tracking-wide text-white/40 md:text-sm">
                Early access opens soon. Limited seats.
              </p>
            </div>
          )}

          {showForm && !isSuccess && (
            <>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLScuw850G4kzsapELwW93Fv0qBOiafxo3KO1-_rvv_tA-deJGA/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleFormSubmit}
                className="flex w-full max-w-sm flex-col items-center animate-[fadeIn_0.6s_ease-out_forwards]"
              >
                <input
                  type="email"
                  name="entry.2054194558"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  autoFocus
                  className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 text-center text-sm font-light text-white placeholder-white/40 backdrop-blur-sm outline-none transition-all duration-300 focus:border-white/40 focus:bg-white/10 md:text-base"
                />
                <LiquidButton
                  type="submit"
                  size="lg"
                  className="mt-6 font-light tracking-wide text-white"
                >
                  Submit
                </LiquidButton>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mt-4 text-xs text-white/40 transition-colors duration-300 hover:text-white/60"
                >
                  Back
                </button>
              </form>
              <iframe name="hidden_iframe" className="hidden" />
            </>
          )}

          {isSuccess && (
            <div className="animate-[fadeIn_0.6s_ease-out_forwards]">
              <p className="font-serif text-2xl font-light tracking-wide text-white md:text-3xl">
                You're in.
              </p>
            </div>
          )}
        </div>

        {/* Contact footer */}
        <footer className="z-10">
          <a
            href="mailto:contact@temple.am"
            className="text-xs font-light tracking-wide text-white/40 transition-colors duration-300 hover:text-white/70"
          >
            contact@temple.am
          </a>
        </footer>
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
