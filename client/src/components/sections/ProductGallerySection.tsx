/*
 * Design: Tropical Rationalist
 * Product Gallery Section — 4 realistic product photos
 * Grid layout, clean and minimal
 */
import { SectionReveal } from "@/components/SectionReveal";

const GALLERY_IMAGES = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/gallery-1-device-angle-72dVSZBcEXkeL7QFg6aujj.webp",
    alt: "Sleep Cool device from 45-degree angle",
    caption: "Complete device view"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/gallery-2-duct-detail-c3qryHv4DJy9miRsEcd3zz.webp",
    alt: "Orange duct and connection detail",
    caption: "Duct detail"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/gallery-3-in-use-U9xAAhCdqYd267mRLFnid3.webp",
    alt: "Device in use beside bed with duct under sheets",
    caption: "In use"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/gallery-4-size-context-Cz4ZindaV32jjwaFBHXRTE.webp",
    alt: "Device size context next to bed",
    caption: "Size reference"
  }
];

export function ProductGallerySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <SectionReveal>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See it in action
            </h2>
            <p className="text-lg text-slate-600">
              Real product. Real bedroom. Real results.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GALLERY_IMAGES.map((image, idx) => (
              <div key={idx} className="group overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 bg-white">
                  <p className="text-sm font-medium text-slate-900">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
