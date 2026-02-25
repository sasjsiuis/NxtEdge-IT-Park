import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useContent } from "../context/ContentContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Achievements", path: "/achievements" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { content } = useContent();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
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

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-400",
                  location.pathname === link.path
                    ? "text-blue-500"
                    : "text-zinc-300"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/consultation"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-zinc-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-400",
                  location.pathname === link.path
                    ? "text-blue-500"
                    : "text-zinc-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/consultation"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-full justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
