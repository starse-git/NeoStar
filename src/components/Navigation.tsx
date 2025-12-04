"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import logo from "@public/pc/logo.svg";

interface NavigationProps {
  transparent?: boolean;
  linkColor?: string;
}

export default function Navigation({ transparent = false, linkColor = "text-white" }: NavigationProps) {
  const navClasses = transparent
    ? "fixed top-0 left-0 right-0 z-100 w-full"
    : "fixed top-0 left-0 right-0 z-100 w-full backdrop-blur-2xl bg-white shadow-md";

  const textColor = linkColor ? linkColor : "text-gray-800";

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="NeoStar Logo" className="h-12 w-auto" />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-bold">
            <Link
              href="/aboutus"
              className={`${textColor}  hover:text-orange-400 transition`}
            >
              ABOUT US
            </Link>
            <Link
              href="#service"
              className={`${textColor} hover:text-orange-400 transition`}
            >
              SERVICE
            </Link>
            <Link
              href="#news"
              className={`${textColor} hover:text-orange-400 transition`}
            >
              NEWS
            </Link>
            <Link
              href="#recruit"
              className={`${textColor} hover:text-orange-400 transition`}
            >
              RECRUIT
            </Link>
            <Button className="bg-gradient-to-b from-orange-400 to-orange-600 hover:bg-orange-600 rounded-full px-6 text-white">
              <Mail className="w-4 h-4 mr-2" />
              CONTACT
            </Button>
          </div>
          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
