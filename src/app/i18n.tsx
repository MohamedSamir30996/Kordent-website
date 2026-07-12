import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { legalEn, legalKo } from "./legal/legalTranslations";

export type Language = "en" | "ko";

const STORAGE_KEY = "kordent.lang";

const en = {
  // Navigation
  "nav.home": "Home",
  "nav.about": "About",
  "nav.products": "Products",
  "nav.solutions": "Solutions",
  "nav.contact": "Contact",
  "nav.switchLanguage": "Switch language",

  // Equipment categories (used in nav dropdown + equipment sidebar)
  "cat.restorative-materials": "Restorative Materials",
  "cat.etchant-adhesives": "Etchant & Adhesives",
  "cat.endodontic-materials": "Endodontic Materials",
  "cat.impression-materials": "Impression Materials",
  "cat.core-materials": "Core Materials, Liner, EDTA",
  "cat.prevention-protection": "Prevention & Protection Pumice",
  "cat.k-pumice": "K. Pumice",
  "cat.tooth-whitening": "Tooth Whitening Technique",
  "cat.other-products": "Other Products",

  // Equipment category descriptions
  "catDesc.restorative-materials": "High-quality materials for dental restorations",
  "catDesc.etchant-adhesives": "Bonding agents and etching solutions for restorative procedures",
  "catDesc.endodontic-materials": "Specialized materials for root canal treatments",
  "catDesc.impression-materials": "Precision impression materials for accurate dental molds",
  "catDesc.core-materials": "Build-up materials, liners, and root canal irrigation",
  "catDesc.prevention-protection": "Preventive care and protection products",
  "catDesc.k-pumice": "Professional pumice products for polishing",
  "catDesc.tooth-whitening": "Professional tooth whitening systems",
  "catDesc.other-products": "Additional dental products and accessories",

  // Hero (home)
  "hero.cta": "Explore Products",

  // About section
  "about.title": "Leading Dental Innovation",
  "about.p1":
    "We provide cutting-edge dental equipment and comprehensive practice solutions, empowering dental professionals with the technology they need for exceptional patient care.",
  "about.p2":
    "Our approach combines German engineering precision with intuitive design, delivering equipment that enhances both clinical outcomes and practice efficiency.",

  // Services section
  "services.title": "Our Products",
  "services.subtitle":
    "Comprehensive dental technology for exceptional patient care",
  "services.restorative.desc":
    "High-quality materials designed to restore the function, strength, and appearance of damaged teeth with reliable, long-lasting results.",
  "services.etchant.desc":
    "Essential bonding solutions that prepare tooth surfaces and ensure strong, secure adhesion for restorative and cosmetic procedures.",
  "services.endodontic.desc":
    "Specialized materials used in root canal treatments to support effective cleaning, sealing, and long-term tooth preservation.",

  // Expertise section
  "expertise.title": "Complete Solutions",
  "expertise.body":
    "Our team of specialists brings decades of experience in dental technology, practice optimization, and comprehensive support services.",
  "expertise.tech.title": "Technical Excellence",
  "expertise.tech.body":
    "Expert installation, calibration, and ongoing maintenance for all equipment.",
  "expertise.support.title": "24/7 Support",
  "expertise.support.body":
    "Round-the-clock technical support and rapid response service teams.",

  // Contact section (home)
  "contact.title": "Elevate Your Equipment",
  "contact.lead":
    "Ready to upgrade your clinic with state-of-the-art dental equipment? Connect with our specialists.",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.location": "Location",
  "contact.cta": "Request Consultation",

  // Footer
  "footer.about": "About",
  "footer.equipment": "Equipment",
  "footer.solutions": "Solutions",
  "footer.contact": "Contact",
  "footer.copyright": "© 2026 Kordent. All rights reserved.",

  // About page
  "aboutPage.title": "About Kordent",
  "aboutPage.lead":
    "Leading the industry in precision dental equipment and integrated technology solutions.",
  "aboutPage.mission.title": "Our Mission",
  "aboutPage.mission.p1":
    "We provide cutting-edge dental equipment designed for precision, reliability, and patient comfort. Our comprehensive solutions support dental professionals in delivering exceptional care.",
  "aboutPage.mission.p2":
    "With over 25 years of experience, we've equipped thousands of practices worldwide with state-of-the-art technology and comprehensive support services.",
  "aboutPage.stats.years": "Years of Excellence",
  "aboutPage.stats.practices": "Practices Equipped",
  "aboutPage.stats.countries": "Countries Served",

  // Solutions page
  "solutionsPage.title": "Integrated Solutions",
  "solutionsPage.lead":
    "Comprehensive services designed to support every aspect of your dental practice, from setup to ongoing maintenance.",
  "solution.setup.title": "Complete Practice Setup",
  "solution.setup.desc":
    "Turnkey solutions for new practices including equipment, installation, and training.",
  "solution.setup.f1": "Equipment selection and procurement",
  "solution.setup.f2": "Professional installation",
  "solution.setup.f3": "Staff training programs",
  "solution.setup.f4": "Ongoing technical support",
  "solution.tech.title": "Technology Integration",
  "solution.tech.desc":
    "Seamless integration of digital workflows and practice management systems.",
  "solution.tech.f1": "Digital imaging integration",
  "solution.tech.f2": "CAD/CAM workflow setup",
  "solution.tech.f3": "Practice management software",
  "solution.tech.f4": "Cloud-based solutions",
  "solution.maint.title": "Equipment Maintenance",
  "solution.maint.desc":
    "Comprehensive maintenance programs to ensure optimal performance and longevity.",
  "solution.maint.f1": "Preventive maintenance schedules",
  "solution.maint.f2": "Priority repair services",
  "solution.maint.f3": "Replacement parts inventory",
  "solution.maint.f4": "Performance optimization",

  // Contact page
  "contactPage.title": "Get in Touch",
  "contactPage.lead":
    "Have questions about our equipment or services? Our team is here to help you find the right solutions.",
  "contactPage.info": "Contact Information",
  "contactPage.address": "Address",
  "contactPage.hours.title": "Business Hours",
  "contactPage.hours.weekdays": "Monday - Friday",
  "contactPage.hours.saturday": "Saturday",
  "contactPage.hours.sunday": "Sunday",
  "contactPage.hours.weekdaysHours": "8:00 AM - 6:00 PM",
  "contactPage.hours.saturdayHours": "9:00 AM - 2:00 PM",
  "contactPage.hours.closed": "Closed",
  "contactPage.form.name": "Full Name",
  "contactPage.form.namePlaceholder": "John Smith",
  "contactPage.form.email": "Email Address",
  "contactPage.form.emailPlaceholder": "john@example.com",
  "contactPage.form.phone": "Phone Number",
  "contactPage.form.phonePlaceholder": "+1 (234) 567-8900",
  "contactPage.form.message": "Message",
  "contactPage.form.messagePlaceholder": "Tell us about your needs...",
  "contactPage.form.send": "Send Message",
  "contactPage.form.disclaimer.part1":
    "By submitting this form, you agree that Kordent may use your contact details and message to respond to your inquiry in accordance with our ",
  "contactPage.form.disclaimer.part2": " and ",
  "contactPage.form.disclaimer.part3": ".",

  // Equipment page
  "equipment.title": "Dental Products",
  "equipment.lead":
    "Explore our comprehensive range of precision dental products and technology solutions",
  "equipment.search": "Search products...",
  "equipment.categories": "Categories",

  "product.breadcrumb.products": "Products",
  "product.tab.details": "Product Details",
  "product.tab.packages": "Packages",
  "product.tab.videos": "Videos",
  "product.clickToEnlarge": "Click to enlarge the photo.",
  "product.packages.empty": "Package information is not available for this product.",
  "product.notFound": "Product not found",
  "product.backToProducts": "Back to products",
  "product.closeEnlarge": "Close enlarged image",

  ...legalEn,
} as const;

export type TranslationKey = keyof typeof en;

const ko: Record<TranslationKey, string> = {
  // Navigation
  "nav.home": "홈",
  "nav.about": "회사 소개",
  "nav.products": "제품",
  "nav.solutions": "솔루션",
  "nav.contact": "문의",
  "nav.switchLanguage": "언어 변경",

  // Equipment categories
  "cat.restorative-materials": "수복 재료",
  "cat.etchant-adhesives": "에칭제 및 접착제",
  "cat.endodontic-materials": "근관 치료 재료",
  "cat.impression-materials": "인상 재료",
  "cat.core-materials": "코어 재료, 라이너, EDTA",
  "cat.prevention-protection": "예방 및 보호 퓨미스",
  "cat.k-pumice": "K. 퓨미스",
  "cat.tooth-whitening": "치아 미백 기법",
  "cat.other-products": "기타 제품",

  // Equipment category descriptions
  "catDesc.restorative-materials": "치아 수복을 위한 고품질 재료",
  "catDesc.etchant-adhesives": "수복 시술을 위한 접착제 및 에칭 솔루션",
  "catDesc.endodontic-materials": "근관 치료를 위한 전문 재료",
  "catDesc.impression-materials": "정확한 치아 모형을 위한 정밀 인상 재료",
  "catDesc.core-materials": "코어 빌드업 재료, 라이너 및 근관 세척제",
  "catDesc.prevention-protection": "예방 관리 및 보호 제품",
  "catDesc.k-pumice": "연마용 전문 퓨미스 제품",
  "catDesc.tooth-whitening": "전문 치아 미백 시스템",
  "catDesc.other-products": "기타 치과 제품 및 액세서리",

  // Hero
  "hero.cta": "제품 둘러보기",

  // About section
  "about.title": "치과 혁신을 선도합니다",
  "about.p1":
    "최첨단 치과 장비와 종합적인 진료 솔루션을 제공하여, 치과 전문가들이 탁월한 환자 진료에 필요한 기술을 갖출 수 있도록 지원합니다.",
  "about.p2":
    "독일 엔지니어링의 정밀함과 직관적인 디자인을 결합해 임상 결과와 진료 효율을 모두 향상시키는 장비를 제공합니다.",

  // Services section
  "services.title": "주요 제품",
  "services.subtitle": "탁월한 환자 진료를 위한 종합적인 치과 기술",
  "services.restorative.desc":
    "손상된 치아의 기능, 강도 및 심미성을 신뢰성 있고 오래 지속되도록 회복시키도록 설계된 고품질 재료입니다.",
  "services.etchant.desc":
    "치아 표면을 준비하고 수복 및 심미 시술에서 강력하고 안정적인 접착을 보장하는 필수 본딩 솔루션입니다.",
  "services.endodontic.desc":
    "효과적인 세척, 밀폐 및 장기적인 치아 보존을 지원하는 근관 치료 전용 재료입니다.",

  // Expertise section
  "expertise.title": "종합 솔루션",
  "expertise.body":
    "당사 전문가 팀은 치과 기술, 진료 최적화, 종합 지원 서비스 분야에서 수십 년의 경험을 보유하고 있습니다.",
  "expertise.tech.title": "기술적 우수성",
  "expertise.tech.body": "모든 장비의 전문 설치, 교정 및 지속적인 유지보수.",
  "expertise.support.title": "24시간 지원",
  "expertise.support.body": "연중무휴 기술 지원 및 신속 대응 서비스 팀.",

  // Contact section (home)
  "contact.title": "장비를 한 단계 끌어올리세요",
  "contact.lead":
    "최첨단 치과 장비로 클리닉을 업그레이드할 준비가 되셨나요? 전문가에게 문의해 보세요.",
  "contact.email": "이메일",
  "contact.phone": "전화",
  "contact.location": "위치",
  "contact.cta": "상담 요청하기",

  // Footer
  "footer.about": "회사 소개",
  "footer.equipment": "제품",
  "footer.solutions": "솔루션",
  "footer.contact": "문의",
  "footer.copyright": "© 2026 Kordent. 모든 권리 보유.",

  // About page
  "aboutPage.title": "Kordent 소개",
  "aboutPage.lead": "정밀 치과 장비와 통합 기술 솔루션 분야의 업계 선두주자.",
  "aboutPage.mission.title": "우리의 사명",
  "aboutPage.mission.p1":
    "정밀성, 신뢰성, 환자 편의성을 위해 설계된 최첨단 치과 장비를 제공합니다. 종합적인 솔루션으로 치과 전문가들이 탁월한 진료를 제공할 수 있도록 지원합니다.",
  "aboutPage.mission.p2":
    "25년 이상의 경험을 바탕으로, 전 세계 수천 곳의 진료소에 최첨단 기술과 종합 지원 서비스를 제공해 왔습니다.",
  "aboutPage.stats.years": "년의 우수한 역사",
  "aboutPage.stats.practices": "곳의 진료소 도입",
  "aboutPage.stats.countries": "개국에 서비스 제공",

  // Solutions page
  "solutionsPage.title": "통합 솔루션",
  "solutionsPage.lead":
    "셋업부터 지속적인 유지보수까지, 치과 진료의 모든 측면을 지원하도록 설계된 종합 서비스.",
  "solution.setup.title": "완전한 진료소 셋업",
  "solution.setup.desc":
    "장비, 설치, 교육을 포함한 신규 진료소를 위한 턴키 솔루션.",
  "solution.setup.f1": "장비 선정 및 조달",
  "solution.setup.f2": "전문 설치",
  "solution.setup.f3": "직원 교육 프로그램",
  "solution.setup.f4": "지속적인 기술 지원",
  "solution.tech.title": "기술 통합",
  "solution.tech.desc":
    "디지털 워크플로 및 진료 관리 시스템의 원활한 통합.",
  "solution.tech.f1": "디지털 영상 통합",
  "solution.tech.f2": "CAD/CAM 워크플로 구축",
  "solution.tech.f3": "진료 관리 소프트웨어",
  "solution.tech.f4": "클라우드 기반 솔루션",
  "solution.maint.title": "장비 유지보수",
  "solution.maint.desc":
    "최적의 성능과 내구성을 보장하는 종합 유지보수 프로그램.",
  "solution.maint.f1": "예방 정비 일정",
  "solution.maint.f2": "우선 수리 서비스",
  "solution.maint.f3": "교체 부품 재고",
  "solution.maint.f4": "성능 최적화",

  // Contact page
  "contactPage.title": "문의하기",
  "contactPage.lead":
    "장비나 서비스에 대해 궁금하신 점이 있으신가요? 저희 팀이 적합한 솔루션을 찾아 드리겠습니다.",
  "contactPage.info": "연락처 정보",
  "contactPage.address": "주소",
  "contactPage.hours.title": "영업 시간",
  "contactPage.hours.weekdays": "월요일 - 금요일",
  "contactPage.hours.saturday": "토요일",
  "contactPage.hours.sunday": "일요일",
  "contactPage.hours.weekdaysHours": "오전 8:00 - 오후 6:00",
  "contactPage.hours.saturdayHours": "오전 9:00 - 오후 2:00",
  "contactPage.hours.closed": "휴무",
  "contactPage.form.name": "성명",
  "contactPage.form.namePlaceholder": "홍길동",
  "contactPage.form.email": "이메일 주소",
  "contactPage.form.emailPlaceholder": "name@example.com",
  "contactPage.form.phone": "전화번호",
  "contactPage.form.phonePlaceholder": "+82 10-1234-5678",
  "contactPage.form.message": "메시지",
  "contactPage.form.messagePlaceholder": "필요하신 사항을 알려주세요...",
  "contactPage.form.send": "메시지 보내기",
  "contactPage.form.disclaimer.part1":
    "본 양식을 제출함으로써 귀하는 Kordent가 귀하의 연락처 정보 및 메시지를 문의 응답을 위해 이용하는 것에 동의하며, 그 처리는 당사의 ",
  "contactPage.form.disclaimer.part2": " 및 ",
  "contactPage.form.disclaimer.part3": "의 적용을 받습니다.",

  // Equipment page
  "equipment.title": "치과 제품",
  "equipment.lead": "정밀 치과 제품과 기술 솔루션의 종합 라인업을 만나보세요",
  "equipment.search": "제품 검색...",
  "equipment.categories": "카테고리",

  "product.breadcrumb.products": "제품",
  "product.tab.details": "제품 상세",
  "product.tab.packages": "포장",
  "product.tab.videos": "영상",
  "product.clickToEnlarge": "사진을 클릭하면 확대됩니다.",
  "product.packages.empty": "이 제품의 포장 정보가 없습니다.",
  "product.notFound": "제품을 찾을 수 없습니다",
  "product.backToProducts": "제품 목록으로 돌아가기",
  "product.closeEnlarge": "확대 이미지 닫기",

  ...legalKo,
};

const dictionaries = { en, ko } as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

function readInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "ko" ? "ko" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const dict = dictionaries[language];
    return {
      language,
      setLanguage: (lang: Language) => setLanguageState(lang),
      toggleLanguage: () =>
        setLanguageState((prev) => (prev === "en" ? "ko" : "en")),
      t: (key: TranslationKey) => dict[key] ?? en[key] ?? key,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
