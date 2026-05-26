"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Product, SaleRecord } from "@/lib/types";
import { supabase } from "@/lib/supabaseClient";

const isBrowserSupabaseAvailable = typeof window !== "undefined" && !!supabase;

interface CartItem {
    product: Product;
    quantity: number;
}

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [activeSection, setActiveSection] = useState<string>("Dashboard");
    const [activeTab, setActiveTab] = useState("Products");
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [editingCategory, setEditingCategory] = useState<string | null>(null);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        category: "Ink & Toner",
        description: "",
        price: "",
        image: "",
        stock: "0",
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState("");
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [sales, setSales] = useState<SaleRecord[]>([]);
    const [salesDate, setSalesDate] = useState(() => new Date().toISOString().slice(0, 10));
    const [receiptItems, setReceiptItems] = useState<CartItem[]>([]);
    const [printSale, setPrintSale] = useState<SaleRecord | null>(null);
    const [editingSale, setEditingSale] = useState<SaleRecord | null>(null);
    const [saleEditForm, setSaleEditForm] = useState<{ date: string; items: SaleRecord["items"] }>({ date: "", items: [] });
    const [posQuery, setPosQuery] = useState("");
    const [showReceipt, setShowReceipt] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    useEffect(() => {
        setMounted(true);
        const initializeAuth = async () => {
            if (!isBrowserSupabaseAvailable) {
                setError("Supabase is not configured in this environment. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.");
                return;
            }

            const { data, error } = await supabase.auth.getSession();
            if (data?.session && !error) {
                setIsAuthenticated(true);
                fetchProducts();
                fetchCategories();
                fetchSales();
            }
        };

        initializeAuth();
    }, []);

    const fetchProducts = async () => {
        setIsLoadingProducts(true);
        try {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setProducts([]);
        } finally {
            setIsLoadingProducts(false);
        }
    };

    const fetchCategories = async () => {
        const response = await fetch("/api/categories");
        const data = await response.json();
        setCategories(data);
    };

    const fetchSales = async (date?: string) => {
        const today = new Date().toISOString().slice(0, 10);
        const targetDate = date ?? salesDate ?? today;
        const params = new URLSearchParams();
        params.append("from", targetDate);
        params.append("to", targetDate);

        const url = `/api/sales?${params.toString()}`;
        const response = await fetch(url);
        const data = await response.json();
        setSales(data);
    };

    const handleFilterSales = () => {
        fetchSales(salesDate);
    };

    const handleResetSalesFilter = () => {
        const today = new Date().toISOString().slice(0, 10);
        setSalesDate(today);
        fetchSales(today);
    };

    const handleShowAllSales = async () => {
        try {
            const response = await fetch("/api/sales");
            const data = await response.json();
            setSales(data);
        } catch (err) {
            console.error(err);
            alert("Failed to fetch all sales.");
        }
    };

    const verifyAdminPassword = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (error || !data?.session) {
            alert("Admin access required. Please sign in.");
            return false;
        }
        return true;
    };

    const handleEditSale = async (sale: SaleRecord) => {
        if (!(await verifyAdminPassword())) return;
        setEditingSale(sale);
        setSaleEditForm({ date: sale.date, items: sale.items.map((item) => ({ ...item })) });
    };

    const handleDeleteSale = async (sale: SaleRecord) => {
        if (!(await verifyAdminPassword())) return;

        if (!confirm(`Delete sale #${sale.id}? This cannot be undone.`)) return;

        try {
            const response = await fetch(`/api/sales/${sale.id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const text = await response.text();
                let msg = text;
                try {
                    const json = JSON.parse(text);
                    msg = json.error || JSON.stringify(json);
                } catch (e) {}
                alert(msg || "Failed to delete sale.");
                return;
            }

            setSales((current) => current.filter((item) => item.id !== sale.id));
            alert("Sale deleted successfully.");
        } catch (err) {
            console.error(err);
            alert("Failed to delete sale.");
        }
    };

    const handleSaleItemChange = (index: number, field: keyof SaleRecord["items"][0], value: string | number) => {
        setSaleEditForm((current) => {
            const items = [...current.items];
            const item = { ...items[index] };
            if (field === "quantity") {
                item.quantity = Number(value);
            } else if (field === "price") {
                item.price = Number(value);
            }
            item.total = item.price * item.quantity;
            items[index] = item;
            return { ...current, items };
        });
    };

    const handleSaveEditedSale = async () => {
        if (!editingSale) return;
        if (!(await verifyAdminPassword())) return;

        const updatedSale: SaleRecord = {
            ...editingSale,
            date: new Date(saleEditForm.date).toISOString(),
            items: saleEditForm.items.map((item) => ({
                ...item,
                total: item.price * item.quantity,
            })),
            subtotal: saleEditForm.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
            total: saleEditForm.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        };

        const response = await fetch(`/api/sales/${editingSale.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedSale),
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert(errorData.error || "Failed to update sale.");
            return;
        }

        const saved = await response.json();
        setSales((current) => current.map((sale) => (sale.id === saved.id ? saved : sale)));
        setEditingSale(null);
        setSaleEditForm({ date: "", items: [] });
        alert("Sale updated successfully.");
    };

    const handleCloseEditSale = () => {
        setEditingSale(null);
        setSaleEditForm({ date: "", items: [] });
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password,
            });

            if (error || !data?.user) {
                setError(error?.message || "Invalid credentials");
                return;
            }

            setIsAuthenticated(true);
            setError("");
            fetchProducts();
            fetchCategories();
            fetchSales();
        } catch (err) {
            setError("Network error");
        }
    };

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
        } catch (err) {
            console.warn("Logout failed", err);
        }

        setIsAuthenticated(false);
        setEmail("");
        setPassword("");
        setProducts([]);
        setCategories([]);
        setEditingProduct(null);
        setEditingCategory(null);
        setNewCategoryName("");
        setImageFile(null);
        setImagePreview("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let imageUrl = formData.image;
        if (imageFile) {
            const uploadForm = new FormData();
            uploadForm.append("image", imageFile);

            const uploadResponse = await fetch("/api/upload-image", {
                method: "POST",
                body: uploadForm,
            });

            if (!uploadResponse.ok) {
                const errorData = await uploadResponse.json();
                alert(errorData.error || "Image upload failed.");
                return;
            }

            const uploadResult = await uploadResponse.json();
            imageUrl = uploadResult.path ?? uploadResult.url;
        }

        const url = editingProduct ? `/api/products/${editingProduct.id}` : "/api/products";
        const method = editingProduct ? "PUT" : "POST";

        const response = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...formData,
                image: imageUrl,
                price: parseFloat(formData.price),
                stock: parseInt(formData.stock, 10) || 0,
            }),
        });

        if (response.ok) {
            alert(editingProduct ? "Product updated successfully!" : "Product added successfully!");
            setFormData({ name: "", category: "Ink & Toner", description: "", price: "", image: "", stock: "0" });
            setImageFile(null);
            setImagePreview("");
            setEditingProduct(null);
            fetchProducts();
        } else {
            alert("Error saving product");
        }
    };

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setActiveTab("Add products");
        setFormData({
            name: product.name,
            category: product.category || "Ink & Toner",
            description: product.description,
            price: product.price.toString(),
            image: product.imagePath || (Array.isArray(product.image) ? product.image[0] : product.image) || "",
            stock: product.stock?.toString() ?? "0",
        });
        setImageFile(null);
        setImagePreview(Array.isArray(product.image) ? product.image[0] : product.image || "");
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this product?")) {
            const response = await fetch(`/api/products/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Product deleted successfully!");
                fetchProducts();
            } else {
                alert("Error deleting product");
            }
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            return;
        }

        setImageFile(file);
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleRemoveImage = () => {
        setImageFile(null);
        setImagePreview("");
        setFormData((current) => ({ ...current, image: "" }));
    };

    const handleAddCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCategoryName.trim()) return;

        const response = await fetch("/api/categories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newCategoryName.trim() }),
        });

        if (response.ok) {
            alert("Category added successfully!");
            setNewCategoryName("");
            fetchCategories();
        } else {
            const error = await response.json();
            alert(error.error || "Error adding category");
        }
    };

    const handleEditCategory = (category: string) => {
        setEditingCategory(category);
        setNewCategoryName(category);
    };

    const handleUpdateCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingCategory || !newCategoryName.trim()) return;

        const response = await fetch(`/api/categories/${encodeURIComponent(editingCategory)}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newCategoryName.trim() }),
        });

        if (response.ok) {
            alert("Category updated successfully!");
            setEditingCategory(null);
            setNewCategoryName("");
            fetchCategories();
        } else {
            const error = await response.json();
            alert(error.error || "Error updating category");
        }
    };

    const handleDeleteCategory = async (category: string) => {
        if (!confirm(`Are you sure you want to delete the category "${category}"?`)) return;

        const response = await fetch(`/api/categories/${encodeURIComponent(category)}`, {
            method: "DELETE",
        });

        if (response.ok) {
            alert("Category deleted successfully!");
            fetchCategories();
        } else {
            const error = await response.json();
            alert(error.error || "Error deleting category");
        }
    };

    const handleCancelCategoryEdit = () => {
        setEditingCategory(null);
        setNewCategoryName("");
    };

    const handleAddToCart = (product: Product) => {
        if (product.stock <= 0) {
            alert("This product is out of stock.");
            return;
        }

        setCartItems((current) => {
            const existing = current.find((item) => item.product.id === product.id);

            if (existing) {
                if (existing.quantity >= product.stock) {
                    alert("Cannot add more than available stock.");
                    return current;
                }
                return current.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...current, { product, quantity: 1 }];
        });
    };

    const updateCartQuantity = (productId: string, delta: number) => {
        setCartItems((current) =>
            current
                .map((item) => {
                    if (item.product.id !== productId) return item;
                    const nextQuantity = Math.max(1, item.quantity + delta);
                    return {
                        ...item,
                        quantity: Math.min(nextQuantity, item.product.stock),
                    };
                })
                .filter((item) => item.quantity > 0)
        );
    };

    const removeCartItem = (productId: string) => {
        setCartItems((current) => current.filter((item) => item.product.id !== productId));
    };

    const clearCart = () => setCartItems([]);

    const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const total = subtotal;

    const handleCheckout = async () => {
        if (cartItems.length === 0) {
            alert("Add items to cart before checking out.");
            return;
        }

        if (!confirm("Are you sure you want to complete this checkout?")) {
            return;
        }

        const productsToUpdate = [...products];
        const updatePromises = cartItems.map(async (item) => {
            const currentProduct = productsToUpdate.find((product) => product.id === item.product.id);
            if (!currentProduct) {
                throw new Error(`Product ${item.product.name} no longer exists.`);
            }
            if (item.quantity > currentProduct.stock) {
                throw new Error(`Not enough stock for ${currentProduct.name}.`);
            }
            const updatedStock = Math.max(0, currentProduct.stock - item.quantity);
            const response = await fetch(`/api/products/${currentProduct.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ stock: updatedStock }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to update stock.");
            }
            currentProduct.stock = updatedStock;
        });

        const saleRecord: SaleRecord = {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            items: cartItems.map((item) => ({
                productId: item.product.id,
                name: item.product.name,
                quantity: item.quantity,
                price: item.product.price,
                total: item.product.price * item.quantity,
            })),
            subtotal,
            total,
        };

        try {
            await Promise.all(updatePromises);

            const saleResponse = await fetch("/api/sales", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(saleRecord),
            });
            if (!saleResponse.ok) {
                const saleError = await saleResponse.json();
                throw new Error(saleError.error || "Failed to save sale record.");
            }

            const createdSale = await saleResponse.json();
            setProducts([...productsToUpdate]);
            setSales((current) => [...current, createdSale]);
            setReceiptItems(cartItems);
            setShowReceipt(true);
            setPosQuery("");
        } catch (error) {
            const message = error instanceof Error ? error.message : "Checkout failed.";
            alert(message);
            return;
        }
    };

    const handlePrintSale = (sale: SaleRecord) => {
        setPrintSale(sale);
        setReceiptItems([]);
        setShowReceipt(true);
    };

    const handlePrintReceipt = () => {
        const itemsPresent = printSale || receiptItems.length > 0 || cartItems.length > 0;
        if (!itemsPresent) {
            alert("No receipt to print.");
            return;
        }
        window.print();
    };

    const itemsToPrint = printSale
        ? printSale.items.map((item) => ({
              id: item.productId,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
              total: item.total,
          }))
        : receiptItems.length > 0
        ? receiptItems.map((item) => ({
              id: item.product.id,
              name: item.product.name,
              quantity: item.quantity,
              price: item.product.price,
              total: item.product.price * item.quantity,
          }))
        : cartItems.map((item) => ({
              id: item.product.id,
              name: item.product.name,
              quantity: item.quantity,
              price: item.product.price,
              total: item.product.price * item.quantity,
          }));

    const receiptTotal = printSale ? printSale.total : total;
    const receiptSubtotal = printSale ? printSale.subtotal : total;
    const receiptDateText = printSale ? new Date(printSale.date).toLocaleString() : new Date().toLocaleString();

    const receiptPrintPortal = mounted && showReceipt ? createPortal(
        <div className="receipt-print-section print-only">
            <div className="receipt-printable">
                <div className="text-center mb-6">
                    <p className="text-3xl font-extrabold tracking-tight text-slate-900">GMZ Computer Trading</p>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mt-2">Sales Receipt</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-slate-500 mb-6 text-center">
                    <span>{receiptDateText}</span>
                    <span>Thank you for your purchase!</span>
                </div>
                <div className="space-y-4 mb-6">
                    {itemsToPrint.map((item) => (
                        <div key={item.id} className="grid grid-cols-[1fr_auto_auto] gap-4 items-center text-sm text-slate-700">
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-xs text-slate-500">Qty {item.quantity} • ₱{item.price.toFixed(2)}</p>
                            </div>
                            <span className="text-right text-sm text-slate-700">₱{item.total.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
                <hr className="my-4 border-slate-200" />
                <div className="space-y-2 text-slate-700">
                    <div className="flex items-center justify-between text-base font-medium whitespace-nowrap">
                        <span>Subtotal</span>
                        <span className="text-right">₱{receiptSubtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-lg font-bold whitespace-nowrap">
                        <span>Total</span>
                        <span className="text-right">₱{receiptTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    ) : null;

    if (!isAuthenticated) {
        return (
            <div className="bg-[#eef7ff] py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-slate-200 sm:p-14">
                        <div className="text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                Admin Access
                            </p>
                            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                                Admin Login
                            </h1>
                            <p className="mt-2 text-sm text-slate-600">Sign in with your administrator account to manage the store.</p>
                        </div>
                        <form onSubmit={handleLogin} className="mt-10 max-w-md mx-auto">
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    placeholder="you@company.com"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-slate-700">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    placeholder="Enter admin password"
                                />
                            </div>
                            {error && (
                                <p className="mt-2 text-sm text-red-600">{error}</p>
                            )}
                            <button
                                type="submit"
                                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#eef7ff] py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-[2rem] bg-white p-10 shadow-sm ring-1 ring-slate-200 sm:p-14">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                                Admin Dashboard
                            </p>
                            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Manage your products</h1>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                        >
                            Logout
                        </button>
                    </div>

                    {/* Main Admin Sections */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {['Dashboard', 'POS'].map((section) => (
                            <button
                                key={section}
                                type="button"
                                onClick={() => {
                                    setActiveSection(section);
                                    if (section === 'Dashboard') {
                                        setActiveTab('Products');
                                    }
                                }}
                                className={`rounded-full px-4 py-2 text-sm font-medium ${activeSection === section
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>

                    {activeSection === "POS" && (
                            <div>
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">Point of Sale</h2>
                                        <p className="text-slate-600 mt-1">Add products to the cart and checkout quickly.</p>
                                    </div>
                                    <button
                                        onClick={clearCart}
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                        Clear Cart
                                    </button>
                                </div>

                                <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
                                    <div className="space-y-4">
                                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Search products</label>
                                            <input
                                                type="search"
                                                value={posQuery}
                                                onChange={(e) => setPosQuery(e.target.value)}
                                                placeholder="Search by name or category"
                                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                            />
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {isLoadingProducts ? (
                                                <div className="sm:col-span-2 flex flex-col items-center justify-center py-8">
                                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
                                                        <svg className="w-5 h-5 text-blue-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v4m0 8v4m8-8h-4M4 12H8" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-slate-500 text-sm mt-3">Loading products…</p>
                                                </div>
                                            ) : (
                                                products
                                                    .filter((product) =>
                                                        product.name.toLowerCase().includes(posQuery.toLowerCase()) ||
                                                        product.category?.toLowerCase().includes(posQuery.toLowerCase())
                                                    )
                                                    .slice(0, 8)
                                                    .map((product) => (
                                                        <div key={product.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                                            <div className="flex items-start justify-between gap-4">
                                                                <div>
                                                                    <h3 className="text-base font-semibold text-slate-900 truncate">{product.name}</h3>
                                                                    <p className="text-sm text-slate-500 mt-1">{product.category}</p>
                                                                </div>
                                                                <span className="text-sm font-semibold text-slate-900">₱{product.price}</span>
                                                            </div>
                                                            <p className="mt-3 text-sm text-slate-600 line-clamp-2">{product.description}</p>
                                                            <div className="mt-4 flex items-center justify-between gap-3">
                                                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                                    product.stock > 0 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                                                                }`}>
                                                                    {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                                                                </span>
                                                                <button
                                                                    onClick={() => handleAddToCart(product)}
                                                                    disabled={product.stock <= 0}
                                                                    className={`min-w-[9rem] rounded-full px-4 py-2 text-sm font-semibold text-white transition ${
                                                                        product.stock > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-300 cursor-not-allowed"
                                                                    }`}
                                                                >
                                                                    Add to cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))
                                            )}
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-semibold text-slate-900">Cart</h3>
                                            <span className="text-sm text-slate-500">{cartItems.length} items</span>
                                        </div>
                                        {cartItems.length === 0 ? (
                                            <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-slate-500">
                                                Your cart is empty.
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                {cartItems.map((item) => (
                                                    <div key={item.product.id} className="rounded-2xl border border-slate-200 p-4">
                                                        <div className="flex items-start justify-between gap-4">
                                                            <div>
                                                                <h4 className="text-sm font-semibold text-slate-900">{item.product.name}</h4>
                                                                <p className="text-xs text-slate-500 mt-1">{item.product.category}</p>
                                                            </div>
                                                            <span className="text-sm font-semibold text-slate-900">₱{item.product.price}</span>
                                                        </div>
                                                        <div className="mt-3 flex items-center gap-2">
                                                            <button
                                                                onClick={() => updateCartQuantity(item.product.id, -1)}
                                                                className="h-8 w-8 rounded-full border border-slate-300 text-slate-700"
                                                            >
                                                                −
                                                            </button>
                                                            <span className="text-sm font-medium">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateCartQuantity(item.product.id, 1)}
                                                                className="h-8 w-8 rounded-full border border-slate-300 text-slate-700"
                                                            >
                                                                +
                                                            </button>
                                                            <button
                                                                onClick={() => removeCartItem(item.product.id)}
                                                                className="ml-auto text-xs text-red-600 hover:text-red-700"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="rounded-2xl bg-slate-50 p-4">
                                                    <div className="flex justify-between text-base font-semibold text-slate-900">
                                                        <span>Total</span>
                                                        <span>₱{total.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={handleCheckout}
                                                    className="w-full rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                                                >
                                                    Checkout
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                    {activeSection === "Dashboard" && <div>
                        {/* Tab Navigation */}
                        <div className="mt-8 border-b border-slate-200">
                            <nav className="-mb-px flex flex-wrap gap-4">
                                {["Add products", "Products", "Category", "Sales"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => {
                                            setActiveTab(tab);
                                            if (tab !== "Add products") {
                                                setEditingProduct(null);
                                                setFormData({ name: "", category: "Ink & Toner", description: "", price: "", image: "", stock: "0" });
                                            }
                                            if (tab !== "Category") {
                                                setEditingCategory(null);
                                                setNewCategoryName("");
                                            }
                                        }}
                                        className={activeTab === tab ? "whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium border-blue-500 text-blue-600" : "whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-8">
                            {activeTab === "Products" && (
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">Products</h2>
                                            <p className="text-slate-600 mt-1">{products.length} products total</p>
                                        </div>
                                        <button
                                            onClick={() => setActiveTab("Add products")}
                                            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg hover:shadow-xl"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                            Add Product
                                        </button>
                                    </div>

                                    {isLoadingProducts ? (
                                        <div className="flex flex-col items-center justify-center py-40 gap-4">
                                            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
                                                <svg className="w-6 h-6 text-blue-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v4m0 8v4m8-8h-4M4 12H8" />
                                                </svg>
                                            </div>
                                            <p className="text-slate-500 text-sm">Loading products…</p>
                                        </div>
                                    ) : products.length === 0 ? (
                                        <div className="text-center py-16">
                                            <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-medium text-slate-900 mb-2">No products yet</h3>
                                            <p className="text-slate-600 mb-6">Get started by adding your first product</p>
                                            <button
                                                onClick={() => setActiveTab("Add products")}
                                                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                                Add Your First Product
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                            {products.map((product) => {
                                                const mainImage = Array.isArray(product.image) ? product.image[0] : product.image;
                                                return (
                                                    <div key={product.id} className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden">
                                                        {mainImage && (
                                                            <div className="aspect-video bg-slate-100 relative overflow-hidden">
                                                                <img
                                                                    src={mainImage}
                                                                    alt={product.name}
                                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                                                />
                                                            </div>
                                                        )}
                                                        <div className="p-6">
                                                            <div className="flex items-start justify-between mb-3">
                                                                <div className="flex-1 min-w-0">
                                                                    <h3 className="text-lg font-semibold text-slate-900 truncate mb-1">
                                                                        {product.name}
                                                                    </h3>
                                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                                        {product.category || "General"}
                                                                    </span>
                                                                </div>
                                                                <div className="flex gap-1 ml-3">
                                                                    <button
                                                                        onClick={() => handleEdit(product)}
                                                                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                                        title="Edit product"
                                                                    >
                                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                        </svg>
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDelete(product.id)}
                                                                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                                        title="Delete product"
                                                                    >
                                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                                                {product.description}
                                                            </p>

                                                            <div className="flex items-center justify-between gap-3">
                                                                <div>
                                                                    <p className="text-2xl font-bold text-slate-900">₱{product.price}</p>
                                                                    <p className="text-sm text-slate-500 mt-1">{product.stock} in stock</p>
                                                                </div>
                                                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                                    product.stock > 0 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                                                                }`}>
                                                                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === "Sales" && (
                                <div>
                                    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr] mb-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">Sales History</h2>
                                            <p className="text-slate-600 mt-1">Review completed sales and track revenue over time.</p>
                                        </div>
                                        <div className="text-right text-sm text-slate-500">
                                            <p>{sales.length} sales recorded</p>
                                            <p className="mt-1 font-semibold text-slate-900">Total revenue: ₱{sales.reduce((sum, sale) => sum + sale.total, 0).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="grid gap-3 sm:grid-cols-[1fr_auto] mb-6">
                                        <div>
                                            <label className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Select day</label>
                                            <input
                                                type="date"
                                                value={salesDate}
                                                onChange={(e) => setSalesDate(e.target.value)}
                                                className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                            />
                                        </div>
                                        <div className="flex items-end gap-2">
                                            <button
                                                type="button"
                                                onClick={handleFilterSales}
                                                className="rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                                            >
                                                Show day
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleResetSalesFilter}
                                                className="rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                            >
                                                Today
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleShowAllSales}
                                                className="rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                            >
                                                Show All
                                            </button>
                                        </div>
                                    </div>

                                    {sales.length === 0 ? (
                                        <div className="text-center py-16">
                                            <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-medium text-slate-900 mb-2">No sales yet</h3>
                                            <p className="text-slate-600">Complete a sale in the POS section to see the history appear here.</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {sales.map((sale) => (
                                                <div key={sale.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                                        <div>
                                                            <p className="text-sm text-slate-500">Sale #{sale.id}</p>
                                                            <p className="text-lg font-semibold text-slate-900">{new Date(sale.date).toLocaleString()}</p>
                                                        </div>
                                                        <div className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                                                            ₱{sale.total.toFixed(2)} total
                                                        </div>
                                                    </div>

                                                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                                        <div className="rounded-2xl bg-slate-50 p-4">
                                                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Items</p>
                                                            <p className="mt-2 text-xl font-semibold text-slate-900">{sale.items.length}</p>
                                                        </div>
                                                        <div className="rounded-2xl bg-slate-50 p-4">
                                                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Subtotal</p>
                                                            <p className="mt-2 text-xl font-semibold text-slate-900">₱{sale.subtotal.toFixed(2)}</p>
                                                        </div>
                                                    </div>

                                                    <div className="mt-6 space-y-3">
                                                        {sale.items.map((item) => (
                                                            <div key={item.productId} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                                                                <div>
                                                                    <p className="font-medium text-slate-900">{item.name}</p>
                                                                    <p className="text-xs text-slate-500">Qty {item.quantity} × ₱{item.price}</p>
                                                                </div>
                                                                <p className="font-semibold text-slate-900">₱{item.total.toFixed(2)}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-6 flex flex-wrap gap-2">
                                                        <button
                                                            type="button"
                                                            onClick={() => handlePrintSale(sale)}
                                                            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                                                        >
                                                            Print
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleDeleteSale(sale)}
                                                            className="rounded-full border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === "Add products" && (
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">
                                                {editingProduct ? "Edit Product" : "Add New Product"}
                                            </h2>
                                            <p className="text-slate-600 mt-1">
                                                {editingProduct ? "Update product information" : "Create a new product for your store"}
                                            </p>
                                        </div>
                                        {editingProduct && (
                                            <button
                                                onClick={() => {
                                                    setEditingProduct(null);
                                                    setFormData({ name: "", category: "Ink & Toner", description: "", price: "", image: "", stock: "0" });
                                                    setImageFile(null);
                                                    setImagePreview("");
                                                }}
                                                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                </svg>
                                                Back to Products
                                            </button>
                                        )}
                                    </div>

                                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="grid gap-8 lg:grid-cols-2">
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-semibold text-slate-700">
                                                        Product Name <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="e.g. Epson 003 Ink Cartridge"
                                                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-semibold text-slate-700">
                                                        Category <span className="text-red-500">*</span>
                                                    </label>
                                                    <select
                                                        name="category"
                                                        value={formData.category}
                                                        onChange={handleChange}
                                                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                                                    >
                                                        {categories.map((category) => (
                                                            <option key={category} value={category}>
                                                                {category}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="grid gap-8 lg:grid-cols-3">
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-semibold text-slate-700">
                                                        Price (₱) <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="price"
                                                        value={formData.price}
                                                        onChange={handleChange}
                                                        required
                                                        step="0.01"
                                                        placeholder="e.g. 350"
                                                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-semibold text-slate-700">
                                                        In Stock <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="stock"
                                                        value={formData.stock}
                                                        onChange={handleChange}
                                                        required
                                                        min={0}
                                                        placeholder="e.g. 10"
                                                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-semibold text-slate-700">
                                                        Product Image <span className="text-slate-500">(optional)</span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleImageUpload}
                                                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700"
                                                    />
                                                    {(imagePreview || formData.image) && (
                                                        <div className="mt-4 rounded-3xl overflow-hidden border border-slate-200">
                                                            <img
                                                                src={imagePreview || formData.image}
                                                                alt="Product preview"
                                                                className="h-48 w-full object-cover"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={handleRemoveImage}
                                                                className="w-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
                                                            >
                                                                Remove image
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-slate-700">
                                                    Description <span className="text-red-500">*</span>
                                                </label>
                                                <textarea
                                                    name="description"
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Briefly describe the product..."
                                                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                                                    rows={5}
                                                />
                                            </div>

                                            <div className="flex gap-4 pt-6 border-t border-slate-200">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg hover:shadow-xl"
                                                >
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {editingProduct ? "Update Product" : "Add Product"}
                                                </button>
                                                {editingProduct && (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setEditingProduct(null);
                                                            setFormData({ name: "", category: "Ink & Toner", description: "", price: "", image: "", stock: "0" });
                                                        }}
                                                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 shadow-sm"
                                                    >
                                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                        Cancel
                                                    </button>
                                                )}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}

                            {activeTab === "Category" && (
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">Categories</h2>
                                            <p className="text-slate-600 mt-1">{categories.length} categories total</p>
                                        </div>
                                    </div>

                                    {/* Add/Edit Category Form */}
                                    <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            {editingCategory ? "Edit Category" : "Add New Category"}
                                        </h3>
                                        <form onSubmit={editingCategory ? handleUpdateCategory : handleAddCategory} className="flex gap-4">
                                            <input
                                                type="text"
                                                value={newCategoryName}
                                                onChange={(e) => setNewCategoryName(e.target.value)}
                                                placeholder="Enter category name"
                                                required
                                                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-sm"
                                            />
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg hover:shadow-xl"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {editingCategory ? "Update" : "Add"}
                                            </button>
                                            {editingCategory && (
                                                <button
                                                    type="button"
                                                    onClick={handleCancelCategoryEdit}
                                                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 shadow-sm"
                                                >
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    Cancel
                                                </button>
                                            )}
                                        </form>
                                    </div>

                                    {/* Categories List */}
                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                        {categories.map((category) => (
                                            <div key={category} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-lg font-semibold text-slate-900">{category}</h3>
                                                    <div className="flex gap-1">
                                                        <button
                                                            onClick={() => handleEditCategory(category)}
                                                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                            title="Edit category"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteCategory(category)}
                                                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                            title="Delete category"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                        <span className="text-sm text-slate-600">
                                                            {products.filter(p => p.category === category).length} products
                                                        </span>
                                                    </div>
                                                    <div className="text-xs text-slate-400">
                                                        Active
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>}

                    {/* {activeSection === "POS" && (
                        <div>
                         
                        </div>
                    )} */}
                </div>
            </div>

            {showReceipt && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 receipt-printable-overlay no-print">
                        <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4 receipt-printable">
                            <div className="text-center mb-6">
                                <p className="text-3xl font-extrabold tracking-tight text-slate-900">GMZ Computer Trading</p>
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mt-2">Sales Receipt</p>
                            </div>
                            <div className="flex flex-col gap-1 text-sm text-slate-500 mb-6 text-center">
                                <span>{receiptDateText}</span>
                                <span>Thank you for your purchase!</span>
                            </div>
                            <div className="space-y-4 mb-6">
                                {itemsToPrint.map((item) => (
                                    <div key={item.id} className="grid grid-cols-[1fr_auto_auto] gap-4 items-center text-sm text-slate-700">
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-xs text-slate-500">Qty {item.quantity} • ₱{item.price.toFixed(2)}</p>
                                        </div>
                                        <span className="text-right text-sm text-slate-700">₱{item.total.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <hr className="my-4 border-slate-200" />
                            <div className="space-y-2 text-slate-700">
                                <div className="flex justify-between text-base font-medium whitespace-nowrap">
                                    <span>Subtotal</span>
                                    <span>₱{receiptSubtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold whitespace-nowrap">
                                    <span>Total</span>
                                    <span>₱{receiptTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="mt-8 flex gap-3 no-print">
                                <button
                                    onClick={handlePrintReceipt}
                                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
                                >
                                    Print Receipt
                                </button>
                                <button
                                    onClick={() => {
                                        setShowReceipt(false);
                                        setPrintSale(null);
                                        setReceiptItems([]);
                                        setPosQuery("");
                                    }}
                                    className="flex-1 bg-slate-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-700"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {receiptPrintPortal}
        </div>
    );
}