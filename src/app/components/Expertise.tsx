import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../i18n";

export function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative py-32 bg-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1663182234283-28941e7612da?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dental professionals at work"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              {t("expertise.title")}
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              {t("expertise.body")}
            </p>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("expertise.tech.title")}
                </h3>
                <p className="text-neutral-400">{t("expertise.tech.body")}</p>
              </div>

              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {t("expertise.support.title")}
                </h3>
                <p className="text-neutral-400">
                  {t("expertise.support.body")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
