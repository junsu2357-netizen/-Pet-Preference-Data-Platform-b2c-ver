/**
 * DangQ! Footer
 * Design: Nature-Informed Minimalism
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.01_65)] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[oklch(0.48_0.14_145)] rounded-lg flex items-center justify-center text-white text-xl font-black">
                🐾
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-xl tracking-tight">댕큐!</span>
                <span className="text-[oklch(0.65_0.02_65)] text-[10px] font-medium tracking-wider">pet food taste lab</span>
              </div>
            </div>
            <p className="text-[oklch(0.65_0.02_65)] text-sm leading-relaxed">
              반려동물의 기호성 데이터를 기반으로<br />
              실패 없는 선택을 도와드립니다.
            </p>
            <div className="flex gap-3 mt-5">
              {["인스타그램", "블로그", "유튜브"].map((s) => (
                <a key={s} href="#" className="text-xs text-[oklch(0.65_0.02_65)] hover:text-[oklch(0.62_0.12_145)] transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">서비스</h4>
            <ul className="space-y-2.5">
              {["서비스 소개", "테스트 키트", "기호성 리포트", "맞춤 스토어", "구독 플랜"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[oklch(0.65_0.02_65)] hover:text-[oklch(0.62_0.12_145)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">회사</h4>
            <ul className="space-y-2.5">
              {["회사 소개", "B2B 파트너십", "채용", "뉴스룸", "투자자 관계"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[oklch(0.65_0.02_65)] hover:text-[oklch(0.62_0.12_145)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">고객지원</h4>
            <ul className="space-y-2.5">
              {["자주 묻는 질문", "1:1 문의", "배송 안내", "환불 정책", "개인정보처리방침"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[oklch(0.65_0.02_65)] hover:text-[oklch(0.62_0.12_145)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-4 bg-[oklch(0.25_0.01_65)] rounded-xl">
              <p className="text-xs text-[oklch(0.65_0.02_65)] mb-1">고객센터 운영시간</p>
              <p className="text-sm font-semibold text-white">평일 10:00 - 18:00</p>
              <p className="text-xs text-[oklch(0.65_0.02_65)] mt-1">점심시간 12:00 - 13:00 제외</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[oklch(0.30_0.01_65)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[oklch(0.52_0.02_65)] space-y-1">
            <p>주식회사 댕큐 | 대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>서울특별시 강남구 테헤란로 123, 댕큐빌딩 5층 | 통신판매업신고: 2025-서울강남-0001</p>
          </div>
          <p className="text-xs text-[oklch(0.40_0.01_65)]">© 2025 댕큐! All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
