"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27676259810?text=Hi%20Mr%20Quick%20Fix,%20I%20need%20help%20with:%0A%0ADevice:%20(PC/Laptop)%0AIssue:%20(Describe%20problem)%0AUrgency:%20(Urgent/Normal)"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition hover:scale-105"
    >
      💬 <span className="hidden sm:inline">Chat Now</span>
    </a>
  );
}