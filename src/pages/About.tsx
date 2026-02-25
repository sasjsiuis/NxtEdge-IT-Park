import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  Lightbulb,
  Users,
  Globe2,
  Award,
} from "lucide-react";

import { useContent } from "../context/ContentContext";

export function About() {
  const { content } = useContent();

  return (
    <div className="flex flex-col gap-24 pb-24 pt-12">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          About <span className="text-blue-500">Us</span>
        </h1>
        <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <p className="text-lg text-zinc-400 sm:text-xl">
          NxtEdge IT Park is a global digital marketing and IT company dedicated
          to helping brands, creators, and businesses achieve measurable growth
          through innovation and strategy.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-zinc-400">
              <p>
                Founded in Sylhet, Bangladesh, and expanded to New York, USA, we
                proudly serve clients across Europe, America, and Asia.
              </p>
              <p>
                We specialize in a full range of digital services — including
                SEO, Performance Marketing, Web Development, Creative Design,
                Branding, and Music Promotion — delivering results that
                transform businesses into global brands.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={content["image.about.office1"] || "https://picsum.photos/seed/office1/400/400"}
              alt="Office"
              className="rounded-2xl object-cover"
              referrerPolicy="no-referrer"
            />
            <img
              src={content["image.about.office2"] || "https://picsum.photos/seed/office2/400/400"}
              alt="Team"
              className="mt-8 rounded-2xl object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-zinc-900/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-black p-10">
              <div className="mb-6 inline-flex rounded-full bg-blue-500/10 p-4 text-blue-500">
                <Target size={32} />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p className="text-zinc-400">
                To empower businesses and artists worldwide by delivering
                data-driven digital marketing solutions, innovative strategies,
                and sustainable growth that lasts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/5 bg-black p-10">
              <div className="mb-6 inline-flex rounded-full bg-indigo-500/10 p-4 text-indigo-500">
                <Eye size={32} />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
              <p className="text-zinc-400">
                To become one of the world's most trusted and forward-thinking
                IT marketing companies — inspiring digital innovation,
                connecting cultures, and creating meaningful global impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Our Core Values
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Integrity & Transparency",
              desc: "We believe in honesty, trust, and open communication.",
              icon: Shield,
            },
            {
              title: "Creativity & Innovation",
              desc: "Every project deserves a fresh, modern approach.",
              icon: Lightbulb,
            },
            {
              title: "Client Success First",
              desc: "Your growth defines our success.",
              icon: Award,
            },
            {
              title: "Quality & Consistency",
              desc: "We deliver excellence in every project, big or small.",
              icon: Target,
            },
            {
              title: "Global Collaboration",
              desc: "Working beyond borders, united by one digital vision.",
              icon: Globe2,
            },
          ].map((value, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-white/5 bg-zinc-900/50 p-6"
            >
              <div className="text-blue-500">
                <value.icon size={24} />
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-white">{value.title}</h4>
                <p className="text-sm text-zinc-400">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-zinc-900/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Meet Our Founder & CEO
              </h2>
              <div className="mb-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <h3 className="mb-2 text-2xl font-semibold text-white">
                Ahmed Al Marjan
              </h3>
              <p className="mb-6 text-lg text-zinc-400">
                Ahmed Al Marjan, born in Sylhet, Bangladesh, is a visionary
                entrepreneur and digital strategist who founded NxtEdge IT Park
                with the dream of building a global IT ecosystem.
              </p>
              <p className="mb-6 text-lg text-zinc-400">
                His journey started with a passion for creativity and technology
                — a combination that now drives NxtEdge IT Park's global
                success. Over the years, Ahmed has collaborated with
                international clients from Europe and America, leading
                successful campaigns that focus on brand growth, innovation, and
                measurable results.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-zinc-300">
                "Success isn't just about growth; it's about creating real value
                for people and the brands we serve."
              </blockquote>
            </div>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-xl"></div>
              <img
                src={content["home.leadership.image"] || "https://picsum.photos/seed/ceo/600/800"}
                alt="Ahmed Al Marjan"
                className="relative rounded-2xl object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Why Choose NxtEdge IT Park
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            We don't just deliver digital services — we build long-term
            partnerships based on trust, creativity, and results.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "100% Result-Driven Strategy",
            "Global Client Experience",
            "Certified Professionals",
            "Creative & Technical Expertise",
            "Dedicated 24/7 Support",
          ].map((item, i) => (
            <span
              key={i}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-300"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 sm:mx-6 lg:mx-8">
        <div className="rounded-3xl bg-blue-600 p-8 text-center sm:p-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's Grow Together
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
            Ready to elevate your brand to the next edge of digital success?
            Contact NxtEdge IT Park today — and let's create something
            extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-900 transition-all hover:bg-zinc-100"
          >
            Contact Us Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
