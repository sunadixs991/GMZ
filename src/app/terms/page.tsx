import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#f3faff] min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-slate-200 sm:p-14">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Terms of Service</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Terms and conditions for using GMZ Computer Trading
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            These terms govern your use of our website and purchasing from GMZ Computer Trading. Please read them carefully before placing an order.
          </p>
        </div>

        <div className="mt-12 space-y-10 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Acceptance of Terms</h2>
            <p className="mt-4 leading-7">
              By using our site or placing an order, you agree to these terms. If you do not agree, please do not use the website or make a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Orders and Payments</h2>
            <p className="mt-4 leading-7">
              All orders are subject to acceptance and availability. Payment must be completed at checkout using the available payment methods. We reserve the right to cancel orders if payment cannot be confirmed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Pricing and Product Information</h2>
            <p className="mt-4 leading-7">
              We strive to display accurate product information and pricing. However, errors may occur. In the event of a mistake, we may contact you to confirm the order or cancel it and refund your payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Shipping and Delivery</h2>
            <p className="mt-4 leading-7">
              Delivery times are estimates only. We are not responsible for delays caused by third-party carriers, weather, or other circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Returns and Refunds</h2>
            <p className="mt-4 leading-7">
              Returns and refunds are handled according to our return policy. Please contact us if you need assistance with a damaged or incorrect product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">User Conduct</h2>
            <p className="mt-4 leading-7">
              You agree to use the website lawfully and not engage in abusive or fraudulent behavior. We may suspend or terminate access if we suspect misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Intellectual Property</h2>
            <p className="mt-4 leading-7">
              All content on the website, including text, images, and branding, is owned by GMZ Computer Trading or licensed to us. You may not use our content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Limitation of Liability</h2>
            <p className="mt-4 leading-7">
              GMZ Computer Trading is not liable for indirect, incidental, or consequential damages arising from your use of the website or products, to the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Governing Law</h2>
            <p className="mt-4 leading-7">
              These terms are governed by the laws of the Philippines. Any disputes will be resolved in the appropriate courts serving Cebu City.
            </p>
          </section>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-700">
          <h3 className="text-xl font-semibold text-slate-900">Questions?</h3>
          <p className="mt-3 leading-7">
            If you have questions about our terms, please contact us at <strong>gmzcomputertrading@gmail.com</strong> or call <strong>0924 370 6432</strong>.
          </p>
          <p className="mt-4">
            <Link href="/" className="text-blue-700 hover:underline">Return to home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
