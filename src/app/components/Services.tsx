import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Activity,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const services = [
  {
    icon: Activity,
    title: "Restorative Materials",
    description:
      "High-quality materials designed to restore the function, strength, and appearance of damaged teeth with reliable, long-lasting results.",
    categoryId: "imaging-systems",
  },
  {
    icon: BadgeCheck,
    title: "Etchant & Adhesives",
    description:
      "Essential bonding solutions that prepare tooth surfaces and ensure strong, secure adhesion for restorative and cosmetic procedures.",
    categoryId: "dental-chairs",
  },
  {
    icon: ShieldCheck,
    title: "Endodontic Materials",
    description:
      "Specialized materials used in root canal treatments to support effective cleaning, sealing, and long-term tooth preservation.",
    categoryId: "cad-cam-systems",
  },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();
  const location = useLocation();

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
            Our Products
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">Comprehensive dental technology for exceptional patient care</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}