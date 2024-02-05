import { useEffect } from "react";
import Artists from "../../components/Artists/Artists";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Galery from "../../components/Galery/Galery";
import Photographers from "../../components/Photographers/Photographers";
import Presentation from "../../components/Presentation/Presentation";
import UrbanArtBanner from "../../components/UrbanArt/UrbanArtBanner";
import { useGraficaPopular } from "../../hooks/useGraficaPopular";
import "./Home.css";
import {
  getAllUrbanArtsCategories,
  getUrbanArtsByFilter,
} from "../../services/urbanarts";
import { getAllPhotographers } from "../../services/users";

function Home() {
  const {
    state,
    fetchUrbanArts,
    fetchUrbanArtsCategories,
    fetchPhotographers,
  } = useGraficaPopular();

  useEffect(() => {
    getUrbanArtsByFilter(1, 10).then((urbanArts) => {
      fetchUrbanArts(urbanArts.data);
    });
    getAllUrbanArtsCategories().then((categories) => {
      fetchUrbanArtsCategories(categories.data);
    });
    getAllPhotographers().then((photographers) => {
      fetchPhotographers(photographers.data);
    });
  }, []);
  return (
    <div className="bg-bgmain">
      <Banner />
      <UrbanArtBanner />
      <Presentation />
      <Artists />
      <Photographers photographers={state.photographers} />
      <Galery />
      <Footer />
    </div>
  );
}

export default Home;
