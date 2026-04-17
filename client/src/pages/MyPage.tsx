/**
 * DangQ! My Page - 마이페이지
 * Design: Nature-Informed Minimalism
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ChevronRight, Package, CreditCard, Heart, Settings,
  Gift, HelpCircle, Bell, Edit3, Star, Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const menuItems = [
  { icon: <Package size={20} />, label: "구독 관리", desc: "현재 플랜 및 배송 현황", href: "/subscribe" },
  { icon: <Package size={20} />, label: "배송지 관리", desc: "배송 주소 추가 및 수정", href: "#" },
  { icon: <CreditCard size={20} />, label: "결제수단 관리", desc: "카드 및 결제 정보", href: "#" },
  { icon: <Heart size={20} />, label: "관심 브랜드", desc: "즐겨찾는 브랜드 목록", href: "#" },
  { icon: <Gift size={20} />, label: "기부 내역", desc: "반려동물 보호소 기부 현황", href: "#" },
  { icon: <HelpCircle size={20} />, label: "고객센터", desc: "1:1 문의 및 FAQ", href: "#" },
];

const recentOrders = [
  {
    id: "ORD-2025-0401",
    name: "프리미엄 구독 박스 4월",
    date: "2025.04.10",
    status: "배송완료",
    price: "29,900원",
    icon: "📦",
  },
  {
    id: "ORD-2025-0315",
    name: "닥터독 그레인프리 연어 & 감자 2kg",
    date: "2025.03.15",
    status: "배송완료",
    price: "31,500원",
    icon: "🐟",
  },
  {
    id: "ORD-2025-0310",
    name: "프리미엄 구독 박스 3월",
    date: "2025.03.10",
    status: "배송완료",
    price: "29,900원",
    icon: "📦",
  },
];

const petProfiles = [
  {
    name: "코코",
    breed: "골든리트리버",
    age: "3살",
    weight: "12kg",
    emoji: "🐕",
    score: 87,
    rank: "상위 14%",
  },
];

export default function MyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.975_0.008_80)]">
      <Navbar />

      {/* Header */}
      <div className="bg-white border-b border-[oklch(0.90_0.01_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-[oklch(0.52_0.02_65)] mb-3">
            <Link href="/" className="hover:text-[oklch(0.48_0.14_145)]">홈</Link>
            <ChevronRight size={14} />
            <span className="text-[oklch(0.35_0.02_65)]">마이페이지</span>
          </div>
          <h1 className="text-3xl font-black text-[oklch(0.18_0.01_65)]">마이페이지</h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Profile */}
          <div className="space-y-5">
            {/* User Profile Card */}
            <div className="bg-white rounded-2xl p-7 border border-[oklch(0.90_0.01_80)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-[oklch(0.92_0.03_145)] rounded-full flex items-center justify-center text-3xl">
                    🐾
                  </div>
                  <button
                    onClick={() => toast.info("프로필 사진 변경 기능")}
                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-[oklch(0.48_0.14_145)] rounded-full flex items-center justify-center"
                  >
                    <Edit3 size={12} className="text-white" />
                  </button>
                </div>
                <div>
                  <h2 className="text-xl font-black text-[oklch(0.18_0.01_65)]">김보호자</h2>
                  <p className="text-sm text-[oklch(0.52_0.02_65)]">guardian@dangq.com</p>
                  <div className="green-badge mt-1.5 text-xs">프리미엄 구독 중</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="text-center bg-[oklch(0.975_0.008_80)] rounded-xl py-3">
                  <p className="text-xl font-black text-[oklch(0.48_0.14_145)]">3</p>
                  <p className="text-xs text-[oklch(0.52_0.02_65)]">구독 개월</p>
                </div>
                <div className="text-center bg-[oklch(0.975_0.008_80)] rounded-xl py-3">
                  <p className="text-xl font-black text-[oklch(0.48_0.14_145)]">36</p>
                  <p className="text-xs text-[oklch(0.52_0.02_65)]">테스트 완료</p>
                </div>
                <div className="text-center bg-[oklch(0.975_0.008_80)] rounded-xl py-3">
                  <p className="text-xl font-black text-[oklch(0.48_0.14_145)]">2</p>
                  <p className="text-xs text-[oklch(0.52_0.02_65)]">구매 제품</p>
                </div>
              </div>

              <Button
                onClick={() => toast.info("프로필 수정 페이지")}
                variant="outline"
                className="w-full border-[oklch(0.90_0.01_80)] text-[oklch(0.35_0.02_65)] font-semibold rounded-xl py-2.5 text-sm hover:border-[oklch(0.48_0.14_145)] hover:text-[oklch(0.48_0.14_145)] bg-white"
              >
                프로필 수정
              </Button>
            </div>

            {/* Pet Profile */}
            {petProfiles.map((pet, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[oklch(0.90_0.01_80)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[oklch(0.18_0.01_65)]">반려동물 프로필</h3>
                  <button
                    onClick={() => toast.info("반려동물 프로필 수정")}
                    className="text-xs text-[oklch(0.48_0.14_145)] font-medium hover:underline"
                  >
                    수정
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[oklch(0.92_0.03_145)] rounded-full flex items-center justify-center text-3xl">
                    {pet.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[oklch(0.18_0.01_65)] text-lg">{pet.name}</p>
                    <p className="text-sm text-[oklch(0.52_0.02_65)]">{pet.breed} · {pet.age} · {pet.weight}</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-[oklch(0.92_0.03_145)] rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[oklch(0.52_0.02_65)]">이번 달 기호성 점수</p>
                    <p className="text-2xl font-black text-[oklch(0.48_0.14_145)]">{pet.score}점</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[oklch(0.52_0.02_65)]">전체 순위</p>
                    <p className="text-sm font-bold text-[oklch(0.35_0.12_145)]">{pet.rank}</p>
                  </div>
                </div>
                <Link href="/report">
                  <Button className="w-full mt-3 bg-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.42_0.14_145)] text-white font-semibold rounded-xl py-2.5 text-sm">
                    리포트 보기
                  </Button>
                </Link>
              </div>
            ))}

            {/* Menu */}
            <div className="bg-white rounded-2xl border border-[oklch(0.90_0.01_80)] overflow-hidden">
              {menuItems.map((item, i) => (
                <Link key={i} href={item.href}>
                  <button
                    className="w-full flex items-center gap-4 px-5 py-4 hover:bg-[oklch(0.975_0.008_80)] transition-colors border-b border-[oklch(0.95_0.01_80)] last:border-0"
                    onClick={() => item.href === "#" && toast.info(`${item.label} 페이지`)}
                  >
                    <div className="w-9 h-9 bg-[oklch(0.92_0.03_145)] rounded-xl flex items-center justify-center text-[oklch(0.48_0.14_145)]">
                      {item.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold text-[oklch(0.18_0.01_65)]">{item.label}</p>
                      <p className="text-xs text-[oklch(0.52_0.02_65)]">{item.desc}</p>
                    </div>
                    <ChevronRight size={16} className="text-[oklch(0.65_0.01_65)]" />
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Orders & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Subscription Status */}
            <div className="bg-[oklch(0.48_0.14_145)] rounded-2xl p-7 text-white">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-sm opacity-80 mb-1">현재 구독 플랜</p>
                  <h2 className="text-2xl font-black">프리미엄 플랜</h2>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Award size={24} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-5">
                <div className="bg-white/15 rounded-xl p-3 text-center">
                  <p className="text-xs opacity-70 mb-1">월 샘플</p>
                  <p className="text-xl font-black">15종</p>
                </div>
                <div className="bg-white/15 rounded-xl p-3 text-center">
                  <p className="text-xs opacity-70 mb-1">다음 발송</p>
                  <p className="text-xl font-black">D-3</p>
                </div>
                <div className="bg-white/15 rounded-xl p-3 text-center">
                  <p className="text-xs opacity-70 mb-1">월 구독료</p>
                  <p className="text-xl font-black">29,900원</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Link href="/subscribe">
                  <Button className="bg-white text-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.95_0.01_80)] font-bold px-5 py-2.5 rounded-xl text-sm">
                    구독 관리
                  </Button>
                </Link>
                <Button
                  onClick={() => toast.info("구독 일시정지 기능")}
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 font-semibold px-5 py-2.5 rounded-xl text-sm bg-transparent"
                >
                  일시정지
                </Button>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl p-7 border border-[oklch(0.90_0.01_80)]">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-[oklch(0.18_0.01_65)]">최근 주문 내역</h2>
                <button
                  onClick={() => toast.info("전체 주문 내역 보기")}
                  className="text-sm text-[oklch(0.48_0.14_145)] font-medium hover:underline flex items-center gap-1"
                >
                  전체보기 <ChevronRight size={14} />
                </button>
              </div>
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center gap-4 p-4 bg-[oklch(0.975_0.008_80)] rounded-xl hover:bg-[oklch(0.965_0.01_80)] transition-colors"
                  >
                    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-2xl border border-[oklch(0.90_0.01_80)]">
                      {order.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[oklch(0.18_0.01_65)] truncate">{order.name}</p>
                      <p className="text-xs text-[oklch(0.52_0.02_65)]">{order.date} · {order.id}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold text-[oklch(0.18_0.01_65)]">{order.price}</p>
                      <span className="text-xs bg-[oklch(0.92_0.03_145)] text-[oklch(0.35_0.12_145)] px-2 py-0.5 rounded-full font-medium">
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Summary */}
            <div className="bg-white rounded-2xl p-7 border border-[oklch(0.90_0.01_80)]">
              <h2 className="text-xl font-bold text-[oklch(0.18_0.01_65)] mb-5">활동 요약</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "총 테스트", value: "36", unit: "회", icon: "🧪" },
                  { label: "절약 금액", value: "12.6", unit: "만원", icon: "💰" },
                  { label: "기부 횟수", value: "3", unit: "회", icon: "❤️" },
                  { label: "리뷰 작성", value: "8", unit: "개", icon: "✍️" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[oklch(0.975_0.008_80)] rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <p className="text-2xl font-black text-[oklch(0.48_0.14_145)]">
                      {stat.value}<span className="text-sm font-medium">{stat.unit}</span>
                    </p>
                    <p className="text-xs text-[oklch(0.52_0.02_65)] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-2xl p-7 border border-[oklch(0.90_0.01_80)]">
              <div className="flex items-center gap-2 mb-5">
                <Bell size={20} className="text-[oklch(0.48_0.14_145)]" />
                <h2 className="text-xl font-bold text-[oklch(0.18_0.01_65)]">알림 설정</h2>
              </div>
              <div className="space-y-3">
                {[
                  { label: "배송 알림", desc: "샘플 박스 발송 및 도착 알림", enabled: true },
                  { label: "리포트 완성 알림", desc: "AI 분석 리포트 완성 시 알림", enabled: true },
                  { label: "추천 제품 알림", desc: "새로운 맞춤 제품 추천 알림", enabled: false },
                  { label: "이벤트 알림", desc: "할인 및 이벤트 정보 알림", enabled: false },
                ].map((notif, i) => (
                  <div key={i} className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.18_0.01_65)]">{notif.label}</p>
                      <p className="text-xs text-[oklch(0.52_0.02_65)]">{notif.desc}</p>
                    </div>
                    <button
                      onClick={() => toast.info(`${notif.label} 설정 변경`)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        notif.enabled ? "bg-[oklch(0.48_0.14_145)]" : "bg-[oklch(0.85_0.01_65)]"
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform mx-0.5 ${
                        notif.enabled ? "translate-x-6" : "translate-x-0"
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
