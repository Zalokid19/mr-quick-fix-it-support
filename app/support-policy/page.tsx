export const metadata = {
  title: "Support Policy",
  description: "Understand how support requests, response times, and service expectations work.",
};

export default function SupportPolicyPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Support Policy
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Support Policy
          </h1>
          <p className="mt-4 text-gray-400">
            This policy explains how support requests are handled by Mr Quick Fix.
          </p>

          <div className="mt-10 space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white">Request Submission</h2>
              <p className="mt-3">
                Support requests can be submitted through the contact form or WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Response Times</h2>
              <p className="mt-3">
                Response times vary depending on availability and workload, but the aim
                is always to respond as quickly as possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Remote Support</h2>
              <p className="mt-3">
                Many issues can be handled remotely. Some issues may require further
                assessment before a support path is confirmed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Client Cooperation</h2>
              <p className="mt-3">
                Support may require the client to follow instructions, provide screenshots,
                confirm device details, or allow remote troubleshooting where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Service Limits</h2>
              <p className="mt-3">
                Support is provided based on the issue described and the services offered
                on the website. Highly specialized issues may fall outside normal service scope.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}