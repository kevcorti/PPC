import prisma from "../config/prisma.js"
import { encryptPassword } from "../utils/encrypt.js";
import { getRolByName } from "./roles.js";

export const registerUser = async (data, idRol) => {
    const user = await prisma.users.findUnique({ where: { email: data.email } })
    if (user) {
        return null;
    }
    if (idRol === 2) {
        const photographer = await prisma.users.findUnique({ where: { names: data.names } })
        if (photographer) {
            return null;
        }
    }
    let passwordHashed = await encryptPassword(data.password)

    let userData = {
        ...data,
        password: passwordHashed,
        id_rol: idRol
    }
    const newUser = await prisma.users.create({ data: userData })
    return newUser
}

export const getAllPhotographers = async () => {
    const photographerRol = await getRolByName("FOTÓGRAFO");
    const photographers = await prisma.users.findMany({ where: { rol: photographerRol }, include: { rol: true } });
    return photographers
}