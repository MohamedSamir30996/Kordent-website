import { Outlet } from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./i18n";

export function Root() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-white">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
