import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How To Fix WiFi Problems At Home | Common Causes and Next Steps",
  description:
    "Learn common causes of home WiFi problems and when to get help for unstable internet, dropped connections, router issues, weak signal, and slow WiFi.",
  alternates: {
    canonical: "/blog/how-to-fix-wifi-problems-at-home",
  },
  openGraph: {
    title: "How To Fix WiFi Problems At Home | Common Causes and Next Steps",
    description:
      "Learn common causes of home WiFi problems and when to get help for unstable internet, dropped connections, router issues, and slow WiFi.",
    url: "https://mr-quick-fix-it-support.vercel.app/blog/how-to-fix-wifi-problems-at-home",
    siteName: "Mr Quick Fix IT Support",
    locale: "en_ZA",
    type: "article",
  },
};

export default function HowToFixWifiProblemsAtHomePage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Help Guide
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            How to fix WiFi problems at home
          </h1>

          <p className="mt-6 text-gray-300 md:text-lg">
            Home WiFi problems can interrupt work, calls, streaming, gaming, and
            everyday browsing. Slow or unstable internet is one of the most frustrating
            tech issues people deal with at home.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold">Common home WiFi problems</h2>
              <ul className="mt-4 space-y-3 text-gray-400">
                <li>✔ WiFi keeps disconnecting</li>
                <li>✔ Slow internet speeds</li>
                <li>✔ Weak signal in certain rooms</li>
                <li>✔ Devices not connecting properly</li>
                <li>✔ Router setup or restart issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold">Simple checks that often help</h2>
              <p className="mt-4 text-gray-400">
                Restarting the router, checking device WiFi settings, and confirming
                whether the issue affects one device or multiple devices can help
                narrow down the cause.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">When the issue may need support</h2>
              <p className="mt-4 text-gray-400">
                If the connection keeps dropping, speeds stay poor, or setup problems
                keep coming back, it may be time for proper troubleshooting and guided support.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8">
            <h2 className="text-2xl font-bold">Need help with WiFi problems?</h2>
            <p className="mt-4 text-gray-300">
              Get support for unstable WiFi, slow internet, router setup, and home connectivity issues.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
                Request Support
              </Link>

              <Link
                href="/services/internet-wifi-help"
                className="btn btn-secondary w-full sm:w-auto"
              >
                Internet & WiFi Help
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}