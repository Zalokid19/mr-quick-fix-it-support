import Link from "next/link";

export const metadata = {
  title: "Internet & WiFi Help | Mr Quick Fix",
  description:
    "Get help with slow internet, unstable WiFi, router problems, connection dropouts, and everyday connectivity issues for home or small business use.",
};

export default function InternetWifiHelpPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 pb-10 md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Internet & WiFi Help
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Help for slow internet, unstable WiFi, and router problems
          </h1>
          <p className="mt-5 max-w-3xl text-gray-400 md:text-lg">
            Get support for everyday internet and WiFi issues including slow speeds,
            dropped connections, setup problems, and basic router troubleshooting.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
              Request Support
            </Link>
            <a
              href="https://wa.me/27676259810?text=Hi%20I%20need%20help%20with%20my%20internet%20or%20WiFi"
              className="btn btn-secondary w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Problems this page covers</h2>
            <ul className="mt-5 space-y-3 text-gray-400">
              <li>✔ Slow internet at home or office</li>
              <li>✔ WiFi keeps disconnecting</li>
              <li>✔ Router setup and basic configuration</li>
              <li>✔ Devices not connecting properly</li>
              <li>✔ General internet troubleshooting</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Who this is for</h2>
            <p className="mt-5 text-gray-400">
              This service is ideal for home users, remote workers, students,
              and small businesses dealing with frustrating everyday connection problems.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Check The Issue</h3>
            <p className="mt-3 text-gray-400">
              We first narrow down whether the issue is with WiFi, router settings, device connection, or general internet stability.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Guide The Fix</h3>
            <p className="mt-3 text-gray-400">
              You get practical support for the next best step, including setup help and troubleshooting guidance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Improve Reliability</h3>
            <p className="mt-3 text-gray-400">
              The goal is to get your connection more stable and reduce repeated internet frustration.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-12">
          <h2 className="text-3xl font-bold">Need help with internet or WiFi problems?</h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Reach out now for help with connection issues, router setup,
            unstable WiFi, and general internet troubleshooting.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
              Request Quick Fix
            </Link>
            <Link href="/services" className="btn btn-secondary w-full sm:w-auto">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}