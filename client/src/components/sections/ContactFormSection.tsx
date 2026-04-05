/*
 * Design: Tropical Rationalist
 * Contact Form: Secondary, minimal form. WhatsApp remains primary.
 * Fields: Name, Phone/WhatsApp, Bed size, Message.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { useState } from "react";
import { toast } from "sonner";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bedSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since there's no backend, construct a WhatsApp message with form data
    const text = encodeURIComponent(
      `Hi, I'm interested in Sleep Cool SG.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nBed size: ${formData.bedSize}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/6500000000?text=${text}`, "_blank");
    toast.success("Opening WhatsApp with your details...");
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50/50">
      <div className="container">
        <SectionReveal>
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Prefer to leave your details?
              </h2>
              <p className="text-sm text-slate-500">
                Fill in the form below and we'll reach out to you on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                  placeholder="+65 XXXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="bedSize" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Bed size
                </label>
                <select
                  id="bedSize"
                  value={formData.bedSize}
                  onChange={(e) => setFormData({ ...formData, bedSize: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all appearance-none"
                >
                  <option value="">Select your bed size</option>
                  <option value="single">Single</option>
                  <option value="super-single">Super Single</option>
                  <option value="queen">Queen</option>
                  <option value="king">King</option>
                  <option value="other">Other / Not sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all resize-none"
                  placeholder="Any questions or details about your setup..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl py-3.5 text-sm transition-colors duration-200"
              >
                Send via WhatsApp
              </button>

              <p className="text-xs text-slate-400 text-center">
                This will open WhatsApp with your details pre-filled.
              </p>
            </form>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
