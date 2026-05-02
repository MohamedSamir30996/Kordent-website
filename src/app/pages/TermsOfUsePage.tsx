import type { TranslationKey } from "../i18n";
import { useLanguage } from "../i18n";
import { LegalContactBlock } from "../components/LegalContactBlock";

function Ul({ keys }: { keys: TranslationKey[] }) {
  const { t } = useLanguage();
  return (
    <ul className="list-disc pl-6 space-y-2 text-neutral-700">
      {keys.map((key) => (
        <li key={key}>{t(key)}</li>
      ))}
    </ul>
  );
}

export function TermsOfUsePage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
          {t("legal.terms.title")}
        </h1>
        <p className="text-sm text-neutral-500 mb-8">{t("legal.terms.effective")}</p>
        <p className="text-neutral-700 mb-10 leading-relaxed">{t("legal.terms.intro")}</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s1.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s1.body")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s2.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s2.body")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s3.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s3.body")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s4.title")}
          </h2>
          <p className="text-neutral-700 mb-3">{t("legal.terms.s4.intro")}</p>
          <Ul
            keys={[
              "legal.terms.s4.li1",
              "legal.terms.s4.li2",
              "legal.terms.s4.li3",
              "legal.terms.s4.li4",
              "legal.terms.s4.li5",
              "legal.terms.s4.li6",
            ]}
          />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s5.title")}
          </h2>
          <p className="text-neutral-700 mb-3">{t("legal.terms.s5.intro")}</p>
          <Ul
            keys={[
              "legal.terms.s5.li1",
              "legal.terms.s5.li2",
              "legal.terms.s5.li3",
            ]}
          />
          <p className="mt-4 text-neutral-700 leading-relaxed">
            {t("legal.terms.s5.outro")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s6.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s6.body")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s7.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s7.body")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s8.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s8.body")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s9.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s9.body")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s10.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s10.body")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s11.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s11.body")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s12.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s12.body")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s13.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">{t("legal.terms.s13.body")}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.terms.s14.title")}
          </h2>
          <p className="text-neutral-700 mb-4">{t("legal.terms.s14.intro")}</p>
          <LegalContactBlock />
        </section>
      </div>
    </div>
  );
}
