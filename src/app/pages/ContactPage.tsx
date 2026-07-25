import { motion } from "motion/react";
import { Link } from "react-router";
import { Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useLanguage } from "../i18n";
import { PaymentLogos } from "../components/PaymentLogos";
import { submitContactForm } from "../lib/contactForm";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      await submitContactForm({ name, email, phone, message });
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

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
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">
                      {t("contactPage.address")}
                    </div>
                    <div className="text-neutral-600">
                      {t("contact.locationValue")}
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {status === "success" && (
                <div
                  role="status"
                  className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800"
                >
                  {t("contactPage.form.success")}
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800"
                >
                  {t("contactPage.form.error")}
                </div>
              )}

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
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder={t("contactPage.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? t("contactPage.form.sending")
                  : t("contactPage.form.send")}
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
