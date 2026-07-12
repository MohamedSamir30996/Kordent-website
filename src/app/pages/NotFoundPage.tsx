import { Link } from "react-router";
import { useLanguage } from "../i18n";

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[70vh] bg-white pt-24 pb-16 flex items-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-7xl md:text-8xl font-bold text-neutral-200 mb-4">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          {t("notFound.title")}
        </h1>
        <p className="text-lg text-neutral-600 mb-10">{t("notFound.lead")}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#DC2626] text-white font-semibold hover:bg-red-700 transition-colors"
          >
            {t("notFound.home")}
          </Link>
          <Link
            to="/equipment"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-neutral-300 text-neutral-800 font-semibold hover:border-neutral-500 transition-colors"
          >
            {t("notFound.products")}
          </Link>
        </div>
      </div>
    </div>
  );
}
