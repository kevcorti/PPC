import apiClient from "../api/apiClient";

export const getAllCities = async () => {
    const responseAPI = await apiClient.get("/cities");
    return responseAPI;
}