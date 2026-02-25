import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Share2,
  Megaphone,
  ShoppingCart,
  PenTool,
  Music,
  Video,
  Code,
} from "lucide-react";

export function Services() {
  const services = [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      icon: Search,
      features: [
        "On-Page SEO",
        "Off-Page SEO",
        "Technical SEO",
        "YouTube SEO",
        "Keyword Research",
        "Website Audit & Optimization",
      ],
      desc: "We optimize your website for search engines to improve visibility, increase organic traffic, and drive genuine conversions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "social",
      title: "Social Media Marketing & Management",
      icon: Share2,
      features: [
        "Facebook, Instagram, TikTok, Pinterest management",
        "YouTube SEO & Channel Growth",
        "Content Scheduling & Engagement",
      ],
      desc: "We help your brand stand out across every social platform with strategic content, consistent posting, and audience engagement.",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "performance",
      title: "Performance Marketing (Paid Advertising)",
      icon: Megaphone,
      features: [
        "Google Ads (Search, Display, Shopping)",
        "Meta Ads (Facebook & Instagram)",
        "YouTube, TikTok, Pinterest Ads",
      ],
      desc: "Our data-driven ad strategies ensure the highest ROI by targeting the right audience at the right time.",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Business Growth",
      icon: ShoppingCart,
      features: [
        "Shopify / WooCommerce Store Setup",
        "Product Marketing & Optimization",
        "Conversion Rate Optimization",
      ],
      desc: "We empower e-commerce businesses with smart systems, seamless user experience, and growth-oriented marketing solutions.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "branding",
      title: "Branding, Content & Promotion",
      icon: PenTool,
      features: [
        "Personal & Corporate Branding",
        "Social Media Promotions",
        "Copywriting & Creative Campaigns",
      ],
      desc: "We build brands that people remember — through strategic storytelling, visual content, and audience-focused marketing.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: "music",
      title: "Music Promotion & Artist Growth",
      icon: Music,
      features: [
        "Spotify, SoundCloud, Apple Music",
        "Bandcamp, BandLab Organic Growth",
        "YouTube & TikTok Music Campaigns",
      ],
      desc: "We promote artists organically across all major music platforms, helping you grow your fanbase and reach global listeners.",
      color: "from-rose-500 to-orange-500",
    },
    {
      id: "creative",
      title: "Creative Design & Video Production",
      icon: Video,
      features: [
        "Graphics Design (Photoshop, Illustrator, Canva)",
        "Video Editing (Premiere Pro, After Effects)",
        "Motion Graphics & Short-form Video",
      ],
      desc: "Our creative experts craft visuals and videos that define your brand and leave a lasting impression.",
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      id: "web",
      title: "Web Development & Analytics",
      icon: Code,
      features: [
        "Website Design & Development",
        "Landing Page & Portfolio Creation",
        "Analytics, Tracking & Reporting",
      ],
      desc: "We design fast, responsive, and user-friendly websites, backed by detailed analytics to measure and improve performance.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-24 pt-12">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Our <span className="text-blue-500">Services</span>
        </h1>
        <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <p className="text-lg text-zinc-400 sm:text-xl">
          We provide end-to-end digital marketing and creative services for
          brands, businesses, and artists worldwide.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-3xl border border-white/5 bg-zinc-900/30 p-8 transition-all hover:border-blue-500/30 hover:bg-zinc-800/50"
            >
              <div>
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${service.color} p-4 text-white shadow-lg`}
                >
                  <service.icon size={32} />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="mb-6 text-zinc-400">{service.desc}</p>
                <ul className="mb-8 space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-zinc-300"
                    >
                      <span className="mt-0.5 text-blue-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/consultation"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black px-6 py-3 text-sm font-semibold text-white transition-all group-hover:bg-blue-600 group-hover:border-blue-600"
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 sm:mx-6 lg:mx-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-black p-8 text-center sm:p-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to elevate your digital presence?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-200">
            Let's take your brand, business, or music project to the next edge.
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-900 transition-all hover:bg-zinc-200"
          >
            Request Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
