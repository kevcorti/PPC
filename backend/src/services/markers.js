import prisma from "../config/prisma.js"

export const makeMarker = async (data) => {
    const marker = await prisma.markers.create({ data })
    return marker
}

export const getAll = async () => {
    return await prisma.markers.findMany({ include: { urbanart: true } });
}

export const updateMarker = async (id, data) => {
    return await prisma.markers.update({ where: { id_marker: id }, data })
}

export const getById = async (id) => {
    return await prisma.markers.findFirst({ where: { id_marker: id }, include: { urbanart: true } })
}

export const deleteById = async (id) => {
    return await prisma.markers.delete({ where: { id_marker: id } })
}
