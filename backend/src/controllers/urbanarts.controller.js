import { getAllCategories, getByCategory, getByFilter } from "../services/urbanart.js";

export const getUrbanArtsByFilter = async (req, res) => {
    try {
        let { idCity, page, pageSize, idPhotographer } = req.query;
        const urbanarts = await getByFilter(idCity, page, pageSize, idPhotographer);
        return res
            .status(200)
            .json({ data: urbanarts, count: urbanarts.length, page, pageSize });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Estamos teniendo dificultades. Intenta mas tarde." });
    }
};

export const getAllUrbanArtsCategories = async (req, res) => {
    try {
        let { idCity, page, pageSize, idPhotographer } = req.query;
        const categories = await getAllCategories(idCity, page, pageSize, idPhotographer);
        return res.status(200).json(categories);
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Estamos teniendo dificultades. Intenta mas tarde." });
    }
};

export const getUrbanArtsByCategory = async (req, res) => {
    // try {
        let id = parseInt(req.params.id);
        const urbanarts = await getByCategory(id);
        if (!urbanarts) {
            return res.status(404).json({ message: "No se encontro ningun resultado" });
        }
        return res.status(200).json(urbanarts);
    // } catch (error) {
    //     return res
    //         .status(500)
    //         .json({ message: "Estamos teniendo dificultades. Intenta mas tarde." });
    // }
}
