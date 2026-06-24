import { useState } from "react";

export default function ImageSlider(props) {
  const images = props.images;
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,250,246,0.55))] p-3 shadow-[0_20px_50px_rgba(143,49,81,0.08)]">
        <img
          className="h-[420px] w-full rounded-[1.35rem] object-cover"
          src={images[activeImage]}
          alt="Product gallery"
        />
      </div>
      <div className="mt-4 flex w-full flex-wrap justify-center gap-3">
        {images.map((img, index) => {
          return (
            <button
              type="button"
              onClick={() => {
                setActiveImage(index);
              }}
              key={index}
              className={
                "overflow-hidden rounded-2xl border transition " +
                (activeImage == index
                  ? "border-accent ring-4 ring-accent/15"
                  : "border-white/70 hover:border-accent/35")
              }
            >
              <img
                className="h-[84px] w-[84px] object-cover"
                src={img}
                alt={`Product thumbnail ${index + 1}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
