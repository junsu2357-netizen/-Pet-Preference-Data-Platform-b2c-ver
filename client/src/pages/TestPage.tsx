/**
 * DangQ! Test Page - 기호성 테스트 키트
 * Design: Nature-Informed Minimalism
 */
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Plus, Check, Star, ChevronRight, Package, Clock, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const SAMPLE_BOX_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569172912/5LMatynSMvEveE34ZQrcQi/sample-kit-box-2WJ7ZyGNLNxKzQsS43guzS.webp";

const samples = [
  { id: "A", name: "A 사료", brand: "네이처밸런스", type: "사료", flavor: "그레인프리 연어 & 감자", weight: "100g", icon: "🐟", color: "oklch(0.48 0.14 145)", added: true },
  { id: "B", name: "B 사료", brand: "로얄캐닌", type: "사료", flavor: "치킨 & 쌀", weight: "100g", icon: "🍗", color: "oklch(0.62 0.12 145)", added: true },
  { id: "C", name: "C 간식", brand: "퍼피아", type: "간식", flavor: "치킨 저키", weight: "50g", icon: "🥩", color: "oklch(0.55 0.13 145)", added: true },
  { id: "D", name: "D 영양제", brand: "닥터독", type: "영양제", flavor: "오메가3 연어오일", weight: "30ml", icon: "💊", color: "oklch(0.42 0.14 145)", added: false },
  { id: "E", name: "E 사료", brand: "힐스", type: "사료", flavor: "오리 & 고구마", weight: "100g", icon: "🦆", color: "oklch(0.50 0.14 145)", added: false },
  { id: "F", name: "F 간식", brand: "이나바", type: "간식", flavor: "참치 & 치즈", weight: "40g", icon: "🐱", color: "oklch(0.58 0.12 145)", added: false },
];

const feedingSteps = [
  { step: 1, title: "샘플 개봉", desc: "샘플 패키지를 개봉하고 평소 급여량의 절반을 준비하세요" },
  { step: 2, title: "급여 시작", desc: "반려동물에게 샘플을 급여하고 타이머를 시작하세요" },
  { step: 3, title: "반응 관찰", desc: "먹는 속도, 남은 양, 꼬리 움직임 등을 관찰하세요" },
  { step: 4, title: "기록 저장", desc: "앱에 결과를 기록하면 AI가 분석을 시작합니다" },
];

export default function TestPage() {
  const [activeTab, setActiveTab] = useState<"current" | "history">("current");
  const [feedingRecord, setFeedingRecord] = useState({
    speed: 3,
    remaining: 2,
    condition: 3,
  });
  const [recordingFor, setRecordingFor] = useState<string | null>(null);

  const handleRecord = (sampleId: string) => {
    setRecordingFor(sampleId);
    toast.success(`${sampleId} 샘플 급여 기록을 시작합니다!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.975_0.008_80)]">
      <Navbar />

      {/* Header */}
      <div className="bg-white border-b border-[oklch(0.90_0.01_80)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-[oklch(0.52_0.02_65)] mb-3">
            <Link href="/" className="hover:text-[oklch(0.48_0.14_145)]">홈</Link>
            <ChevronRight size={14} />
            <span className="text-[oklch(0.35_0.02_65)]">기호성 테스트</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-[oklch(0.18_0.01_65)] mb-2">기호성 테스트</h1>
              <div className="flex items-center gap-3">
                <div className="green-badge">
                  <Clock size={14} />
                  <span>급여 기간: 2025.04.10 - 04.20</span>
                </div>
                <span className="text-sm text-[oklch(0.52_0.02_65)]">D-3 배송 출발</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[oklch(0.92_0.03_145)] rounded-xl px-5 py-3 text-center">
                <p className="text-xs text-[oklch(0.52_0.02_65)]">이번 달 샘플</p>
                <p className="text-2xl font-black text-[oklch(0.48_0.14_145)]">12종</p>
              </div>
              <div className="bg-[oklch(0.92_0.03_145)] rounded-xl px-5 py-3 text-center">
                <p className="text-xs text-[oklch(0.52_0.02_65)]">기록 완료</p>
                <p className="text-2xl font-black text-[oklch(0.48_0.14_145)]">3종</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Sample List */}
          <div className="lg:col-span-2">
            <div className="flex gap-2 mb-6">
              {(["current", "history"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-[oklch(0.48_0.14_145)] text-white"
                      : "bg-white text-[oklch(0.52_0.02_65)] hover:bg-[oklch(0.92_0.03_145)] border border-[oklch(0.90_0.01_80)]"
                  }`}
                >
                  {tab === "current" ? "이번 달 샘플" : "기록 내역"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {samples.map((sample) => (
                <div
                  key={sample.id}
                  className={`bg-white rounded-2xl p-5 border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                    sample.added ? "border-[oklch(0.48_0.14_145)]" : "border-[oklch(0.90_0.01_80)]"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                        style={{ backgroundColor: `${sample.color.replace(')', ' / 0.15)')}` }}
                      >
                        {sample.icon}
                      </div>
                      <div>
                        <p className="font-bold text-[oklch(0.18_0.01_65)]">{sample.name}</p>
                        <p className="text-xs text-[oklch(0.52_0.02_65)]">{sample.brand}</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      sample.added ? "bg-[oklch(0.48_0.14_145)]" : "bg-[oklch(0.90_0.01_80)]"
                    }`}>
                      {sample.added ? <Check size={14} className="text-white" /> : <Plus size={14} className="text-[oklch(0.52_0.02_65)]" />}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs bg-[oklch(0.92_0.03_145)] text-[oklch(0.35_0.12_145)] px-2.5 py-1 rounded-full font-medium">{sample.type}</span>
                    <span className="text-xs text-[oklch(0.52_0.02_65)]">{sample.flavor}</span>
                  </div>
                  <Button
                    onClick={() => handleRecord(sample.id)}
                    className={`w-full rounded-xl text-sm font-semibold py-2.5 ${
                      sample.added
                        ? "bg-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.42_0.14_145)] text-white"
                        : "bg-[oklch(0.92_0.03_145)] hover:bg-[oklch(0.88_0.04_145)] text-[oklch(0.35_0.12_145)]"
                    }`}
                  >
                    {sample.added ? "급여 기록하기" : "급여 시작"}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Recording Panel */}
          <div className="space-y-5">
            {/* Current Recording */}
            <div className="bg-white rounded-2xl p-6 border border-[oklch(0.90_0.01_80)]">
              <h3 className="font-bold text-[oklch(0.18_0.01_65)] mb-1">
                {recordingFor ? `${recordingFor} 샘플 급여 기록` : "급여 기록"}
              </h3>
              <p className="text-xs text-[oklch(0.52_0.02_65)] mb-5">
                {recordingFor ? "아래 항목을 기록해주세요" : "샘플을 선택하면 기록이 시작됩니다"}
              </p>

              {/* Speed */}
              <div className="mb-5">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[oklch(0.35_0.02_65)]">먹는 속도는 어땠나요?</span>
                  <span className="text-sm">
                    {["😞", "😐", "🙂", "😊", "😍"][feedingRecord.speed - 1]}
                  </span>
                </div>
                <input
                  type="range" min={1} max={5} value={feedingRecord.speed}
                  onChange={(e) => setFeedingRecord(p => ({ ...p, speed: +e.target.value }))}
                  className="w-full accent-[oklch(0.48_0.14_145)]"
                />
                <div className="flex justify-between text-xs text-[oklch(0.52_0.02_65)] mt-1">
                  <span>매우 느림</span><span>매우 빠름</span>
                </div>
              </div>

              {/* Remaining */}
              <div className="mb-5">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[oklch(0.35_0.02_65)]">남은 양은?</span>
                  <span className="text-sm">
                    {["🍽️", "🍽️", "😐", "😕", "😢"][feedingRecord.remaining - 1]}
                  </span>
                </div>
                <input
                  type="range" min={1} max={5} value={feedingRecord.remaining}
                  onChange={(e) => setFeedingRecord(p => ({ ...p, remaining: +e.target.value }))}
                  className="w-full accent-[oklch(0.48_0.14_145)]"
                />
                <div className="flex justify-between text-xs text-[oklch(0.52_0.02_65)] mt-1">
                  <span>싹 비움</span><span>거의 남김</span>
                </div>
              </div>

              {/* Condition */}
              <div className="mb-5">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[oklch(0.35_0.02_65)]">변 상태는?</span>
                  <span className="text-sm">
                    {["✅", "✅", "🟡", "🟠", "❌"][feedingRecord.condition - 1]}
                  </span>
                </div>
                <input
                  type="range" min={1} max={5} value={feedingRecord.condition}
                  onChange={(e) => setFeedingRecord(p => ({ ...p, condition: +e.target.value }))}
                  className="w-full accent-[oklch(0.48_0.14_145)]"
                />
                <div className="flex justify-between text-xs text-[oklch(0.52_0.02_65)] mt-1">
                  <span>매우 좋음</span><span>매우 나쁨</span>
                </div>
              </div>

              {/* Special Notes */}
              <div className="mb-5">
                <p className="text-sm font-medium text-[oklch(0.35_0.02_65)] mb-2">특이사항이 있나요? (선택)</p>
                <div className="flex flex-wrap gap-2">
                  {["꼬리 흔들기", "그릇 핥기", "구토", "알레르기 반응", "활발한 반응"].map((tag) => (
                    <button
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border border-[oklch(0.90_0.01_80)] text-[oklch(0.52_0.02_65)] hover:border-[oklch(0.48_0.14_145)] hover:text-[oklch(0.48_0.14_145)] transition-colors"
                      onClick={() => toast.info(`'${tag}' 태그 추가됨`)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => {
                  toast.success("급여 기록이 저장되었습니다! AI가 분석을 시작합니다 🤖");
                  setRecordingFor(null);
                }}
                className="w-full bg-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.42_0.14_145)] text-white font-bold rounded-xl py-3"
              >
                저장하기
              </Button>
            </div>

            {/* How to Feed */}
            <div className="bg-[oklch(0.92_0.03_145)] rounded-2xl p-6">
              <h3 className="font-bold text-[oklch(0.35_0.12_145)] mb-4">올바른 급여 방법</h3>
              <div className="space-y-3">
                {feedingSteps.map((s) => (
                  <div key={s.step} className="flex gap-3">
                    <div className="w-6 h-6 bg-[oklch(0.48_0.14_145)] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.35_0.12_145)]">{s.title}</p>
                      <p className="text-xs text-[oklch(0.45_0.08_145)]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Box Image */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[oklch(0.90_0.01_80)]">
              <img src={SAMPLE_BOX_IMG} alt="샘플 박스" className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-sm font-semibold text-[oklch(0.18_0.01_65)]">이번 달 샘플 박스</p>
                <p className="text-xs text-[oklch(0.52_0.02_65)] mt-1">2025년 4월 · 12종 구성</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
