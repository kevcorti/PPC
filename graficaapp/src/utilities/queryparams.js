export const createQueryParams = (page, pageSize, idPhotographer = 0, idCity = 0) => {
    let baseQueryParams = "?"
    if (page !== 0) {
        baseQueryParams += "page=" + page
    }
    if (pageSize !== 0) {
        baseQueryParams += "&pageSize=" + pageSize
    }
    if (idPhotographer !== 0) {
        baseQueryParams += "&idPhotographer=" + idPhotographer
    }
    if (idCity !== 0) {
        baseQueryParams += "&idCity=" + idCity
    }
    return baseQueryParams;
}