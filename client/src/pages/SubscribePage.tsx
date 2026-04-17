/**
 * DangQ! Subscribe Page - 구독 관리
 * Design: Nature-Informed Minimalism
 */
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, Package, Star, Shield, Truck, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const SAMPLE_BOX_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569172912/5LMatynSMvEveE34ZQrcQi/sample-kit-box-2WJ7ZyGNLNxKzQsS43guzS.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569172912/5LMatynSMvEveE34ZQrcQi/hero-pets-bCpsyepc8iVm3tVKhAUpvc.webp";

const plans = [
  {
    id: "basic",
    name: "베이직",
    price: 19900,
    originalPrice: 39800,
    samples: 10,
    period: "월",
    features: [
      "월 10종 샘플 박스",
      "기본 기호성 리포트",
      "앱 급여 기록",
      "커뮤니티 접근",
    ],
    notIncluded: ["AI 심층 분석", "맞춤 제품 추천", "우선 고객 지원"],
    highlight: false,
    badge: null,
  },
  {
    id: "premium",
    name: "프리미엄",
    price: 29900,
    originalPrice: 59800,
    samples: 15,
    period: "월",
    features: [
      "월 15종 샘플 박스",
      "AI 심층 분석 리포트",
      "앱 급여 기록 + 사진",
      "맞춤 제품 추천",
      "우선 고객 지원",
    ],
    notIncluded: ["반려동물 2마리", "전용 영양 상담"],
    highlight: true,
    badge: "가장 인기",
  },
  {
    id: "family",
    name: "패밀리",
    price: 44900,
    originalPrice: 89800,
    samples: 30,
    period: "월",
    features: [
      "반려동물 2마리",
      "월 30종 샘플 박스",
      "AI 비교 분석 리포트",
      "전용 영양 상담",
      "무료 배송",
      "우선 고객 지원",
    ],
    notIncluded: [],
    highlight: false,
    badge: "최고 혜택",
  },
];

const benefits = [
  { icon: <Package size={24} />, title: "매월 큐레이션 샘플", desc: "전문 수의사가 선별한 10~15종 프리미엄 샘플" },
  { icon: <Star size={24} />, title: "AI 기호성 분석", desc: "데이터 기반 반려동물 맞춤 식단 리포트" },
  { icon: <Truck size={24} />, title: "무료 배송", desc: "매월 정기 배송, 추가 배송비 없음" },
  { icon: <RefreshCw size={24} />, title: "언제든 해지 가능", desc: "약정 없이 원할 때 해지 가능" },
  { icon: <Shield size={24} />, title: "안전한 공식 샘플", desc: "직접 소분이 아닌 제조사 공식 샘플 배포" },
];

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [step, setStep] = useState<"plan" | "pet" | "payment">("plan");

  const [petInfo, setPetInfo] = useState({
    name: "",
    breed: "",
    age: "",
    weight: "",
    type: "dog",
  });

  const handleSubscribe = () => {
    if (step === "plan") setStep("pet");
    else if (step === "pet") {
      if (!petInfo.name || !petInfo.breed) {
        toast.error("반려동물 이름과 품종을 입력해주세요");
        return;
      }
      setStep("payment");
    } else {
      toast.success("구독이 완료되었습니다! 🎉 첫 번째 샘플 박스가 곧 발송됩니다.");
    }
  };

  const selectedPlanData = plans.find(p => p.id === selectedPlan)!;

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.975_0.008_80)]">
      <Navbar />

      {/* Header */}
      <div className="bg-white border-b border-[oklch(0.90_0.01_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-[oklch(0.52_0.02_65)] mb-3">
            <Link href="/" className="hover:text-[oklch(0.48_0.14_145)]">홈</Link>
            <ChevronRight size={14} />
            <span className="text-[oklch(0.35_0.02_65)]">구독하기</span>
          </div>
          <h1 className="text-3xl font-black text-[oklch(0.18_0.01_65)] mb-2">구독 플랜 선택</h1>
          <p className="text-[oklch(0.52_0.02_65)]">첫 달 50% 할인 · 언제든지 해지 가능</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-[oklch(0.90_0.01_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            {[
              { id: "plan", label: "플랜 선택" },
              { id: "pet", label: "반려동물 정보" },
              { id: "payment", label: "결제" },
            ].map((s, i) => (
              <div key={s.id} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 ${step === s.id ? "opacity-100" : step === "payment" && i < 2 ? "opacity-100" : step === "pet" && i === 0 ? "opacity-100" : "opacity-40"}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                    (step === "payment" && i < 2) || (step === "pet" && i === 0)
                      ? "bg-[oklch(0.48_0.14_145)] text-white"
                      : step === s.id
                      ? "bg-[oklch(0.48_0.14_145)] text-white"
                      : "bg-[oklch(0.90_0.01_80)] text-[oklch(0.52_0.02_65)]"
                  }`}>
                    {(step === "payment" && i < 2) || (step === "pet" && i === 0) ? <Check size={14} /> : i + 1}
                  </div>
                  <span className={`text-sm font-medium ${step === s.id ? "text-[oklch(0.48_0.14_145)]" : "text-[oklch(0.52_0.02_65)]"}`}>
                    {s.label}
                  </span>
                </div>
                {i < 2 && <ChevronRight size={16} className="text-[oklch(0.65_0.01_65)]" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === "plan" && (
              <div>
                {/* Billing Toggle */}
                <div className="flex items-center gap-4 mb-8">
                  <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-[oklch(0.18_0.01_65)]" : "text-[oklch(0.52_0.02_65)]"}`}>
                    월간 결제
                  </span>
                  <button
                    onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                    className={`w-12 h-6 rounded-full transition-colors ${billingCycle === "yearly" ? "bg-[oklch(0.48_0.14_145)]" : "bg-[oklch(0.85_0.01_65)]"}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform mx-0.5 ${billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"}`} />
                  </button>
                  <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-[oklch(0.18_0.01_65)]" : "text-[oklch(0.52_0.02_65)]"}`}>
                    연간 결제
                  </span>
                  {billingCycle === "yearly" && (
                    <span className="text-xs bg-red-100 text-red-600 px-2.5 py-1 rounded-full font-bold">20% 추가 할인</span>
                  )}
                </div>

                {/* Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`rounded-2xl p-6 border-2 cursor-pointer transition-all relative ${
                        selectedPlan === plan.id
                          ? "border-[oklch(0.48_0.14_145)] bg-[oklch(0.97_0.02_145)] shadow-lg"
                          : "border-[oklch(0.90_0.01_80)] bg-white hover:border-[oklch(0.48_0.14_145)]/50"
                      }`}
                    >
                      {plan.badge && (
                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full ${
                          plan.badge === "가장 인기" ? "bg-amber-400 text-amber-900" : "bg-[oklch(0.48_0.14_145)] text-white"
                        }`}>
                          {plan.badge}
                        </div>
                      )}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-[oklch(0.18_0.01_65)]">{plan.name}</h3>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === plan.id
                            ? "border-[oklch(0.48_0.14_145)] bg-[oklch(0.48_0.14_145)]"
                            : "border-[oklch(0.85_0.01_65)]"
                        }`}>
                          {selectedPlan === plan.id && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-[oklch(0.18_0.01_65)]">
                            {billingCycle === "yearly"
                              ? Math.floor(plan.price * 0.8).toLocaleString()
                              : plan.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-[oklch(0.52_0.02_65)]">원/{plan.period}</span>
                        </div>
                        <p className="text-xs text-red-500 font-bold mt-0.5">
                          첫 달 {Math.floor(plan.price / 2).toLocaleString()}원 (50% 할인)
                        </p>
                      </div>
                      <p className="text-sm text-[oklch(0.52_0.02_65)] mb-4">샘플 {plan.samples}종/월</p>
                      <ul className="space-y-2">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.02_65)]">
                            <Check size={14} className="text-[oklch(0.48_0.14_145)] shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mt-10">
                  <h2 className="text-xl font-bold text-[oklch(0.18_0.01_65)] mb-5">모든 플랜에 포함된 혜택</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[oklch(0.90_0.01_80)]">
                        <div className="w-10 h-10 bg-[oklch(0.92_0.03_145)] rounded-xl flex items-center justify-center text-[oklch(0.48_0.14_145)] shrink-0">
                          {b.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[oklch(0.18_0.01_65)]">{b.title}</p>
                          <p className="text-xs text-[oklch(0.52_0.02_65)] mt-0.5">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === "pet" && (
              <div className="bg-white rounded-2xl p-8 border border-[oklch(0.90_0.01_80)]">
                <h2 className="text-2xl font-bold text-[oklch(0.18_0.01_65)] mb-6">반려동물 정보 입력</h2>
                <div className="space-y-5">
                  {/* Pet Type */}
                  <div>
                    <label className="text-sm font-semibold text-[oklch(0.35_0.02_65)] mb-2 block">반려동물 종류</label>
                    <div className="flex gap-3">
                      {[{ id: "dog", label: "강아지", emoji: "🐕" }, { id: "cat", label: "고양이", emoji: "🐱" }].map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setPetInfo(p => ({ ...p, type: type.id }))}
                          className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                            petInfo.type === type.id
                              ? "border-[oklch(0.48_0.14_145)] bg-[oklch(0.92_0.03_145)] text-[oklch(0.35_0.12_145)]"
                              : "border-[oklch(0.90_0.01_80)] text-[oklch(0.52_0.02_65)]"
                          }`}
                        >
                          <span>{type.emoji}</span> {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-[oklch(0.35_0.02_65)] mb-2 block">이름 *</label>
                      <input
                        type="text"
                        placeholder="예: 코코"
                        value={petInfo.name}
                        onChange={(e) => setPetInfo(p => ({ ...p, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-[oklch(0.975_0.008_80)] border border-[oklch(0.90_0.01_80)] rounded-xl text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[oklch(0.35_0.02_65)] mb-2 block">품종 *</label>
                      <input
                        type="text"
                        placeholder="예: 골든리트리버"
                        value={petInfo.breed}
                        onChange={(e) => setPetInfo(p => ({ ...p, breed: e.target.value }))}
                        className="w-full px-4 py-3 bg-[oklch(0.975_0.008_80)] border border-[oklch(0.90_0.01_80)] rounded-xl text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[oklch(0.35_0.02_65)] mb-2 block">나이</label>
                      <input
                        type="text"
                        placeholder="예: 3살"
                        value={petInfo.age}
                        onChange={(e) => setPetInfo(p => ({ ...p, age: e.target.value }))}
                        className="w-full px-4 py-3 bg-[oklch(0.975_0.008_80)] border border-[oklch(0.90_0.01_80)] rounded-xl text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[oklch(0.35_0.02_65)] mb-2 block">체중</label>
                      <input
                        type="text"
                        placeholder="예: 12kg"
                        value={petInfo.weight}
                        onChange={(e) => setPetInfo(p => ({ ...p, weight: e.target.value }))}
                        className="w-full px-4 py-3 bg-[oklch(0.975_0.008_80)] border border-[oklch(0.90_0.01_80)] rounded-xl text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[oklch(0.35_0.02_65)] mb-2 block">알레르기 또는 특이사항 (선택)</label>
                    <textarea
                      placeholder="예: 닭고기 알레르기, 신장 질환 등"
                      rows={3}
                      className="w-full px-4 py-3 bg-[oklch(0.975_0.008_80)] border border-[oklch(0.90_0.01_80)] rounded-xl text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="bg-white rounded-2xl p-8 border border-[oklch(0.90_0.01_80)]">
                <h2 className="text-2xl font-bold text-[oklch(0.18_0.01_65)] mb-6">결제 정보</h2>
                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-semibold text-[oklch(0.35_0.02_65)] mb-2 block">카드 번호</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-4 py-3 bg-[oklch(0.975_0.008_80)] border border-[oklch(0.90_0.01_80)] rounded-xl text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-[oklch(0.35_0.02_65)] mb-2 block">유효기간</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 bg-[oklch(0.975_0.008_80)] border border-[oklch(0.90_0.01_80)] rounded-xl text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[oklch(0.35_0.02_65)] mb-2 block">CVC</label>
                      <input
                        type="text"
                        placeholder="000"
                        className="w-full px-4 py-3 bg-[oklch(0.975_0.008_80)] border border-[oklch(0.90_0.01_80)] rounded-xl text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[oklch(0.35_0.02_65)] mb-2 block">카드 소유자 이름</label>
                    <input
                      type="text"
                      placeholder="홍길동"
                      className="w-full px-4 py-3 bg-[oklch(0.975_0.008_80)] border border-[oklch(0.90_0.01_80)] rounded-xl text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] transition-colors"
                    />
                  </div>
                  <div className="p-4 bg-[oklch(0.92_0.03_145)] rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield size={16} className="text-[oklch(0.48_0.14_145)]" />
                      <p className="text-sm font-semibold text-[oklch(0.35_0.12_145)]">안전한 결제</p>
                    </div>
                    <p className="text-xs text-[oklch(0.52_0.02_65)]">
                      모든 결제 정보는 SSL 암호화로 안전하게 처리됩니다
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-[oklch(0.90_0.01_80)] sticky top-24">
              <h3 className="font-bold text-[oklch(0.18_0.01_65)] mb-5">주문 요약</h3>

              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[oklch(0.90_0.01_80)]">
                <img src={SAMPLE_BOX_IMG} alt="샘플 박스" className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <p className="font-semibold text-[oklch(0.18_0.01_65)] text-sm">{selectedPlanData.name} 플랜</p>
                  <p className="text-xs text-[oklch(0.52_0.02_65)]">샘플 {selectedPlanData.samples}종/월</p>
                </div>
              </div>

              <div className="space-y-2.5 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-[oklch(0.52_0.02_65)]">월 구독료</span>
                  <span className="font-medium text-[oklch(0.35_0.02_65)]">{selectedPlanData.price.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[oklch(0.52_0.02_65)]">첫 달 할인 (50%)</span>
                  <span className="font-medium text-red-500">-{Math.floor(selectedPlanData.price / 2).toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[oklch(0.52_0.02_65)]">배송비</span>
                  <span className="font-medium text-[oklch(0.48_0.14_145)]">무료</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 border-t border-[oklch(0.90_0.01_80)] mb-5">
                <span className="font-bold text-[oklch(0.18_0.01_65)]">첫 달 결제 금액</span>
                <span className="text-2xl font-black text-[oklch(0.48_0.14_145)]">
                  {Math.floor(selectedPlanData.price / 2).toLocaleString()}원
                </span>
              </div>

              <Button
                onClick={handleSubscribe}
                className="w-full bg-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.42_0.14_145)] text-white font-bold rounded-xl py-3.5 text-base"
              >
                {step === "plan" ? "다음 단계" : step === "pet" ? "결제 정보 입력" : "구독 시작하기"}
              </Button>

              {step !== "plan" && (
                <button
                  onClick={() => setStep(step === "payment" ? "pet" : "plan")}
                  className="w-full mt-3 text-sm text-[oklch(0.52_0.02_65)] hover:text-[oklch(0.35_0.02_65)] transition-colors"
                >
                  이전 단계로
                </button>
              )}

              <div className="mt-5 space-y-2">
                {["첫 달 50% 할인 적용", "언제든지 해지 가능", "무료 배송"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[oklch(0.52_0.02_65)]">
                    <Check size={12} className="text-[oklch(0.48_0.14_145)]" />
                    {item}
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
