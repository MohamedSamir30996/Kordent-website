import { motion } from "motion/react";
import { Download, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n";
import cataloguePdf from "../../assets/catalogue/Kordent.pdf";

export function CataloguePage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_#eff6ff_0%,_#ffffff_45%,_#fafafa_100%)] pt-24 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-sky-700 mb-5 font-semibold">
              Kordent
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 leading-[1.05] mb-6">
              {t("catalogue.title")}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-xl mb-10 leading-relaxed">
              {t("catalogue.lead")}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href={cataloguePdf}
                download="Kordent-Catalogue.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-[#DC2626] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-red-200/60 hover:bg-[#b91c1c] transition-colors"
              >
                <Download className="w-5 h-5" />
                {t("catalogue.download")}
              </motion.a>
              <p className="text-sm text-neutral-500 max-w-[16rem]">
                {t("catalogue.hint")}
              </p>
            </div>

            <ul className="mt-12 space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 mt-1 text-sky-600 flex-shrink-0" />
                <span>{t("catalogue.point1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 mt-1 text-sky-600 flex-shrink-0" />
                <span>{t("catalogue.point2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 mt-1 text-sky-600 flex-shrink-0" />
                <span>{t("catalogue.point3")}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sky-200/50 via-transparent to-red-200/40 blur-2xl" />
              <div className="relative rounded-2xl border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-4 border-b border-neutral-100 bg-neutral-50/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-xs text-neutral-500 font-medium tracking-wide">
                    Kordent.pdf
                  </span>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center">
                      <FileText className="w-7 h-7 text-sky-700" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-neutral-900">
                        {t("catalogue.previewTitle")}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {t("catalogue.previewMeta")}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 rounded-full bg-neutral-100 w-[88%]" />
                    <div className="h-3 rounded-full bg-neutral-100 w-[72%]" />
                    <div className="h-3 rounded-full bg-neutral-100 w-[80%]" />
                    <div className="h-24 rounded-xl bg-gradient-to-br from-sky-50 to-neutral-50 border border-neutral-100 mt-6" />
                    <div className="h-3 rounded-full bg-neutral-100 w-[64%] mt-4" />
                    <div className="h-3 rounded-full bg-neutral-100 w-[78%]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
