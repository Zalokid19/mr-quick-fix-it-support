import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Is My Laptop Slow? Common Causes and When to Get Help",
  description:
    "Learn common reasons why a laptop becomes slow and when to get help for performance issues, freezing, startup delays, and software problems.",
  alternates: {
    canonical: "/blog/why-is-my-laptop-slow",
  },
  openGraph: {
    title: "Why Is My Laptop Slow? Common Causes and When to Get Help",
    description:
      "Learn common reasons laptops become slow and when to get help for performance issues, freezing, startup problems, and general troubleshooting.",
    url: "https://mr-quick-fix-it-support.vercel.app/blog/why-is-my-laptop-slow",
    siteName: "Mr Quick Fix IT Support",
    locale: "en_ZA",
    type: "article",
  },
};

export default function WhyIsMyLaptopSlowPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Help Guide
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Why is my laptop slow?
          </h1>

          <p className="mt-6 text-gray-300 md:text-lg">
            A slow laptop is one of the most common computer problems. It can make
            work, studying, browsing, and everyday tasks frustrating and time-consuming.
          </p>

          <p className="mt-4 text-gray-400">
            In many cases, laptop slowdown happens because of too many background
            programs, low storage space, software issues, malware, or a system that
            needs cleanup and troubleshooting.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold">Common reasons a laptop becomes slow</h2>
              <ul className="mt-4 space-y-3 text-gray-400">
                <li>✔ Too many startup programs</li>
                <li>✔ Low storage space</li>
                <li>✔ Outdated software</li>
                <li>✔ Background apps using too many resources</li>
                <li>✔ Virus or malware problems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold">Signs the issue needs attention</h2>
              <p className="mt-4 text-gray-400">
                If your laptop takes too long to start, freezes often, struggles to open
                apps, or becomes frustrating to use every day, the issue is probably not
                going away on its own.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">When to get help</h2>
              <p className="mt-4 text-gray-400">
                If basic restarts and updates do not improve performance, it may be time
                to get support for deeper troubleshooting, cleanup, or software repair.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8">
            <h2 className="text-2xl font-bold">Need help with a slow laptop?</h2>
            <p className="mt-4 text-gray-300">
              Get support for laptop slowdown, freezing, performance issues, and general troubleshooting.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
                Request Support
              </Link>

              <Link href="/services/performance-repair" className="btn btn-secondary w-full sm:w-auto">
                Performance Repair Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}