import Link from "next/link";

const features = [
  {
    title: "Computer Supplies",
    description: "Keyboards, mice, cables, USB hubs, and everything in between.",
    icon: "🖥️",
  },
  {
    title: "Printers & Ink",
    description: "Ink cartridges, toner, and printer accessories for all brands.",
    icon: "🖨️",
  },
  {
    title: "Office Essentials",
    description: "Paper, folders, pens, and all the everyday office supplies you need.",
    icon: "📦",
  },
  {
    title: "Fast & Reliable",
    description: "Trusted by businesses and schools across Cebu for years.",
    icon: "🚀",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#e7f2ff]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white/80 p-10 shadow-xl ring-1 ring-slate-200 backdrop-blur-sm sm:p-14">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
              Cebu’s trusted tech store
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Office & Computer <span className="text-blue-600">Supplies</span> You Can Trust
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From printers and ink cartridges to keyboards, cables, and office essentials — GMZ Computer Trading has everything your workplace needs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-200 bg-blue-50/80 p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                  {feature.icon}
                </div>
                <h2 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
