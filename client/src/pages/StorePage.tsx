/**
 * DangQ! Store Page - 맞춤형 스토어
 * Design: Nature-Informed Minimalism
 */
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShoppingCart, Heart, Star, Filter, Search, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const STORE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569172912/5LMatynSMvEveE34ZQrcQi/store-products-PmKebKFQHuQHkEA7GV3kYf.webp";

const categories = ["전체", "사료", "간식", "영양제", "용품"];

const products = [
  {
    id: 1, name: "닥터독 그레인프리 연어 & 감자", brand: "닥터독",
    price: 31500, originalPrice: 42000, discount: 25,
    rating: 4.9, reviews: 234, icon: "🐟",
    tags: ["테스트 1위", "그레인프리"], category: "사료",
    match: 98, isNew: false, isBest: true,
  },
  {
    id: 2, name: "퍼피아 치킨 유산균 비스킷", brand: "퍼피아",
    price: 7900, originalPrice: 9900, discount: 20,
    rating: 4.7, reviews: 156, icon: "🍪",
    tags: ["간식 추천", "유산균"], category: "간식",
    match: 89, isNew: false, isBest: false,
  },
  {
    id: 3, name: "네이처밸런스 칠면조 & 고구마", brand: "네이처밸런스",
    price: 34800, originalPrice: 38000, discount: 8,
    rating: 4.8, reviews: 189, icon: "🦃",
    tags: ["AI 추천"], category: "사료",
    match: 85, isNew: true, isBest: false,
  },
  {
    id: 4, name: "힐스 사이언스 다이어트 치킨", brand: "힐스",
    price: 45000, originalPrice: 52000, discount: 13,
    rating: 4.6, reviews: 312, icon: "🍗",
    tags: ["수의사 추천"], category: "사료",
    match: 78, isNew: false, isBest: true,
  },
  {
    id: 5, name: "이나바 참치 & 치즈 캔", brand: "이나바",
    price: 3200, originalPrice: 3500, discount: 9,
    rating: 4.5, reviews: 445, icon: "🐱",
    tags: ["고양이 인기"], category: "간식",
    match: 72, isNew: false, isBest: false,
  },
  {
    id: 6, name: "오메가3 연어오일 영양제", brand: "닥터독",
    price: 18900, originalPrice: 22000, discount: 14,
    rating: 4.7, reviews: 98, icon: "💊",
    tags: ["영양 보충"], category: "영양제",
    match: 68, isNew: true, isBest: false,
  },
  {
    id: 7, name: "로얄캐닌 미니 어덜트", brand: "로얄캐닌",
    price: 28000, originalPrice: 32000, discount: 13,
    rating: 4.8, reviews: 567, icon: "🐕",
    tags: ["소형견 전용"], category: "사료",
    match: 65, isNew: false, isBest: true,
  },
  {
    id: 8, name: "강아지 관절 영양제 글루코사민", brand: "펫닥터",
    price: 24900, originalPrice: 29000, discount: 14,
    rating: 4.6, reviews: 123, icon: "🦴",
    tags: ["관절 건강"], category: "영양제",
    match: 60, isNew: false, isBest: false,
  },
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"match" | "price" | "rating">("match");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const filtered = products
    .filter((p) => activeCategory === "전체" || p.category === activeCategory)
    .filter((p) => p.name.includes(searchQuery) || p.brand.includes(searchQuery))
    .sort((a, b) => {
      if (sortBy === "match") return b.match - a.match;
      if (sortBy === "price") return a.price - b.price;
      return b.rating - a.rating;
    });

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    toast.success(wishlist.includes(id) ? "찜 목록에서 제거했습니다" : "찜 목록에 추가했습니다 ❤️");
  };

  const addToCart = (name: string, id: number) => {
    setCart((prev) => [...prev, id]);
    toast.success(`${name}을 장바구니에 담았습니다! 🛒`);
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
            <span className="text-[oklch(0.35_0.02_65)]">스토어</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-[oklch(0.18_0.01_65)] mb-2">맞춤 스토어</h1>
              <p className="text-[oklch(0.52_0.02_65)]">코코의 기호성 테스트 결과 기반 추천 제품</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[oklch(0.92_0.03_145)] rounded-xl px-4 py-2.5 flex items-center gap-2">
                <ShoppingCart size={16} className="text-[oklch(0.48_0.14_145)]" />
                <span className="text-sm font-semibold text-[oklch(0.35_0.12_145)]">장바구니 {cart.length}개</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Banner */}
      <div className="bg-[oklch(0.48_0.14_145)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <p className="text-sm font-medium opacity-80 mb-1">테스트 1위 제품</p>
              <p className="text-xl font-black">최저가 바로 구매</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={STORE_IMG} alt="추천 제품" className="h-16 rounded-xl object-cover" />
              <div className="text-white">
                <p className="text-sm font-semibold">닥터독 그레인프리 연어 & 감자</p>
                <p className="text-2xl font-black">31,500원</p>
                <p className="text-xs opacity-70 line-through">42,000원</p>
              </div>
              <Button
                onClick={() => addToCart("닥터독 그레인프리 연어 & 감자", 1)}
                className="bg-white text-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.95_0.01_80)] font-bold px-5 py-2.5 rounded-xl"
              >
                바로 구매
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[oklch(0.52_0.02_65)]" />
            <input
              type="text"
              placeholder="제품명 또는 브랜드 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[oklch(0.90_0.01_80)] rounded-xl text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] transition-colors"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-[oklch(0.52_0.02_65)]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[oklch(0.90_0.01_80)] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[oklch(0.48_0.14_145)] text-[oklch(0.35_0.02_65)]"
            >
              <option value="match">기호성 매칭순</option>
              <option value="price">가격 낮은순</option>
              <option value="rating">평점 높은순</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-[oklch(0.48_0.14_145)] text-white"
                  : "bg-white text-[oklch(0.52_0.02_65)] hover:bg-[oklch(0.92_0.03_145)] border border-[oklch(0.90_0.01_80)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-[oklch(0.90_0.01_80)] card-hover group"
            >
              {/* Product Image Area */}
              <div className="relative h-44 bg-[oklch(0.975_0.008_80)] flex items-center justify-center">
                <span className="text-7xl">{product.icon}</span>
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.isBest && (
                    <span className="text-xs bg-amber-400 text-amber-900 px-2.5 py-1 rounded-full font-bold">BEST</span>
                  )}
                  {product.isNew && (
                    <span className="text-xs bg-[oklch(0.48_0.14_145)] text-white px-2.5 py-1 rounded-full font-bold">NEW</span>
                  )}
                </div>
                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                >
                  <Heart
                    size={16}
                    className={wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-[oklch(0.52_0.02_65)]"}
                  />
                </button>
                {/* Match Score */}
                <div className="absolute bottom-3 right-3 bg-[oklch(0.48_0.14_145)] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  매칭 {product.match}%
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-[oklch(0.52_0.02_65)] mb-1">{product.brand}</p>
                <h3 className="text-sm font-bold text-[oklch(0.18_0.01_65)] leading-snug mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-[oklch(0.92_0.03_145)] text-[oklch(0.35_0.12_145)] px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 mb-3">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-semibold text-[oklch(0.35_0.02_65)]">{product.rating}</span>
                  <span className="text-xs text-[oklch(0.52_0.02_65)]">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-black text-[oklch(0.18_0.01_65)]">
                      {product.price.toLocaleString()}원
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[oklch(0.52_0.02_65)] line-through">
                        {product.originalPrice.toLocaleString()}원
                      </span>
                      <span className="text-xs text-red-500 font-bold">-{product.discount}%</span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => addToCart(product.name, product.id)}
                  className="w-full bg-[oklch(0.48_0.14_145)] hover:bg-[oklch(0.42_0.14_145)] text-white font-semibold rounded-xl py-2.5 text-sm"
                >
                  장바구니 담기
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg font-semibold text-[oklch(0.35_0.02_65)]">검색 결과가 없습니다</p>
            <p className="text-sm text-[oklch(0.52_0.02_65)] mt-2">다른 검색어를 입력해보세요</p>
          </div>
        )}

        {/* Brand Section */}
        <div className="mt-14">
          <h2 className="text-2xl font-black text-[oklch(0.18_0.01_65)] mb-6">브랜드 전체보기</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {["닥터독", "네이처밸런스", "로얄캐닌", "힐스", "퍼피아", "이나바"].map((brand) => (
              <button
                key={brand}
                onClick={() => toast.info(`${brand} 브랜드 페이지로 이동합니다`)}
                className="bg-white rounded-xl p-4 text-center border border-[oklch(0.90_0.01_80)] hover:border-[oklch(0.48_0.14_145)] hover:shadow-md transition-all"
              >
                <p className="text-2xl mb-2">🏷️</p>
                <p className="text-sm font-semibold text-[oklch(0.35_0.02_65)]">{brand}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
