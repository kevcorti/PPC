import { getRolByName } from "../services/roles.js";
import { getAllPhotographers, registerUser } from "../services/users.js";

export const createUser = async (req, res) => {
    try {
        let data = req.body
        const result = await registerUser(data, 1);
        if (!result) {
            return res.status(400).json({
                message: "El correo ya esta registrado."
            })
        }
        return res.status(200).json({ message: "Usuario registrado sastifcariamente" })
    } catch (error) {
        return res.status(500).json({ message: "Ocurrio un error. Intenta mas tarde." })
    }
}

export const createPhotographer = async (req, res) => {
    // try {
        let data = req.body
        const rolId = await getRolByName("FOTÓGRAFO");
        const result = await registerUser(data, rolId.id_rol);
        if (!result) {
            return res.status(400).json({
                message: "La informacion del fotografo ya esta registrado."
            })
        }
        return res.status(200).json({ message: "Fotografo registrado sastifcariamente" })
    // } catch (error) {
    //     return res.status(500).json({ message: "Ocurrio un error. Intenta mas tarde." })
    // }
}

export const getAllPhotographersApp = async (req, res) => {
    try {
        const photographers = await getAllPhotographers();
        if (!photographers) {
            return res.status(400).json({
                message: "No se han registrado fotografos."
            })
        }
        return res.status(200).json(photographers);
    } catch (error) {
        return res.status(500).json({ message: "Ocurrio un error. Intenta mas tarde." })
    }
}
