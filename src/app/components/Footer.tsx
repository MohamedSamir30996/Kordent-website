import { useLanguage } from "../i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold">KORDENT</div>

          <div className="flex gap-8 text-sm text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">
              {t("footer.about")}
            </a>
            <a href="#equipment" className="hover:text-white transition-colors">
              {t("footer.equipment")}
            </a>
            <a href="#solutions" className="hover:text-white transition-colors">
              {t("footer.solutions")}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {t("footer.contact")}
            </a>
          </div>

          <div className="text-sm text-neutral-400">
            {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
}
