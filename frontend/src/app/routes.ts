import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { IntroductionPage } from "./pages/IntroductionPage";
import { QuickstartPage } from "./pages/QuickstartPage";
import { CoreSyntaxPage } from "./pages/CoreSyntaxPage";
import { AboutPage } from "./pages/AboutPage";
import { CommunityPage } from "./pages/CommunityPage";
import { BlogPage } from "./pages/BlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: IntroductionPage },
      { path: "quickstart", Component: QuickstartPage },
      { path: "syntax", Component: CoreSyntaxPage },
      { path: "about", Component: AboutPage },
      { path: "community", Component: CommunityPage },
      { path: "blog", Component: BlogPage },
    ],
  },
]);