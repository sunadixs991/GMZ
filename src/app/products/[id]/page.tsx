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
      <div className="min-h-screen bg-[#ebf5ff] px-6 py-10 sm:px-10">
        <div className="max-w-3xl mx-auto rounded-3xl bg-white p-10 shadow-lg text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Product not found</h1>
          <p className="mt-4 text-slate-600">The product you are looking for either does not exist or cannot be loaded.</p>
          <Link href="/products" className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const images = Array.isArray(product.image) ? product.image : product.image ? [product.image] : [];

  return (
    <div className="min-h-screen bg-[#ebf5ff] px-6 py-10 sm:px-10">
      <div className="max-w-5xl mx-auto rounded-[2rem] bg-white p-8 shadow-xl">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex-1">
            <ProductGallery images={images} />
          </div>
          <div className="flex-1 lg:pl-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">{product.category || "General"}</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">{product.name}</h1>
            <p className="mt-6 text-slate-600 leading-8">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                {product.stock} available
              </span>
            </div>
            <Link href="/products" className="mt-10 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Back to products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
