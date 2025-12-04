"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutUs from "@public/pc/AboutUs_bg.png";
import HistoryBg from "@public/pc/History_bg.png";

export default function AboutUsPage() {
  const history = [
    {
      year: "2025",
      content:
        "ネオスター株式会社として現所在地に移転\n ホームページリニューアル",
    },
    {
      year: "2023",
      content: "東京八丁堀に本社移転\n 海外支社（ミャンマー）設立",
    },
    { year: "2022", content: "DX戦略を策定\n DX方針を宣言" },
    { year: "2020", content: "ISO/IEC 27001:2013認証を取得" },
    { year: "2019", content: "資本金を4,500万円に増資" },
    {
      year: "2017",
      content:
        "資本金を2,000万円に増資\n ホームページのリニューアル\n 東京都中央区に本社移転\n 資本金を1,500万円に増資",
    },
    { year: "2016", content: "人材育成事業部を開始" },
    {
      year: "2015",
      content: "東京都千代田区に本社移転\n 資本金を1,000万円に増資",
    },
    { year: "2014", content: "前身となる会社開設" },
  ];
  const companyProfile = [
    { label: "会社名", value: "NeoStar 株式会社" },
    { label: "フリガナ", value: "ネオスター" },
    { label: "設立", value: "2016年7月27日" },
    { label: "資本金", value: "4,1680万円" },
    { label: "代表取締役", value: "金本 香蘭" },
    { label: "主要取引銀行", value: "三井住友銀行\n東京東信用金庫" },
    {
      label: "許認可・届出受理",
      value: "ISO/IEC 27001:2013 認証登録番号 J0437（2020/12/17取得）",
    },
  ];
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex flex-col overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={AboutUs}
            alt="About Us Hero"
            fill
            className="object-cover z-0"
            priority
          />
        </div>

        {/* Navigation */}
        <Navigation linkColor="text-blue-900" />

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-20 text-white flex items-center h-full">
          <div>
            <p className="text-sm mb-2">企業情報</p>
            <h1 className="text-6xl font-bold">
              ABOUT
              <br />
              US
            </h1>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-sm mb-4 text-black font-semibold">
            # 代表メッセージ
          </p>
          <h2 className="text-6xl font-bold mb-12 text-blue-900">
            CEO MESSAGE
          </h2>

          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            すべての経験は、未来への土台である
          </h3>

          <div className="space-y-6   tracking-wider  ">
            <p className="tracking-wider leading-8">
              平素より格別のご支援を賜り、誠にありがとうございます。 この度
              新たな社名として「NeoStar株式会社」を冠し、生まれ変わることとなりました。
            </p>

            <p className="tracking-wider leading-8">
              これまでの道のりは、決して平坦なものではありません。お客様からいただいた、温かいお言葉や成功の喜び。その一方で、大きな壁にぶつかり、皆様にご心配とご不便をおかけしたこともありました。
            </p>

            <p className="tracking-wider leading-8">
              その一つひとつの出来事が、私たちの胸に深く刻まれ、何にも代えがたい「財産」となりました。失敗を恐れず挑戦したからこそ見えた景色があり、困難を乗り越えたからこそ得られた強さと優しさがあります。私たちは、今までのすべての経験を糧に、新たな時代を築くための「堅固な土台」としてまいります。固な土台」としてまいります。
            </p>

            <p className="tracking-wider leading-8">
              社
              名の「NeoStar」には“「新たな(Neo)」挑戦を続け、お客様一人ひとりの人生や事業を照らす「星(Star)」でありたい”という想いを込めて命名いたしました。
            </p>

            <p className="tracking-wider leading-8">
              ITソリューションはもとより、SNS、ECという新たな事業を通じて、これまで以上にお客様の期待に応え、笑顔を生み出す価値を提供いたします。
            </p>

            <p className="tracking-wider leading-8">
              また、これまで以上に、お客様のもとへ積極的に歩み寄り、誠実さと責任感をもって信頼関係を築いてまいります。信頼に足る企業として、お預かりした期待に真摯にお応えし、お客様と共に未来を創り上げていくことをお約束いたします。
            </p>

            <p className="tracking-wider leading-8">
              これからも、NeoStar株式会社をどうぞよろしくお願い申し上げます。
            </p>

            <p className="text-right mt-12">
              <span className="text-sm text-gray-600">代表取締役</span>
              <span className="text-2xl ml-5 font-bold text-gray-800">
                金本 香蘭
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HistoryBg}
            alt="History background"
            fill
            className="object-cover z-0"
          />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <p className="text-sm mb-4 font-semibold"># 沿革</p>
          <h2 className="text-6xl font-bold mb-16">HISTORY</h2>

          <div className="space-y-8">
            {history.map((item, index) => (
              <div key={index} className="flex gap-8  border-white/30 ">
                <div className="w-32 flex-shrink-0">
                  <span className="text-2xl ">{item.year}</span>
                </div>
                <div className="flex-1">
                  <p className="text-base leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-sm mb-4 text-black font-semibold"># 会社概要</p>
          <h2 className="text-6xl font-bold mb-16 text-blue-900">
            COMPANY
            <br />
            PROFILE
          </h2>

          <div className="space-y-4">
            {companyProfile.map((item, index) => (
              <div
                key={index}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4  border-gray-200 pb-6 whitespace-pre-line"
                    style={index === 1 ? { marginTop: '-2rem', 'fontSize' : '12px' } : {}}
              >
                <div className="font-bold text-gray-800">{item.label}</div>
                <div className="font-semibold md:col-span-3 text-gray-700 whitespace-pre-line">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-sm mb-4 text-black font-semibold"># アクセス</p>
          <h2 className="text-6xl font-bold mb-12 text-blue-900">ACCESS</h2>

          <p className="text-gray-700 mb-8">
            所在地：〒103-0003
            東京都中央区日本橋横山町3-1横山町代官プラザビル501
          </p>

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              Map placeholder - Google Maps integration
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4 ">
            メトロ： 馬喰横山駅 徒歩1分、馬喰町駅 徒歩2分、東日本橋駅徒歩3分、小伝馬町駅 徒歩5分
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
