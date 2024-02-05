import prisma from "../config/prisma.js"


export const getRolByName = async (name) => {
    const rol = await prisma.roles.findUnique({ where: { name } });
    return rol;
}