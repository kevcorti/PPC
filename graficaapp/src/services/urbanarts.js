import apiClient from "../api/apiClient";
import { createQueryParams } from "../utilities/queryparams";

export const getUrbanArtsByFilter = async (page, pageSize, idPhotographer = 0, idCity = 0) => {
    let query = createQueryParams(page, pageSize, idPhotographer, idCity)
    const response = await apiClient.get(`/urbanarts/filter${query}`);
    return response
}

export const getAllUrbanArtsByCategory = async (id) => {
    const repsonseAPI = await apiClient.get(`/urbanarts/categories/${id}`);
    return repsonseAPI;
}

export const getAllUrbanArtsCategories = async () => {
    const repsonseAPI = await apiClient.get(`/urbanarts/categories`);
    return repsonseAPI;
}