import { createBrowserRouter } from "react-router";
import Welcome from "./pages/Welcome";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import Individuals from "./pages/offerings/Individuals";
import Organisations from "./pages/offerings/Organisations";
import GroupCircles from "./pages/offerings/GroupCircles";
import NatureRetreats from "./pages/offerings/NatureRetreats";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FontPreview from "./pages/FontPreview";
import ErrorBoundary from "./components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/font-preview",
    element: <FontPreview />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/home",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: "", element: <About /> },
      { path: "about", element: <About /> },
      { path: "offerings", element: <Offerings /> },
      { path: "offerings/individuals", element: <Individuals /> },
      { path: "offerings/organisations", element: <Organisations /> },
      { path: "offerings/group-circles", element: <GroupCircles /> },
      { path: "offerings/nature-retreats", element: <NatureRetreats /> },
      { path: "gallery", element: <Gallery /> },
      { path: "events", element: <Events /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
