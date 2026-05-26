export default function ContactPage() {
  return (
    <div className="bg-[#eef7ff] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-slate-200 sm:p-14">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              Get in Touch
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              We'd love to hear from you. Reach us any way you like.
            </h1>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">📞</div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Phone</p>
                    <p className="mt-2 text-slate-700">+63 912 345 6789</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">✉️</div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Email</p>
                    <p className="mt-2 text-slate-700">gmzcomputers@email.com</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">📍</div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Address</p>
                    <p className="mt-2 text-slate-700">123 Sample Street, Cebu City, Philippines 6000</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">⏰</div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Hours</p>
                    <p className="mt-2 text-slate-700">Mon – Sat: 8AM – 6PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Send a message</h2>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Your Name</label>
                  <input
                    type="text"
                    placeholder="Juan dela Cruz"
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}