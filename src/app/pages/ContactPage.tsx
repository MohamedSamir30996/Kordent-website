import { motion } from "motion/react";
import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../i18n";
import { PaymentLogos } from "../components/PaymentLogos";

export function ContactPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t("contactPage.title")}
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t("contactPage.lead")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t("contactPage.info")}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">
                      {t("contact.email")}
                    </div>
                    <a
                      href="mailto:info@kordent.co.kr"
                      className="text-neutral-600 hover:text-blue-600 transition-colors"
                    >
                      info@kordent.co.kr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">
                      {t("contact.phone")}
                    </div>
                    <a
                      href="tel:+1234567890"
                      className="text-neutral-600 hover:text-blue-600 transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">
                      {t("contactPage.address")}
                    </div>
                    <div className="text-neutral-600">
                      123 Medical Plaza
                      <br />
                      Suite 456
                      <br />
                      Healthcare City, HC 78901
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("contactPage.hours.title")}
              </h3>
              <div className="space-y-2 text-neutral-600">
                <div className="flex justify-between">
                  <span>{t("contactPage.hours.weekdays")}</span>
                  <span>{t("contactPage.hours.weekdaysHours")}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contactPage.hours.saturday")}</span>
                  <span>{t("contactPage.hours.saturdayHours")}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contactPage.hours.sunday")}</span>
                  <span>{t("contactPage.hours.closed")}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  {t("contactPage.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("contactPage.form.namePlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  {t("contactPage.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("contactPage.form.emailPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2"
                >
                  {t("contactPage.form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("contactPage.form.phonePlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  {t("contactPage.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder={t("contactPage.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                {t("contactPage.form.send")}
              </button>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {t("contactPage.form.disclaimer.part1")}
                <Link
                  to="/privacy"
                  className="text-red-600 hover:text-red-700 hover:underline font-medium"
                >
                  {t("footer.privacy")}
                </Link>
                {t("contactPage.form.disclaimer.part2")}
                <Link
                  to="/terms"
                  className="text-red-600 hover:text-red-700 hover:underline font-medium"
                >
                  {t("footer.terms")}
                </Link>
                {t("contactPage.form.disclaimer.part3")}
              </p>
            </form>
          </motion.div>
        </div>

        <div
          aria-hidden
          className="mt-16 pt-12 border-t border-neutral-200"
        >
          <PaymentLogos />
        </div>
      </div>
    </div>
  );
}
