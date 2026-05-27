import Link from "next/link";
import { Product } from "@/lib/types";
import ProductGallery from "@/components/ProductGallery";
import { supabaseServer } from "@/lib/supabaseClient";

interface ProductPageProps {
  params: {
    id: string;
  };
}

async function fetchProduct(id: string): Promise<Product | null> {
  try {
    console.log(`[ProductDetail] Fetching product from Supabase with id: ${id}`);

    if (!supabaseServer) {
      throw new Error("Server Supabase client is not configured. Check SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
    }

    const { data, error } = await supabaseServer.from("products").select("*").eq("id", id).single();

    console.log(`[ProductDetail] Supabase response: error=${error?.message}, data=${data ? 'found' : 'not found'}`);

    if (error) {
      console.error(`[ProductDetail] Supabase error for id ${id}:`, error.message);
      return null;
    }

    if (!data) {
      console.error(`[ProductDetail] No product found for id: ${id}`);
      return null;
    }

    // Handle image signing if it's a storage path
    if (data?.image && typeof data.image === "string" && !data.image.startsWith("http") && !data.image.startsWith("/")) {
      console.log(`[ProductDetail] Attempting to sign image: ${data.image}`);
      const { data: signedData, error: signedError } = await supabaseServer.storage
        .from("product-images")
        .createSignedUrl(data.image, 60 * 60 * 24 * 7);

      if (!signedError && signedData?.signedUrl) {
        data.image = signedData.signedUrl;
        console.log(`[ProductDetail] Image signed successfully`);
      }
    }

    console.log(`[ProductDetail] Successfully fetched product:`, data);
    return data as Product;
  } catch (err) {
    console.error(`[ProductDetail] Error for id ${id}:`, err);
    return null;
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  console.log(`[ProductDetailPage] Rendering page for product id: ${id}`);
  const product = await fetchProduct(id);

  if (!product) {
    console.error(`[ProductDetailPage] Product not found for id: ${id}`);
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#eef7ff] via-[#f3f9ff] to-white px-6 py-10 sm:px-10">
        <div className="max-w-3xl mx-auto rounded-3xl bg-white p-10 shadow-2xl text-center border-2 border-blue-100">
          <h1 className="text-3xl font-extrabold text-slate-900">Product not found</h1>
          <p className="mt-4 text-slate-600">The product you are looking for either does not exist or cannot be loaded.</p>
          <Link href="/products" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-xl transition hover:scale-105">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const images = Array.isArray(product.image) ? product.image : product.image ? [product.image] : [];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#eef7ff] via-[#f3f9ff] to-white px-4 py-10 sm:px-10">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -top-24 -left-32 h-96 w-96 rounded-full bg-blue-100 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-200 opacity-40 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-5xl rounded-[2.5rem] border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 shadow-2xl">
        <div className="mb-10 flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex-1 flex flex-col items-center justify-center">
            <ProductGallery images={images} />
          </div>
          <div className="flex-1 lg:pl-12 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 inline-flex items-center gap-2">
              <span className="animate-bounce">🛒</span> {product.category || "General"}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-2xl">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <span className={`rounded-full px-5 py-2 text-sm font-bold shadow-md ${product.stock > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
              <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-600 shadow-sm">
                {product.stock} available
              </span>
            </div>
            <div className="mt-10 flex justify-center w-full">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2 text-base font-bold text-white shadow-xl transition hover:scale-105 min-w-[180px] max-w-xs w-full justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Back to products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
