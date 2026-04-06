export const metadata = {
  title: "Refund Policy",
  description: "Review the refund policy for services offered by Mr Quick Fix.",
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Refund Policy
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Refund Policy
          </h1>
          <p className="mt-4 text-gray-400">
            This policy outlines how refunds are handled for support services.
          </p>

          <div className="mt-10 space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white">General Policy</h2>
              <p className="mt-3">
                Refunds are considered on a case-by-case basis depending on the nature
                of the service and the work already completed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Completed Work</h2>
              <p className="mt-3">
                If support work has already been delivered, a full refund may not be available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Partial Refunds</h2>
              <p className="mt-3">
                In some situations, a partial refund may be considered where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Incorrect Information</h2>
              <p className="mt-3">
                If the original issue description was incomplete or inaccurate, this may affect
                refund eligibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Contact About Refunds</h2>
              <p className="mt-3">
                Refund-related questions should be submitted through the contact page with
                enough detail to review the request fairly.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}