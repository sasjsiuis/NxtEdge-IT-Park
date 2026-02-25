import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  CheckCircle2,
  Users,
  Star,
  PlayCircle,
} from "lucide-react";
import { useContent } from "../context/ContentContext";

export function Home() {
  const { content } = useContent();

  const getTestimonials = () => {
    try {
      return JSON.parse(content["home.testimonials.list"] || "[]");
    } catch (e) {
      return [];
    }
  };

  const testimonials = getTestimonials();

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* SECTION 1 - HERO AREA */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-24 text-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505]"></div>
        <div 
          className="absolute inset-0 z-0 opacity-10 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url('${content["image.hero.bg"] || "https://picsum.photos/seed/tech/1920/1080?blur=10"}')` }}
        ></div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            Empowering Global Growth Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              Digital Innovation
            </span>{" "}
            🌍
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-zinc-400 sm:text-xl">
            NxtEdge IT Park is a global digital marketing company helping
            brands, artists, and entrepreneurs achieve organic and paid growth
            through data-driven strategies and creative excellence.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/services"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-700 sm:w-auto"
            >
              Explore Our Services <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-zinc-800 sm:w-auto"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Animated Counters */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
            {[
              { label: "Countries Served", value: "50+", icon: "🌍" },
              { label: "Projects Completed", value: "700+", icon: "🚀" },
              { label: "Long-Term Partners", value: "120+", icon: "🤝" },
              { label: "Client Satisfaction", value: "98%", icon: "💯" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 - ABOUT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A Global Hub of <br />
              <span className="text-blue-500">Digital Excellence</span>
            </h2>
            <div className="mb-8 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <p className="mb-6 text-lg text-zinc-400">
              Founded by Ahmed Al Marjan, NxtEdge IT Park started in Sylhet,
              Bangladesh, and expanded to New York, USA — becoming a trusted
              global agency delivering innovative digital marketing solutions,
              creative campaigns, and long-term brand growth.
            </p>
            <p className="mb-8 text-lg text-zinc-400">
              We believe in innovation, transparency, and client success. Every
              project is handled with passion, precision, and purpose.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-xl"></div>
            <img
              src={content["home.about.image"] || "https://picsum.photos/seed/teamwork/800/600"}
              alt="Team Working"
              className="relative rounded-2xl object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 - SERVICES */}
      <section className="bg-zinc-900/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Powerful Digital Solutions, <br />
              <span className="text-blue-500">Tailored for Your Growth</span>
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              We provide end-to-end digital marketing and creative services for
              brands, businesses, and artists worldwide.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Digital Marketing & SEO",
                desc: "Google ranking, keyword optimization, site audit",
                iconKey: "icon.service.1",
              },
              {
                title: "Paid Campaigns",
                desc: "Google Ads, Meta Ads, Pinterest & YouTube Promotion",
                iconKey: "icon.service.2",
              },
              {
                title: "Social Media Management",
                desc: "Branding, Engagement & Growth",
                iconKey: "icon.service.3",
              },
              {
                title: "E-commerce & Lead Gen",
                desc: "Product Ads, Store Optimization, Funnels",
                iconKey: "icon.service.4",
              },
              {
                title: "Music & Artist Promotion",
                desc: "Spotify, SoundCloud, Apple Music, YouTube",
                iconKey: "icon.service.5",
              },
              {
                title: "Creative Design",
                desc: "Photoshop, Illustrator, Canva",
                iconKey: "icon.service.6",
              },
              {
                title: "Video Production",
                desc: "Premiere Pro, After Effects",
                iconKey: "icon.service.7",
              },
              {
                title: "Web Dev & Analytics",
                desc: "Modern Websites, Conversion Reports",
                iconKey: "icon.service.8",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:bg-zinc-800/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors overflow-hidden">
                  {content[service.iconKey] ? (
                    <img src={content[service.iconKey]} alt={service.title} className="h-full w-full object-contain p-2" />
                  ) : (
                    <CheckCircle2 size={24} />
                  )}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 - FEATURED PROJECTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              See How We <span className="text-blue-500">Deliver Impact</span>
            </h2>
            <div className="mb-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <p className="max-w-2xl text-lg text-zinc-400">
              From small startups to global enterprises, we've helped hundreds
              of clients grow online with measurable results.
            </p>
          </div>
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300"
          >
            View Case Studies <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Google Ads Campaign Success",
              category: "Performance Marketing",
              img: content["image.project1"] || "https://picsum.photos/seed/graph/600/400",
            },
            {
              title: "Spotify Music Growth",
              category: "Artist Promotion",
              img: content["image.project2"] || "https://picsum.photos/seed/music/600/400",
            },
            {
              title: "Brand Identity Redesign",
              category: "Creative Design",
              img: content["image.project3"] || "https://picsum.photos/seed/brand/600/400",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-500">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 - TESTIMONIALS */}
      <section className="bg-zinc-900/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Real Feedback.{" "}
              <span className="text-blue-500">Real Results.</span>
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((review: any, i: number) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-white/5 bg-black p-6"
              >
                <div>
                  <div className="mb-4 flex text-yellow-500">
                    {[...Array(review.rating || 5)].map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mb-6 text-zinc-300">"{review.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  {review.image && (
                    <img src={review.image} alt={review.author} className="h-10 w-10 rounded-full object-cover" />
                  )}
                  <div>
                    <p className="font-semibold text-white">{review.author}</p>
                    <p className="text-sm text-zinc-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - LEADERSHIP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-xl"></div>
            <img
              src={content["home.leadership.image"] || "https://picsum.photos/seed/ceo/600/800"}
              alt="Ahmed Al Marjan"
              className="relative rounded-2xl object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Meet the Vision Behind <br />
              <span className="text-blue-500">NxtEdge IT Park</span>
            </h2>
            <div className="mb-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

            <h3 className="mb-2 text-2xl font-semibold text-white">
              Ahmed Al Marjan
            </h3>
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-blue-400">
              Entrepreneur | CEO | Speaker | Freelancer
            </p>

            <p className="mb-8 text-lg text-zinc-400">
              Ahmed Al Marjan founded NxtEdge IT Park with a vision to connect
              creativity and global innovation. Under his leadership, the
              company has expanded from Sylhet to New York, building a global
              network of digital experts in SEO, Ads, Design, and Tech.
            </p>

            <Link
              to="/team"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700"
            >
              Meet Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 - CTA */}
      <section className="mx-4 sm:mx-6 lg:mx-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-black p-8 text-center sm:p-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's Build Your Digital Success Story 🚀
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-200">
            Talk with our expert team and discover how we can take your brand,
            business, or music career to the next level.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/consultation"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-900 transition-all hover:bg-zinc-200 sm:w-auto"
            >
              Book Your Free Consultation
            </Link>
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-blue-200 sm:flex-row">
            <span className="flex items-center gap-2">
              📞 WhatsApp: +1 347 400-3355
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              ✉️ Email: contact@nxtedgeitpark.com
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
