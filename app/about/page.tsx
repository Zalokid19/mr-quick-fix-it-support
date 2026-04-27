"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About Mr Quick Fix
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Reliable remote IT support focused on fixing real problems quickly, clearly, and without unnecessary complexity.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Who we are</h2>
        <p className="text-gray-400 leading-relaxed">
          Mr Quick Fix is a Remote IT Support service based in Cape Town, helping everyday users solve laptop, WiFi, and software problems without the stress of complicated tech language.
        </p>
      </section>

      {/* WHY WE STARTED */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Why this started</h2>
        <p className="text-gray-400 leading-relaxed">
          Too many people struggle with slow devices, internet issues, and security problems without knowing where to go. This service was built to offer simple, affordable help that actually solves the problem without wasting time.
        </p>
      </section>

      {/* HOW WE WORK */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">How we work</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#0f172a] p-6 rounded-xl border border-white/5">
            <h3 className="font-semibold mb-2">Clear communication</h3>
            <p className="text-gray-400 text-sm">
              You always know what the issue is and what is being done.
            </p>
          </div>

          <div className="bg-[#0f172a] p-6 rounded-xl border border-white/5">
            <h3 className="font-semibold mb-2">Remote-first support</h3>
            <p className="text-gray-400 text-sm">
              Fast help without needing to leave your home.
            </p>
          </div>

          <div className="bg-[#0f172a] p-6 rounded-xl border border-white/5">
            <h3 className="font-semibold mb-2">Honest advice</h3>
            <p className="text-gray-400 text-sm">
              No upselling or unnecessary fixes.
            </p>
          </div>

          <div className="bg-[#0f172a] p-6 rounded-xl border border-white/5">
            <h3 className="font-semibold mb-2">Affordable help</h3>
            <p className="text-gray-400 text-sm">
              Simple pricing designed for real people.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE HELP WITH */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">What we help with</h2>

        <ul className="text-gray-400 space-y-2">
          <li>• Slow laptops and performance issues</li>
          <li>• WiFi and internet problems</li>
          <li>• Virus removal and security help</li>
          <li>• Software installation and setup</li>
          <li>• General troubleshooting</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Need help with your device?
        </h2>

        <p className="text-gray-400 mb-6">
          Get fast support directly on WhatsApp.
        </p>

        <a
          href="https://wa.me/27676259810"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
        >
          Get Help on WhatsApp
        </a>
      </section>

    </main>
  );
}