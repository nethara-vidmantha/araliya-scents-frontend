import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { addToCart, getTotal, loadCart } from "../utils/cart";
import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CartPage() {
  const [cart, setCart] = useState(loadCart());
  const total = getTotal();

  return (
    <div className="w-full bg-primary text-secondary">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
              Cart
            </p>
            <h1 className="mt-3 text-5xl text-ink">Your selected pieces.</h1>
          </div>
          <Link
            to="/products"
            className="rounded-full border border-secondary/15 bg-white/55 px-5 py-3 text-sm font-semibold text-secondary transition hover:bg-white"
          >
            Continue shopping
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-[2rem] border border-white/50 bg-white/45 p-12 text-center shadow-[0_20px_55px_rgba(90,1,23,0.08)] backdrop-blur">
            <h2 className="text-4xl text-ink">Your cart is empty.</h2>
            <p className="mt-3 text-sm leading-7 text-secondary">
              Add a few pieces to continue toward checkout.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="relative grid gap-4 rounded-[1.75rem] border border-white/50 bg-white/60 p-4 shadow-[0_14px_38px_rgba(90,1,23,0.06)] sm:grid-cols-[110px_1fr_auto] sm:items-center"
                >
                  <button
                    className="absolute right-4 top-4 rounded-full p-2 text-red-600 transition hover:bg-red-600 hover:text-white"
                    onClick={() => {
                      addToCart(item, -item.quantity);
                      setCart(loadCart());
                    }}
                  >
                    <BiTrash />
                  </button>
                  <img
                    className="h-[110px] w-full rounded-[1.25rem] object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="space-y-2 pr-10 sm:pr-0">
                    <h2 className="text-3xl text-ink">{item.name}</h2>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/50">
                      {item.productID}
                    </p>
                    <div className="flex items-center gap-3 text-secondary/80">
                      <button
                        className="rounded-full border border-secondary/15 p-2 transition hover:bg-white"
                        onClick={() => {
                          addToCart(item, 1);
                          setCart(loadCart());
                        }}
                      >
                        <CiCircleChevUp className="text-2xl" />
                      </button>
                      <span className="min-w-8 text-center text-2xl font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        className="rounded-full border border-secondary/15 p-2 transition hover:bg-white"
                        onClick={() => {
                          addToCart(item, -1);
                          setCart(loadCart());
                        }}
                      >
                        <CiCircleChevDown className="text-2xl" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    {item.labelledPrice > item.price && (
                      <span className="block text-sm text-secondary line-through">
                        LKR {item.labelledPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="block text-3xl font-semibold text-accent">
                      LKR {item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-[2rem] border border-accent/15 bg-[linear-gradient(180deg,rgba(90,1,23,0.11),rgba(255,255,255,0.55))] p-6 shadow-[0_18px_50px_rgba(90,1,23,0.08)] lg:sticky lg:top-[110px]">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
                Summary
              </p>
              <div className="mt-4 space-y-3 text-sm text-secondary">
                <div className="flex items-center justify-between">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="my-6 h-px bg-secondary/10" />
              <div className="flex items-end justify-between gap-4">
                <span className="text-sm uppercase tracking-[0.35em] text-secondary/60">
                  Total
                </span>
                <span className="text-3xl font-semibold text-accent">
                  LKR {total.toFixed(2)}
                </span>
              </div>
              <Link
                state={cart}
                to="/checkout"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
