import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

export function Achievements() {
  const projects = [
    {
      title: "SEO & Branding for European Businesses",
      desc: "Improved organic visibility by 250%",
      img: "https://picsum.photos/seed/seo-dash/600/400",
      category: "SEO",
    },
    {
      title: "E-commerce Growth Strategy",
      desc: "Generated $80K+ revenue in 3 months via Google & Meta Ads",
      img: "https://picsum.photos/seed/ecom/600/400",
      category: "Performance Marketing",
    },
    {
      title: "Spotify Artist Promotion",
      desc: "Organic growth across Spotify, Apple Music, SoundCloud",
      img: "https://picsum.photos/seed/spotify2/600/400",
      category: "Music Promotion",
    },
    {
      title: "Corporate Web Development",
      desc: "High-performing, conversion-focused websites",
      img: "https://picsum.photos/seed/webdev/600/400",
      category: "Web Development",
    },
    {
      title: "Social Media Strategy for U.S. Startups",
      desc: "4x increase in engagement within 60 days",
      img: "https://picsum.photos/seed/social2/600/400",
      category: "Social Media",
    },
  ];

  const testimonials = [
    {
      quote:
        "Working with NxtEdge IT Park was a game-changer for our business. SEO and ads doubled our sales within weeks!",
      author: "Sophia Meyer",
      location: "Berlin (E-commerce Brand)",
      avatar: "https://picsum.photos/seed/sophia/100/100",
    },
    {
      quote:
        "They helped me grow my Spotify audience organically and manage my global social presence. Highly recommended!",
      author: "DJ Revan",
      location: "London (Music Artist)",
      avatar: "https://picsum.photos/seed/revan/100/100",
    },
    {
      quote:
        "Professional, transparent, and result-oriented — a global team that delivers.",
      author: "James Parker",
      location: "USA (Corporate Client)",
      avatar: "https://picsum.photos/seed/james/100/100",
    },
    {
      quote:
        "Amazing collaboration! My YouTube channel saw 3x growth in subscribers within two months.",
      author: "Emma Thompson",
      location: "UK (YouTube Creator)",
      avatar: "https://picsum.photos/seed/emma/100/100",
    },
    {
      quote:
        "Their branding strategy completely transformed our corporate identity. Truly exceptional!",
      author: "Liam Garcia",
      location: "Canada (Corporate Client)",
      avatar: "https://picsum.photos/seed/liam/100/100",
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-24 pt-12">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Achievements & <br />
          <span className="text-blue-500">Client Success</span>
        </h1>
        <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <p className="text-lg text-zinc-400 sm:text-xl">
          Every success story begins with a vision — and at NxtEdge IT Park, we
          transform that vision into measurable growth.
        </p>
        <p className="mt-4 text-lg text-zinc-400 sm:text-xl">
          From startups to global enterprises, our strategies empower brands and
          artists to reach new audiences and achieve long-lasting results. We
          don't just deliver projects; we build partnerships that create real
          impact worldwide.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-zinc-900/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Successful Global Campaigns", value: "700+" },
              { label: "Client Satisfaction Rate", value: "97%" },
              { label: "Countries Served", value: "50+" },
              { label: "Long-Term Partnerships", value: "120+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="mb-2 block text-4xl font-extrabold text-blue-500 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-zinc-900"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-500">
                  {project.category}
                </p>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-900/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Real voices. Real results.
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((review, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-white/5 bg-black p-8"
              >
                <div>
                  <div className="mb-6 flex text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mb-8 text-lg italic text-zinc-300">
                    "{review.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="h-12 w-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-white">{review.author}</p>
                    <p className="text-sm text-zinc-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Why Our Clients Trust Us
            </h2>
            <div className="mb-8 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <ul className="space-y-4">
              {[
                "Data-driven marketing strategies",
                "Transparent communication and reporting",
                "Long-term results over short-term gains",
                "Experienced global team",
                "24/7 client support",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-lg text-zinc-300"
                >
                  <CheckCircle2 className="text-blue-500" size={24} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xl font-semibold text-white">
              At NxtEdge IT Park, your success is our success.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-xl bg-white/5 p-4"
              >
                <img
                  src={`https://picsum.photos/seed/logo${i}/100/100`}
                  alt="Client Logo"
                  className="object-contain mix-blend-screen"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 sm:mx-6 lg:mx-8">
        <div className="rounded-3xl bg-blue-600 p-8 text-center sm:p-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's Create Your Success Story
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
            Have an idea, project, or vision? Let's turn it into the next global
            success story. Start your project today with NxtEdge IT Park.
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-900 transition-all hover:bg-zinc-100"
          >
            Get a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
