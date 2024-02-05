import { storage } from "../config/firebase_config"
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
} from "firebase/storage";

export const uploadImageFB = async (file, nameFile) => {
    const imageRef = storageRef(storage, `arteurbano/${nameFile}`);
    await uploadBytes(imageRef, file);
    const url_image = await getDownloadURL(imageRef);
    return url_image;
}