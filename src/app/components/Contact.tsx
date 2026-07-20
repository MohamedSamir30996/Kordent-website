import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "../i18n";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-neutral-600 mb-12">{t("contact.lead")}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">
                {t("contact.email")}
              </h3>
              <p className="text-neutral-600">info@kordent.co.kr</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">
                {t("contact.location")}
              </h3>
              <p className="text-neutral-600">{t("contact.locationValue")}</p>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#DC2626] text-white px-12 py-4 rounded-full hover:bg-[#b91c1c] transition-colors text-lg"
          >
            {t("contact.cta")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
