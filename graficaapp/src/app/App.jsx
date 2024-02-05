import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./App.css";
import { GraficaPopularProvider } from "../context/GraficaPopularContext";
import Search from "../pages/Search/Search";
import { lazy, Suspense } from "react";
import Loading from "../components/shared/Loading";
import NotFound from "../components/shared/NotFound";

const HomePreview = lazy(() => import("../pages/Home/Home"));
const GalleryPreview = lazy(() => import("../pages/Gallery/Gallery"));
const UploadsPreview = lazy(() => import("../pages/Uploads/Uploads"));
const UrbanArtCarouselPreview = lazy(() =>
  import("../components/UrbanArt/Carousel/UrbanArtCarousel")
);

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Navbar />
        <HomePreview />
      </Suspense>
    ),
  },
  {
    path: "/uploads",
    element: (
      <Suspense fallback={<Loading />}>
        <Navbar />
        <UploadsPreview />
      </Suspense>
    ),
  },
  {
    path: "/gallery",
    element: (
      <Suspense fallback={<Loading />}>
        <Navbar />
        <GalleryPreview />
      </Suspense>
    ),
  },
  {
    path: "/urbanarts/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <UrbanArtCarouselPreview />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <GraficaPopularProvider>
      <RouterProvider router={router} />
    </GraficaPopularProvider>
  );
}

export default App;
