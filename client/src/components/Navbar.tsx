/**
 * DangQ! Navbar
 * Design: Nature-Informed Minimalism
 * Colors: Forest Green primary, Warm Cream background
 * Style: Clean top navigation with logo, nav links, CTA button
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "서비스", href: "/#service" },
  { label: "테스트 키트", href: "/test" },
  { label: "스토어", href: "/store" },
  { label: "리포트", href: "/report" },
  { label: "B2B", href: "/#b2b" },
  { label: "고객센터", href: "/#support" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[oklch(0.90_0.01_80)] shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[oklch(0.48_0.14_145)] rounded-lg flex items-center justify-center text-white text-lg font-black group-hover:scale-105 transition-transform">
              🐾
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[oklch(0.48_0.14_145)] font-black text-lg tracking-tight">댕큐!</span>
              <span className="text-[oklch(0.52_0.02_65)] text-[10px] font-medium tracking-wider">pet food taste lab</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  location === link.href
                    ? "text-[oklch(0.48_0.14_145)] bg-[oklch(0.92_0.03_145)]"
                    : "text-[oklch(0.35_0.02_65)] hover:text-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.95_0.01_80)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-lg text-[oklch(0.52_0.02_65)] hover:text-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.92_0.03_145)] transition-colors">
              <Bell size={18} />
            </button>
            <Link href="/mypage">
              <button className="p-2 rounded-lg text-[oklch(0.52_0.02_65)] hover:text-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.92_0.03_145)] transition-colors">
                <User size={18} />
              </button>
            </Link>
            <Link href="/subscribe">
              <Button className="bg-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.42_0.14_145)] text-white font-semibold px-5 py-2 rounded-xl text-sm">
                로그인
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[oklch(0.35_0.02_65)] hover:bg-[oklch(0.92_0.03_145)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[oklch(0.90_0.01_80)] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm font-medium text-[oklch(0.35_0.02_65)] hover:text-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.92_0.03_145)] rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[oklch(0.90_0.01_80)]">
            <Link href="/subscribe" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.42_0.14_145)] text-white font-semibold rounded-xl">
                로그인
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
