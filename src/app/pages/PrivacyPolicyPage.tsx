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

export function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
          {t("legal.privacy.title")}
        </h1>
        <p className="text-sm text-neutral-500 mb-8">{t("legal.privacy.effective")}</p>
        <p className="text-neutral-700 mb-10 leading-relaxed">{t("legal.privacy.intro")}</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s1.title")}
          </h2>
          <Ul
            keys={[
              "legal.privacy.s1.li1",
              "legal.privacy.s1.li2",
              "legal.privacy.s1.li3",
              "legal.privacy.s1.li4",
              "legal.privacy.s1.li5",
              "legal.privacy.s1.li6",
            ]}
          />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s2.title")}
          </h2>
          <Ul
            keys={[
              "legal.privacy.s2.li1",
              "legal.privacy.s2.li2",
              "legal.privacy.s2.li3",
            ]}
          />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s3.title")}
          </h2>
          <Ul
            keys={[
              "legal.privacy.s3.li1",
              "legal.privacy.s3.li2",
              "legal.privacy.s3.li3",
              "legal.privacy.s3.li4",
              "legal.privacy.s3.li5",
              "legal.privacy.s3.li6",
            ]}
          />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s4.title")}
          </h2>
          <p className="text-neutral-700 mb-3">
            {t("legal.privacy.s4.intro")}
          </p>
          <Ul
            keys={[
              "legal.privacy.s4.li1",
              "legal.privacy.s4.li2",
              "legal.privacy.s4.li3",
              "legal.privacy.s4.li4",
            ]}
          />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s5.title")}
          </h2>
          <p className="text-neutral-700 mb-3">
            {t("legal.privacy.s5.intro")}
          </p>
          <Ul
            keys={[
              "legal.privacy.s5.li1",
              "legal.privacy.s5.li2",
              "legal.privacy.s5.li3",
              "legal.privacy.s5.li4",
              "legal.privacy.s5.li5",
            ]}
          />
          <p className="mt-4 text-neutral-700 leading-relaxed">
            {t("legal.privacy.s5.outro")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s6.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            {t("legal.privacy.s6.body")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s7.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            {t("legal.privacy.s7.body")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s8.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            {t("legal.privacy.s8.body")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s9.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            {t("legal.privacy.s9.body")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s10.title")}
          </h2>
          <p className="text-neutral-700 mb-3">
            {t("legal.privacy.s10.intro")}
          </p>
          <Ul
            keys={[
              "legal.privacy.s10.li1",
              "legal.privacy.s10.li2",
              "legal.privacy.s10.li3",
              "legal.privacy.s10.li4",
              "legal.privacy.s10.li5",
              "legal.privacy.s10.li6",
              "legal.privacy.s10.li7",
            ]}
          />
          <p className="mt-4 text-neutral-700">
            {t("legal.privacy.s10.outro")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s11.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            {t("legal.privacy.s11.body")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s12.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            {t("legal.privacy.s12.body")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s13.title")}
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            {t("legal.privacy.s13.body")}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {t("legal.privacy.s14.title")}
          </h2>
          <p className="text-neutral-700 mb-4">
            {t("legal.privacy.s14.intro")}
          </p>
          <LegalContactBlock />
        </section>
      </div>
    </div>
  );
}
