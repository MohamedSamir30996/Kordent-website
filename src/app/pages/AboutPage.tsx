import { motion } from "motion/react";
import { useLanguage } from "../i18n";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t("aboutPage.title")}
          </h1>
          <p className="text-xl text-neutral-600 mb-12">
            {t("aboutPage.lead")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzU4MzE2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern dental clinic"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="text-3xl font-bold">{t("aboutPage.mission.title")}</h2>
            <p className="text-lg text-neutral-700">
              {t("aboutPage.mission.p1")}
            </p>
            <p className="text-lg text-neutral-700">
              {t("aboutPage.mission.p2")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8">
            <div className="text-5xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-lg text-neutral-700">
              {t("aboutPage.stats.years")}
            </div>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-lg text-neutral-700">
              {t("aboutPage.stats.practices")}
            </div>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl font-bold text-blue-600 mb-2">40+</div>
            <div className="text-lg text-neutral-700">
              {t("aboutPage.stats.countries")}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
