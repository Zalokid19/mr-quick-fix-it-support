"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const services = [
  {
    title: "Performance Repair",
    desc: "Fix slow performance, crashes, startup problems, overheating, software errors, and general laptop or desktop issues.",
    img: "/images/performance repair.webp",
    href: "/services/performance-repair",
  },
  {
    title: "Virus Removal",
    desc: "Remove malware, pop-ups, suspicious programs, and security threats while helping secure your device properly.",
    img: "/images/security.jpg",
    href: "/services/virus-removal",
  },
  {
    title: "Internet & WiFi Help",
    desc: "Help with slow internet, unstable WiFi, router setup, disconnections, and everyday connectivity problems.",
    img: "/images/internet.webp",
    href: "/services/internet-wifi-help",
  },
  {
    title: "Remote IT Support",
    desc: "Get fast help without leaving your home. Many software, setup, email, printing, and troubleshooting issues can be solved remotely.",
    img: "/images/hero.jpg",
    href: "/contact",
  },
];

export default function ServicesPageClient() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 pb-12 md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Professional IT help without the stress
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-400 md:text-lg">
            From slow laptops and virus removal to WiFi support and remote troubleshooting,
            get fast help designed to get you back up and running.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {service.desc}
                </p>

                <Link href={service.href} className="btn btn-primary mt-6 w-full">
                  Get Help Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

             {/* PRICING */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Simple Pricing
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Clear pricing with a low-risk first step
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Start with a first-time offer for smaller issues, then choose a bigger support
            option only if you actually need it.
        </p>
        </div>

            <div className="grid gap-8 md:grid-cols-3 md:items-stretch">
          <div className="card p-8">
            <h3 className="text-2xl font-bold">First-Time Fix</h3>
            <p className="mt-4">
              <span className="price">R150</span>
              <span className="old-price">R300</span>
            </p>
           <p className="mt-4 text-gray-400">
            Best for first-time clients who want quick help without committing to a bigger session.
            </p>
            <Link href="/payment" className="btn btn-primary mt-6 w-full">
              Claim Offer
            </Link>

          </div>

           <div className="card relative border border-blue-400/50 bg-gradient-to-b from-blue-500/10 to-white/5 p-6 shadow-[0_20px_60px_rgba(37,99,235,0.18)]">
            <div className="rounded-full border border-blue-300/30 bg-gradient-to-r from-blue-500  px-3 py-1 text-xs font-semibold text-white absolute -top-3 left-1/2 transform -translate-x-1/2">
              ★ Most Popular
            </div>

              <h3 className="mt-5 text-2xl font-bold text-white">Standard Fix</h3>           
            <p className="mt-4">
              <span className="price">R500</span>
            </p>
            <p className="mt-6 text-gray-400">
              Best for most software, troubleshooting, performance, and everyday IT support issues.
            </p>
            <Link href="/payment?plan=standard" className="btn btn-primary mt-6 w-full text-base font-bold">
              Get Started
            </Link>
          </div>

        <div className="card border border-blue-500/40 p-8">
            <h3 className="text-2xl font-bold">Premium Fix</h3>
            <p className="mt-4">
              <span className="price">R1000</span>
            </p>
            <p className="mt-4 text-gray-400">
              Ideal for deeper problems like installs, major cleanups, and advanced fixes.
            </p>
              <Link href="/payment" className="btn btn-primary mt-6 w-full">
                Book Premium Help
              </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
  <div className="mx-auto max-w-7xl px-6 md:px-10">
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
        Why Act Now
      </p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Small tech problems usually get worse when ignored
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-bold">Slow Devices Waste Time</h3>
        <p className="mt-3 text-gray-400">
          A slow laptop or PC can ruin work, study time, and everyday tasks.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-bold">Security Issues Can Grow</h3>
        <p className="mt-3 text-gray-400">
          Virus and malware problems can become more serious if they are left too long.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-bold">Internet Problems Disrupt Everything</h3>
        <p className="mt-3 text-gray-400">
          WiFi and connection issues can affect work calls, streaming, browsing, and deadlines.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* SERVICE AREAS + HELP */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Service Areas
              </p>
              <h3 className="mt-3 text-2xl font-bold">Where support is available</h3>
              <p className="mt-3 text-gray-400">
                Based in Cape Town, helping local clients across South Africa and
                remote clients internationally.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Cape Town
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  South Africa
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Remote Worldwide
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Home & Small Business
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Help & Contact
              </p>
              <h3 className="mt-3 text-2xl font-bold">Get support quickly</h3>
              <p className="mt-3 text-gray-400">
                Reach out through the option that feels easiest for you and get help
                with your issue faster.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-blue-400 hover:text-blue-300"
                >
                  Contact Us
                </Link>

                <a
                  href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with:%0A%0ADevice:%20(PC/Laptop)%0AIssue:%20(Describe%20problem)%0AUrgency:%20(Urgent/Normal)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-blue-400 hover:text-blue-300"
                >
                  WhatsApp Support
                </a>

                <Link
                  href="/services"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-blue-400 hover:text-blue-300"
                >
                  All Services
                </Link>

                <Link
                  href="/"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-blue-400 hover:text-blue-300"
                >
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

    </main>
  );
}