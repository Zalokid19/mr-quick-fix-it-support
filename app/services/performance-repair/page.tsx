import Link from "next/link";

export const metadata = {
  title: "Performance Repair | Mr Quick Fix",
  description:
    "Fast PC and Performancesupport for slow computers, crashes, startup issues, software problems, and general troubleshooting.",
};

export default function PerformanceRepairPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 pb-10 md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Performance Repair
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Fast help for slow, freezing, or broken computers
          </h1>
          <p className="mt-5 max-w-3xl text-gray-400 md:text-lg">
            Get support for performance issues, startup problems, crashes,
            software errors, and everyday computer problems that waste your time.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
              Request Support
            </Link>
            <a
              href="https://wa.me/27676259810?text=Hi%20I%20need%20help%20with%20my%20PC%20or%20laptop"
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
            <h2 className="text-2xl font-bold">Common problems we help with</h2>
            <ul className="mt-5 space-y-3 text-gray-400">
              <li>✔ Slow laptop or desktop performance</li>
              <li>✔ Freezing and crashing</li>
              <li>✔ Startup and boot issues</li>
              <li>✔ Software installation problems</li>
              <li>✔ General troubleshooting and cleanup</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Why this service matters</h2>
            <p className="mt-5 text-gray-400">
              A slow or unstable computer wastes time, affects work, and becomes
              frustrating quickly. Fast support helps get things running properly
              again before the issue grows bigger.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-12">
          <h2 className="text-3xl font-bold">Need help with your PC or laptop?</h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Send your issue now and get help with troubleshooting, cleanup,
            performance fixes, and general support.
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