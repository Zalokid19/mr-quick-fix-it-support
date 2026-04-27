import Link from "next/link";

export const metadata = {
  title: "Thank You",
  description: "Your support request has been sent successfully.",
};

export default function ThankYouPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-xl">
          <div className="mb-6 text-5xl">✅</div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Request Sent
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Thank you, your support request was sent
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400 md:text-lg">
            Your message has been received. You should hear back soon with the next
            step for your issue.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link href="/" className="btn btn-secondary w-full">
              Back To Home
            </Link>

            <a
              href="https://wa.me/27676259810?text=Hi%20I%20just%20submitted%20a%20support%20request"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              Message On WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            For urgent help, WhatsApp is usually the fastest option.
          </p>
        </div>
      </section>
    </main>
  );
}