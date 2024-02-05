import { createContext, useReducer } from "react";
import graficapopularReducer from "../reducers/graficapopularReducer";

const initialState = {
  markers: [],
  photographers: [],
  cities: [],
  urbanarts: [],
  urbanartscategories: [],
};

export const GraficaPopularContext = createContext(initialState);

export function GraficaPopularProvider({ children }) {
  const [state, dispatch] = useReducer(graficapopularReducer, initialState);

  const addMarker = (marker) => {
    dispatch({
      type: "ADD_MARKER",
      payload: marker,
    });
  };

  const fetchMarkers = (markers) => {
    dispatch({
      type: "FETCH_MARKERS",
      payload: markers,
    });
  };

  const addPhotographer = (photographer) => {
    dispatch({
      type: "ADD_PHOTOGRAPHERS",
      payload: photographer,
    });
  };

  const fetchPhotographers = (photographers) => {
    dispatch({
      type: "FETCH_PHOTOGRAPHERS",
      payload: photographers,
    });
  };

  const fetchCities = (cities) => {
    dispatch({
      type: "FETCH_CITIES",
      payload: cities,
    });
  };

  const fetchUrbanArts = (urbanarts) => {
    dispatch({
      type: "FETCH_URBANARTS",
      payload: urbanarts,
    });
  };

  const fetchUrbanArtsCategories = (urbanartsCategories) => {
    dispatch({
      type: "FETCH_URBANARTSCATEGORIES",
      payload: urbanartsCategories,
    });
  };

  return (
    <GraficaPopularContext.Provider
      value={{
        state,
        addMarker,
        addPhotographer,
        fetchCities,
        fetchMarkers,
        fetchPhotographers,
        fetchUrbanArts,
        fetchUrbanArtsCategories,
      }}
    >
      {children}
    </GraficaPopularContext.Provider>
  );
}
