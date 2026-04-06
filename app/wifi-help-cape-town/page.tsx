import Link from "next/link";

export const metadata = {
  title: "WiFi Help Cape Town",
  description:
    "Looking for WiFi help in Cape Town? Get support for slow internet, unstable WiFi, router setup, dropped connections, and everyday internet problems.",
};

export default function WifiHelpCapeTownPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            WiFi Help Cape Town
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            WiFi help in Cape Town for slow, unstable, or frustrating connections
          </h1>

          <p className="mt-6 text-gray-300 md:text-lg">
            If your WiFi keeps disconnecting, your internet is slow, or devices are
            struggling to connect properly, fast support can save you a lot of frustration.
          </p>

          <p className="mt-4 text-gray-400">
            Mr Quick Fix helps with everyday WiFi and internet problems including
            router setup, dropped connections, unstable signal, and general connectivity issues.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
              Request WiFi Help
            </Link>

            <a
              href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with%20my%20WiFi%20in%20Cape%20Town"
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
            <h2 className="text-2xl font-bold">Common WiFi problems</h2>
            <ul className="mt-5 space-y-3 text-gray-400">
              <li>✔ WiFi keeps disconnecting</li>
              <li>✔ Slow internet speeds</li>
              <li>✔ Devices not connecting</li>
              <li>✔ Router setup issues</li>
              <li>✔ Weak or unstable signal</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">Support that saves time</h2>
            <p className="mt-5 text-gray-400">
              Everyday internet issues can affect work, calls, streaming, and
              productivity. Quick troubleshooting helps reduce downtime and stress.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-12">
          <h2 className="text-3xl font-bold">Need WiFi help in Cape Town?</h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Reach out now for support with router setup, unstable WiFi,
            slow internet, and everyday connectivity problems.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
              Request Support
            </Link>

            <Link href="/services/internet-wifi-help" className="btn btn-secondary w-full sm:w-auto">
              View WiFi Help Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}