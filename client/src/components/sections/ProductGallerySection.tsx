/*
 * Design: Tropical Rationalist
 * Product Gallery Section — User's product photos only
 * Clean, minimal layout. No editing, no extras.
 */
import { SectionReveal } from "@/components/SectionReveal";

const GALLERY_IMAGES = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/pasted_file_htkUq7_image_48af6330.png",
    alt: "Sleep Cool device in use"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/pasted_file_XYzEoO_image_b93d6754.png",
    alt: "Sleep Cool device side view"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/pasted_file_c9PNtV_image_e66c7d04.png",
    alt: "Sleep Cool device in bedroom"
  }
];

export function ProductGallerySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((image, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
