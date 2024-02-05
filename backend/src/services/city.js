import prisma from "../config/prisma.js"

export const getAllCities = async () => {
    const cities = await prisma.city.findMany();
    return cities;
}