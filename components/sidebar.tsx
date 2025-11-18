"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Berita", href: "/berita" },
    { name: "Profil", href: "/profil" },
    { name: "Lainnya", href: "/lainnya" },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white
        ${
          scrolled
            ? "backdrop-blur-xl bg-[#0f1a2b]/50 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            : "bg-[#0f1a2b]"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/basketan.id.svg"
            alt="Fastbreak Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="!text-white hover:text-blue-200 transition relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-gradient-to-r from-blue-300 to-blue-100 group-hover:w-full transition-all rounded-full"></span>
            </Link>
          ))}
        </div>

       {/* DESKTOP BUTTONS */}
<div className="hidden md:flex items-center space-x-3">
  <Link href="/login">
    <button className="text-sm px-4 py-1.5 rounded-md hover:bg-blue-600/30 transition text-white">
      Masuk
    </button>
  </Link>

  <Link href="/register">
    <button className="text-sm bg-white text-blue-700 px-4 py-1.5 rounded-md shadow-md hover:bg-blue-100 transition">
      Mendaftar
    </button>
  </Link>
</div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-blue-600/30 transition text-white"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col bg-[#0f1a2b]/95 backdrop-blur-xl border-t px-6 py-5 space-y-4 text-sm font-medium text-white shadow-lg">

          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="!text-white hover:text-blue-200 transition"
            >
              {item.name}
            </Link>
          ))}

          <button className="w-full text-sm px-4 py-2 rounded-md bg-blue-600/40 hover:bg-blue-600/60 transition">
            Masuk
          </button>

          <button className="w-full text-sm bg-white text-blue-700 px-4 py-2 rounded-md shadow-md">
            Mendaftar
          </button>

        </div>
      </div>
    </nav>
  );
}
