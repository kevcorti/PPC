import {
  deleteById,
  getAll,
  getById,
  makeMarker,
  updateMarker,
} from "../services/markers.js";
import { registerUrbanArt } from "../services/urbanart.js";

export const createMarker = async (req, res) => {
  try {
    const data = req.body;
    let placeData = {
      name: data.name,
      description: data.description,
      url_photo: data.url_photo,
      id_user: data.id_user,
      id_city: data.id_city,
      id_urbanartcategory: data.id_urbanartcategory,
      address: data.address,
    };
    const urbanart = await registerUrbanArt(placeData);
    if (!urbanart) {
      return res
        .status(400)
        .send({ message: "Ya se encuentra este lugar registrado registrado." });
    }
    let coordsSplited = data.coords.split(",");
    let markerData = {
      latitude: parseFloat(coordsSplited[0]),
      longitude: parseFloat(coordsSplited[1]),
      id_urbanart: urbanart.id_urbanart,
    };
    const result = await makeMarker(markerData);
    if (!result) {
      return res
        .status(400)
        .json({ message: "Ya esta registrado este marcado" });
    }
    return res.status(200).json({ message: "Marcador creado correctamente" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Ocurrio un error. Intenta mas tarde." });
  }
};

export const editMarker = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    const result = await updateMarker(id, data);
    return res
      .status(200)
      .json({ message: "Marker actualizado correctamente", result });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocurrio un error. Intenta mas tarde." });
  }
};

export const getAllMarkers = async (req, res) => {
  try {
    const markers = await getAll();
    return res.status(200).json(markers);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocurrio un error. Intenta mas tarde." });
  }
};

export const getMarkerById = async (req, res) => {
  try {
    let id = req.params.id;
    const marker = await getById(id);
    return res.status(200).json({ marker });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocurrio un error. Intenta mas tarde." });
  }
};

export const deleteMarker = async (req, res) => {
  try {
    let id = req.params.id;
    await deleteById(id);
    return res.status(200).json({ marker });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocurrio un error. Intenta mas tarde." });
  }
};
