/**
 * DangQ! Home Page
 * Design: Nature-Informed Minimalism
 * Colors: Forest Green (#2D7D46 / oklch(0.48 0.14 145)) + Warm Cream (#FAF7F2)
 * Layout: Asymmetric hero (text left / image right), card-based service intro, step process
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight, Package, ClipboardList, BarChart3, ShoppingBag, Check, ArrowRight, Users, TrendingUp, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

// Image URLs
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569172912/5LMatynSMvEveE34ZQrcQi/hero-pets-bCpsyepc8iVm3tVKhAUpvc.webp";
const SAMPLE_BOX_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569172912/5LMatynSMvEveE34ZQrcQi/sample-kit-box-2WJ7ZyGNLNxKzQsS43guzS.webp";
const REPORT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569172912/5LMatynSMvEveE34ZQrcQi/ai-report-dVh3LjhkjeAWicJsy593z9.webp";
const STORE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569172912/5LMatynSMvEveE34ZQrcQi/store-products-PmKebKFQHuQHkEA7GV3kYf.webp";
const PET_EATING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569172912/5LMatynSMvEveE34ZQrcQi/pet-eating-kGmqnyA2kvEuxmeUzGdgk8.webp";

// Counter animation hook
function useCountUp(target: number, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return count;
}

// Intersection Observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const steps = [
  {
    num: "01",
    icon: <Package size={28} />,
    title: "샘플 박스 배송",
    desc: "매달 엄선된 10~15종 샘플을 만나보세요",
    color: "oklch(0.48 0.14 145)",
  },
  {
    num: "02",
    icon: <ClipboardList size={28} />,
    title: "급여 기록",
    desc: "먹는 속도, 남은 양, 변 상태를 기록하세요",
    color: "oklch(0.55 0.13 145)",
  },
  {
    num: "03",
    icon: <BarChart3 size={28} />,
    title: "AI 분석 리포트",
    desc: "내 아이 맞춤형 기호성 지도를 확인하세요",
    color: "oklch(0.42 0.14 145)",
  },
  {
    num: "04",
    icon: <ShoppingBag size={28} />,
    title: "최적 구매",
    desc: "테스트 1위 제품을 최저가로 구매하세요",
    color: "oklch(0.35 0.12 145)",
  },
];

const problems = [
  {
    emoji: "💸",
    title: "경제적 손실",
    desc: "비싼 대용량 사료를 샀다가 버리는 일이 빈번합니다",
  },
  {
    emoji: "🍽️",
    title: "남겨지는 사료",
    desc: "사료 섞어 먹기 수요는 늘지만 관련 데이터가 없습니다",
  },
  {
    emoji: "📊",
    title: "정보의 불균형",
    desc: "광고·후기에만 의존, 실제 내 아이에게 맞는지 알 수 없습니다",
  },
];

const features = [
  {
    icon: "🧪",
    title: "기호성 테스트 키트",
    desc: "제조사 협력으로 확보한 다양한 샘플을 큐레이션하여 구독 형태로 제공합니다",
    tag: "B2C",
  },
  {
    icon: "🤖",
    title: "AI 기호도 분석",
    desc: "수집된 데이터를 기반으로 반려동물의 선호도 및 소비 패턴을 정밀 분석합니다",
    tag: "AI",
  },
  {
    icon: "🛒",
    title: "맞춤형 스토어",
    desc: "테스트 결과 기반 제품 추천으로 실패 없는 구매 경험을 제공합니다",
    tag: "커머스",
  },
];

const plans = [
  {
    name: "베이직",
    price: "19,900",
    samples: "10종",
    features: ["월 10종 샘플 박스", "기본 기호성 리포트", "앱 급여 기록", "커뮤니티 접근"],
    cta: "시작하기",
    highlight: false,
  },
  {
    name: "프리미엄",
    price: "29,900",
    samples: "15종",
    features: ["월 15종 샘플 박스", "AI 심층 분석 리포트", "앱 급여 기록 + 사진", "맞춤 제품 추천", "우선 고객 지원"],
    cta: "지금 구독하기",
    highlight: true,
  },
  {
    name: "패밀리",
    price: "44,900",
    samples: "30종",
    features: ["반려동물 2마리", "월 30종 샘플 박스", "AI 비교 분석 리포트", "전용 영양 상담", "무료 배송"],
    cta: "시작하기",
    highlight: false,
  },
];

export default function Home() {
  const statsRef = useInView(0.3);
  const count1 = useCountUp(1500, 1800, statsRef.inView);
  const count2 = useCountUp(12340, 1800, statsRef.inView);
  const count3 = useCountUp(98, 1800, statsRef.inView);

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.975_0.008_80)]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="animate-fade-in-up">
              <div className="green-badge mb-5">
                <span>🐾</span>
                <span>Pet Preference Data Platform</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[oklch(0.18_0.01_65)] leading-[1.15] mb-4">
                내 아이 입맛을<br />
                데이터로,<br />
                <span className="text-[oklch(0.48_0.14_145)]">실패 없는 선택</span>
              </h1>
              <p className="text-lg text-[oklch(0.45_0.02_65)] leading-relaxed mb-8 max-w-lg">
                매월 10~15종 샘플 테스트로<br />
                우리 아이 맞는 사료와 간식을 찾아보세요.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/subscribe">
                  <Button className="bg-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.42_0.14_145)] text-white font-bold px-7 py-3.5 rounded-xl text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                    지금 구독하기
                  </Button>
                </Link>
                <Link href="/#service">
                  <Button variant="outline" className="border-2 border-[oklch(0.90_0.01_80)] text-[oklch(0.35_0.02_65)] font-semibold px-7 py-3.5 rounded-xl text-base hover:border-[oklch(0.48_0.14_145)] hover:text-[oklch(0.48_0.14_145)] transition-all duration-200 bg-white">
                    서비스 알아보기
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[oklch(0.35_0.02_65)]">4.9</span>
                <span className="text-sm text-[oklch(0.52_0.02_65)]">· 12,340명의 보호자가 선택했어요</span>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative animate-slide-in-right delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMG}
                  alt="댕큐 반려동물과 샘플 박스"
                  className="w-full h-[460px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[oklch(0.92_0.03_145)] rounded-xl flex items-center justify-center text-xl">📦</div>
                <div>
                  <p className="text-xs text-[oklch(0.52_0.02_65)]">이번 달 테스트</p>
                  <p className="text-sm font-bold text-[oklch(0.18_0.01_65)]">샘플 12종 발송 예정</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[oklch(0.48_0.14_145)] rounded-2xl shadow-xl p-4 text-white">
                <p className="text-xs opacity-80">평균 절약 금액</p>
                <p className="text-xl font-black">월 4.2만원</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[oklch(0.48_0.14_145)] py-14" ref={statsRef.ref}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            <div>
              <p className="text-4xl lg:text-5xl font-black mb-1">{count1.toLocaleString()}만</p>
              <p className="text-sm lg:text-base opacity-80">국내 반려가구 수</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black mb-1">{count2.toLocaleString()}명</p>
              <p className="text-sm lg:text-base opacity-80">누적 구독 보호자</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black mb-1">{count3}%</p>
              <p className="text-sm lg:text-base opacity-80">구독 만족도</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 bg-[oklch(0.975_0.008_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="green-badge mx-auto mb-4">이런 경험 있으신가요?</div>
            <h2 className="section-title text-3xl lg:text-4xl">
              반려동물 보호자라면<br />
              누구나 겪는 문제
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 card-hover border border-[oklch(0.90_0.01_80)]"
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="text-lg font-bold text-[oklch(0.18_0.01_65)] mb-2">{p.title}</h3>
                <p className="text-sm text-[oklch(0.52_0.02_65)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="service" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="green-badge mx-auto mb-4">어떻게 진행되나요?</div>
            <h2 className="section-title text-3xl lg:text-4xl">
              4단계로 완성되는<br />
              맞춤 식단 여정
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[oklch(0.975_0.008_80)] rounded-2xl p-7 card-hover h-full border border-[oklch(0.90_0.01_80)]">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.icon}
                  </div>
                  <div className="text-5xl font-black mb-3 leading-none" style={{ color: `${step.color}20` }}>
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-[oklch(0.18_0.01_65)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[oklch(0.52_0.02_65)] leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-white border border-[oklch(0.90_0.01_80)] rounded-full items-center justify-center">
                    <ChevronRight size={14} className="text-[oklch(0.48_0.14_145)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-[oklch(0.975_0.008_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="green-badge mx-auto mb-4">댕큐! 핵심 기능</div>
            <h2 className="section-title text-3xl lg:text-4xl">
              데이터가 만드는<br />
              더 나은 반려 생활
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Sample Kit */}
            <div className="bg-white rounded-3xl overflow-hidden card-hover border border-[oklch(0.90_0.01_80)]">
              <div className="h-52 overflow-hidden">
                <img src={SAMPLE_BOX_IMG} alt="샘플 키트" className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <div className="green-badge mb-3">B2C</div>
                <h3 className="text-xl font-bold text-[oklch(0.18_0.01_65)] mb-2">기호성 테스트 키트</h3>
                <p className="text-sm text-[oklch(0.52_0.02_65)] leading-relaxed mb-5">
                  제조사 협력으로 확보한 다양한 샘플을 큐레이션하여 구독 형태로 제공합니다
                </p>
                <Link href="/test">
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.48_0.14_145)] hover:gap-3 transition-all duration-200">
                    자세히 보기 <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>

            {/* Feature 2 - AI Report */}
            <div className="bg-white rounded-3xl overflow-hidden card-hover border border-[oklch(0.90_0.01_80)]">
              <div className="h-52 overflow-hidden bg-[oklch(0.92_0.03_145)] flex items-center justify-center">
                <img src={REPORT_IMG} alt="AI 리포트" className="h-full object-contain" />
              </div>
              <div className="p-7">
                <div className="green-badge mb-3">AI</div>
                <h3 className="text-xl font-bold text-[oklch(0.18_0.01_65)] mb-2">AI 기호도 분석</h3>
                <p className="text-sm text-[oklch(0.52_0.02_65)] leading-relaxed mb-5">
                  수집된 데이터를 기반으로 반려동물의 선호도 및 소비 패턴을 정밀 분석합니다
                </p>
                <Link href="/report">
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.48_0.14_145)] hover:gap-3 transition-all duration-200">
                    자세히 보기 <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>

            {/* Feature 3 - Store */}
            <div className="bg-white rounded-3xl overflow-hidden card-hover border border-[oklch(0.90_0.01_80)]">
              <div className="h-52 overflow-hidden">
                <img src={STORE_IMG} alt="스토어" className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <div className="green-badge mb-3">커머스</div>
                <h3 className="text-xl font-bold text-[oklch(0.18_0.01_65)] mb-2">맞춤형 스토어</h3>
                <p className="text-sm text-[oklch(0.52_0.02_65)] leading-relaxed mb-5">
                  테스트 결과 기반 제품 추천으로 실패 없는 구매 경험을 제공합니다
                </p>
                <Link href="/store">
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.48_0.14_145)] hover:gap-3 transition-all duration-200">
                    자세히 보기 <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REPORT PREVIEW ── */}
      <section className="py-20 bg-[oklch(0.48_0.14_145)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
                🤖 AI 분석 리포트
              </div>
              <h2 className="text-3xl lg:text-4xl font-black leading-tight mb-5">
                코코의 이번 달<br />
                기호성 리포트
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                섭취 속도, 남은 양, 활동 반응, 배변 상태 등<br />
                다양한 데이터를 AI가 종합 분석하여<br />
                맞춤형 식단을 추천해드립니다.
              </p>

              {/* Score Preview */}
              <div className="space-y-3 mb-8">
                {[
                  { name: "A 사료 (그레인프리 연어)", score: 92 },
                  { name: "C 간식 (치킨 저키)", score: 76 },
                  { name: "B 사료 (오리 & 고구마)", score: 58 },
                  { name: "D 영양제 (오메가3)", score: 41 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-sm text-white/80 w-32 shrink-0">{item.name}</span>
                    <div className="flex-1 bg-white/20 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-white transition-all duration-700"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-white w-12 text-right">{item.score}점</span>
                  </div>
                ))}
              </div>

              <Link href="/report">
                <Button className="bg-white text-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.95_0.01_80)] font-bold px-7 py-3.5 rounded-xl text-base">
                  내 아이 리포트 보기
                </Button>
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[oklch(0.92_0.03_145)] rounded-full flex items-center justify-center text-3xl mx-auto mb-3">🐕</div>
                  <h3 className="font-bold text-[oklch(0.18_0.01_65)] text-lg">코코의 기호성 종합 점수</h3>
                </div>
                <div className="text-center mb-6">
                  <span className="text-7xl font-black text-[oklch(0.48_0.14_145)]">87</span>
                  <span className="text-2xl font-bold text-[oklch(0.48_0.14_145)]">점</span>
                  <p className="text-sm text-[oklch(0.52_0.02_65)] mt-1">상위 14%</p>
                </div>
                {/* Radar Chart Placeholder */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Grid */}
                    {[0.2, 0.4, 0.6, 0.8, 1.0].map((r, i) => (
                      <polygon
                        key={i}
                        points={`100,${100 - 80*r} ${100 + 80*r*0.951},${100 - 80*r*0.309} ${100 + 80*r*0.588},${100 + 80*r*0.809} ${100 - 80*r*0.588},${100 + 80*r*0.809} ${100 - 80*r*0.951},${100 - 80*r*0.309}`}
                        fill="none"
                        stroke="oklch(0.90 0.01 80)"
                        strokeWidth="1"
                      />
                    ))}
                    {/* Data */}
                    <polygon
                      points="100,28 167,75 141,155 59,155 33,75"
                      fill="oklch(0.48 0.14 145 / 0.3)"
                      stroke="oklch(0.48 0.14 145)"
                      strokeWidth="2"
                    />
                    {/* Labels */}
                    <text x="100" y="18" textAnchor="middle" fontSize="11" fill="oklch(0.35 0.02 65)" fontFamily="Noto Sans KR">A 사료</text>
                    <text x="178" y="78" textAnchor="start" fontSize="11" fill="oklch(0.35 0.02 65)" fontFamily="Noto Sans KR">B 사료</text>
                    <text x="152" y="168" textAnchor="middle" fontSize="11" fill="oklch(0.35 0.02 65)" fontFamily="Noto Sans KR">C 간식</text>
                    <text x="48" y="168" textAnchor="middle" fontSize="11" fill="oklch(0.35 0.02 65)" fontFamily="Noto Sans KR">D 영양제</text>
                    <text x="18" y="78" textAnchor="end" fontSize="11" fill="oklch(0.35 0.02 65)" fontFamily="Noto Sans KR">B 사료</text>
                  </svg>
                </div>
                <Link href="/report">
                  <Button className="w-full bg-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.42_0.14_145)] text-white font-bold rounded-xl py-3">
                    최적 제품 구매하기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="green-badge mx-auto mb-4">구독 플랜</div>
            <h2 className="section-title text-3xl lg:text-4xl">
              우리 아이에게 딱 맞는<br />
              플랜을 선택하세요
            </h2>
            <p className="section-subtitle mt-3">첫 달 50% 할인 · 언제든지 해지 가능</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 border-2 relative ${
                  plan.highlight
                    ? "border-[oklch(0.48_0.14_145)] bg-[oklch(0.48_0.14_145)] text-white shadow-2xl scale-105"
                    : "border-[oklch(0.90_0.01_80)] bg-white card-hover"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full">
                    가장 인기
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-[oklch(0.18_0.01_65)]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-5 ${plan.highlight ? "text-white/70" : "text-[oklch(0.52_0.02_65)]"}`}>
                  샘플 {plan.samples}/월
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-[oklch(0.18_0.01_65)]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${plan.highlight ? "text-white/70" : "text-[oklch(0.52_0.02_65)]"}`}>원/월</span>
                </div>
                <ul className="space-y-3 mb-7">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <Check size={16} className={plan.highlight ? "text-white" : "text-[oklch(0.48_0.14_145)]"} />
                      <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-[oklch(0.35_0.02_65)]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/subscribe">
                  <Button
                    className={`w-full font-bold rounded-xl py-3 ${
                      plan.highlight
                        ? "bg-white text-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.95_0.01_80)]"
                        : "bg-[oklch(0.48_0.14_145)] text-white hover:bg-[oklch(0.42_0.14_145)]"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-[oklch(0.975_0.008_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="green-badge mx-auto mb-4">보호자 후기</div>
            <h2 className="section-title text-3xl lg:text-4xl">
              실제 보호자들의<br />
              생생한 후기
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "김민지",
                pet: "말티즈 3살 · 하루",
                review: "항상 사료 바꿀 때마다 걱정이었는데, 댕큐 덕분에 하루가 제일 좋아하는 사료를 찾았어요! 이제 사료 고르는 게 전혀 어렵지 않아요.",
                rating: 5,
                img: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=100&h=100&fit=crop",
              },
              {
                name: "박준호",
                pet: "골든리트리버 2살 · 코코",
                review: "코코가 워낙 까다로운 입맛이라 걱정했는데, AI 리포트가 정말 정확해요. 추천해준 사료로 바꾸니 밥그릇을 싹싹 비워요!",
                rating: 5,
                img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100&h=100&fit=crop",
              },
              {
                name: "이수연",
                pet: "고양이 5살 · 나비",
                review: "고양이 사료는 정말 까다롭잖아요. 댕큐 샘플 박스로 나비 취향을 완전히 파악했어요. 이제 사료 버리는 일이 없어졌어요!",
                rating: 5,
                img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&h=100&fit=crop",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 card-hover border border-[oklch(0.90_0.01_80)]">
                <div className="flex items-center gap-3 mb-5">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-[oklch(0.18_0.01_65)] text-sm">{t.name}</p>
                    <p className="text-xs text-[oklch(0.52_0.02_65)]">{t.pet}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array(t.rating).fill(0).map((_, j) => (
                      <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[oklch(0.35_0.02_65)] leading-relaxed">"{t.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-[oklch(0.35_0.12_145)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img src={PET_EATING_IMG} alt="강아지" className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-xl" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            지금 바로 시작해보세요
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            첫 달 50% 할인 · 무료 배송 · 언제든지 해지 가능<br />
            12,340명의 보호자가 이미 경험하고 있어요
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/subscribe">
              <Button className="bg-white text-[oklch(0.35_0.12_145)] hover:bg-[oklch(0.95_0.01_80)] font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                지금 구독하기
              </Button>
            </Link>
            <Link href="/test">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl text-base bg-transparent">
                테스트 키트 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
