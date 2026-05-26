"use client";

import { useState } from "react";

interface Props {
  images: string[];
}

export default function ProductGallery({ images }: Props) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  if (!images || images.length === 0) {
    return <div className="flex h-80 items-center justify-center text-slate-400">No image available</div>;
  }

  return (
    <div>
      <div className="overflow-hidden rounded-[2rem] bg-slate-100">
        <button type="button" onClick={() => setOpen(true)} className="w-full">
          <img src={images[index]} alt={`Image ${index + 1}`} className="h-full w-full object-cover" />
        </button>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-16 w-24 overflow-hidden rounded-lg border ${i === index ? "border-blue-600" : "border-transparent"}`}
            >
              <img src={src} alt={`Thumb ${i + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setOpen(false)}>
          <div className="relative max-w-4xl w-full mx-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-50 rounded-full bg-white p-2 text-slate-700"
            >
              ✕
            </button>
            <img src={images[index]} alt={`Image ${index + 1}`} className="w-full h-[70vh] object-contain bg-white p-4" />
            {images.length > 1 && (
              <div className="mt-3 flex justify-center gap-2">
                <button onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); }} className="rounded-full bg-white/90 px-3 py-2">Prev</button>
                <button onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % images.length); }} className="rounded-full bg-white/90 px-3 py-2">Next</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
