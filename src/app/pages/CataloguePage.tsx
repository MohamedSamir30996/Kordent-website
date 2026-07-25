import { motion } from "motion/react";
import { Download, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n";

const CATALOGUE_PDF_URL = "/catalogue/Kordent.pdf";
const CATALOGUE_PDF_FILENAME = "Kordent.pdf";

export function CataloguePage() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [previewReady, setPreviewReady] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function renderFirstPage() {
      try {
        const pdfjs = await import("pdfjs-dist");
        const workerSrc = (
          await import("pdfjs-dist/build/pdf.worker.min.mjs?url")
        ).default;
        pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

        const loadingTask = pdfjs.getDocument(CATALOGUE_PDF_URL);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const targetWidth = 720;
        const scale = targetWidth / baseViewport.width;
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const context = canvas.getContext("2d");
        if (!context) return;

        await page.render({
          canvasContext: context,
          viewport,
          canvas,
        }).promise;

        if (!cancelled) setPreviewReady(true);
      } catch {
        if (!cancelled) setPreviewFailed(true);
      }
    }

    void renderFirstPage();
    return () => {
      cancelled = true;
    };
  }, []);

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
                href={CATALOGUE_PDF_URL}
                download={CATALOGUE_PDF_FILENAME}
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
                <div className="relative bg-neutral-100">
                  {!previewReady && !previewFailed && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-100/90">
                      <div className="h-8 w-8 rounded-full border-2 border-sky-600 border-t-transparent animate-spin" />
                    </div>
                  )}
                  {previewFailed ? (
                    <div className="aspect-[3/4] flex items-center justify-center px-8 text-center text-neutral-500 text-sm">
                      {t("catalogue.previewMeta")}
                    </div>
                  ) : (
                    <canvas
                      ref={canvasRef}
                      className={`block w-full h-auto transition-opacity duration-500 ${
                        previewReady ? "opacity-100" : "opacity-0 min-h-[28rem]"
                      }`}
                      aria-label={t("catalogue.previewTitle")}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
