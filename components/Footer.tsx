"use client";

import Link from "next/link";

const SUPPORT_EMAIL = "ITsolutions.011404@gmail.com";
const BOOKING_URL = "https://calendar.app.google/Us7oUjUJZp3jGh2z5"; // replace with your real booking link

export default function Footer() {
  return (

<footer className="bg-[#030712] border-t border-white/10 mt-16">
  <div className="max-w-5xl mx-auto px-6 py-12">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      
      {/* Services */}
      <div>
        <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li>Performance Repair</li>
          <li>Virus Removal</li>
          <li>Internet & WiFi Help</li>
          <li>Remote IT Support</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li><a href="/services" className="hover:text-blue-400 transition">All Services</a></li>
          <li><a href="/contact" className="hover:text-blue-400 transition">Request Support</a></li>
          <li><a href="/payment" className="hover:text-blue-400 transition">Make Payment</a></li>
          <li><a href="/contact" className="hover:text-blue-400 transition">Book a Meeting</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li>
            <a 
          href="https://www.google.com/maps?q=Cape+Town" 
          target="_blank" 
          className="hover:text-blue-400 transition"
        >
          Cape Town, South Africa
        </a>
          </li>
          <li>
            <a href="tel:+27676259810" className="hover:text-blue-400 transition">
              +27 67 625 9810
            </a>
          </li>
          
          <li>
            <a href="mailto:itsolutions.011404@gmail.com" className="hover:text-blue-400 transition">
              Support@mrquickfix.co.za
            </a>
          </li>
        </ul>
      </div>
    </div>

  {/* DIVIDER */}
  <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-gray-500 space-y-1">
    <p>© 2026 Mr Quick Fix IT Support</p>
    <p>All rights reserved</p>

    <p className="text-gray-600">
      Built for fast, reliable remote IT support services Worldwide.
    </p>
  </div>
</div>

</footer>
  );
}
