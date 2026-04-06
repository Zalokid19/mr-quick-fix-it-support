"use client";

const BOOKING_URL = "https://calendar.app.google/Us7oUjUJZp3jGh2z5";

export default function MobileStickyCTA() {
  const whatsappHref =
    "https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with:%0A%0ADevice:%20(PC/Laptop)%0AIssue:%20(Describe%20problem)%0AUrgency:%20(Urgent/Normal)";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] border-t border-white/10 bg-[#050816]/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-7xl gap-3">
        <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-2xl bg-green-500 px-4 py-3 text-center font-semibold text-white shadow-lg transition hover:scale-[1.02]"
        >
        WhatsApp Help
        </a>

        <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
        >
        Book Call
        </a>
      </div>
    </div>
  );
}