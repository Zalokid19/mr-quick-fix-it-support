"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const BOOKING_URL = "https://calendar.app.google/Us7oUjUJZp3jGh2z5";

export default function ContactPageClient() {
  const [preferredContact, setPreferredContact] = useState("");
  const [device, setDevice] = useState("");
  const [issueType, setIssueType] = useState("");

  const whatsappHref = useMemo(() => {
    const message =
      `Hi Mr Quick Fix, I need help with:\n\n` +
      `Preferred contact: ${preferredContact || "WhatsApp"}\n` +
      `Device: ${device || "(PC/Laptop)"}\n` +
      `Issue type: ${issueType || "(Describe issue type)"}\n` +
      `Urgency: (Urgent/Normal)`;

    return `https://wa.me/27676259810?text=${encodeURIComponent(message)}`;
  }, [preferredContact, device, issueType]);

  const quickAction = useMemo(() => {
    if (preferredContact === "email") {
      return {
        href: "#contact-form",
        label: "Prefer Email? Use The Form Below",
        external: false,
      };
    }

    if (preferredContact === "phone") {
      return {
        href: BOOKING_URL,
        label: "Book A Call",
        external: true,
      };
    }

    return {
      href: whatsappHref,
      label: "Message On WhatsApp",
      external: true,
    };
  }, [preferredContact, whatsappHref]);

  return (
    <main className="bg-[#050816] text-white pt-28">
      <section className="px-6 pb-10 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Get fast IT support in Cape Town without stress
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-gray-400 md:text-lg">
            Tell us what is going wrong with your laptop, PC, internet, WiFi, or
            software issue and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">Quick Action</h2>
            <p className="mt-3 text-gray-400">
              This button changes based on your preferred contact method.
            </p>

            {quickAction.external ? (
              <a
                href={quickAction.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-6 w-full"
              >
                {quickAction.label}
              </a>
            ) : (
              <a href={quickAction.href} className="btn btn-primary mt-6 w-full">
                {quickAction.label}
              </a>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">Email Request</h2>
            <p className="mt-3 text-gray-400">
              Use the form below to send your issue and contact details.
            </p>
            <a href="#contact-form" className="btn btn-secondary mt-6 w-full">
              Fill In The Form
            </a>
          </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">Book a Meeting</h2>
            <p className="mt-3 text-gray-400">
                Need a call or scheduled support session? Book a meeting directly.
            </p>
            <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary mt-6 w-full"
            >
                Book a Meeting
            </a>
            </div>
        </div>
      </section>

            {/* LOCAL SEO INTRO */}
      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Contact IT Support Cape Town
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Get fast IT support in Cape Town and remote help across South Africa
              </h2>
              <p className="mt-4 text-gray-300">
                If you need help with a slow laptop, WiFi issues, virus problems,
                software errors, or general troubleshooting, you can contact Mr Quick Fix
                for fast remote support.
              </p>
              <p className="mt-4 text-gray-400">
                Based in Cape Town and helping clients locally and remotely, this page is the
                quickest place to request support, book a call, or start with WhatsApp.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <h3 className="font-semibold text-white">Cape Town Support</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Local service positioning with remote convenience.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <h3 className="font-semibold text-white">Fast Contact Options</h3>
                <p className="mt-2 text-sm text-gray-400">
                  WhatsApp, booking, and form request options available.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <h3 className="font-semibold text-white">Laptop & WiFi Help</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Common issues can often be handled quickly.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <h3 className="font-semibold text-white">Remote Support</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Help without leaving your home or office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="card p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Request Support
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Tell us what problem you are having
            </h2>
            <p className="mt-4 text-gray-400">
              The more detail you give, the faster we can understand the issue and guide you properly.
            </p>

            <form
              action="https://formspree.io/f/mykglneo"
              method="POST"
              className="mt-8 space-y-5"
            >
              <input type="hidden" name="_subject" value="New support request - Mr Quick Fix" />
             <input
              type="hidden"
              name="_next"
              value="https://mr-quick-fix-it-support.vercel.app/thank-you"
              />

              <div>
                <label className="mb-2 block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="input"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="input"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Phone / WhatsApp Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Optional"
                  className="input"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Preferred Contact Method</label>
                <div className="relative">
                  <select
                    name="preferred_contact"
                    className="input pr-10"
                    value={preferredContact}
                    onChange={(e) => setPreferredContact(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    ▾
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Device Type</label>
                <input
                  type="text"
                  name="device"
                  placeholder="Laptop, desktop PC, router, printer, etc."
                  className="input"
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Issue Type</label>
                <div className="relative">
                  <select
                    name="issue_type"
                    className="input pr-10"
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="Slow PC / Laptop">Slow PC / Laptop</option>
                    <option value="Virus / Malware">Virus / Malware</option>
                    <option value="Internet / WiFi Problem">Internet / WiFi Problem</option>
                    <option value="Software Issue">Software Issue</option>
                    <option value="Remote IT Support">Remote IT Support</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    ▾
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Describe The Problem</label>
                <textarea
                  name="issue"
                  placeholder="Explain what is happening, when it started, and anything you already tried."
                  required
                  rows={6}
                  className="textarea"
                />
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-100">
                Need urgent help? WhatsApp is usually the fastest way to get a response.
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send My Support Request
              </button>

              <p className="text-sm text-gray-400">
                By submitting this form, you are asking to be contacted about your support request.
              </p>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
  <h2 className="text-2xl font-bold">Secure Payment Options</h2>

  <p className="mt-4 text-gray-400">
    After confirming your issue, payment can be made quickly and securely before support begins.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-white/10 p-6">
      <h3 className="text-lg font-semibold">PayPal</h3>
      <p className="mt-2 text-sm text-gray-400">
        Pay securely online using PayPal.
      </p>

      <a
        href="https://www.paypal.com/ncp/payment/EUS7CQJ632A6C"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-4 w-full"
      >
        Pay with PayPal
      </a>
    </div>

    <div className="rounded-2xl border border-white/10 p-6">
      <h3 className="text-lg font-semibold">EFT (Bank Transfer)</h3>
      <p className="mt-2 text-sm text-gray-400">
        Manual payment via Capitec bank transfer.
      </p>

      <div className="mt-4 text-left text-sm text-gray-300">
        <p><strong>Bank:</strong> Capitec</p>
        <p><strong>Account Name:</strong> MR ZA ISAACS</p>
        <p><strong>Account Number:</strong> 2006732117</p>
        <p><strong>Reference:</strong> Your Name + Issue</p>
      </div>
    </div>
  </div>
</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">Why clients contact you</h3>
              <ul className="mt-5 space-y-3 text-gray-400">
                <li>✔ Slow or freezing laptop</li>
                <li>✔ Virus and malware problems</li>
                <li>✔ WiFi and internet issues</li>
                <li>✔ Software errors and troubleshooting</li>
                <li>✔ General remote computer help</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">What happens next</h3>
              <div className="mt-5 space-y-4 text-gray-400">
                <p><span className="font-semibold text-white">1.</span> You send your request.</p>
                <p><span className="font-semibold text-white">2.</span> The issue is reviewed.</p>
                <p><span className="font-semibold text-white">3.</span> You get the best next step fast.</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
                href="/it-support-cape-town"
                className="text-blue-300 hover:text-blue-200 underline underline-offset-4"
            >
                IT Support Cape Town
            </Link>
            <Link
                href="/performance-repair-cape-town"
                className="text-blue-300 hover:text-blue-200 underline underline-offset-4"
            >
                Performance Repair Cape Town
            </Link>
            <Link
                href="/wifi-help-cape-town"
                className="text-blue-300 hover:text-blue-200 underline underline-offset-4"
            >
                WiFi Help Cape Town
            </Link>
            </div>

                  {/* CONTACT PAGE FAQ */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
         <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Contact FAQ
            </p>
            <h3 className="mt-3 text-xl font-bold">
                Common questions before you request support
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <h4 className="text-base font-semibold">How do I get the fastest response?</h4>
                <p className="mt-2 text-sm text-gray-400">
                    WhatsApp is usually the fastest way to get started, especially for urgent issues.
                </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <h4 className="text-base font-semibold">Do you only help people in Cape Town?</h4>
                <p className="mt-2 text-sm text-gray-400">
                    No. While based in Cape Town, remote support can help clients across South Africa and beyond.
                </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <h4 className="text-base font-semibold">What issues can I contact you about?</h4>
                <p className="mt-2 text-sm text-gray-400">
                    You can reach out about slow laptops, WiFi issues, viruses, software problems, and general troubleshooting.
                </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <h4 className="text-base font-semibold">Can I book a scheduled call instead?</h4>
                <p className="mt-2 text-sm text-gray-400">
                    Yes. If you prefer a scheduled time, use the booking option to reserve a meeting.
                </p>
                </div>
             </div>
            </div>
         </div>
        </section>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
            <h3 className="text-2xl font-bold">Need urgent help?</h3>
            <p className="mt-3 text-gray-300">
                For the fastest response, WhatsApp is usually the quickest option.
            </p>
            <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-6 w-full"
            >
                Message On WhatsApp
            </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}