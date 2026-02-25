import { Link } from "react-router-dom";
import { ArrowRight, Search, Clock, User, Tag } from "lucide-react";

export function Blog() {
  const featuredArticles = [
    {
      title:
        "How Spotify Algorithm Works — and How Artists Can Grow Organically",
      desc: "Discover how Spotify's smart algorithm detects listener patterns and how artists can use organic marketing to boost monthly listeners.",
      img: "https://picsum.photos/seed/spotify/600/400",
      category: "Music & Artist Promotion",
      readTime: "6 min read",
      author: "Ahmed Al Marjan",
    },
    {
      title: "The Power of Google Ads: 5 Ways to Double Your Conversions",
      desc: "Google Ads can make or break your campaign. Here are five advanced ad strategies that helped our clients increase real-time conversions.",
      img: "https://picsum.photos/seed/ads/600/400",
      category: "SEO & Google Ads",
      readTime: "5 min read",
      author: "Ahmed Al Marjan",
    },
    {
      title: "Top 10 SEO Mistakes Businesses Make in 2025",
      desc: "Even great brands fall behind in rankings because of small SEO errors. Learn which mistakes to avoid in on-page, off-page, and technical SEO.",
      img: "https://picsum.photos/seed/seo/600/400",
      category: "SEO & Google Ads",
      readTime: "7 min read",
      author: "Ahmed Al Marjan",
    },
    {
      title: "Behind the Scenes: How NxtEdge Helped a Brand Go Viral",
      desc: "A complete breakdown of how our digital strategy turned a small business into a viral success story — from creative ad campaigns to influencer outreach.",
      img: "https://picsum.photos/seed/viral/600/400",
      category: "Case Studies",
      readTime: "8 min read",
      author: "Ahmed Al Marjan",
    },
  ];

  const latestArticles = [
    {
      title: "How to Build a Strong Brand Identity Online",
      desc: "Branding isn't just a logo — it's the voice, tone, and trust of your brand. Learn how to craft an unforgettable identity.",
      img: "https://picsum.photos/seed/brand/400/300",
      category: "Branding & Design",
    },
    {
      title: "Mastering Music Promotion: From Spotify to SoundCloud",
      desc: "Your music deserves a global audience. Learn the proven tactics for growing organically across all major platforms.",
      img: "https://picsum.photos/seed/music2/400/300",
      category: "Music & Artist Promotion",
    },
    {
      title: "10 Ways to Boost Your Social Media Engagement in 2025",
      desc: "From reels to stories — see how you can use trends, hashtags, and cross-promotion to build powerful social media reach.",
      img: "https://picsum.photos/seed/social/400/300",
      category: "Social Media Growth",
    },
    {
      title:
        "The Future of Freelancing: How to Build a Digital Career That Lasts",
      desc: "Freelancing is freedom — but only with skill and strategy. Here's how to build a sustainable career as a freelancer in 2025.",
      img: "https://picsum.photos/seed/freelance/400/300",
      category: "Freelancing & Remote Work",
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-24 pt-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Empower Your Growth with <br />
          <span className="text-blue-500">Expert Knowledge</span>
        </h1>
        <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <p className="text-lg text-zinc-400 sm:text-xl">
          Stay updated with the latest strategies, case studies, and digital
          marketing insights from the professionals at NxtEdge IT Park. We share
          what we learn — so your brand can grow smarter, faster, and stronger.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column - Articles */}
          <div className="lg:col-span-8">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              Featured Articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {featuredArticles.map((article, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 transition-all hover:border-blue-500/30 hover:bg-zinc-800/80"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between text-xs text-zinc-500">
                      <span className="font-semibold uppercase tracking-wider text-blue-500">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                      {article.title}
                    </h3>
                    <p className="mb-6 text-sm text-zinc-400 line-clamp-3">
                      {article.desc}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2 text-sm text-zinc-300">
                        <User size={16} />
                        <span>{article.author}</span>
                      </div>
                      <Link
                        to="#"
                        className="flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300"
                      >
                        Read More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mb-8 mt-16 text-3xl font-bold tracking-tight">
              Latest Articles
            </h2>
            <div className="grid gap-6">
              {latestArticles.map((article, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-4 transition-all hover:border-blue-500/30 hover:bg-zinc-800/80 sm:flex-row sm:items-center"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:w-48 sm:shrink-0">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-blue-500">
                      {article.category}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-blue-400">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-sm text-zinc-400 line-clamp-2">
                      {article.desc}
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-4 text-lg font-bold">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pl-10 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <Search
                    className="absolute left-3 top-3.5 text-zinc-500"
                    size={18}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-4 text-lg font-bold">Browse by Category</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  {[
                    "Digital Marketing",
                    "SEO & Google Ads",
                    "Social Media Growth",
                    "Branding & Design",
                    "Music & Artist Promotion",
                    "Freelancing & Remote Work",
                    "Case Studies",
                    "NxtEdge News",
                  ].map((cat) => (
                    <li key={cat}>
                      <Link
                        to="#"
                        className="flex items-center justify-between transition-colors hover:text-blue-400"
                      >
                        <span>{cat}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-4 text-lg font-bold">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SEO",
                    "Ads",
                    "Spotify",
                    "Branding",
                    "Clients",
                    "Growth",
                    "Case Study",
                  ].map((tag) => (
                    <Link
                      key={tag}
                      to="#"
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-blue-500 hover:text-blue-400"
                    >
                      <Tag size={12} /> {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Subscribe */}
              <div className="rounded-2xl border border-blue-500/30 bg-blue-900/20 p-6">
                <h3 className="mb-2 text-lg font-bold text-white">Subscribe</h3>
                <p className="mb-4 text-sm text-blue-200">
                  Join our newsletter for weekly digital marketing tips and
                  exclusive updates.
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 sm:mx-6 lg:mx-8">
        <div className="rounded-3xl bg-zinc-900 p-8 text-center sm:p-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want to grow your business with the right digital strategy?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
            Talk with our experts and get a Free Consultation Today!
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-700"
          >
            Book Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
