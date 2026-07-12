import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { Home, ZoomIn, X } from "lucide-react";
import { useLanguage, type TranslationKey } from "../i18n";
import { getLocalizedProductBySlug, getProductVideoIds, youtubeEmbedUrl } from "../data/equipment";

type TabId = "details" | "packages" | "videos";

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>("details");
  const [activeImage, setActiveImage] = useState(0);
  const [enlarged, setEnlarged] = useState(false);

  const product = slug ? getLocalizedProductBySlug(slug, language) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">{t("product.notFound")}</h1>
          <button
            type="button"
            onClick={() => navigate("/equipment")}
            className="text-red-600 hover:underline"
          >
            {t("product.backToProducts")}
          </button>
        </div>
      </div>
    );
  }

  const categoryLabel = (() => {
    const key = `cat.${product.categoryId}` as TranslationKey;
    const value = t(key);
    return value === key ? product.categoryName : value;
  })();

  const mainImage = product.gallery[activeImage] ?? product.image;
  const videoIds = getProductVideoIds(product.id);
  const hasVideos = videoIds.length > 0;

  return (
    <div className="relative min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 mb-4"
        >
          <Link
            to="/"
            className="inline-flex items-center text-sky-600 hover:text-sky-700"
            aria-label={t("nav.home")}
          >
            <Home className="w-4 h-4" />
          </Link>
          <span className="text-neutral-400">&gt;</span>
          <Link
            to="/equipment"
            className="uppercase tracking-wide text-sky-600 hover:text-sky-700"
          >
            {t("product.breadcrumb.products")}
          </Link>
          <span className="text-neutral-400">&gt;</span>
          <Link
            to={`/equipment#${product.categoryId}`}
            className="text-sky-600 hover:text-sky-700"
          >
            {categoryLabel}
          </Link>
        </nav>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-10">
          {categoryLabel}
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <button
              type="button"
              onClick={() => setEnlarged(true)}
              className="w-full border border-neutral-200 bg-neutral-50 p-6 rounded-sm hover:border-sky-300 transition-colors"
            >
              <img
                src={mainImage}
                alt={product.name}
                className="w-full max-h-[420px] object-contain mx-auto"
              />
            </button>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-sky-600 mb-4">
              {product.name}
            </h2>
            <p className="text-lg text-neutral-800 mb-6">{product.tagline}</p>
            <ul className="space-y-2 text-neutral-700 mb-8">
              {product.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-neutral-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
              <ZoomIn className="w-4 h-4" />
              <span>{t("product.clickToEnlarge")}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.gallery.map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 border p-1 bg-white transition-colors ${
                    activeImage === index
                      ? "border-sky-500 ring-1 ring-sky-500"
                      : "border-neutral-200 hover:border-sky-300"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-b border-sky-500">
          <div className="flex gap-0">
            <button
              type="button"
              onClick={() => setActiveTab("details")}
              className={`px-8 py-3 text-sm font-semibold border border-b-0 transition-colors ${
                activeTab === "details"
                  ? "bg-sky-600 text-white border-sky-600"
                  : "bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200"
              }`}
            >
              {t("product.tab.details")}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("packages")}
              className={`px-8 py-3 text-sm font-semibold border border-b-0 border-l-0 transition-colors ${
                activeTab === "packages"
                  ? "bg-sky-600 text-white border-sky-600"
                  : "bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200"
              }`}
            >
              {t("product.tab.packages")}
            </button>
            {hasVideos && (
              <button
                type="button"
                onClick={() => setActiveTab("videos")}
                className={`px-8 py-3 text-sm font-semibold border border-b-0 border-l-0 transition-colors ${
                  activeTab === "videos"
                    ? "bg-sky-600 text-white border-sky-600"
                    : "bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200"
                }`}
              >
                {t("product.tab.videos")}
              </button>
            )}
          </div>
        </div>

        <div className="py-10 space-y-8 text-neutral-800">
          {activeTab === "details" &&
            product.details.map((section) => (
              <section key={section.title}>
                <h3 className="text-lg font-bold mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

          {activeTab === "packages" &&
            (product.packages.length > 0 ? (
              product.packages.map((pkg, index) => (
                <section key={`${pkg.title ?? "pkg"}-${index}`}>
                  {pkg.title && (
                    <h3 className="text-lg font-bold mb-3">{pkg.title}</h3>
                  )}
                  <ul className="space-y-2">
                    {pkg.items.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))
            ) : (
              <p className="text-neutral-600">{t("product.packages.empty")}</p>
            ))}

          {activeTab === "videos" && hasVideos && (
            <div className="grid gap-8 sm:grid-cols-2">
              {videoIds.map((videoId, index) => (
                <div
                  key={videoId}
                  className="w-full max-w-md mx-auto sm:max-w-none"
                >
                  <div className="aspect-[9/16] sm:aspect-video w-full overflow-hidden rounded-lg border border-neutral-200 bg-black shadow-sm">
                    <iframe
                      src={youtubeEmbedUrl(videoId)}
                      title={`${product.name} — ${t("product.tab.videos")} ${index + 1}`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {enlarged && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setEnlarged(false)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white hover:text-neutral-200"
            onClick={() => setEnlarged(false)}
            aria-label={t("product.closeEnlarge")}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={mainImage}
            alt={product.name}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
