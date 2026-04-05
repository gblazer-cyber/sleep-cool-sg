/*
 * Design: Tropical Rationalist
 * Footer: Clean, minimal. Brand name, WhatsApp CTA, disclaimer, future link placeholders.
 */
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL, BRAND_NAME } from "@shared/const";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-600 text-white text-sm font-bold">
                SC
              </span>
              {BRAND_NAME}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A compact bed-cooling system built for hot nights in Singapore. Stay comfortable without running the aircon all night.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <a href="#how-it-works" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">How it works</a>
            <a href="#benefits" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Benefits</a>
            <a href="#faq" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">FAQ</a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Get in touch</h4>
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
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-slate-700/50">
          <p className="text-xs text-slate-500 leading-relaxed">
            Product details may vary depending on setup and bed configuration. Sleep Cool SG is a Singapore-based startup building practical cooling solutions for better sleep.
          </p>
          <p className="text-xs text-slate-600 mt-3">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
