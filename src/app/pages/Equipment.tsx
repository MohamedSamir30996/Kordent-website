import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    id: "restorative-materials",
    name: "Restorative Materials",
    description:
      "High-quality materials for dental restorations",
    subcategories: [
      {
        id: "composite-resin",
        name: "K. Composite Resin",
        products: [
          {
            id: 1,
            name: "K. Composite Resin", //YT link: https://youtube.com/shorts/EAzEvcVfLQ4?si=ppuq--nvQ7CbBNDX
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Light-cured flowable composite resin; suitable for use in anterior and posterior teeth; classified into type 1, class 2, group 1 according to ISO 4049:2019; possesses radio-opaque characteristics with 2.9 mm aluminum step wedge.",
          },
        ],
      },
      {
        id: "composite-resin-kit", // YT links: https://youtube.com/shorts/EAzEvcVfLQ4?si=ppuq--nvQ7CbBNDX and https://youtube.com/shorts/OwJr92ZRI_0?si=S1vzsW6n6re3SQ37
        name: "K. Composite Resin Kit",
        products: [
          {
            id: 2,
            name: "Kit 1",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Complete composite resin starter kit",
          },
          {
            id: 3,
            name: "Kit 2",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Advanced composite resin professional kit",
          },
        ],
      },
      {
        id: "flow-resin",
        name: "K. Flow Resin",
        products: [
          {
            id: 4,
            name: "K. Flow Resin",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Light-cured flowable composite resin; suitable for use in anterior and posterior teeth; classified into type 1, class 2, group 1 according to ISO 4049:2019; possesses radio-opaque characteristics with 2.9 mm aluminum step wedge.",
          },
        ],
      },
      {
        id: "temp-flow",
        name: "K.Temp Flow", // YT link: https://youtube.com/shorts/XuewexHQtNI?si=dtSM4C9YXhUwn1bz
        products: [
          {
            id: 5,
            name: "K.Temp Flow",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Temporary flowable material",
          },
        ],
      },
      {
        id: "k-tem",
        name: "K.Tem",
        products: [
          {
            id: 6,
            name: "K.Tem",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Temporary restoration material",
          },
        ],
      },
      {
        id: "temp-crown",
        name: "K. Temp Crown",
        products: [
          {
            id: 7,
            name: "K. Temp Crown",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Temporary crown material for making period of permanent crown that is highly esthetic; does not breakable on thin part so that it reduces repair case dramatically.",
          },
          {
            id: 8,
            name: "K. Temp Crown Kit",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Complete temporary crown kit",
          },
        ],
      },
      {
        id: "flow-implant",
        name: "K.flow for Implant",
        products: [
          {
            id: 9,
            name: "K.flow for Implant",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Flowable composite for implant restorations",
          },
        ],
      },
      {
        id: "k-lay",
        name: "K.Lay",
        products: [
          {
            id: 10,
            name: "K.Lay", // YT link: https://youtube.com/shorts/OwJr92ZRI_0?si=S1vzsW6n6re3SQ37
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Semi-gel type agent containing phosphoric acid 37%; intended for use on dentin and enamel; removes the smear layer; increases adhesive strength.",
          },
        ],
      },
    ],
  },
  {
    id: "etchant-adhesives",
    name: "Etchant & Adhesives",
    description:
      "Bonding and etching solutions for optimal adhesion",
    subcategories: [
      {
        id: "k-etch-37", // YT links: https://youtube.com/shorts/df4-2E8sn6s?si=TaFuOYJEMfr5W3Gh
        name: "K. Etch-37",
        products: [
          {
            id: 11,
            name: "K. Etch-37",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Semi-gel type agent containing phosphoric acid 37%; intended for use on dentin and enamel; removes the smear layer; increases adhesive strength.",
          },
        ],
      },
      {
        id: "k-bond", // YT links: https://youtube.com/shorts/bdl5Oa17Zh4?si=ZGhYO5F97i52gwde
        name: "K. Bond",
        products: [
          {
            id: 12,
            name: "K. Bond",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Light-cured flowable composite resin; suitable for use in anterior and posterior teeth; classified into type 1, class 2, group 1 according to ISO 4049:2019; possesses radio-opaque characteristics with 2.9 mm aluminum step wedge.",
          },
        ],
      },
      {
        id: "temp-cement",
        name: "K. Temp Cement",
        products: [
          {
            id: 13,
            name: "K. Temp Cement",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Temporary cementing material",
          },
          {
            id: 14,
            name: "K. Temp Cement NE", // YT Links: https://youtube.com/shorts/HigjhEw90TE?si=a2dIpJxhuLn2OyBE
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Non-eugenol temporary cement",
          },
          {
            id: 15,
            name: "Denu Temp Cement EZ",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Easy-to-use temporary cement",
          },
        ],
      },
      {
        id: "temp-cement-implant",
        name: "K. Temp Cement Implant",
        products: [
          {
            id: 16,
            name: "K. Temp Cement Implant",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Temporary cement for implant restorations",
          },
        ],
      },
    ],
  },
  {
    id: "endodontic-materials",
    name: "Endodontic Materials",
    description:
      "Specialized materials for root canal treatments",
    subcategories: [
      {
        id: "k-sealer",
        name: "K. Sealer", // YT Links: https://youtu.be/uwE3f5kejik?si=U_QgkxgGI6cKPf4q
        products: [
          {
            id: 17,
            name: "K. Sealer",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Root canal sealer based on epoxy resin, zirconium oxide and calcium cement (MTA), etc.",
          },
        ],
      },
      {
        id: "k-bio-ceramic-sealer",
        name: "K. Bio ceramic sealer", // YT link: https://youtube.com/shorts/CPjbmHIhirc?si=LclgG7WVCCswxKfn
        products: [
          {
            id: 18,
            name: "K. Bio ceramic sealer",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Bioceramic root canal sealer",
          },
        ],
      },
      {
        id: "k-pex",
        name: "K. Pex.",
        products: [
          {
            id: 19,
            name: "K. Pex.",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Oil-based temporary root canal filling material containing calcium hydroxide and iodoform; intended for temporary intracanal filling and dressing during multi-visit endodontic treatment; supplied in a pre-filled syringe system; enables convenient placement without manual mixing; allows easy removal prior to subsequent treatment procedures.",
          },
        ],
      },
      {
        id: "k-paste", // YT link: https://youtu.be/oUamBvD-_g0?si=Q95Om14NACmTBsAb
        name: "K. Paste",
        products: [
          {
            id: 20,
            name: "K. Paste",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Endodontic paste for root canal treatment",
          },
        ],
      },
      {
        id: "k-mta", // YT link: https://youtube.com/shorts/hFdQdAB2nWo?si=nFB05cf1OZlOjPaT
        name: "K. MTA",
        products: [
          {
            id: 21,
            name: "K. MTA",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Mineral trioxide aggregate for endodontics",
          },
        ],
      },
    ],
  },
  {
    id: "impression-materials",
    name: "Impression Materials",
    description:
      "Precision materials for accurate dental impressions",
    subcategories: [
      {
        id: "k-light-body",
        name: "K. Light Body",
        products: [
          {
            id: 22,
            name: "K. Light Body",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Light body impression material",
          },
        ],
      },
      {
        id: "k-putty-set",
        name: "K. Putty Set",
        products: [
          {
            id: 23,
            name: "K. Putty Set",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Putty impression material set",
          },
        ],
      },
      {
        id: "k-alginate",
        name: "K. Alginate",
        products: [
          {
            id: 24,
            name: "K. Alginate",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Alginate impression material",
          },
        ],
      },
      {
        id: "k-tray-cleaner",
        name: "K. Tray Cleaner",
        products: [
          {
            id: 25,
            name: "K. Tray Cleaner",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Impression tray cleaning solution",
          },
        ],
      },
      {
        id: "k-sil",
        name: "K. Sil",
        products: [
          {
            id: 26,
            name: "K. Sil",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Silicone impression material",
          },
        ],
      },
    ],
  },
  {
    id: "core-materials",
    name: "Core Materials, Liner, EDTA",
    description:
      "Essential materials for core build-up and cavity preparation",
    subcategories: [
      {
        id: "k-core",
        name: "K. Core",
        products: [
          {
            id: 27,
            name: "K. Core",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Core build-up material",
          },
        ],
      },
      {
        id: "k-base-liner",
        name: "K. Base Liner",
        products: [
          {
            id: 28,
            name: "K. Base Liner",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Light-cured cavity liner and pulp-capping material; applied before the placement of restorative materials.",
          },
        ],
      },
      {
        id: "k-edta",
        name: "K. EDTA",
        products: [
          {
            id: 29,
            name: "K. EDTA",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "EDTA solution for root canal treatment",
          },
        ],
      },
    ],
  },
  {
    id: "prevention-protection",
    name: "Prevention & protection Pumice",
    description: "Preventive care and protection products",
    subcategories: [
      {
        id: "k-fluoride-varnish",
        name: "K. Fluoride Varnish",
        products: [
          {
            id: 30,
            name: "K. Varnish",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Professional fluoride varnish",
          },
        ],
      },
      {
        id: "k-fluoride-gel",
        name: "K. Fluoride Gel",
        products: [
          {
            id: 31,
            name: "K. Fluoride Gel - Strawberry",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Fluoride gel with strawberry flavor",
          },
          {
            id: 32,
            name: "K. Fluoride Gel - Orange",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Fluoride gel with orange flavor",
          },
          {
            id: 33,
            name: "K. Fluoride Gel - Peach",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Fluoride gel with peach flavor",
          },
        ],
      },
      {
        id: "k-fluoride-gel-tray",
        name: "K. Fluoride Gel Tray",
        products: [
          {
            id: 34,
            name: "K. Fluoride Gel Tray - Small",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Small fluoride gel application tray",
          },
          {
            id: 35,
            name: "K. Fluoride Gel Tray - Medium",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Medium fluoride gel application tray",
          },
          {
            id: 36,
            name: "K. Fluoride Gel Tray - Large",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Large fluoride gel application tray",
          },
        ],
      },
    ],
  },
  {
    id: "k-pumice",
    name: "K. Pumice",
    description: "Professional pumice products for polishing",
    subcategories: [
      {
        id: "pumice-paste-with-fluoride",
        name: "Pumice Paste (with fluoride)",
        products: [
          {
            id: 37,
            name: "Pumice Paste (with fluoride)",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Professional pumice paste with fluoride for polishing",
          },
        ],
      },
      {
        id: "pumice-paste-without-fluoride",
        name: "Pumice Paste (without fluoride)",
        products: [
          {
            id: 38,
            name: "Pumice Paste (without fluoride)",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Professional pumice paste without fluoride for polishing",
          },
        ],
      },
    ],
  },
  {
    id: "tooth-whitening",
    name: "Tooth Whitening Technique",
    description: "Professional tooth whitening systems",
    subcategories: [
      {
        id: "k-bleaching",
        name: "K.Bleaching",
        products: [
          {
            id: 39,
            name: "K.Bleaching Kit 1",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Professional tooth whitening kit - Basic",
          },
          {
            id: 40,
            name: "K.Bleaching Kit 2",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Professional tooth whitening kit - Advanced",
          },
        ],
      },
    ],
  },
  {
    id: "other-products",
    name: "Other products",
    description: "Essential dental accessories and supplies",
    subcategories: [
      {
        id: "k-cord",
        name: "K. Cord (Retraction Cord)",
        products: [
          {
            id: 41,
            name: "K. Cord",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description:
              "Gingival retraction cord for impressions",
          },
        ],
      },
      {
        id: "k-oil",
        name: "K. Oil (lubricant Handpieces)",
        products: [
          {
            id: 42,
            name: "K. Oil",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Lubricant oil for dental handpieces",
          },
        ],
      },
      {
        id: "k-dam", // YT link: https://youtube.com/shorts/3robbMKaKcQ?si=ejfYy2u2z-cvgCuY
        name: "K. Dam",
        products: [
          {
            id: 43,
            name: "K. Dam",
            image:
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
            description: "Rubber dam for isolation",
          },
        ],
      },
    ],
  },
];

export function Equipment() {
  const [activeCategory, setActiveCategory] = useState(
    "restorative-materials",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<
    string[]
  >(["restorative-materials"]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((cat) => ({
        id: cat.id,
        element: document.getElementById(cat.id),
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section.element &&
          section.element.offsetTop <= scrollPosition
        ) {
          setActiveCategory(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToSubcategory = (subcategoryId: string) => {
    const element = document.getElementById(subcategoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
            <img
              src="https://www.freepik.com/free-photo/asian-female-dentist-demonstrating-teeth-brushing-technique-patient_5839214.htm#fromView=search&page=1&position=17&uuid=4c032a35-4b03-4204-b35c-e76009809e1b&query=korean+dentist"
              alt="Dental implant model"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-12">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Dental Products
                </h1>
                <p className="text-xl text-white/90">
                  Explore our comprehensive range of precision
                  dental products and technology solutions
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>

        <div className="flex gap-12">
          {/* Fixed Category Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block w-64 flex-shrink-0"
          >
            <div className="sticky top-28">
              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                  Categories
                </h3>
                <nav className="space-y-1">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <button
                        onClick={() => {
                          toggleCategory(category.id);
                          scrollToCategory(category.id);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
                          activeCategory === category.id
                            ? "bg-blue-600 text-white"
                            : "text-neutral-700 hover:bg-neutral-100"
                        }`}
                      >
                        <span className="font-medium">
                          {category.name}
                        </span>
                        {expandedCategories.includes(
                          category.id,
                        ) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>

                      {expandedCategories.includes(
                        category.id,
                      ) && (
                        <div className="ml-4 mt-1 space-y-1">
                          {category.subcategories.map(
                            (subcategory) => (
                              <button
                                key={subcategory.id}
                                onClick={() =>
                                  scrollToSubcategory(
                                    subcategory.id,
                                  )
                                }
                                className="w-full text-left px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100 rounded transition-colors"
                              >
                                {subcategory.name}
                              </button>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </motion.aside>

          {/* Categories with Products */}
          <div className="flex-1 space-y-20">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.1,
                }}
              >
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-neutral-900 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-lg text-neutral-600">
                    {category.description}
                  </p>
                </div>

                {/* Subcategories */}
                <div className="space-y-16">
                  {category.subcategories.map(
                    (subcategory, subIndex) => {
                      const filteredProducts =
                        subcategory.products.filter(
                          (product) =>
                            product.name
                              .toLowerCase()
                              .includes(
                                searchQuery.toLowerCase(),
                              ) ||
                            product.description
                              .toLowerCase()
                              .includes(
                                searchQuery.toLowerCase(),
                              ),
                        );

                      if (
                        filteredProducts.length === 0 &&
                        searchQuery
                      )
                        return null;

                      return (
                        <div
                          key={subcategory.id}
                          id={subcategory.id}
                        >
                          <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                            {subcategory.name}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map(
                              (product, productIndex) => (
                                <motion.div
                                  key={product.id}
                                  initial={{
                                    opacity: 0,
                                    y: 20,
                                  }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    delay:
                                      categoryIndex * 0.1 +
                                      productIndex * 0.1,
                                  }}
                                  whileHover={{ y: -8 }}
                                  className="group cursor-pointer"
                                >
                                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                                    <img
                                      src={product.image}
                                      alt={product.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </div>
                                  <div className="space-y-2">
                                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                                      {product.name}
                                    </h3>
                                    <p className="text-neutral-600">
                                      {product.description}
                                    </p>
                                  </div>
                                </motion.div>
                              ),
                            )}
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}