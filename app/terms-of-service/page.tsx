export const metadata = {
  title: "Terms of Service",
  description: "Read the terms that apply to services provided by Mr Quick Fix.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Terms of Service
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-gray-400">
            These terms apply to the use of this website and any services provided by Mr Quick Fix.
          </p>

          <div className="mt-10 space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white">Service Scope</h2>
              <p className="mt-3">
                Services may include remote support, troubleshooting, virus removal,
                internet and WiFi help, software assistance, and general IT-related guidance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">No Guarantee of Outcome</h2>
              <p className="mt-3">
                While every reasonable effort is made to help resolve issues,
                no guarantee can be made that every problem will be fully resolved.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Client Responsibility</h2>
              <p className="mt-3">
                Clients are responsible for providing accurate information about the issue
                and for maintaining backups of important files before support work begins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Payment</h2>
              <p className="mt-3">
                Pricing may vary based on the type and complexity of the issue.
                Payment terms will be communicated before work proceeds where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
              <p className="mt-3">
                Mr Quick Fix is not liable for data loss, hardware failure, third-party
                software issues, or indirect damages resulting from support services.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}