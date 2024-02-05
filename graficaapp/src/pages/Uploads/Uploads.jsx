import "./Uploads.css";
import React, { useEffect, useState } from "react";
import Map from "../../components/StaticMap/Map";
import PlaceForm from "../../components/Places/PlaceForm";
import { getAllMarkers } from "../../services/markers";
import { useGraficaPopular } from "../../hooks/useGraficaPopular";
import { getAllCities } from "../../services/cities";
import { getAllPhotographers } from "../../services/users";
import { Link } from "react-router-dom";
import { getAllUrbanArtsCategories } from "../../services/urbanarts";

function Uploads() {
  const {
    state,
    fetchPhotographers,
    fetchMarkers,
    fetchCities,
    fetchUrbanArtsCategories,
  } = useGraficaPopular();
  const [status, setStatus] = useState(0);
  useEffect(() => {
    getAllUrbanArtsCategories().then((categories) => {
      fetchUrbanArtsCategories(categories.data);
    });
    getAllMarkers().then((markers) => {
      fetchMarkers(markers.data);
    });
    getAllPhotographers().then((photographers) =>
      fetchPhotographers(photographers.data)
    );
    getAllCities().then((cities) => {
      fetchCities(cities.data);
    });
  }, [status]);
  console.log(state);
  return (
    <div className="bg-white flex flex-col gap-5 p-3">
      <h2 className="my-5 title_section ps-5 text-center">
        Mapa de Arte Urbano
      </h2>
      {/* <p className="px-10">
        <span>
          Deseas buscar todos los artes urbanos registrados hasta la fecha?
        </span>
        <Link to={"/search"} className="ps-2 underline text-blue-500">
          Has click aqui
        </Link>
      </p> */}
      <div className="flex p-10">
        <Map markers={state.markers} />
        <PlaceForm
          status={setStatus}
          photographers={state.photographers}
          cities={state.cities}
          categories={state.urbanartscategories}
        />
      </div>
    </div>
  );
}

export default Uploads;
