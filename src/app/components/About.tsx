import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../i18n";
import leadingDentalInnovation from "../../assets/figma/leading-dental-innovation.png";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 bg-[#204770]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-[#ffffff]">
              {t("about.title")}
            </h2>
            <p className="text-lg mb-6 text-[#ffffff]">{t("about.p1")}</p>
            <p className="text-lg text-[#ffffff]">{t("about.p2")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <img
              src={leadingDentalInnovation}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
