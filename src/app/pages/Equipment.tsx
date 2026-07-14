import { motion } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router";
import {
  Search,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useLanguage, type TranslationKey } from "../i18n";
import { getEquipmentCategories } from "../data/equipment";
import productsPageHero from "../../assets/figma/products-page-hero.png";

export function Equipment() {
  const { t, language } = useLanguage();
  const categories = useMemo(
    () => getEquipmentCategories(language),
    [language],
  );
  const [activeCategory, setActiveCategory] = useState(
    "restorative-materials",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<
    string[]
  >(["restorative-materials"]);

  const translateCategoryName = (id: string, fallback: string) => {
    const key = `cat.${id}` as TranslationKey;
    const value = t(key);
    return value === key ? fallback : value;
  };

  const translateCategoryDescription = (id: string, fallback: string) => {
    const key = `catDesc.${id}` as TranslationKey;
    const value = t(key);
    return value === key ? fallback : value;
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => scrollToCategory(hash), 150);
    }
  }, []);

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
  }, [categories]);

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
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
            <img
              src={productsPageHero}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-12">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {t("equipment.title")}
                </h1>
                <p className="text-xl text-white/90">
                  {t("equipment.lead")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder={t("equipment.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>

        <div className="flex gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block w-64 flex-shrink-0"
          >
            <div className="sticky top-28">
              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                  {t("equipment.categories")}
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
                          {translateCategoryName(category.id, category.name)}
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
                    {translateCategoryName(category.id, category.name)}
                  </h2>
                  <p className="text-lg text-neutral-600">
                    {translateCategoryDescription(
                      category.id,
                      category.description,
                    )}
                  </p>
                </div>

                <div className="space-y-16">
                  {category.subcategories.map(
                    (subcategory, subIndex) => {
                      const q = searchQuery.toLowerCase();
                      const filteredProducts =
                        subcategory.products.filter((product) => {
                          return (
                            product.name
                              .toLowerCase()
                              .includes(q) ||
                            product.description
                              .toLowerCase()
                              .includes(q) ||
                            product.tagline
                              .toLowerCase()
                              .includes(q) ||
                            product.summary
                              .toLowerCase()
                              .includes(q)
                          );
                        });

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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                >
                                  <Link
                                    to={`/equipment/${product.slug}`}
                                    className="group block"
                                  >
                                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-transparent">
                                      <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="space-y-2">
                                      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                                        {product.name}
                                      </h3>
                                      <p className="text-neutral-600 line-clamp-3">
                                        {product.description}
                                      </p>
                                    </div>
                                  </Link>
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
