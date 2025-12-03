"use client";

interface KizunaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KizunaModal({ isOpen, onClose }: KizunaModalProps) {
  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${
        isOpen ? "w-72" : "w-0"
      }`}
    >
      <div
        onClick={onClose}
        className={`h-auto bg-gradient-to-b from-yellow-500 to-cyan-600 shadow-2xl rounded-tl-3xl rounded-bl-3xl overflow-hidden transition-all duration-500 cursor-pointer hover:opacity-95 ${
          isOpen ? "opacity-100 px-8 py-5" : "opacity-0 p-0"
        }`}
      >
        {isOpen && (
          <div className="relative text-white flex flex-col justify-between items-center">
            {/* Content */}
            <div className="flex justify-between gap-x-4">
              {/* Vertical KIZUNA Text - Top Left */}
              <div className="writing-mode-vertical text-left text-xl font-bold">
                - KIZUNA - 絆
              </div>

              {/* Description */}
              <div>
                <p className="text-sm leading-relaxed font-medium">
                  技術者の自己紹介動画・
                  <br />
                  業務経歴・稼働状況を
                  <br />
                  一元管理できる
                  <br />
                  クラウドサービス
                </p>
                {/* Learn More Button */}
                <div className="mt-4 px-4 py-2 font-semibold rounded-full cursor-pointer transition">
                  LEARN MORE
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
