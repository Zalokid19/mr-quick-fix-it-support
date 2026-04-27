import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performance Repair Cape Town | Fix Slow Laptops & PC Issues",
  description:
    "Need performance repair in Cape Town? Get help with slow laptops, freezing, startup issues, crashes, software errors, and remote troubleshooting for home users and small businesses.",
  alternates: {
    canonical: "/services/performance-repair",
  },
  openGraph: {
    title: "Performance Repair Cape Town | Fix Slow Laptops & PC Issues",
    description:
      "Get help with slow laptops, freezing, startup problems, crashes, and software issues in Cape Town with fast remote IT support.",
    url: "https://mr-quick-fix-it-support.vercel.app/services/performance-repair",
    siteName: "Mr Quick Fix IT Support",
    locale: "en_ZA",
    type: "website",
  },
};

export default function PerformanceRepairCapeTownPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Performance Repair Cape Town
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Performance repair in Cape Town for slow laptops, freezing, and startup issues
          </h1>

          <p className="mt-6 text-gray-300 md:text-lg">
            If your laptop or PC is running slowly, freezing, crashing, or taking too
            long to start, professional performance repair can help restore speed and
            make everyday use less frustrating.
          </p>

          <p className="mt-4 text-gray-400">
            Mr Quick Fix helps clients in Cape Town with laptop performance problems,
            software errors, startup issues, suspicious behaviour, and general computer
            troubleshooting. Many issues can be diagnosed and resolved through remote support.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with%20a%20slow%20laptop%20or%20PC%20in%20Cape%20Town."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              Get Performance Help on WhatsApp
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

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Common performance problems</h2>
            <ul className="mt-5 space-y-3 text-gray-400">
              <li>✔ Slow laptop or desktop performance</li>
              <li>✔ Freezing, crashing, or lagging</li>
              <li>✔ Startup and boot problems</li>
              <li>✔ Software errors and background issues</li>
              <li>✔ Suspicious pop-ups or unusual behaviour</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Why remote support works</h2>
            <p className="mt-5 text-gray-400">
              Many speed and software issues do not need an in-person visit. Remote IT
              support often makes it easier to diagnose the problem quickly and start
              working on a solution sooner.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-3xl font-bold">When to get help for a slow laptop or PC</h2>
          <p className="mt-4 text-gray-400">
            A device that becomes slow over time can affect work, studying, browsing,
            updates, and even simple everyday tasks. Getting help earlier can stop the
            issue from becoming more frustrating or harder to manage.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h3 className="font-semibold text-white">Slow startup</h3>
              <p className="mt-2 text-sm text-gray-400">
                Your device takes too long to boot or open programs.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h3 className="font-semibold text-white">Constant freezing</h3>
              <p className="mt-2 text-sm text-gray-400">
                Apps stop responding or your screen keeps hanging.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h3 className="font-semibold text-white">Software issues</h3>
              <p className="mt-2 text-sm text-gray-400">
                Errors, crashes, and background problems keep slowing things down.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Performance repair questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Can a slow laptop be fixed remotely?
              </h3>
              <p className="mt-3 text-gray-400">
                Yes. Many performance issues, software problems, startup delays, and
                system slowdowns can be diagnosed and improved through remote support.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                What causes a laptop to become slow?
              </h3>
              <p className="mt-3 text-gray-400">
                Common causes include too many background programs, software issues,
                startup overload, malware, storage problems, or outdated system settings.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Do you help only in Cape Town?
              </h3>
              <p className="mt-3 text-gray-400">
                Cape Town is the main local focus, but remote support also makes it
                possible to help clients across South Africa in many cases.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                How do I get started?
              </h3>
              <p className="mt-3 text-gray-400">
                The fastest option is usually WhatsApp. Send a short message about the
                device and the issue, and we’ll guide you on the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-12">
          <h2 className="text-3xl font-bold">
            Need help with a slow laptop or PC in Cape Town?
          </h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Get support for performance issues, crashes, startup problems, and general
            troubleshooting. WhatsApp is usually the fastest way to get started.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with%20a%20slow%20laptop%20or%20PC%20in%20Cape%20Town."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
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