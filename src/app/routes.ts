import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { Equipment } from "./pages/Equipment";
import { AboutPage } from "./pages/AboutPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfUsePage } from "./pages/TermsOfUsePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "equipment", Component: Equipment },
      { path: "about", Component: AboutPage },
      { path: "solutions", Component: SolutionsPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "terms", Component: TermsOfUsePage },
    ],
  },
]);
