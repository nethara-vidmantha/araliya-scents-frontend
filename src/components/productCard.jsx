import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const product = props.product;
  const image = product.images?.[0] ?? "/logo.png";
  const altNames = Array.isArray(product.altNames) ? product.altNames : [];
  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-[1.9rem] border border-white/65 bg-white/70 shadow-[0_20px_50px_rgba(143,49,81,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(143,49,81,0.14)]">
      <div className="relative overflow-hidden">
        <img
          className="h-[290px] w-full object-cover transition duration-500 group-hover:scale-105"
          src={image}
          alt={product.name}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(38,24,22,0.32))]" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary backdrop-blur">
          {product.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/50">
            {product.productID}
          </p>
          <h1 className="text-3xl leading-tight text-ink">{product.name}</h1>
          {altNames.length > 0 && (
            <p className="text-sm leading-6 text-secondary/75">
              {altNames.slice(0, 2).join(" · ")}
            </p>
          )}
        </div>
        <div className="mt-auto flex items-end justify-between gap-4">
          <div>
            {product.labelledPrice > product.price ? (
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-secondary line-through">
                  LKR {product.labelledPrice.toFixed(2)}
                </p>
                <p className="text-2xl font-semibold text-accent">
                  LKR {product.price.toFixed(2)}
                </p>
              </div>
            ) : (
              <p className="text-2xl font-semibold text-accent">
                LKR {product.price.toFixed(2)}
              </p>
            )}
          </div>
          <Link
            to={`/overview/${product.productID}`}
            className="inline-flex items-center justify-center rounded-full border border-accent/20 bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
