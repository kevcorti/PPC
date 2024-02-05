import apiClient from "../api/apiClient";

export const saveMarker = async (data) => {
    const response = await apiClient.post(`/markers`, data);
    return response
}

export const getAllMarkers = async () => {
    const response = await apiClient.get(`/markers`);
    return response
} 