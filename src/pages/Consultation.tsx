import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageSquare,
  Calendar,
  Target,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";

export function Consultation() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-12">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Free <span className="text-blue-500">Consultation</span>
        </h1>
        <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <p className="text-lg text-zinc-400 sm:text-xl">
          Have questions about taking your business, brand, or music project to
          the next edge?
        </p>
        <p className="mt-4 text-lg text-zinc-400 sm:text-xl">
          At NxtEdge IT Park, we offer a completely free consultation to
          evaluate your goals and provide expert recommendations — tailored to
          your needs, with no obligation.
        </p>
      </section>

      {/* How It Works & Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div className="space-y-12">
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">
                How It Works
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Share Your Project Details",
                    desc: "Fill out a short form with your contact info and project goals.",
                    icon: MessageSquare,
                  },
                  {
                    title: "Schedule Your Call or Meeting",
                    desc: "Our team will reach out to discuss your requirements and objectives.",
                    icon: Calendar,
                  },
                  {
                    title: "Receive Your Personalized Strategy",
                    desc: "Get a clear, actionable roadmap designed to grow your digital presence globally.",
                    icon: Target,
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                      <step.icon size={24} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-white">
                        <span className="text-blue-500 mr-2">{i + 1}.</span>
                        {step.title}
                      </h3>
                      <p className="text-zinc-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-zinc-900/50 p-8">
              <h3 className="mb-6 text-xl font-bold text-white">
                Why Choose Our Free Consultation?
              </h3>
              <ul className="space-y-4">
                {[
                  "Tailored Solutions: Get advice specific to your brand, business, or music project.",
                  "Expert Guidance: Learn from a team of international digital marketing professionals.",
                  "Strategic Insights: Identify opportunities for growth, engagement, and revenue.",
                  "No Cost, No Obligation: Receive value before you decide to work with us.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-blue-500"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Alternative Contact Options
              </h3>
              <p className="mb-4 text-zinc-400">
                Prefer direct communication? You can reach us anytime:
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:contact@nxtedgeitpark.com"
                  className="flex items-center gap-3 text-blue-400 hover:text-blue-300"
                >
                  <Mail size={20} /> contact@nxtedgeitpark.com
                </a>
                <a
                  href="https://wa.me/13474003355"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-blue-400 hover:text-blue-300"
                >
                  <Phone size={20} /> WhatsApp: +1 347 400-3355
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="sticky top-24 rounded-3xl border border-white/10 bg-black p-8 shadow-2xl">
              <h2 className="mb-2 text-2xl font-bold text-white">
                Request Your Free Consultation
              </h2>
              <p className="mb-8 text-sm text-zinc-400">
                Fill out the form below and start your journey to success.
              </p>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you for requesting your consultation! Our team will contact you shortly to schedule your call.",
                  );
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Type of Project / Service Interested In *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select a service...</option>
                    <option value="seo">SEO & Digital Marketing</option>
                    <option value="ads">Paid Advertising (Google/Meta)</option>
                    <option value="social">Social Media Management</option>
                    <option value="ecommerce">E-Commerce Growth</option>
                    <option value="music">Music & Artist Promotion</option>
                    <option value="design">Creative Design & Video</option>
                    <option value="web">Web Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Message / Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700"
                >
                  Request Free Consultation <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
