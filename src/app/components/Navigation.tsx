import { motion } from "motion/react";
import { Menu, ChevronDown, Languages } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router";
import { useState } from "react";
import logo from "../../imports/Logo_(big).png";

const equipmentCategories = [
  { name: "Restorative Materials", id: "restorative-materials" },
  { name: "Etchant & Adhesives", id: "etchant-adhesives" },
  { name: "Endodontic Materials", id: "endodontic-materials" },
  { name: "Impression Materials", id: "impression-materials" },
  { name: "Core Materials, Liner, EDTA", id: "core-materials" },
  { name: "Prevention & Protection Pumice", id: "prevention-protection" },
  { name: "K. Pumice", id: "k-pumice" },
  { name: "Tooth Whitening Technique", id: "tooth-whitening" },
  { name: "Other Products", id: "other-products" },
];

export function Navigation() {
  const [showEquipmentDropdown, setShowEquipmentDropdown] = useState(false);
  const [language, setLanguage] = useState<"en" | "ko">("en");
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (categoryId: string) => {
    setShowEquipmentDropdown(false);

    if (location.pathname === "/equipment") {
      // Already on equipment page, just scroll
      setTimeout(() => {
        const element = document.getElementById(categoryId);
        if (element) {
          const offset = 100;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Navigate to equipment page first
      navigate("/equipment");
      setTimeout(() => {
        const element = document.getElementById(categoryId);
        if (element) {
          const offset = 100;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="DentalTech" className="h-10" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/about"
            className={`transition-colors pb-1 border-b-2 ${
              location.pathname === "/about"
                ? "text-blue-600 border-blue-600"
                : "text-neutral-700 hover:text-[#DC2626] border-transparent"
            }`}
          >
            About
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowEquipmentDropdown(true)}
            onMouseLeave={() => setShowEquipmentDropdown(false)}
          >
            <Link
              to="/equipment"
              className={`transition-colors flex items-center gap-1 pb-1 border-b-2 ${
                location.pathname === "/equipment"
                  ? "text-blue-600 border-blue-600"
                  : "text-neutral-700 hover:text-[#DC2626] border-transparent"
              }`}
            >
              Products
              <ChevronDown className="w-4 h-4" />
            </Link>

            {showEquipmentDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 pt-2"
              >
                <div className="w-56 bg-white rounded-lg shadow-lg border border-neutral-200 py-2">
                  {equipmentCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className="w-full text-left block px-4 py-2 text-neutral-700 hover:bg-red-50 hover:text-[#DC2626] transition-colors"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <Link
            to="/solutions"
            className={`transition-colors pb-1 border-b-2 ${
              location.pathname === "/solutions"
                ? "text-blue-600 border-blue-600"
                : "text-neutral-700 hover:text-[#DC2626] border-transparent"
            }`}
          >
            Solutions
          </Link>
          <Link
            to="/contact"
            className={`transition-colors pb-1 border-b-2 ${
              location.pathname === "/contact"
                ? "text-blue-600 border-blue-600"
                : "text-neutral-700 hover:text-[#DC2626] border-transparent"
            }`}
          >
            Contact
          </Link>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === "en" ? "ko" : "en")}
            className="flex items-center gap-2 text-neutral-700 hover:text-[#DC2626] transition-colors"
            aria-label="Switch language"
          >
            <Languages className="w-5 h-5" />
            <span className="text-sm font-medium">{language === "en" ? "EN" : "KO"}</span>
          </button>
        </div>

        <button className="md:hidden p-2">
          <Menu className="w-6 h-6 text-neutral-900" />
        </button>
      </div>
    </motion.nav>
  );
}
