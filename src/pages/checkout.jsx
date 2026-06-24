import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { loadCart } from "../utils/cart";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [cart, setCart] = useState(
    Array.isArray(location.state) && location.state.length > 0
      ? location.state
      : loadCart(),
  );

  function getTotal() {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  async function purchaseCart() {
    const token = localStorage.getItem("token");
    if (token == null) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }
    try {
      const items = [];

      for (let i = 0; i < cart.length; i++) {
        items.push({
          productID: cart[i].productID,
          quantity: cart[i].quantity,
        });
      }

      await axios.post(
        import.meta.env.VITE_API_URL + "/api/orders",
        {
          address: address,
          customerName: name == "" ? null : name,
          items: items,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success("Order placed successfully");
    } catch (error) {
      toast.error("Failed to place order");
      console.error(error);

      if (error.response && error.response.status == 400) {
        toast.error(error.response.data.message);
      }
    }
  }

  return (
    <div className="w-full bg-primary text-secondary">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
              Checkout
            </p>
            <h1 className="mt-3 text-5xl text-ink">Complete your order.</h1>
          </div>
          <Link
            to="/cart"
            className="rounded-full border border-secondary/15 bg-white/55 px-5 py-3 text-sm font-semibold text-secondary transition hover:bg-white"
          >
            Back to cart
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-[2rem] border border-white/50 bg-white/45 p-12 text-center shadow-[0_20px_55px_rgba(90,1,23,0.08)] backdrop-blur">
            <h2 className="text-4xl text-ink">Nothing to checkout yet.</h2>
            <p className="mt-3 text-sm leading-7 text-secondary">
              Return to the collection and add a few pieces before placing an
              order.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="grid gap-4 rounded-[1.75rem] border border-white/50 bg-white/60 p-4 shadow-[0_14px_38px_rgba(90,1,23,0.06)] sm:grid-cols-[110px_1fr_auto] sm:items-center"
                >
                  <img
                    className="h-[110px] w-full rounded-[1.25rem] object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="space-y-2">
                    <h2 className="text-3xl text-ink">{item.name}</h2>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/50">
                      {item.productID}
                    </p>
                    <div className="flex items-center gap-3 text-secondary/80">
                      <button
                        className="rounded-full border border-secondary/15 p-2 transition hover:bg-white"
                        onClick={() => {
                          const newCart = [...cart];
                          newCart[index].quantity += 1;
                          setCart(newCart);
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
                          const newCart = [...cart];
                          if (newCart[index].quantity > 1) {
                            newCart[index].quantity -= 1;
                          }
                          setCart(newCart);
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
              <div className="grid gap-4 rounded-[1.75rem] border border-white/50 bg-white/60 p-5 shadow-[0_14px_38px_rgba(90,1,23,0.06)] lg:grid-cols-2">
                <div className="space-y-3">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-secondary"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 w-full rounded-full border border-secondary/15 bg-white px-4 text-secondary outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                  />
                </div>
                <div className="space-y-3 lg:col-span-2">
                  <label
                    htmlFor="address"
                    className="text-sm font-medium text-secondary"
                  >
                    Shipping address
                  </label>
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="min-h-[140px] w-full rounded-[1.5rem] border border-secondary/15 bg-white px-4 py-3 text-secondary outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                  />
                </div>
              </div>
            </div>

            <div className="h-fit rounded-[2rem] border border-accent/15 bg-[linear-gradient(180deg,rgba(90,1,23,0.11),rgba(255,255,255,0.55))] p-6 shadow-[0_18px_50px_rgba(90,1,23,0.08)] lg:sticky lg:top-[110px]">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
                Order summary
              </p>
              <div className="mt-4 space-y-3 text-sm text-secondary">
                <div className="flex items-center justify-between">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Customer</span>
                  <span>{name || "Not added"}</span>
                </div>
              </div>
              <div className="my-6 h-px bg-secondary/10" />
              <div className="flex items-end justify-between gap-4">
                <span className="text-sm uppercase tracking-[0.35em] text-secondary/60">
                  Total
                </span>
                <span className="text-3xl font-semibold text-accent">
                  LKR {getTotal().toFixed(2)}
                </span>
              </div>
              <button
                onClick={purchaseCart}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
              >
                Place order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
