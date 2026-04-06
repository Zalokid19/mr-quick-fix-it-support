import Link from "next/link";

export const metadata = {
  title: "Performance Repair Cape Town",
  description:
    "Need performance repair in Cape Town? Get help with slow laptops, freezing, startup issues, crashes, software problems, and remote troubleshooting.",
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
            Performance repair in Cape Town for slow, freezing, or problematic devices
          </h1>

          <p className="mt-6 text-gray-300 md:text-lg">
            If your laptop is slow, freezing, crashing, or taking too long to start,
            getting reliable performance repair in Cape Town can save you time and frustration.
          </p>

          <p className="mt-4 text-gray-400">
            Mr Quick Fix helps with common laptop issues including performance problems,
            software errors, startup issues, suspicious behavior, and general troubleshooting.
            Many problems can be assessed and solved through remote support.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
              Request Laptop Help
            </Link>

            <a
              href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with%20my%20laptop%20in%20Cape%20Town"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full sm:w-auto"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Common laptop problems</h2>
            <ul className="mt-5 space-y-3 text-gray-400">
              <li>✔ Laptop running very slowly</li>
              <li>✔ Freezing or crashing</li>
              <li>✔ Startup and boot issues</li>
              <li>✔ Software installation problems</li>
              <li>✔ Suspicious pop-ups or strange behavior</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Why choose remote support</h2>
            <p className="mt-5 text-gray-400">
              Many laptop issues do not need an in-person visit. Remote support can
              help diagnose the problem faster and often gets you to a solution sooner.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-12">
          <h2 className="text-3xl font-bold">Need laptop repair in Cape Town?</h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Reach out now for help with laptop performance issues, crashes,
            startup problems, and general troubleshooting.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
              Request Support
            </Link>

            <Link href="/services/pc-laptop-repair" className="btn btn-secondary w-full sm:w-auto">
              View Laptop Repair Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}