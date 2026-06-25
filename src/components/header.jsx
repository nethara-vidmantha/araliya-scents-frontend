import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import UserData from "./userData";
import UserDataMobile from "./userDataMobile";

export default function Header() {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/products" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/10 bg-primary/90 text-ink shadow-[0_12px_40px_rgba(143,49,81,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex h-[86px] w-full max-w-7xl items-center px-4 sm:px-6 lg:px-10">
        <div className="flex flex-1 items-center justify-between gap-4 lg:hidden">
          <MdMenu className="text-3xl" onClick={() => setIsSidebarOpen(true)} />
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              className="h-[62px] w-[124px] object-contain"
              alt="Araliya Scents logo"
            />
          </Link>
          <Link
            to="/cart"
            className="rounded-full border border-accent/15 p-2 text-2xl transition hover:bg-accent/10"
          >
            <BsCart3 />
          </Link>
        </div>
        {isSideBarOpen && (
          <div className="fixed inset-0 z-[100] bg-black/50 text-secondary">
            <div className="flex h-full w-[320px] max-w-[85vw] flex-col bg-primary shadow-2xl">
              <div className="flex h-[86px] w-full items-center justify-between bg-accent px-4 text-white">
                <MdMenu
                  className="text-3xl"
                  onClick={() => setIsSidebarOpen(false)}
                />
                <img
                  src="/logo.png"
                  className="h-[62px] w-[124px] object-contain"
                  alt="Araliya Scents logo"
                />
              </div>
              <div className="flex flex-col px-3 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsSidebarOpen(false)}
                    className="rounded-2xl border-b border-secondary/10 px-3 py-4 text-lg font-medium text-secondary transition hover:bg-white/65"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/cart"
                  onClick={() => setIsSidebarOpen(false)}
                  className="mt-2 rounded-2xl bg-accent px-4 py-3 text-center font-semibold text-white"
                >
                  Cart
                </Link>
              </div>
              <div className="mt-auto flex justify-center border-t border-secondary/10 p-4">
                <UserDataMobile />
              </div>
            </div>
          </div>
        )}

        <div className="hidden flex-1 items-center justify-between gap-8 lg:flex">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/logo.png"
              className="h-[64px] w-[140px] object-contain"
              alt="Araliya Scents logo"
            />
            <div className="hidden xl:block">
              <p className="text-[11px] uppercase tracking-[0.35em] text-secondary/55">
                Araliya Scents
              </p>
              <p className="text-sm text-secondary/80">
                Luxurious fragrances, curated rituals
              </p>
            </div>
          </Link>
          <nav className="flex items-center gap-2 text-[15px] font-medium text-secondary/90">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-4 py-2 transition hover:bg-accent/10 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <UserData />
            <Link
              to="/cart"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/15 text-xl transition hover:bg-accent/10"
            >
              <BsCart3 />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
