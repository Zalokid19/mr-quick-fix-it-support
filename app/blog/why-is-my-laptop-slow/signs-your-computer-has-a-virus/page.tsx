import Link from "next/link";

export const metadata = {
  title: "Signs Your Computer Has A Virus",
  description:
    "Learn the warning signs of a computer virus or malware infection, including pop-ups, slow performance, strange behavior, and suspicious programs.",
};

export default function SignsYourComputerHasAVirusPage() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Help Guide
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Signs your computer has a virus
          </h1>

          <p className="mt-6 text-gray-300 md:text-lg">
            Virus and malware infections can cause frustrating, risky, and confusing problems.
            Sometimes the warning signs are obvious, and sometimes they build slowly over time.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold">Common warning signs</h2>
              <ul className="mt-4 space-y-3 text-gray-400">
                <li>✔ Constant pop-ups and strange ads</li>
                <li>✔ Browser redirects</li>
                <li>✔ Unusual slowdowns</li>
                <li>✔ Unknown programs appearing</li>
                <li>✔ Security alerts or suspicious activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold">Why it matters</h2>
              <p className="mt-4 text-gray-400">
                Malware can affect performance, damage files, interrupt normal use, and
                create bigger security issues if it is not handled properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">When to act quickly</h2>
              <p className="mt-4 text-gray-400">
                If you are seeing repeated pop-ups, strange programs, unusual behavior,
                or a big drop in performance, it is a good idea to get the system checked.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8">
            <h2 className="text-2xl font-bold">Think your computer has a virus?</h2>
            <p className="mt-4 text-gray-300">
              Get support for malware cleanup, suspicious behavior, pop-ups, and security issues.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
                Request Support
              </Link>

              <Link href="/services/virus-removal" className="btn btn-secondary w-full sm:w-auto">
                Virus Removal Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}