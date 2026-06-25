import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  async function register() {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      await axios.post(import.meta.env.VITE_API_URL + "/api/users/", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });

      toast.success("Registration successful! Please login.");
      navigate("/login");
    } catch (e) {
      console.error("Login failed:", e);
      toast.error("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fffaf8_0%,#f6eee5_55%,#ebe0d6_100%)] text-secondary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,49,81,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(122,92,83,0.12),transparent_24%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-8 px-4 py-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-10">
        <div className="flex items-center justify-center py-4 sm:py-8 lg:order-2">
          <div className="w-full max-w-md">
            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-[0_24px_70px_rgba(47,28,23,0.12)] backdrop-blur-xl sm:p-9">
              <div className="mb-8 flex flex-col items-center text-center">
                <img
                  src="/logo.png"
                  alt="AraliyaScents logo"
                  className="mb-4 h-12 w-auto"
                />
                <h2 className="text-2xl font-semibold text-ink">
                  Create your AraliyaScents account
                </h2>
                <p className="text-sm text-secondary/80">
                  Save favorites, track orders, and shop fragrances faster.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-secondary/80"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g., you@example.com"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 w-full rounded-xl border border-secondary/15 bg-white px-4 text-secondary outline-none transition placeholder:text-secondary/40 focus:border-accent focus:ring-4 focus:ring-accent/10"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-secondary/80"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="e.g., John"
                      autoComplete="given-name"
                      onChange={(e) => setFirstName(e.target.value)}
                      className="h-11 w-full rounded-xl border border-secondary/15 bg-white px-4 text-secondary outline-none transition placeholder:text-secondary/40 focus:border-accent focus:ring-4 focus:ring-accent/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-secondary/80"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="e.g., Doe"
                      autoComplete="family-name"
                      onChange={(e) => setLastName(e.target.value)}
                      className="h-11 w-full rounded-xl border border-secondary/15 bg-white px-4 text-secondary outline-none transition placeholder:text-secondary/40 focus:border-accent focus:ring-4 focus:ring-accent/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-secondary/80"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 w-full rounded-xl border border-secondary/15 bg-white px-4 text-secondary outline-none transition placeholder:text-secondary/40 focus:border-accent focus:ring-4 focus:ring-accent/10"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-secondary/80"
                  >
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-11 w-full rounded-xl border border-secondary/15 bg-white px-4 text-secondary outline-none transition placeholder:text-secondary/40 focus:border-accent focus:ring-4 focus:ring-accent/10"
                  />
                </div>

                <button
                  onClick={register}
                  className="h-11 w-full rounded-xl bg-accent text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:brightness-110 active:scale-[0.99]"
                >
                  Register
                </button>
              </div>

              <div className="mt-8">
                <div className="relative text-center">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-secondary/15"></span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-secondary/85">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-accent hover:underline underline-offset-4"
                >
                  Login your account
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-secondary/70 lg:hidden">
              © {new Date().getFullYear()} AraliyaScents
            </p>
          </div>
        </div>

        <section className="hidden flex-col justify-between rounded-[2.5rem] border border-white/70 bg-white/45 p-8 shadow-[0_28px_80px_rgba(47,28,23,0.12)] backdrop-blur lg:flex lg:order-1">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="AraliyaScents logo"
              className="h-11 w-auto"
            />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/55">
                AraliyaScents
              </p>
              <p className="text-sm text-secondary/80">
                Create an account for a refined fragrance experience
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="inline-flex w-fit items-center rounded-full border border-secondary/15 bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/75">
              Curated scent discovery
            </p>
            <h1 className="max-w-xl text-5xl leading-[0.95] text-ink xl:text-6xl">
              Build your scent wardrobe.
            </h1>
            <p className="max-w-lg text-base leading-8 text-secondary/90">
              Register to save favorites, follow your orders, and move through
              checkout with a simple modern flow.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Floral"],
                ["02", "Woody"],
                ["03", "Amber"],
              ].map(([index, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/70 bg-white/65 p-4"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/55">
                    {index}
                  </p>
                  <p className="mt-3 text-lg text-ink">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-secondary/75">
            © {new Date().getFullYear()} AraliyaScents. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
}
