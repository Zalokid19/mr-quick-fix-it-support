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
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/IT Support.jpg"
          alt="Professional remote IT support"
          priority
        fill
          className="object-cover"
        />

        <section className="border-y border-white/10 bg-blue-500/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-sm text-blue-100 md:px-10">
            Same-day help available for many common laptop, WiFi, and software issues.
        </div>
        </section>

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-16 md:px-10">
          <div className="max-w-3xl">
             <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                  Cape Town IT support • Remote help available
                </p>

                <h1 className="text-4xl font-bold leading-tight md:text-6xl md:leading-[1.1]">
                  Fast Remote IT Support in Cape Town for Laptops, WiFi, and Virus Problems
                </h1>

                  <p className="mt-6 max-w-2xl text-base text-gray-200 md:text-lg">
                    Get professional help for slow computers, laptop problems, WiFi issues, software errors, and virus removal without leaving home. Fast response, clear pricing, and simple remote support.
                  </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with:%0A%0ADevice:%20(PC/Laptop)%0AIssue:%20(Describe%20problem)%0AUrgency:%20(Urgent/Normal)"
                  className="btn btn-primary w-full sm:w-auto text-base font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Fast Help on WhatsApp
                </a>

                <Link href="/contact" className="btn btn-secondary w-full sm:w-auto text-base font-semibold">
                  Request Support
                </Link>
                </div>

                <p className="mt-3 text-xs text-gray-400">
                  No complicated process • Start in under 2 minutes
                </p>

                <p className="mt-4 text-sm text-gray-300">
                  ⚡ Same-day help available for many issues • WhatsApp usually gets the fastest response
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-300">
                <span>✔ Fast response</span>
                <span>✔ First-time discount</span>
                <span>✔ Remote support available</span>
                </div>

                <p className="mt-4 text-sm text-gray-400">
                  Trusted by local clients across Cape Town and remote users across South Africa
                </p>
          </div>
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

   {/* TESTIMONIALS */}
<section className="bg-[#081121] py-20">
  <div className="mx-auto max-w-7xl px-6 md:px-10">
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
        Client Feedback
      </p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Support people can actually rely on
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
        Strong service feels more believable when visitors can see that other
        people trusted you and got help.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {/* CARD 1 */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <p className="text-base leading-7 text-gray-300">
          “Fast response, professional help, and my laptop was running much
          better the same day. Very easy process.”
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 font-bold">
            C
          </div>

          <div>
            <h3 className="font-bold text-white">Local Client</h3>
            <p className="text-sm text-gray-400">Cape Town</p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <p className="text-base leading-7 text-gray-300">
          “I had WiFi issues and needed quick help. Communication was smooth
          and the support felt practical and honest.”
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 font-bold">
            L
          </div>

          <div>
            <h3 className="font-bold text-white">Local Client</h3>
            <p className="text-sm text-gray-400">South Africa</p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <p className="text-base leading-7 text-gray-300">
          “Clean, simple, and quick support. I liked that everything was easy
          to understand and didn’t feel complicated.”
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 font-bold">
            R
          </div>

          <div>
            <h3 className="font-bold text-white">Remote Client</h3>
            <p className="text-sm text-gray-400">South Africa</p>
          </div>
        </div>
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
                Reach out by WhatsApp or contact form without a complicated process.
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
          No. While based in Cape Town, remote support allows us to help clients across South Africa and internationally.
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
          If you are looking for IT support in Cape Town, Mr Quick Fix helps with
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
        href="/blog/how-to-fix-wifi-problems-at-home"
        className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-400/40"
      >
        <h3 className="text-xl font-bold">How to fix WiFi problems at home</h3>
        <p className="mt-3 text-gray-400">
          Understand common WiFi problems and when troubleshooting matters.
        </p>
      </Link>

      <Link
        href="/blog/signs-your-computer-has-a-virus"
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