"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarDays } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/bookings/new", label: "Book Now" },
    { to: "/bookings", label: "Bookings" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
          <img src="/logo.png" alt="Aura Beauty Charm Logo" className="h-8 w-auto object-contain" />
          Aura Beauty Charm
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm font-medium transition-colors ${
                isActive(link.to) ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/bookings/new"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:brightness-110 transition-all active:scale-95"
          >
            <CalendarDays size={16} />
            Book Appointment 💅
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/bookings/new"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium"
          >
            Book Appointment 💅
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



