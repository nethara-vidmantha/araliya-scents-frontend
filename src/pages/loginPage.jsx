import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      axios
        .post(import.meta.env.VITE_API_URL + "/api/users/google-login", {
          token: response.access_token,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          const user = res.data.user;
          if (user.role == "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        })
        .catch((err) => {
          console.error("Google login failed:", err);
          toast.error("Google login failed. Please try again.");
        });
    },
  });

  async function login() {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/api/users/login",
        { email: email, password: password },
      );
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      const user = response.data.user;
      if (user.role == "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (e) {
      console.error("Login failed:", e);
      toast.error("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fffaf8_0%,#f6eee5_55%,#ebe0d6_100%)] text-secondary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,49,81,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(122,92,83,0.12),transparent_24%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-8 px-4 py-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-10">
        <section className="hidden flex-col justify-between rounded-[2.5rem] border border-white/70 bg-white/45 p-8 shadow-[0_28px_80px_rgba(47,28,23,0.12)] backdrop-blur lg:flex">
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
                Fragrance studio and curated scent house
              </p>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-center space-y-6">
              <p className="inline-flex w-fit items-center rounded-full border border-secondary/15 bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/75">
                Signature scent experience
              </p>
              <div className="space-y-4">
                <h1 className="max-w-xl text-5xl leading-[0.95] text-ink xl:text-6xl">
                  Find your signature scent.
                </h1>
                <p className="max-w-lg text-base leading-8 text-secondary/90">
                  Sign in to explore exclusive offers, track your orders, and
                  save your favorite fragrances in a calm, modern storefront.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Soft florals"],
                  ["02", "Warm woods"],
                  ["03", "Amber trails"],
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

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[420px] overflow-hidden rounded-[2.25rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,250,246,0.55))] p-6 shadow-[0_26px_60px_rgba(143,49,81,0.12)]">
                <div className="absolute inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_25%_20%,rgba(143,49,81,0.14),transparent_28%),radial-gradient(circle_at_75%_25%,rgba(122,92,83,0.16),transparent_30%),linear-gradient(135deg,rgba(255,250,246,0.95),rgba(243,233,225,0.9))]" />
                <div className="relative flex h-[460px] flex-col justify-between rounded-[1.7rem] border border-white/70 p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-secondary/65">
                    <span>AraliyaScents</span>
                    <span>2026</span>
                  </div>
                  <div className="flex flex-1 items-center justify-center">
                    <div className="relative h-[280px] w-[170px] rounded-[2.2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.35))] shadow-[0_22px_60px_rgba(143,49,81,0.18)]">
                      <div className="absolute inset-x-6 top-5 h-[46px] rounded-full bg-[linear-gradient(180deg,rgba(143,49,81,0.95),rgba(122,92,83,0.72))]" />
                      <div className="absolute inset-x-7 top-16 h-[188px] rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(143,49,81,0.88),rgba(236,204,174,0.95))]" />
                      <div className="absolute left-1/2 top-16 h-[188px] w-[24px] -translate-x-1/2 bg-white/40" />
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/70 bg-white/70 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/55">
                        Mood
                      </p>
                      <p className="mt-2 text-xl text-ink">
                        Modern, clean, and memorable.
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/70 bg-white/70 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/55">
                        Finish
                      </p>
                      <p className="mt-2 text-xl text-ink">
                        Soft glow with premium depth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-secondary/75">
            © {new Date().getFullYear()} AraliyaScents. All rights reserved.
          </p>
        </section>

        <div className="flex items-center justify-center py-4 sm:py-8">
          <div className="w-full max-w-md">
            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-[0_24px_70px_rgba(47,28,23,0.12)] backdrop-blur-xl sm:p-9">
              <div className="mb-8 flex flex-col items-center text-center">
                <img
                  src="/logo.png"
                  alt="AraliyaScents logo"
                  className="mb-4 h-12 w-auto"
                />
                <h2 className="text-2xl font-semibold text-ink">
                  Welcome back to AraliyaScents
                </h2>
                <p className="text-sm text-secondary/80">
                  Log in to continue your fragrance journey and checkout faster.
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
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 w-full rounded-xl border border-secondary/15 bg-white px-4 text-secondary outline-none transition placeholder:text-secondary/40 focus:border-accent focus:ring-4 focus:ring-accent/10"
                  />
                </div>

                <div className="flex items-center justify-end text-sm">
                  <Link
                    to="/forget-password"
                    className="text-accent hover:underline underline-offset-4"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  onClick={login}
                  className="h-11 w-full rounded-xl bg-accent text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:brightness-110 active:scale-[0.99]"
                >
                  Login
                </button>
                <button
                  onClick={googleLogin}
                  className="h-11 w-full rounded-xl border border-secondary/15 bg-white text-sm font-semibold text-ink shadow-sm transition hover:border-accent/30 hover:bg-accent/5 active:scale-[0.99]"
                >
                  Google Login
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
                New to AraliyaScents?{" "}
                <Link
                  to="/register"
                  className="text-accent hover:underline underline-offset-4"
                >
                  Create your account
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-secondary/70 lg:hidden">
              © {new Date().getFullYear()} AraliyaScents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
