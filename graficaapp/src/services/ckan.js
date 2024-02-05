import ckanClient from "../api/ckanClient";

export const uploadFile = async (package_id, file, name_file) => {
    const form = new FormData();
    form.append('package_id', package_id);
    form.append('upload', file, name_file);
    form.append('name', name_file);
    const response = await ckanClient.post(
        `/api/3/action/resource_create`,
        form,
        {
            headers: {
                ...form.getHeaders,
                "Authorization": import.meta.env.VITE_API_CKAN_KEY
            }
        }
    );
    return response;
}