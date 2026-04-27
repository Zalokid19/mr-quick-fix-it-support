"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const BOOKING_URL = "https://calendar.app.google/Us7oUjUJZp3jGh2z5";

const services = [
  {
    title: "Performance Repair",
    description:
      "Fix slow laptops, startup issues, crashes, software problems, and performance issues fast.",
    image: "/images/performance repair.webp",
    href: "/services/performance-repair",
  },
  {
    title: "Internet & WiFi Help",
    description:
      "Fix slow internet, WiFi dropouts, router problems, and basic connectivity issues from home or office.",
    image: "/images/internet.webp",
    href: "/services/internet-wifi-help",
  },
  {
    title: "Virus Removal & Security",
    description:
      "Remove malware, secure your system, and protect your files, accounts, and devices.",
    image: "/images/security.jpg",
    href: "/services/virus-removal",
  },
];

export default function HomePageClient() {
  return (
    <main className="bg-[#050816] text-white">
      {/* HERO */}
    <section className="relative min-h-screen overflow-hidden bg-[#050816] px-6 pt-28">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-55"
    style={{
      backgroundImage: "url('/images/IT-Support.jpg')",
    }}
  />

  {/* Dark overlays */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/85 to-[#050816]/35" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/40" />

  {/* Blue glow */}
  <motion.div
    className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-blue-600/35 blur-[140px]"
    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Content */}
  <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-2">
    {/* Left text */}
    <div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-black/30 px-4 py-2 text-sm text-blue-100 backdrop-blur"
      >
        <span className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,1)]" />
        Cape Town Remote IT Support
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl"
      >
        Tech problems?
        <span className="block bg-gradient-to-r from-blue-500 via-blue-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.45)]">
          Fixed fast.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg"
      >
        Get Professional Remote IT Support from Mr Quick Fix with slow laptops, WiFi issues, virus concerns,
        software problems, and everyday tech support — remotely, clearly,
        and affordably.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-col gap-4 sm:flex-row"
      >
        <a
          href="https://wa.me/27676259810"
          className="rounded-full bg-blue-600 px-8 py-4 text-center font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.65)] transition hover:scale-105 hover:bg-blue-500"
        >
          Get Help on WhatsApp →
        </a>

        <a
          href="/services"
          className="rounded-full border border-blue-300/40 bg-white/5 px-8 py-4 text-center font-bold text-white backdrop-blur transition hover:scale-105 hover:bg-white/10"
        >
          View Services
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300"
      >
        <span>⚡ Fast Response</span>
        <span>🛡️ Secure Support</span>
        <span>⚙️ Clear Pricing</span>
      </motion.div>
    </div>

    {/* Right glass card */}
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 35 }}
      transition={{ delay: 0.25, duration: 0.7 }}
      className="hidden lg:block"
    >
      <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.06] p-6 shadow-[0_0_60px_rgba(37,99,235,0.25)] backdrop-blur-1xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Support Status</p>
            <h3 className="text-2xl font-bold text-white">Ready to help</h3>
          </div>

          <motion.span
            className="h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_22px_rgba(59,130,246,1)]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Slow laptop performance",
            "Software setup and fixes",
            "WiFi and internet issues",
            "General troubleshooting",
            "Virus and security concerns",
            "Remote, clear, and simple",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-[#071120]/70 px-4 py-4 text-sm text-white"
            >
              <span>{item}</span>
              <span className="text-blue-300">✓</span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-300">
          Simple support. Clear communication. No confusing tech talk.
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* TRUST BAR */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-6 text-center md:grid-cols-3 md:px-10">
          <div>
            <h3 className="text-lg font-semibold">Fast Response</h3>
            <p className="mt-1 text-sm text-gray-400">
              Quick support for urgent laptop, software, and internet issues.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Clear Pricing</h3>
            <p className="mt-1 text-sm text-gray-400">
              Straightforward pricing with a low-risk first-time option.
            </p>
          </div>
            <div>
              <h3 className="text-lg font-semibold">Remote Convenience</h3>
              <p className="mt-1 text-sm text-gray-400">
                Get help from home with remote tech support for laptops, WiFi issues, and everyday computer problems.
              </p>
            </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            IT support services built for speed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Whether your laptop is slow, your internet is unstable, or your system
            is infected, we help solve the issue quickly and professionally.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="btn btn-primary mt-6 w-full text-base font-bold"
                >
                  Fix This Problem
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#081121] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A simple process that gets results
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 text-3xl font-bold text-blue-400">01</div>
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <p className="mt-3 text-gray-400">
                Message us on WhatsApp or use the contact form to explain the issue.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 text-3xl font-bold text-blue-400">02</div>
              <h3 className="text-xl font-semibold">We Diagnose</h3>
              <p className="mt-3 text-gray-400">
                We assess the problem and guide you on the fastest solution.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 text-3xl font-bold text-blue-400">03</div>
              <h3 className="text-xl font-semibold">We Fix It</h3>
              <p className="mt-3 text-gray-400">
                Most problems are resolved quickly through remote support or direct guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* TRUST SIGNALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Why People Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Clear, reliable, and built around real support
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-4 text-3xl">⚡</div>
              <h3 className="text-xl font-bold">Fast Response</h3>
              <p className="mt-3 text-gray-400">
                Quick communication helps you get moving faster when tech problems hit.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-4 text-3xl">💬</div>
              <h3 className="text-xl font-bold">Easy Communication</h3>
              <p className="mt-3 text-gray-400">
                Reach out via WhatsApp or contact form without a complicated process.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-4 text-3xl">💻</div>
              <h3 className="text-xl font-bold">Remote Convenience</h3>
              <p className="mt-3 text-gray-400">
                Many issues can be solved remotely, saving time and reducing stress.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-4 text-3xl">🔒</div>
              <h3 className="text-xl font-bold">Clear Service Options</h3>
              <p className="mt-3 text-gray-400">
                Straightforward pricing and service pages make the process easier to trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
<section className="bg-[#050816] py-20">
  <div className="mx-auto max-w-6xl px-6 md:px-10">
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
        Frequently Asked Questions
      </p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Answers to common questions before you get started
      </h2>
    </div>

    <div className="space-y-6">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">
          Can you fix my computer remotely?
        </h3>
        <p className="mt-3 text-gray-400">
          Yes. Most software issues, performance problems, and setup issues can be fixed remotely without you needing to leave your home.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">
          How fast will I get help?
        </h3>
        <p className="mt-3 text-gray-400">
          Response time depends on availability, but most clients receive a response within a short time. WhatsApp is usually the fastest option.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">
          What kind of issues do you fix?
        </h3>
        <p className="mt-3 text-gray-400">
          We help with slow laptops, viruses, WiFi problems, software errors, system setup, and general IT troubleshooting.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">
          Do you only help people in Cape Town?
        </h3>
        <p className="mt-3 text-gray-400">
          No. While based in Cape Town, remote support allows us to help clients across South Africa.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">
          How does payment work?
        </h3>
        <p className="mt-3 text-gray-400">
          Pricing is shared upfront depending on your issue. You’ll know what to expect before any work begins.
        </p>
      </div>

    </div>
  </div>
</section>

        {/* WHATSAPP CONVERSION STRIP */}
<section className="px-6 py-12 md:px-10">
  <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 text-center">
      <h2 className="text-2xl font-bold md:text-3xl">
        Need IT support right now?
      </h2>

<p className="mt-4 text-sm text-gray-400">
  ⚡ WhatsApp usually gets the fastest response
</p>

      <a
        href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with:%0A%0ADevice:%20(PC/Laptop)%0AIssue:%20(Describe%20problem)%0AUrgency:%20(Urgent/Normal)"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-6 text-base font-bold"
      >
        Get Help on WhatsApp
      </a>
  </div>
</section>

        {/* CAPE TOWN SEO SECTION */}
<section className="py-20">
  <div className="mx-auto max-w-7xl px-6 md:px-10">
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          Local IT Support
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          IT support in Cape Town with fast remote help
        </h2>

        <p className="mt-5 text-gray-300">
          If you are looking for Remote IT Support in Cape Town, Mr Quick Fix helps with
          slow laptops, WiFi problems, software issues, virus removal, and
          general troubleshooting for home users and small businesses.
        </p>

        <p className="mt-4 text-gray-400">
          Based in Cape Town and serving clients across South Africa, many issues
          can be diagnosed and fixed remotely, making support faster and more convenient.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/it-support-cape-town" className="btn btn-primary w-full sm:w-auto">
            IT Support Cape Town
          </Link>

          <Link href="/contact" className="btn btn-secondary w-full sm:w-auto">
            Get Local Help
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <h3 className="text-2xl font-bold">Popular local support requests</h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <h4 className="font-semibold text-white">Performance Repair</h4>
                <p className="mt-2 text-sm text-gray-400">
                  Help for slow laptops, freezing, crashing, and startup issues.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <h4 className="font-semibold text-white">WiFi & Internet Help</h4>
                <p className="mt-2 text-sm text-gray-400">
                  Fix unstable WiFi, setup issues, and everyday connectivity problems.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <h4 className="font-semibold text-white">Virus Removal</h4>
                <p className="mt-2 text-sm text-gray-400">
                  Cleanup for malware, pop-ups, suspicious programs, and security issues.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <h4 className="font-semibold text-white">Remote Support</h4>
                <p className="mt-2 text-sm text-gray-400">
                  Fast support without needing to travel or leave your home.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/services/performance-repair" className="text-blue-300 hover:text-blue-200 underline underline-offset-4">
                Performance Repair
              </Link>
              <Link href="/services/internet-wifi-help" className="text-blue-300 hover:text-blue-200 underline underline-offset-4">
                Internet & WiFi Help
              </Link>
            </div>
         </div>
        </div>
      </div>
</section>

        {/* HELP GUIDES */}
<section className="py-20">
  <div className="mx-auto max-w-7xl px-6 md:px-10">
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
        Help Guides
      </p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Useful answers for common tech problems
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
        Helpful guides can bring in traffic from Google and help visitors understand their issue faster.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <Link
        href="/blog/why-is-my-laptop-slow"
        className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-400/40"
      >
        <h3 className="text-xl font-bold">Why is my laptop slow?</h3>
        <p className="mt-3 text-gray-400">
          Learn common reasons laptops become slow and when to get help.
        </p>
      </Link>

      <Link
        href="/blog/why-is-my-laptop-slow/how-to-fix-wifi-problems-at-home"
        className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-400/40"
      >
        <h3 className="text-xl font-bold">How to fix WiFi problems at home</h3>
        <p className="mt-3 text-gray-400">
          Understand common WiFi problems and when troubleshooting matters.
        </p>
      </Link>

      <Link
        href="/blog/why-is-my-laptop-slow/signs-your-computer-has-a-virus"
        className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-400/40"
      >
        <h3 className="text-xl font-bold">Signs your computer has a virus</h3>
        <p className="mt-3 text-gray-400">
          Spot common malware warning signs before the issue gets worse.
        </p>
      </Link>
    </div>
  </div>
</section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-gradient-to-br from-blue-950 to-black py-20">
  <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
    <h2 className="text-3xl font-bold md:text-5xl">
      Ready to fix the issue before it gets worse?
    </h2>
    <p className="mx-auto mt-5 max-w-2xl text-gray-300">
      Get fast help for laptop problems, internet issues, software errors, and remote support needs.
      WhatsApp is usually the quickest way to get started.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
      <a
        href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with:%0A%0ADevice:%20(PC/Laptop)%0AIssue:%20(Describe%20problem)%0AUrgency:%20(Urgent/Normal)"
        className="btn btn-primary w-full sm:w-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        Start On WhatsApp
      </a>

      <a
        href={BOOKING_URL}
        className="btn btn-secondary w-full sm:w-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a Meeting
      </a>
    </div>

    <p className="mt-4 text-sm text-gray-400">
      Fast response • Clear pricing • Remote support available
    </p>
  </div>
</section>
        <Footer/>
    </main>
  );
}
