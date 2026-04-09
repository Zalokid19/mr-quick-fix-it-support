import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Support Cape Town | Remote Help for Laptops, WiFi & Software Issues",
  description:
    "Looking for IT support in Cape Town? Get fast help with slow laptops, WiFi problems, virus removal, software errors, and everyday computer support for home users and small businesses.",
  alternates: {
    canonical: "/it-support-cape-town",
  },
  openGraph: {
    title: "IT Support Cape Town | Remote Help for Laptops, WiFi & Software Issues",
    description:
      "Get fast remote IT support in Cape Town for laptops, WiFi issues, virus removal, software problems, and everyday computer troubleshooting.",
    url: "https://mr-quick-fix-it-support.vercel.app/it-support-cape-town",
    siteName: "Mr Quick Fix IT Support",
    locale: "en_ZA",
    type: "website",
  },
};

export default function ITSupportCapeTown() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Local IT Support
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            IT support in Cape Town for laptops, WiFi, viruses, and software problems
          </h1>

          <p className="mt-6 text-gray-300 md:text-lg">
            If you are dealing with a slow laptop, unstable WiFi, software problems,
            or suspicious computer behaviour, getting reliable IT support in Cape Town
            can save you time, stress, and unnecessary frustration.
          </p>

          <p className="mt-4 text-gray-400">
            Mr Quick Fix provides remote IT support for home users and small
            businesses in Cape Town. Many problems can be diagnosed and fixed
            without you needing to leave your home.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20IT%20support%20in%20Cape%20Town."
              className="btn btn-primary w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Help on WhatsApp
            </a>

            <Link href="/contact" className="btn btn-secondary w-full sm:w-auto">
              Request Support
            </Link>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Fast response • Clear pricing • Remote support available
          </p>
        </div>
      </section>

      <section className="px-6 pb-12 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <Link
            href="/services/performance-repair"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-400/40"
          >
            <h2 className="text-2xl font-bold">Performance Repair</h2>
            <p className="mt-4 text-gray-400">
              Help for slow laptops, startup issues, freezing, crashes, and general performance problems.
            </p>
          </Link>

          <Link
            href="/services/internet-wifi-help"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-400/40"
          >
            <h2 className="text-2xl font-bold">Internet & WiFi Help</h2>
            <p className="mt-4 text-gray-400">
              Support for slow internet, unstable WiFi, router setup, and connection issues.
            </p>
          </Link>

          <Link
            href="/services/virus-removal"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-400/40"
          >
            <h2 className="text-2xl font-bold">Virus Removal</h2>
            <p className="mt-4 text-gray-400">
              Help with malware, suspicious pop-ups, security problems, and infected computers.
            </p>
          </Link>
        </div>
      </section>

      <section className="px-6 pb-12 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-3xl font-bold">What we help with</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-gray-400">
              ✔ Slow laptops and performance issues
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-gray-400">
              ✔ Virus and malware removal
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-gray-400">
              ✔ Internet and WiFi problems
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-gray-400">
              ✔ Software errors and setup issues
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              IT support questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Do you only help people in Cape Town?
              </h3>
              <p className="mt-3 text-gray-400">
                Cape Town is the main local focus, but remote support also makes
                it possible to help clients across South Africa in many cases.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                What kind of issues do you fix?
              </h3>
              <p className="mt-3 text-gray-400">
                Common problems include slow laptops, WiFi issues, virus removal,
                software errors, setup problems, and everyday troubleshooting.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Can support be done remotely?
              </h3>
              <p className="mt-3 text-gray-400">
                Yes. Many computer and software problems can be diagnosed and
                fixed remotely, which makes support faster and more convenient.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                What is the fastest way to get started?
              </h3>
              <p className="mt-3 text-gray-400">
                WhatsApp is usually the fastest option. Send a short message about
                your issue and we’ll guide you on the next best step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-12">
          <h2 className="text-3xl font-bold">
            Need IT support in Cape Town right now?
          </h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Reach out for help with laptop problems, WiFi issues, software errors,
            virus removal, and general computer support. WhatsApp is usually the
            fastest way to get started.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20IT%20support%20in%20Cape%20Town."
              className="btn btn-primary w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start on WhatsApp
            </a>

            <Link href="/services" className="btn btn-secondary w-full sm:w-auto">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}