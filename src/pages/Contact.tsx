import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  CreditCard,
} from "lucide-react";

export function Contact() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-12">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <p className="text-lg text-zinc-400 sm:text-xl">
          Let's Build the Future Together. Have a project in mind or need a
          professional digital solution? We'd love to hear from you!
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div className="space-y-12">
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">
                Direct Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Global Email</p>
                    <a
                      href="mailto:contact@nxtedgeitpark.com"
                      className="text-lg font-semibold text-white hover:text-blue-400"
                    >
                      contact@nxtedgeitpark.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Phone (New York)</p>
                    <a
                      href="tel:+13474003355"
                      className="text-lg font-semibold text-white hover:text-blue-400"
                    >
                      +1 347 400-3355
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Phone (Sylhet)</p>
                    <a
                      href="tel:+8801540789449"
                      className="text-lg font-semibold text-white hover:text-blue-400"
                    >
                      +880 1540-789449
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">
                Branches
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
                  <MapPin className="mb-4 text-blue-500" size={24} />
                  <h3 className="mb-2 text-lg font-bold text-white">
                    New York, USA
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Business Hours: Always Open
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
                  <MapPin className="mb-4 text-blue-500" size={24} />
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Sylhet, Bangladesh
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Business Hours: Always Open
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">
                Connect With Us
              </h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://facebook.com/nxtedgeitpark0"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/nxtedgeitpark"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-pink-600 hover:text-white"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-blue-700 hover:text-white"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-red-600 hover:text-white"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://twitter.com/NxtedgeItPark"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-blue-400 hover:text-white"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="sticky top-24 rounded-3xl border border-white/10 bg-black p-8 shadow-2xl">
              <h2 className="mb-2 text-2xl font-bold text-white">
                Get in Touch With Us
              </h2>
              <p className="mb-8 text-sm text-zinc-400">
                Fill out the form below, and our team will get back to you
                shortly.
              </p>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you for reaching out! Our team will get back to you shortly.",
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
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Subject / Project Type *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700"
                >
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="bg-zinc-900/30 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex rounded-full bg-blue-500/10 p-4 text-blue-500">
            <CreditCard size={32} />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Accepted Payment Methods
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-400">
            We make international payments simple and secure. NxtEdge IT Park
            accepts multiple trusted payment methods for clients worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "PayPal",
              "Cash App",
              "Zelle",
              "Venmo",
              "Apple Pay",
              "Google Pay",
              "Payoneer",
              "Western Union",
              "Bank Transfer",
            ].map((method) => (
              <div
                key={method}
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white"
              >
                <span className="text-blue-500">✓</span> {method}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
