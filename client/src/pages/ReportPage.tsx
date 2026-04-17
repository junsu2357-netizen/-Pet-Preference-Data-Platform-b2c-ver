/**
 * DangQ! Report Page - 기호성 리포트
 * Design: Nature-Informed Minimalism
 */
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Award, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";

const radarData = [
  { subject: "A 사료", score: 92, fullMark: 100 },
  { subject: "B 사료", score: 58, fullMark: 100 },
  { subject: "C 간식", score: 76, fullMark: 100 },
  { subject: "D 영양제", score: 41, fullMark: 100 },
  { subject: "E 사료", score: 67, fullMark: 100 },
];

const barData = [
  { name: "A 사료", 먹는속도: 92, 남은양: 92, 변상태: 99, 종합: 92 },
  { name: "C 간식", 먹는속도: 76, 남은양: 76, 변상태: 96, 종합: 76 },
  { name: "B 사료", 먹는속도: 58, 남은양: 38, 변상태: 38, 종합: 48 },
  { name: "D 영양제", 먹는속도: 41, 남은양: 57, 변상태: 38, 종합: 41 },
];

const sampleScores = [
  { rank: 1, id: "A", name: "A 사료", brand: "네이처밸런스 그레인프리 연어 & 감자", score: 92, speed: 92, remaining: 92, condition: 99, icon: "🐟", badge: "최고 선호" },
  { rank: 2, id: "C", name: "C 간식", brand: "퍼피아 치킨 저키", score: 76, speed: 76, remaining: 76, condition: 96, icon: "🥩", badge: null },
  { rank: 3, id: "B", name: "B 사료", brand: "로얄캐닌 치킨 & 쌀", score: 58, speed: 58, remaining: 38, condition: 38, icon: "🍗", badge: null },
  { rank: 4, id: "D", name: "D 영양제", brand: "닥터독 오메가3 연어오일", score: 41, speed: 41, remaining: 57, condition: 38, icon: "💊", badge: null },
];

const aiRecommendations = [
  {
    rank: 1,
    name: "닥터독 그레인프리 연어 & 감자",
    price: "31,500원",
    originalPrice: "42,000원",
    discount: "25%",
    icon: "🐟",
    reason: "기호성 테스트 1위 제품 · 최저가",
    badge: "테스트 1위",
  },
  {
    rank: 2,
    name: "퍼피아 치킨 유산균 비스킷",
    price: "7,900원",
    originalPrice: "9,900원",
    discount: "20%",
    icon: "🍪",
    reason: "간식 카테고리 최고 선호",
    badge: "간식 추천",
  },
  {
    rank: 3,
    name: "네이처밸런스 칠면조",
    price: "34,800원",
    originalPrice: "38,000원",
    discount: "8%",
    icon: "🦃",
    reason: "유사 기호성 프로파일 보호자 선호",
    badge: "AI 추천",
  },
];

export default function ReportPage() {
  const [activeTab, setActiveTab] = useState<"current" | "history" | "compare">("current");

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.975_0.008_80)]">
      <Navbar />

      {/* Header */}
      <div className="bg-white border-b border-[oklch(0.90_0.01_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-[oklch(0.52_0.02_65)] mb-3">
            <Link href="/" className="hover:text-[oklch(0.48_0.14_145)]">홈</Link>
            <ChevronRight size={14} />
            <span className="text-[oklch(0.35_0.02_65)]">기호성 리포트</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-[oklch(0.18_0.01_65)] mb-2">코코의 기호성 리포트</h1>
              <p className="text-[oklch(0.52_0.02_65)]">2025년 4월 테스트 결과 · 골든리트리버 3살</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[oklch(0.92_0.03_145)] rounded-xl px-5 py-3 text-center">
                <p className="text-xs text-[oklch(0.52_0.02_65)]">기호성 종합 점수</p>
                <p className="text-3xl font-black text-[oklch(0.48_0.14_145)]">87점</p>
              </div>
              <div className="bg-[oklch(0.92_0.03_145)] rounded-xl px-5 py-3 text-center">
                <p className="text-xs text-[oklch(0.52_0.02_65)]">상위</p>
                <p className="text-3xl font-black text-[oklch(0.48_0.14_145)]">14%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {(["current", "history", "compare"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-[oklch(0.48_0.14_145)] text-white"
                  : "bg-white text-[oklch(0.52_0.02_65)] hover:bg-[oklch(0.92_0.03_145)] border border-[oklch(0.90_0.01_80)]"
              }`}
            >
              {tab === "current" ? "이번 달 리포트" : tab === "history" ? "과거 리포트" : "비교 분석"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Radar Chart */}
            <div className="bg-white rounded-2xl p-7 border border-[oklch(0.90_0.01_80)]">
              <h2 className="text-xl font-bold text-[oklch(0.18_0.01_65)] mb-1">코코의 이번 달 기호성</h2>
              <p className="text-sm text-[oklch(0.52_0.02_65)] mb-6">샘플별 종합 기호도 레이더 차트</p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="oklch(0.90 0.01 80)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fontSize: 12, fill: "oklch(0.35 0.02 65)", fontFamily: "Noto Sans KR" }}
                    />
                    <Radar
                      name="기호도"
                      dataKey="score"
                      stroke="oklch(0.48 0.14 145)"
                      fill="oklch(0.48 0.14 145)"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-2xl p-7 border border-[oklch(0.90_0.01_80)]">
              <h2 className="text-xl font-bold text-[oklch(0.18_0.01_65)] mb-1">샘플별 상세 점수</h2>
              <p className="text-sm text-[oklch(0.52_0.02_65)] mb-6">먹는 속도 · 남은 양 · 변 상태 비교</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} barSize={16}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.93 0.01 80)" />
                    <XAxis dataKey="name" tick={{ fontSize: 11, fontFamily: "Noto Sans KR" }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{ borderRadius: "12px", border: "1px solid oklch(0.90 0.01 80)", fontFamily: "Noto Sans KR" }}
                    />
                    <Legend wrapperStyle={{ fontSize: "12px", fontFamily: "Noto Sans KR" }} />
                    <Bar dataKey="먹는속도" fill="oklch(0.48 0.14 145)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="남은양" fill="oklch(0.62 0.12 145)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="변상태" fill="oklch(0.75 0.10 145)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Score Table */}
            <div className="bg-white rounded-2xl p-7 border border-[oklch(0.90_0.01_80)]">
              <h2 className="text-xl font-bold text-[oklch(0.18_0.01_65)] mb-5">샘플별 상세 점수</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[oklch(0.90_0.01_80)]">
                      <th className="text-left py-3 pr-4 text-[oklch(0.52_0.02_65)] font-medium">순위</th>
                      <th className="text-left py-3 pr-4 text-[oklch(0.52_0.02_65)] font-medium">샘플</th>
                      <th className="text-right py-3 pr-4 text-[oklch(0.52_0.02_65)] font-medium">먹는속도</th>
                      <th className="text-right py-3 pr-4 text-[oklch(0.52_0.02_65)] font-medium">남은양</th>
                      <th className="text-right py-3 pr-4 text-[oklch(0.52_0.02_65)] font-medium">변상태</th>
                      <th className="text-right py-3 text-[oklch(0.52_0.02_65)] font-medium">종합</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleScores.map((s) => (
                      <tr key={s.id} className="border-b border-[oklch(0.95_0.01_80)] hover:bg-[oklch(0.975_0.008_80)] transition-colors">
                        <td className="py-3.5 pr-4">
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                            s.rank === 1 ? "bg-amber-400 text-amber-900" :
                            s.rank === 2 ? "bg-[oklch(0.80_0.01_65)] text-[oklch(0.35_0.02_65)]" :
                            "bg-[oklch(0.92_0.03_145)] text-[oklch(0.48_0.14_145)]"
                          }`}>
                            {s.rank}
                          </span>
                        </td>
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-2">
                            <span>{s.icon}</span>
                            <div>
                              <p className="font-semibold text-[oklch(0.18_0.01_65)]">{s.name}</p>
                              <p className="text-xs text-[oklch(0.52_0.02_65)]">{s.brand}</p>
                            </div>
                            {s.badge && (
                              <span className="text-xs bg-[oklch(0.92_0.03_145)] text-[oklch(0.35_0.12_145)] px-2 py-0.5 rounded-full font-medium">
                                {s.badge}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 pr-4 text-right font-medium text-[oklch(0.48_0.14_145)]">{s.speed}점</td>
                        <td className="py-3.5 pr-4 text-right font-medium text-[oklch(0.48_0.14_145)]">{s.remaining}점</td>
                        <td className="py-3.5 pr-4 text-right font-medium text-[oklch(0.48_0.14_145)]">{s.condition}점</td>
                        <td className="py-3.5 text-right font-black text-[oklch(0.35_0.12_145)] text-base">{s.score}점</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => toast.info("상세 분석 페이지로 이동합니다")}
                  className="text-sm font-semibold text-[oklch(0.48_0.14_145)] hover:underline flex items-center gap-1"
                >
                  상세 분석 보기 <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: AI Recommendations */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-[oklch(0.90_0.01_80)]">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 bg-[oklch(0.92_0.03_145)] rounded-lg flex items-center justify-center text-lg">🤖</div>
                <div>
                  <h3 className="font-bold text-[oklch(0.18_0.01_65)] text-sm">AI 추천 제품</h3>
                  <p className="text-xs text-[oklch(0.52_0.02_65)]">코코에게 맞는 제품을 추천해드려요</p>
                </div>
              </div>

              <div className="space-y-4">
                {aiRecommendations.map((rec) => (
                  <div key={rec.rank} className={`rounded-xl p-4 border ${
                    rec.rank === 1 ? "border-[oklch(0.48_0.14_145)] bg-[oklch(0.97_0.02_145)]" : "border-[oklch(0.90_0.01_80)]"
                  }`}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-[oklch(0.92_0.03_145)] rounded-xl flex items-center justify-center text-xl shrink-0">
                        {rec.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs bg-[oklch(0.48_0.14_145)] text-white px-2 py-0.5 rounded-full font-medium">
                            {rec.badge}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-[oklch(0.18_0.01_65)] leading-tight">{rec.name}</p>
                        <p className="text-xs text-[oklch(0.52_0.02_65)] mt-0.5">{rec.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-black text-[oklch(0.35_0.12_145)]">{rec.price}</span>
                        <span className="text-xs text-[oklch(0.52_0.02_65)] line-through ml-1.5">{rec.originalPrice}</span>
                        <span className="text-xs text-red-500 font-bold ml-1">-{rec.discount}</span>
                      </div>
                      <Button
                        onClick={() => toast.success(`${rec.name}을 장바구니에 담았습니다!`)}
                        className="bg-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.42_0.14_145)] text-white text-xs font-semibold px-3 py-2 rounded-lg h-auto"
                      >
                        구매하기
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => toast.info("더 많은 추천 제품을 보여드립니다")}
                className="w-full mt-4 text-sm font-semibold text-[oklch(0.48_0.14_145)] hover:underline flex items-center justify-center gap-1"
              >
                더 많은 추천 보기 <ChevronRight size={14} />
              </button>
            </div>

            {/* AI Insight */}
            <div className="bg-[oklch(0.48_0.14_145)] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={18} />
                <h3 className="font-bold text-sm">AI 인사이트</h3>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                코코는 <strong>생선 기반 단백질</strong>을 선호하며, 
                <strong>그레인프리</strong> 제품에서 높은 기호성을 보입니다. 
                간식은 <strong>부드러운 질감</strong>을 선호하는 경향이 있습니다.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["생선 단백질", "그레인프리", "부드러운 질감", "소화 양호"].map((tag) => (
                  <span key={tag} className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Next Test */}
            <div className="bg-white rounded-2xl p-6 border border-[oklch(0.90_0.01_80)]">
              <div className="flex items-center gap-2 mb-3">
                <Award size={18} className="text-[oklch(0.48_0.14_145)]" />
                <h3 className="font-bold text-[oklch(0.18_0.01_65)] text-sm">다음 달 테스트</h3>
              </div>
              <p className="text-sm text-[oklch(0.52_0.02_65)] mb-4">
                이번 달 결과를 바탕으로 다음 달 샘플 박스를 큐레이션했습니다
              </p>
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-[oklch(0.35_0.02_65)]">발송 예정일</span>
                <span className="font-bold text-[oklch(0.18_0.01_65)]">2025년 5월 10일</span>
              </div>
              <Link href="/test">
                <Button className="w-full bg-[oklch(0.92_0.03_145)] hover:bg-[oklch(0.88_0.04_145)] text-[oklch(0.35_0.12_145)] font-semibold rounded-xl py-2.5 text-sm">
                  테스트 키트 확인하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
