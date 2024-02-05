import apiClient from "../api/apiClient"

export const getAllPhotographers = async () => {
    const responseAPI = await apiClient.get("/users/photographers");
    return responseAPI
}

export const registerPhotographer = async (data) => {
    const responseAPI = await apiClient.post("/users/photographers", data);
    return responseAPI
}

export const registerUser = async (data) => {
    const responseAPI = await apiClient.post("/users", data);
    return responseAPI
}