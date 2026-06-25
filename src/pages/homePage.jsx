import { Link, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import { ProductPage } from "./productPage";
import ProductOverview from "./productOverview";
import CartPage from "./cart";
import CheckoutPage from "./checkout";

const collections = [
  {
    title: "Signature perfumes",
    description:
      "Elegant blends built to feel memorable from the first spray to the final dry down.",
  },
  {
    title: "Everyday mists",
    description:
      "Light, wearable fragrances that move with your day and stay refined close to the skin.",
  },
  {
    title: "Evening accords",
    description:
      "Deeper notes and richer finishes for nights that call for a more intimate trail.",
  },
];

const features = [
  "Fine fragrance profiles",
  "Layer-friendly compositions",
  "Fast, elegant checkout flow",
  "A warm neutral palette built for scent discovery",
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary/70">
        {eyebrow}
      </p>
      <h2 className="text-4xl leading-none text-ink sm:text-5xl">{title}</h2>
      <p className="max-w-xl text-sm leading-7 text-secondary sm:text-base">
        {description}
      </p>
    </div>
  );
}

function LandingPage() {
  return (
    <main className="relative overflow-hidden bg-primary text-secondary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(90,1,23,0.14),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(139,97,66,0.18),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.45),_transparent_18%)]" />

      <section className="relative mx-auto grid max-w-7xl gap-14 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
        <div className="flex flex-col justify-center gap-8">
          <div className="space-y-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/15 bg-white/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/80 shadow-sm backdrop-blur">
              New scent drop 2026
            </p>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
                Perfume that lingers like a memory.
              </h1>
              <p className="max-w-xl text-base leading-8 text-secondary sm:text-lg">
                Araliya Scents is a luxury fragrance storefront shaped around
                calm surfaces, glowing accents, and bottles that feel curated
                for every mood and moment.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Shop fragrances
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-secondary/20 bg-white/50 px-6 py-3 text-sm font-semibold text-secondary transition hover:bg-white"
            >
              Our story
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [
                "01",
                "Sillage",
                "A fragrance trail that feels polished, present, and memorable.",
              ],
              [
                "02",
                "Note balance",
                "Creamy florals, soft woods, and warm amber for layered depth.",
              ],
              [
                "03",
                "Easy shopping",
                "Browse, add, and checkout through a clean, luxury flow.",
              ],
            ].map(([index, title, description]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/40 bg-white/45 p-5 shadow-[0_20px_45px_rgba(90,1,23,0.08)] backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60">
                  {index}
                </p>
                <h3 className="mt-4 text-2xl text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[540px] rounded-[2rem] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.45))] p-5 shadow-[0_30px_80px_rgba(47,28,23,0.18)] backdrop-blur">
            <div className="absolute inset-x-6 top-6 h-[260px] rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(143,49,81,0.16),transparent_28%),radial-gradient(circle_at_70%_20%,rgba(122,92,83,0.24),transparent_30%),linear-gradient(135deg,rgba(255,250,246,0.92),rgba(246,239,231,0.96))]" />
            <div className="relative flex min-h-[660px] flex-col justify-between rounded-[2rem] border border-white/70 p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-secondary/70">
                <span>Signature blend</span>
                <span>2026</span>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.8rem] border border-white/70 bg-white/60 p-4 shadow-sm">
                  <div className="flex h-[320px] items-end justify-center rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(255,250,246,0.15),rgba(143,49,81,0.18))] p-4">
                    <div className="relative h-[250px] w-[150px] rounded-[2.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0.35))] shadow-[0_20px_60px_rgba(143,49,81,0.18)]">
                      <div className="absolute inset-x-5 top-4 h-[42px] rounded-full bg-[linear-gradient(180deg,rgba(143,49,81,0.95),rgba(122,92,83,0.7))]" />
                      <div className="absolute inset-x-6 top-14 h-[164px] rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.95),transparent_38%),linear-gradient(180deg,rgba(143,49,81,0.92),rgba(233,197,167,0.92))]" />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-secondary">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                      Evening accord
                    </p>
                    <p className="text-xl text-ink">
                      Structured, radiant, and softly dramatic.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.8rem] border border-white/70 bg-white/55 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60">
                      Fragrance notes
                    </p>
                    <p className="mt-3 text-2xl text-ink">
                      Soft florals. Creamy woods. An elegant, lasting finish.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {collections.slice(0, 2).map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[1.5rem] border border-white/70 bg-white/55 p-4"
                      >
                        <h3 className="text-2xl text-ink">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-secondary/80">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[1.5rem] border border-accent/15 bg-accent/10 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                      Quick details
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-secondary">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <SectionTitle
          eyebrow="Collections"
          title="A scent cabinet built like an editorial counter display."
          description="Every collection is presented as a complete fragrance direction, giving Araliya Scents a premium boutique feel rather than a generic product grid."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="rounded-[1.75rem] border border-white/50 bg-white/45 p-6 shadow-[0_18px_50px_rgba(90,1,23,0.08)] backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/60">
                Collection
              </p>
              <h3 className="mt-4 text-3xl text-ink">{collection.title}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">
                {collection.description}
              </p>
              <Link
                to="/products"
                className="mt-6 inline-flex text-sm font-semibold text-accent transition hover:translate-x-1"
              >
                Browse pieces
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-16">
        <div className="rounded-[2rem] border border-white/55 bg-white/45 p-6 shadow-[0_22px_60px_rgba(90,1,23,0.08)] backdrop-blur">
          <SectionTitle
            eyebrow="Brand story"
            title="Designed to feel calm, considered, and memorable."
            description="The interface leans into the same language as the brand: muted surfaces, rosewood accents, and clean composition. It gives the store a premium fragrance feel without losing usability."
          />
          <div className="mt-8 space-y-4 text-sm leading-7 text-secondary/90">
            <p>
              Built for a fragrance house, the storefront emphasizes the scent
              itself first, then layers in mood cues and a streamlined buying
              path.
            </p>
            <p>
              You can keep the existing product backend and still present it
              with a more editorial shopping experience.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-accent/15 bg-[linear-gradient(180deg,rgba(90,1,23,0.11),rgba(255,255,255,0.45))] p-6 shadow-[0_22px_60px_rgba(90,1,23,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/60">
                Scent direction
              </p>
              <h3 className="mt-3 text-4xl text-ink">
                Refined blends for every season.
              </h3>
            </div>
            <Link
              to="/products"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              Shop now
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60">
                Signature wear
              </p>
              <p className="mt-3 text-xl text-ink">
                A shopping experience that feels curated, not crowded.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-white/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60">
                Conversion ready
              </p>
              <p className="mt-3 text-xl text-ink">
                Clear actions, simple navigation, and fast product discovery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-10">
      <SectionTitle
        eyebrow="About"
        title="A modern fragrance house with a quiet point of view."
        description="The brand language is intentionally restrained: warm neutrals, rose accents, and thoughtful spacing that let every scent feel premium."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          "Designed for clean scent stories and easy layering.",
          "Built around a palette that feels rich, elegant, and timeless.",
          "Structured to support real shopping, not just visual mockups.",
        ].map((item) => (
          <div
            key={item}
            className="rounded-[1.5rem] border border-white/50 bg-white/50 p-5 text-sm leading-7 text-secondary shadow-sm backdrop-blur"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-10">
      <SectionTitle
        eyebrow="Contact"
        title="Reach the scent studio."
        description="Use this space for customer care, wholesale, or fragrance consultation. The page is styled like the rest of the brand instead of being a placeholder header."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          ["Customer care", "hello@araliyascents.com"],
          ["WhatsApp", "+94 77 000 0000"],
          ["Studio", "Colombo, Sri Lanka"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="rounded-[1.5rem] border border-white/50 bg-white/50 p-5 shadow-sm backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/60">
              {title}
            </p>
            <p className="mt-4 text-2xl text-ink">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 py-20 sm:px-6 lg:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
        404
      </p>
      <h1 className="text-5xl text-ink">
        This page could not be blended into the collection.
      </h1>
      <p className="max-w-2xl text-base leading-8 text-secondary">
        Use the navigation to return to the storefront, browse the collection,
        or continue to checkout.
      </p>
      <Link
        to="/products"
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
      >
        Go to products
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-primary">
      <Header />
      <Routes path="/">
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/overview/:id" element={<ProductOverview />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
