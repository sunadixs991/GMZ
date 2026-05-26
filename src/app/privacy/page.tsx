import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f3faff] min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-slate-200 sm:p-14">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Privacy Policy</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Your privacy matters at GMZ Computer Trading
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            This privacy policy explains what information we collect, how we use it, and how we protect your personal information when you shop with us.
          </p>
        </div>

        <div className="mt-12 space-y-10 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Information We Collect</h2>
            <p className="mt-4 leading-7">
              We collect the information you provide when you place an order, contact us, or register for our services. This may include your name, email address, phone number, shipping address, and payment details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">How We Use Your Information</h2>
            <p className="mt-4 leading-7">
              We use your information to process orders, respond to inquiries, provide customer support, improve our service, and send order updates. We may also use your email address to share important announcements or promotions, but only if you opt in.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Cookies and Tracking</h2>
            <p className="mt-4 leading-7">
              Our website may use cookies and similar technologies to improve your browsing experience, remember your preferences, and analyze site traffic. You can manage cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Sharing Your Information</h2>
            <p className="mt-4 leading-7">
              We do not sell your personal information. We may share information with trusted service providers who help us operate our website, process payments, deliver orders, or support our business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Security</h2>
            <p className="mt-4 leading-7">
              We take reasonable measures to protect your information from unauthorized access, disclosure, or loss. However, no online system is completely secure, and we cannot guarantee absolute protection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Your Rights</h2>
            <p className="mt-4 leading-7">
              You may request access to, correction of, or deletion of your personal information. If you have questions or want to update your details, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Updates to This Policy</h2>
            <p className="mt-4 leading-7">
              We may update this policy from time to time. When we do, we will post the revised version on this page with an updated effective date.
            </p>
          </section>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-700">
          <h3 className="text-xl font-semibold text-slate-900">Contact Us</h3>
          <p className="mt-3 leading-7">
            If you have questions about this privacy policy, please reach out at <strong>gmzcomputertrading@gmail.com</strong> or call <strong>0924 370 6432</strong>.
          </p>
          <p className="mt-4">
            <Link href="/" className="text-blue-700 hover:underline">Return to home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
