import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader } from "../components/loader";
import ProductCard from "../components/productCard";

export function ProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (isLoading) {
      axios
        .get(import.meta.env.VITE_API_URL + "/api/products")
        .then((response) => {
          setProducts(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setIsLoading(false);
          toast.error("Failed to load products");
        });
    }
  }, [isLoading]);

  const heroDescription =
    "Browse the collection like a curated fragrance counter, then jump into the scents you want with a clean shopping flow.";

  return (
    <div className="w-full bg-primary text-secondary">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <div className="grid gap-6 rounded-[2rem] border border-white/50 bg-white/45 p-6 shadow-[0_18px_50px_rgba(90,1,23,0.08)] backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
              Products
            </p>
            <h1 className="text-5xl leading-none text-ink sm:text-6xl">
              Curated fragrances with a premium finish.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-secondary sm:text-base">
              {heroDescription}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Floral", "Woody", "Amber", "Fresh"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-secondary/15 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-secondary/70"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-[1.75rem] border border-accent/15 bg-[linear-gradient(180deg,rgba(90,1,23,0.12),rgba(255,255,255,0.55))] p-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">
                Search the collection
              </p>
              <p className="text-sm leading-6 text-secondary/80">
                Use the search bar to quickly find a specific scent family or
                fragrance direction.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={searchTerm}
                onChange={async (e) => {
                  const value = e.target.value;
                  setSearchTerm(value);
                  try {
                    if (value.trim() === "") {
                      setIsLoading(true);
                    } else {
                      setIsLoading(true);
                      const searchResult = await axios.get(
                        `${import.meta.env.VITE_API_URL}/api/products/search/${value}`,
                      );
                      setProducts(searchResult.data);
                      setIsLoading(false);
                    }
                  } catch {
                    setIsLoading(false);
                    toast.error("Search failed");
                  }
                }}
                placeholder="Search products..."
                className="h-12 flex-1 rounded-full border border-secondary/15 bg-white/80 px-4 text-secondary outline-none transition placeholder:text-secondary/40 focus:border-accent focus:ring-4 focus:ring-accent/15"
              />
              <Link
                to="/about"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accent/90"
              >
                Brand story
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {isLoading ? (
            <Loader />
          ) : products.length === 0 ? (
            <div className="rounded-[2rem] border border-white/50 bg-white/45 p-10 text-center shadow-[0_18px_50px_rgba(90,1,23,0.08)] backdrop-blur">
              <h2 className="text-4xl text-ink">
                No fragrances matched your search.
              </h2>
              <p className="mt-3 text-sm leading-7 text-secondary">
                Try a broader term or return to the full collection.
              </p>
              <Link
                to="/products"
                className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
              >
                Reset search
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 justify-center gap-6 pb-12 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {products.map((item) => (
                <ProductCard key={item.productID} product={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
