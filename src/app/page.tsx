"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import KizunaModal from "@/components/KizunaModal";
import Hero from "@public/pc/FV01.png";
import AboutBg from "@public/pc/Top_AboutUs_bg.png";
import Service from "@public/pc/Top_Service_bg.png";
import Contact from "@public/pc/Top_Contact_bg.png";

export default function Home() {
  const [isKizunaModalOpen, setIsKizunaModalOpen] = useState(false);

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
        <Navigation transparent={true} linkColor="text-white" />

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
              <Link href="/aboutus">
                <Button className="bg-gradient-to-b flex justify-between from-orange-400 to-orange-600 hover:bg-orange-600 rounded-full py-6 text-base w-full md:w-64">
                  <span></span>
                  <span>VIEW MORE</span>
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
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
      <Footer />
    </main>
  );
}
