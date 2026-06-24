import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../components/loader";
import ImageSlider from "../components/imageSlider";
import { addToCart } from "../utils/cart";

export default function ProductOverview() {
  const params = useParams();
  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/products/" + params.id)
      .then((res) => {
        setProduct(res.data);
        setStatus("success");
      })
      .catch(() => {
        toast.error("Failed to fetch product details");
        setStatus("error");
      });
  }, [params.id]);

  const images =
    Array.isArray(product?.images) && product.images.length > 0
      ? product.images
      : ["/logo.png"];
  const styleNotes = Array.isArray(product?.altNames) ? product.altNames : [];

  return (
    <div className="w-full bg-primary text-secondary">
      {status == "loading" && <Loader />}
      {status == "success" && (
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
          <div className="rounded-[2rem] border border-white/50 bg-white/45 p-4 shadow-[0_20px_55px_rgba(90,1,23,0.08)] backdrop-blur lg:sticky lg:top-[110px] lg:self-start">
            <ImageSlider images={images} />
          </div>
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/50 bg-white/45 p-6 shadow-[0_20px_55px_rgba(90,1,23,0.08)] backdrop-blur lg:p-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
                SKU {product.productID}
              </p>
              <div className="flex flex-wrap items-end gap-3">
                <h1 className="text-5xl leading-none text-ink">
                  {product.name}
                </h1>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  {product.category}
                </span>
              </div>
              {styleNotes.length > 0 && (
                <p className="text-sm leading-6 text-secondary/75">
                  {styleNotes.join(" · ")}
                </p>
              )}
            </div>

            <p className="max-w-2xl text-sm leading-7 text-secondary sm:text-base">
              {product.description}
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-secondary/10 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/50">
                  Fragrance family
                </p>
                <p className="mt-2 text-xl text-ink">{product.category}</p>
              </div>
              <div className="rounded-[1.25rem] border border-secondary/10 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/50">
                  Mood
                </p>
                <p className="mt-2 text-xl text-ink">Refined everyday scent</p>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 rounded-[1.5rem] bg-accent/10 p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/55">
                  Price
                </p>
                {product.labelledPrice > product.price ? (
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-secondary line-through">
                      LKR {product.labelledPrice.toFixed(2)}
                    </p>
                    <p className="text-3xl font-semibold text-accent">
                      LKR {product.price.toFixed(2)}
                    </p>
                  </div>
                ) : (
                  <p className="text-3xl font-semibold text-accent">
                    LKR {product.price.toFixed(2)}
                  </p>
                )}
              </div>
              <p className="max-w-xs text-right text-sm leading-6 text-secondary/70">
                Designed for a polished storefront, with clear details and a
                premium buying flow.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                className="h-12 rounded-full bg-accent text-sm font-semibold text-white transition hover:bg-accent/90"
                onClick={() => {
                  addToCart(product, 1);
                  toast.success("Added to cart");
                }}
              >
                Add to bag
              </button>
              <Link
                to="/checkout"
                state={[
                  {
                    image: images[0],
                    productID: product.productID,
                    name: product.name,
                    price: product.price,
                    labelledPrice: product.labelledPrice,
                    quantity: 1,
                  },
                ]}
                className="flex h-12 items-center justify-center rounded-full border border-accent text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
              >
                Buy now
              </Link>
            </div>
          </div>
        </div>
      )}
      {status == "error" && (
        <h1 className="p-10 text-red-500">Failed to load product details</h1>
      )}
    </div>
  );
}
