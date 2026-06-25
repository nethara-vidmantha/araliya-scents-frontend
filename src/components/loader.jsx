export function Loader() {
  return (
    <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center gap-4">
      <div className="h-[92px] w-[92px] animate-spin rounded-full border-[8px] border-accent/25 border-t-accent border-r-accent/60 border-b-accent/10"></div>
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
        Loading collection
      </p>
    </div>
  );
}
