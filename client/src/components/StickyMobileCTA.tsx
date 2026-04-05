/*
 * Design: Tropical Rationalist
 * Sticky mobile CTA: Fixed bottom bar on mobile with WhatsApp button.
 * Visible only on small screens, hidden on desktop.
 */
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "@shared/const";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 p-3 safe-area-bottom">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp w-full justify-center text-base py-3.5"
      >
        <WhatsAppIcon className="w-5 h-5" />
        Chat on WhatsApp
      </a>
    </div>
  );
}
