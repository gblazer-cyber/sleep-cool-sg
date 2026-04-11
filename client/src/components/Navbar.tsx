/*
 * Design: Tropical Rationalist — Scandinavian-Tropical Fusion
 * Navbar: Clean, sticky, translucent backdrop. DM Sans 500 for nav links.
 * Teal CTA button top-right. Minimal, airy, practical.
 */
import { useState, useEffect } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL, BRAND_NAME } from "@shared/const";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/pasted_file_p9Kc8q_image_ae018007.png"
            alt="Sleep Cool SG"
            className="h-10 object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm py-2.5 px-5"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-700"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
          <div className="container py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-700 py-2 hover:text-teal-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-3 px-5 justify-center mt-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
