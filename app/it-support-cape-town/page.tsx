export const metadata = {
  title: "IT Support Cape Town",
  description:
    "Looking for IT support in Cape Town? Get fast help with laptops, WiFi, viruses and software issues. Remote support available.",
};

export default function ITSupportCapeTown() {
  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold md:text-5xl">
            IT Support in Cape Town
          </h1>

          <p className="mt-6 text-gray-300">
            If you're dealing with a slow laptop, WiFi issues, or software problems,
            getting reliable IT support in Cape Town can save you time and stress.
          </p>

          <p className="mt-4 text-gray-400">
            Mr Quick Fix provides remote IT support for home users and small
            businesses. Most issues can be diagnosed and fixed without you needing
            to leave your home.
          </p>

          <h2 className="mt-10 text-2xl font-bold">
            What we help with
          </h2>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li>✔ Slow laptops and performance issues</li>
            <li>✔ Virus and malware removal</li>
            <li>✔ Internet and WiFi problems</li>
            <li>✔ Software errors and setup</li>
          </ul>

          <a
            href="https://wa.me/27676259810?text=Hi%20I%20need%20IT%20support%20in%20Cape%20Town"
            className="btn btn-primary mt-8 inline-block"
          >
            Get Help Now
          </a>
        </div>
      </section>
    </main>
  );
}