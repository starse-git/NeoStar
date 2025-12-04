import Image from "next/image";
import Link from "next/link";
import logo from "@public/pc/logo.svg";

export default function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
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
          <Link href="/aboutus" className=" hover:text-orange-500 font-bold ">
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
  );
}
