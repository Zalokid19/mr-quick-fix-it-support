import Link from "next/link";

const PAYPAL_FIRST_TIME = "https://www.paypal.com/ncp/payment/EUS7CQJ632A6C";
const PAYPAL_STANDARD = "https://www.paypal.com/ncp/payment/XHQUY3GHUV82E";
const PAYPAL_PREMIUM = "https://www.paypal.com/ncp/payment/EU94NPURNUENN";

export const metadata = {
  title: "Payment",
  description:
    "Pay securely for IT support using PayPal or EFT. Fast, simple payment options for Mr Quick Fix support services.",
};

export default function PaymentPage() {
  return (
    <main className="bg-[#050816] text-white pt-28 px-6 md:px-10">

      {/* HEADER */}
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold">Secure Payment Options</h1>
        <p className="text-center text-sm text-gray-400">
          Secure payment options available. Once payment is confirmed, support begins immediately.
          WhatsApp will be used for fastest communication.
        </p>
      </section>

        <p className="mt-4 text-sm text-gray-400 text-center">
         Choose your support option and pay securely online.
        </p>
      {/* PAYMENT GRID */}
      <section className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">

        {/* PAYPAL */}
        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-white/5 p-8 shadow-[0_20px_60px_rgba(37,99,235,0.2)]">          <h3 className="text-xl font-bold">PayPal</h3>
          <p className="mt-2 text-sm text-gray-400">
            Secure online payments using PayPal.
          </p>

          <div className="mt-6 space-y-3">
          <a
            href={PAYPAL_FIRST_TIME}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full text-base font-bold"
          >
            First-Time Fix (R150)
          </a>

          <a
            href={PAYPAL_STANDARD}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full text-base font-bold"
          >
            Standard Fix (R500)
          </a>

          <a
            href={PAYPAL_PREMIUM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full text-base font-bold"
          >
            Premium Fix (R1000)
          </a>
          </div>
        </div>

        {/* EFT / CAPITEC */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <h3 className="text-lg font-semibold">EFT (Bank Transfer)</h3>
          <p className="mt-3 text-gray-400">
            Prefer manual payment? Use bank transfer below and send proof on WhatsApp.
          </p>

        <div className="mt-4 text-sm text-gray-300 text-left">
          <p><strong>Bank:</strong> Capitec</p>
          <p><strong>Account Name:</strong> MR ZA ISAACS</p>
          <p><strong>Account Number:</strong> 2006732117</p>
          <p><strong>Reference:</strong> Your Name + Issue</p>
        </div>
        </div>

        {/* QR CODE */}

        <div className="mx-auto rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
            Optional Payment Method
          </p>
          <h3 className="text-xl font-bold mb-4 text-center">
            Quick Scan Payment
          </h3>

         <div className="grid grid-cols-3 gap-4 justify-items-center">

            <div>
              <p className="text-xs mb-2">R150</p>
              <img src="/images/qr-first-time.png" className="rounded-lg" />
            </div>

            <div className="scale-110">
              <p className="text-xs mb-2 font-bold text-blue-400">R500 ⭐</p>
              <img src="/images/qr-standard.png" className="rounded-lg border border-blue-400/40" />
            </div>

            <div>
              <p className="text-xs mb-2">R1000</p>
              <img src="/images/qr-premium.png" className="rounded-lg" />
            </div>

          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Open your banking app → scan → confirm payment
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Works with Capitec, SnapScan, optional payment method for supported banking apps
          </p>
        </div>

      </section>

      {/* FOOT NOTE */}
      <section className="mx-auto mt-12 max-w-4xl text-center">
        <p className="text-sm text-gray-400">
          Please use your name as the payment reference so your support request can be matched quickly.
        </p>

        <div className="mt-6">
          <Link href="/contact" className="btn btn-secondary">
            Back to Contact
          </Link>
        </div>
      </section>

    </main>
  );
}

   