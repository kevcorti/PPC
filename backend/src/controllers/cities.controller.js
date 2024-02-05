import { getAllCities } from "../services/city.js";

export const getAllCitiesInCost = async (req, res) => {
    try {
        const cities = await getAllCities();
        if (!cities) {
            return res.status(400).json({
                message: "No se han registrado cuidades de la region costa."
            })
        }
        return res.status(200).json(cities);
    } catch (error) {
        return res.status(500).json({ message: "Ocurrio un error. Intenta mas tarde." })
    }
}