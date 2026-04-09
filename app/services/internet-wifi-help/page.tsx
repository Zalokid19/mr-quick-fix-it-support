import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internet & WiFi Help Cape Town | Fix Slow Internet & WiFi Issues",
  description:
    "Need internet and WiFi help in Cape Town? Get support for slow internet, unstable WiFi, router problems, connection dropouts, and everyday troubleshooting for home users and small businesses.",
  alternates: {
    canonical: "/services/internet-wifi-help",
  },
  openGraph: {
    title: "Internet & WiFi Help Cape Town | Fix Slow Internet & WiFi Issues",
    description:
      "Get help with slow internet, unstable WiFi, router problems, and connection dropouts in Cape Town with fast remote IT support.",
    url: "https://mr-quick-fix-it-support.vercel.app/services/internet-wifi-help",
    siteName: "Mr Quick Fix IT Support",
    locale: "en_ZA",
    type: "website",
  },
};

export default function InternetWifiHelpPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 pb-10 md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Internet & WiFi Help Cape Town
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Internet and WiFi help in Cape Town for slow speeds, disconnecting, and router problems
          </h1>

          <p className="mt-5 max-w-3xl text-gray-300 md:text-lg">
            Get support for slow internet, unstable WiFi, dropped connections,
            router setup issues, and general connectivity problems for home users,
            remote workers, students, and small businesses.
          </p>

          <p className="mt-4 max-w-3xl text-gray-400">
            Mr Quick Fix helps clients in Cape Town with practical internet and
            WiFi troubleshooting. Many issues can be diagnosed remotely so you can
            get help faster without unnecessary hassle.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with%20my%20internet%20or%20WiFi%20in%20Cape%20Town."
              className="btn btn-primary w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get WiFi Help on WhatsApp
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

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Common internet and WiFi problems</h2>
            <ul className="mt-5 space-y-3 text-gray-400">
              <li>✔ Slow internet at home or office</li>
              <li>✔ WiFi keeps disconnecting</li>
              <li>✔ Router setup and basic configuration issues</li>
              <li>✔ Devices not connecting properly</li>
              <li>✔ General internet troubleshooting and stability problems</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Who this service is for</h2>
            <p className="mt-5 text-gray-400">
              This service is ideal for home users, remote workers, students,
              and small businesses dealing with frustrating everyday connection
              problems that interrupt work, studying, calls, and browsing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-3xl font-bold">How internet and WiFi troubleshooting works</h2>
          <p className="mt-4 text-gray-400">
            The first step is figuring out whether the issue is caused by WiFi
            signal problems, router settings, device connection issues, or general
            internet instability. From there, the fastest next step becomes much clearer.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-xl font-bold">Check the issue</h3>
              <p className="mt-3 text-gray-400">
                We narrow down whether the problem is with WiFi, router setup,
                device connection, or general internet reliability.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-xl font-bold">Guide the fix</h3>
              <p className="mt-3 text-gray-400">
                You get practical support for the best next step, including
                troubleshooting guidance and basic setup help.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-xl font-bold">Improve reliability</h3>
              <p className="mt-3 text-gray-400">
                The goal is to make your connection more stable and reduce repeated
                internet frustration going forward.
              </p>
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
              Internet and WiFi help questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Can WiFi problems be fixed remotely?
              </h3>
              <p className="mt-3 text-gray-400">
                Many WiFi and internet issues can be diagnosed remotely, especially
                when the problem involves device settings, router basics, or connection troubleshooting.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Why is my internet slow even when connected?
              </h3>
              <p className="mt-3 text-gray-400">
                Slow internet can be caused by weak WiFi signal, router problems,
                too many connected devices, service instability, or device-specific issues.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Do you help only in Cape Town?
              </h3>
              <p className="mt-3 text-gray-400">
                Cape Town is the main local focus, but remote support makes it possible
                to help clients across South Africa in many situations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                What is the fastest way to get started?
              </h3>
              <p className="mt-3 text-gray-400">
                WhatsApp is usually the fastest option. Send a short message about
                your internet or WiFi issue and we’ll guide you on the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-12">
          <h2 className="text-3xl font-bold">
            Need help with internet or WiFi problems in Cape Town?
          </h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Reach out now for help with slow internet, unstable WiFi, router setup,
            dropped connections, and everyday troubleshooting. WhatsApp is usually
            the fastest way to get support.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with%20my%20internet%20or%20WiFi%20in%20Cape%20Town."
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