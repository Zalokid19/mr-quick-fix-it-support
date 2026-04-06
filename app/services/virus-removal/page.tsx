import Link from "next/link";

export const metadata = {
  title: "Virus Removal | Mr Quick Fix",
  description:
    "Fast virus and malware removal support for infected computers, pop-ups, suspicious software, security issues, and slow system problems.",
};

export default function VirusRemovalPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 pb-10 md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Virus Removal
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Remove viruses, malware, and suspicious software fast
          </h1>
          <p className="mt-5 max-w-3xl text-gray-400 md:text-lg">
            Get help with infected computers, annoying pop-ups, suspicious apps,
            browser hijacking, security warnings, and devices that suddenly became slow or unstable.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
              Request Support
            </Link>
            <a
              href="https://wa.me/27676259810?text=Hi%20I%20need%20help%20with%20virus%20removal"
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
            <h2 className="text-2xl font-bold">Common warning signs</h2>
            <ul className="mt-5 space-y-3 text-gray-400">
              <li>✔ Constant pop-ups and strange ads</li>
              <li>✔ Browser redirects or homepage changes</li>
              <li>✔ Unknown apps or suspicious programs</li>
              <li>✔ Suddenly slow system performance</li>
              <li>✔ Security alerts or unusual account activity</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Why quick action matters</h2>
            <p className="mt-5 text-gray-400">
              Malware can slow down your computer, damage files, expose private data,
              and create bigger issues if ignored. Acting quickly gives you a better
              chance of cleaning the system before the problem gets worse.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Assessment</h3>
            <p className="mt-3 text-gray-400">
              The issue is reviewed first to understand the symptoms and likely cause.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Cleanup</h3>
            <p className="mt-3 text-gray-400">
              Suspicious software, malicious activity, and unsafe settings are identified and addressed.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Protection</h3>
            <p className="mt-3 text-gray-400">
              Basic steps are taken to help reduce the chance of the same issue happening again.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-12">
          <h2 className="text-3xl font-bold">Think your computer has a virus?</h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Reach out now for help with malware cleanup, suspicious pop-ups,
            security issues, and slow infected computers.
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