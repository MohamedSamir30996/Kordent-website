import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage, type TranslationKey } from "../i18n";
import solutionsPic1 from "../../assets/figma/solutions-pic-1.png";
import solutionsPic2 from "../../assets/figma/solutions-pic-2.png";

const solutions: {
  id: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  featureKeys: TranslationKey[];
  image: string;
}[] = [
  {
    id: "setup",
    titleKey: "solution.setup.title",
    descKey: "solution.setup.desc",
    featureKeys: [
      "solution.setup.f1",
      "solution.setup.f2",
      "solution.setup.f3",
      "solution.setup.f4",
    ],
    image: solutionsPic1,
  },
  {
    id: "tech",
    titleKey: "solution.tech.title",
    descKey: "solution.tech.desc",
    featureKeys: [
      "solution.tech.f1",
      "solution.tech.f2",
      "solution.tech.f3",
      "solution.tech.f4",
    ],
    image: solutionsPic2,
  },
  {
    id: "maint",
    titleKey: "solution.maint.title",
    descKey: "solution.maint.desc",
    featureKeys: [
      "solution.maint.f1",
      "solution.maint.f2",
      "solution.maint.f3",
      "solution.maint.f4",
    ],
    image: solutionsPic2,
  },
];

export function SolutionsPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#DC2626]">
            {t("solutionsPage.title")}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t("solutionsPage.lead")}
          </p>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <img
                  src={solution.image}
                  alt={t(solution.titleKey)}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold">{t(solution.titleKey)}</h2>
                <p className="text-lg text-neutral-700">
                  {t(solution.descKey)}
                </p>
                <ul className="space-y-3">
                  {solution.featureKeys.map((featureKey) => (
                    <li key={featureKey} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
