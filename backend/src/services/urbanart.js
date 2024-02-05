import prisma from "../config/prisma.js";

export const registerUrbanArt = async (data) => {
  const newPlace = await prisma.urbanArts.create({ data });
  return newPlace;
};

export const getAllUrbanArts = async () => {
  const urbanarts = await prisma.urbanArts.findMany({});
  return urbanarts;
};

export const getAllCategories = async () => {
  const categories = await prisma.urbanArtCategory.findMany({});
  return categories;
};

export const getByCategory = async (id_urbanartcategory) => {
  const urbanarts = await prisma.urbanArts.findMany({
    where: { id_urbanartcategory },
    include: { marker: true, user: true, city: true, UrbanArtCategory: true },
  });
  return urbanarts;
};

export const getByFilter = async (
  idCity = 1,
  page = 1,
  pageSize = 10,
  idPhotographer
) => {
  pageSize = parseInt(pageSize);
  page = parseInt(page);
  let query = await prisma.urbanArts.findMany({
    take: pageSize,
    skip: pageSize * (page - 1),
    include: { user: true, city: true, marker: true },
  });

  if (idCity !== undefined && idCity !== 0) {
    idCity = parseInt(idCity);
    query = query.filter((urbanArt) => urbanArt.id_city === idCity);
  }

  if (idPhotographer !== undefined && idPhotographer !== 0) {
    idPhotographer = parseInt(ididPhotographerity);
    query = query.filter((urbanArt) => urbanArt.id_user === idPhotographer);
  }

  return query;
};
