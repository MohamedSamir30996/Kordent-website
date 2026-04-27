import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Activity,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { useLanguage, type TranslationKey } from "../i18n";

const services: {
  icon: typeof Activity;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  categoryId: string;
}[] = [
  {
    icon: Activity,
    titleKey: "cat.restorative-materials",
    descKey: "services.restorative.desc",
    categoryId: "restorative-materials",
  },
  {
    icon: BadgeCheck,
    titleKey: "cat.etchant-adhesives",
    descKey: "services.etchant.desc",
    categoryId: "etchant-adhesives",
  },
  {
    icon: ShieldCheck,
    titleKey: "cat.endodontic-materials",
    descKey: "services.endodontic.desc",
    categoryId: "endodontic-materials",
  },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const handleServiceClick = (categoryId: string) => {
    if (location.pathname === "/equipment") {
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
    <section
      id="equipment"
      ref={ref}
      className="relative py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.categoryId}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="text-center cursor-pointer"
              onClick={() =>
                handleServiceClick(service.categoryId)
              }
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {t(service.titleKey)}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t(service.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
