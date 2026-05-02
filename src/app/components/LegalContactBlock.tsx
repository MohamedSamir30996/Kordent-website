import { useLanguage } from "../i18n";

export function LegalContactBlock() {
  const { t } = useLanguage();

  return (
    <address className="not-italic space-y-1 text-neutral-700">
      <p className="font-medium text-neutral-900">{t("legal.shared.company")}</p>
      <p>{t("legal.shared.address")}</p>
      <p>{t("legal.shared.cr")}</p>
      <p>{t("legal.shared.tax")}</p>
      <p>
        <a
          className="text-red-600 hover:underline"
          href="mailto:drhanykamaldental@gmail.com"
        >
          {t("legal.shared.email")}
        </a>
      </p>
      <p>
        <a className="text-red-600 hover:underline" href="tel:+201099932000">
          {t("legal.shared.phone")}
        </a>
      </p>
    </address>
  );
}
