export const metadata = {
  title: "Privacy Policy",
  description: "Learn how Mr Quick Fix handles your information and contact details.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-400">
            This Privacy Policy explains how Mr Quick Fix collects and uses information
            submitted through this website.
          </p>

          <div className="mt-10 space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              <p className="mt-3">
                We may collect information you submit through the contact form,
                including your name, email address, phone number, device details,
                and issue description.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              <p className="mt-3">
                Your information is used to respond to your support request,
                communicate with you, and provide relevant assistance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Data Sharing</h2>
              <p className="mt-3">
                Your information is not sold. It may be shared only when necessary
                to operate the website or respond to your request through trusted
                service providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
              <p className="mt-3">
                Reasonable steps are taken to protect submitted information, but no
                online method of storage or transmission can be guaranteed to be fully secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">Contact</h2>
              <p className="mt-3">
                If you have questions about this policy, please contact Mr Quick Fix
                through the contact page on this website.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}