import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { useContent } from "../context/ContentContext";
import { cn } from "@/lib/utils";

export function Footer() {
  const { content } = useContent();

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              {content["global.logo"] ? (
                <img 
                  src={content["global.logo"]} 
                  alt="NxtEdge IT Park Logo" 
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <span className={cn("text-xl font-bold tracking-tighter text-white", content["global.logo"] && "hidden")}>
                NxtEdge <span className="text-blue-500">IT Park</span>
              </span>
            </Link>
            <p className="text-sm">
              Empowering Global Growth Through Digital Innovation 🌍
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              Branches
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">📍</span>
                <span>New York, USA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">📍</span>
                <span>Sylhet, Bangladesh</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              {content["social.facebook"] && (
                <a href={content["social.facebook"]} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  <Facebook size={20} />
                </a>
              )}
              {content["social.instagram"] && (
                <a href={content["social.instagram"]} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  <Instagram size={20} />
                </a>
              )}
              {content["social.linkedin"] && (
                <a href={content["social.linkedin"]} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              )}
              {content["social.twitter"] && (
                <a href={content["social.twitter"]} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
              )}
              {content["social.messenger"] && (
                <a href={content["social.messenger"]} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  <MessageCircle size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
          <p>© 2025 NxtEdge IT Park — All Rights Reserved 🌍</p>
          <div className="flex gap-4">
            <Link to="/admin" className="hover:text-white transition-colors">
              Admin Panel
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
