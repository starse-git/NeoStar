"use client";

import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="bg-gradient-to-b text-white from-orange-400 to-orange-600 hover:bg-orange-600 rounded-full transition p-3"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 top-[73px]"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[73px] right-0 h-[calc(100vh-73px)] w-64 text-white backdrop-blur-lg shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <Link
            href="#about"
            className="text-white hover:text-orange-500 transition text-lg font-medium"
            onClick={closeMenu}
          >
            ABOUT US
          </Link>
          <Link
            href="#service"
            className="text-white hover:text-orange-500 transition text-lg font-medium"
            onClick={closeMenu}
          >
            SERVICE
          </Link>
          <Link
            href="#news"
            className="text-white hover:text-orange-500 transition text-lg font-medium"
            onClick={closeMenu}
          >
            NEWS
          </Link>
          <Link
            href="#recruit"
            className="text-white hover:text-orange-500 transition text-lg font-medium"
            onClick={closeMenu}
          >
            RECRUIT
          </Link>
          <Button
            className="bg-orange-500 hover:bg-orange-600 rounded-full w-full"
            onClick={closeMenu}
          >
            <Mail className="w-4 h-4 mr-2" />
            CONTACT
          </Button>
        </nav>
      </div>
    </div>
  );
}
