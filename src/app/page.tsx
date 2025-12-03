"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import KizunaModal from "@/components/KizunaModal";
import { useState } from "react";
import Hero from "@public/pc/FV01.png";
import logo from "@public/pc/logo.svg";
import AboutBg from "@public/pc/Top_AboutUs_bg.png";
import Service from "@public/pc/Top_Service_bg.png";
import Contact from "@public/pc/Top_Contact_bg.png";

export default function Home() {
  const [isKizunaModalOpen, setIsKizunaModalOpen] = useState(false);

  const getYear = () => {
     return new Date().getFullYear();
  }
  const news = [
    {
      date: "2026.05.05",
      content:
        "お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。",
    },
    {
      date: "2026.05.05",
      content:
        "お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。",
    },
    {
      date: "2026.05.05",
      content:
        "お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。",
    },
    {
      date: "2025.05.05",
      content:
        "お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。",
    },
    {
      date: "2025.05.05",
      content:
        "お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。",
    },
    {
      date: "2025.05.05",
      content:
        "お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。",
    },
    {
      date: "2025.05.05",
      content:
        "お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。お知らせがXX入ります。",
    },
  ];
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Navigation */}
      <section className="relative h-screen flex flex-col overflow-hidden  ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={Hero}
            alt="Hero background"
            fill
            className="object-cover z-0"
            priority
          />
        </div>

        {/* Navigation - Fixed to Top */}
        <nav className="fixed top-0 left-0 right-0 z-100 w-full ">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Image src={logo} alt="NeoStar Logo" className="h-12 w-auto" />
              </Link>
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="#about"
                  className="text-white hover:text-orange-400 transition"
                >
                  ABOUT US
                </Link>
                <Link
                  href="#service"
                  className="text-white hover:text-orange-400 transition"
                >
                  SERVICE
                </Link>
                <Link
                  href="#news"
                  className="text-white hover:text-orange-400 transition"
                >
                  NEWS
                </Link>
                <Link
                  href="#recruit"
                  className="text-white hover:text-orange-400 transition"
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

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-white mt-60">
          <p className="text-4xl md:text-5xl leading-18 text-start  font-bold text-shadow-sm text-shadow-black ">
            挑戦を力に変え、
            <br />
            DXで未来を切り拓く
          </p>
        </div>

        {/* FOLLOW Button - Right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
          {!isKizunaModalOpen && (
            <Button 
              onClick={() => setIsKizunaModalOpen(!isKizunaModalOpen)}
              className="bg-gradient-to-b text-lg from-yellow-500 h-40 to-cyan-600 text-white px-5 py-5 writing-mode-vertical hover:opacity-90 transition rounded-tl-3xl rounded-bl-3xl shadow-lg"
            >
              - KIZUNA - 絆
            </Button>
          )}
        </div>
      </section>

      {/* Kizuna Modal */}
      <KizunaModal
        isOpen={isKizunaModalOpen}
        onClose={() => setIsKizunaModalOpen(false)}
      />

      {/* About Section */}
      <section
        id="about"
        className="relative py-20 text-white overflow-hidden "
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={AboutBg}
            alt="About background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-xl">
            <p className="text-sm mb-2 text-white"># 企業情報</p>
            <h2 className="text-5xl font-bold mb-16 text-white text-shadow-lg">
              ABOUT <br />
              US
            </h2>
            <h3 className="text-3xl font-bold mb-6 text-white text-shadow-lg">
              すべての経験を、未来への力に。
            </h3>
            <p className="text-sm mb-16 leading-8 text-white text-shadow-lg  ">
              NeoStarは、挑戦する企業の成長を支え、 共に前進するパートナーです。
              <br />
              誠実さと信頼を軸に、事業の可能性を 切り拓きます。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4  mb-8 justify-items-center md:justify-items-start ">
              <Button className="bg-gradient-to-b flex justify-between from-orange-400 to-orange-600 hover:bg-orange-600 rounded-full py-6 text-base w-full md:w-64">
                <span></span>
                <span>VIEW MORE</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-20  relative overflow-hidden z-0 ">
        <div className="absolute inset-0 ">
          <Image
            src={Service}
            alt="Service background"
            fill
            className="object-cover"
            style={{
              objectPosition: "57%",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-xl">
            <p className="text-sm mb-2 text-white"># サービス紹介</p>
            <h2 className="text-5xl font-bold mb-16 text-white text-shadow-lg">
              SERVICE
            </h2>
            <h3 className="text-3xl font-bold mb-6 text-white text-shadow-lg">
              とことん寄り添 い 、伴走する。
            </h3>
            <p className="text-sm mb-16 leading-8 text-white text-shadow-lg  ">
              ITソリューションを中心に、補助金申請サポート・SNS運用・EC構築など、
              <br />
              デジタルの力で企業の成長を支える多彩 な事業を展開しています。
              <br />
              お客様の挑戦に寄り添い、ビジネスの可能性を広げるソリューションをご提案
              します。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4  mb-8 justify-items-center md:justify-items-start ">
              <Button className="bg-gradient-to-b flex justify-between from-orange-400 to-orange-600 hover:bg-orange-600 rounded-full py-6 text-base w-full md:w-64">
                <span></span>
                <span>ITソリューション事業</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button className="bg-gradient-to-b flex justify-between from-orange-400 to-orange-600 hover:bg-orange-600 rounded-full py-6 text-base  w-full md:w-64">
                <span></span>
                <span>補助金申請サポート事業</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button className="bg-gradient-to-b flex justify-between from-orange-400 to-orange-600 hover:bg-orange-600 rounded-full py-6 text-base  w-full md:w-64">
                <span></span>
                <span>SNSメディア事業</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button className="bg-gradient-to-b flex justify-between from-orange-400 to-orange-600 hover:bg-orange-600 rounded-full py-6 text-base w-full  md:w-64">
                <span></span>
                <span>EC事業</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-sm mb-2 text-blue-600"># お知らせ</p>
          <h2 className="text-5xl font-bold mb-12 text-blue-900">NEWS</h2>

          <div className="space-y-4 mb-8">
            {news.map((newsItems, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <p className="text-gray-700 flex md:flex-row flex-col justify-start gap-6">
                  <span className="opacity-70">{newsItems.date}</span>{" "}
                  <span>{newsItems.content}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button className="bg-blue-900 hover:bg-blue-800 rounded-full text-white px-8 py-3">
              VIEW MORE
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20  overflow-hidden  ">
        <div className="absolute inset-0">
          <Image
            src={Contact}
            alt="Contact background"
            fill
            className="object-cover "
            style={{
              objectPosition: "80%",
            }}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0"></div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-2xl">
            <p className="text-sm mb-2 text-white">
              # ネオスターへお問い合わせ
            </p>
            <h2 className="text-5xl font-bold mb-16 text-white text-shadow-lg">
              CONTACT FORM
            </h2>
            <h3 className="text-3xl font-bold mb-6 text-white text-shadow-lg">
              声をお聞かせください。
            </h3>
            <p className="text-sm mb-16 leading-8 text-white text-shadow-lg  ">
              お客様のあらゆるご質問・ご要望にお答えいたします。
              <br />
              お気軽にお問い合わせください。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Button className="bg-gradient-to-b from-orange-400 to-orange-600 hover:bg-orange-600 rounded-full py-6 text-base w-full md:w-64">
                <Mail className="w-4 h-4 mr-2" />
                CONTACT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="NeoStar Logo"
                width={120}
                height={40}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          <div className="flex md:flex-row flex-col gap-8 mb-8 text-lg md:text-sm">
            <Link href="#about" className=" hover:text-orange-500 font-bold ">
              企業理念
            </Link>
            <Link href="#service" className=" hover:text-orange-500 font-bold">
              サービス紹介
            </Link>
            <Link href="#news" className=" hover:text-orange-500 font-bold">
              ニュース
            </Link>
            <Link href="#recruit" className=" hover:text-orange-500 font-bold">
              採用情報
            </Link>
            <Link href="#contact" className=" hover:text-orange-500 font-bold">
              お問い合わせ
            </Link>
          </div>

          <div className=" text-sm text-gray-500 pt-8 text-end">
            <p>情報セキュリティ</p>
            <p className="mt-2 font-light">
              Copyright©{getYear()} NeoStar株式会社.All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
