import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
// import { uploadFile } from "../../services/ckan";
import { saveMarker } from "../../services/markers";
import { uploadImageFB } from "../../services/firebase_service";
import ErrorMessageForm from "../shared/ErrorMessageForm";
import CustomInput from "../shared/CustomInput";
import CustomTextArea from "../shared/CustomTextArea";
import CustomSelect from "../shared/CustomSelect";

function PlaceForm({ status, photographers, cities, categories }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [picture, setPicture] = useState();
  const handleChangePicture = (e) => {
    setPicture(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    try {
      const {
        nameUrbanArt,
        description,
        coords,
        photographer,
        city,
        category,
        address,
      } = data;

      // PARA SUBIR A FIREBASE STORAGE; ESTOY EN PARA EL AMBIENTE DE PRUEBAS
      const url_photo = await uploadImageFB(picture, picture.name);
      // CODIGO DE CKAN
      // const responseCKAN = await uploadFile(
      //   import.meta.env.VITE_PACKAGE_ID_STORAGE,
      //   picture,
      //   picture.name
      // );

      // if (responseCKAN.status !== 200) {
      //   toast.error(
      //     "No se pudo subir la imagen. Si crees que es un error, reportalo."
      //   );
      //   return;
      // }

      // let url_photo = responseCKAN.data.result.url

      let idPhotographer = photographers.filter(
        (elem) => elem.names === photographer
      )[0].id_user;
      let id_city = cities.filter((elem) => elem.name === city)[0].id_city;
      let dataJSON = {
        name: nameUrbanArt,
        description,
        coords: coords.trim().replace(/\s/g, ""),
        url_photo,
        id_city,
        id_user: idPhotographer,
        address,
        id_urbanartcategory: parseInt(category),
      };
      console.log(dataJSON);
      const response = await saveMarker(dataJSON);
      if (response.status === 200) {
        status(response.status);
        toast.success("Arte urbano guardado sastifactoriamente.");
      } else {
        toast.error("No se pudo guardar el lugar. Intenta mas tarde.");
      }
      reset();
      setPicture("");
    } catch (error) {
      toast.error(
        "Estamos teniendo problemas con el servidor. Intenta mas tarde."
      );
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-1/2 p-10 text-black"
    >
      <h4 className="text-black text-4xl font-bold text-center my-4 p-1">
        Registra un nuevo Arte Urbano
      </h4>
      <div className="mb-2">
        <CustomInput
          id={"nameUrbanArt"}
          placeholder={"Ej. Mural La Campeona Olimpica"}
          label={"Nombre"}
          register={{ ...register("nameUrbanArt", { required: true }) }}
          type={"text"}
        />
        {errors.nameUrbanArt?.type === "required" && (
          <ErrorMessageForm
            message={"Debes ingresar el nombre del arte urbano."}
          />
        )}
      </div>
      <div className="mb-2">
        <CustomTextArea
          id={"description"}
          placeholder={
            "Lugar inspirado que muestra que la mujeres son las mas poderosas y una gran determinacion."
          }
          label={"Description"}
          register={{ ...register("description", { required: true }) }}
        />
        {errors.description?.type === "required" && (
          <ErrorMessageForm message={"Debes ingresar la descripción."} />
        )}
      </div>
      <div className="mb-2">
        <CustomSelect
          id={"city"}
          label={"Cuidad"}
          register={{ ...register("city", { required: true }) }}
          values={cities}
        />
        {errors.city?.type === "required" && (
          <ErrorMessageForm message={"Debes elegir una categoria."} />
        )}
      </div>
      <div className="mb-2">
        <CustomSelect
          id={"category"}
          label={"Categoría"}
          register={{ ...register("category", { required: true }) }}
          values={categories}
        />
        {errors.category?.type === "required" && (
          <ErrorMessageForm message={"Debes elegir la cuidad."} />
        )}
      </div>
      <div className="mb-2">
        <CustomSelect
          id={"photographer"}
          label={"Fotógrafo"}
          register={{ ...register("photographer", { required: true }) }}
          values={photographers}
        />
        {errors.photographer?.type === "required" && (
          <ErrorMessageForm message={"Debes elegir el Fotógrafo."} />
        )}
      </div>
      <div className="mb-2">
        <CustomInput
          id={"address"}
          placeholder={"Ej. -2.343434343,-79.99999999"}
          label={"Dirección"}
          register={{ ...register("address", { required: true }) }}
          type={"text"}
        />
        {errors.address?.type === "required" && (
          <ErrorMessageForm
            message={"Debes ingresar la direccion o referencia del destino."}
          />
        )}
      </div>
      <div className="mb-2">
        <CustomInput
          id={"coords"}
          placeholder={"Ej. -2.343434343,-79.99999999"}
          label={"Coordenadas"}
          register={{ ...register("coords", { required: true }) }}
          type={"text"}
        />
        {errors.coords?.type === "required" && (
          <ErrorMessageForm message={"Debes ingresar las coordenadas."} />
        )}
      </div>
      <div className="mb-2">
        <label
          htmlFor="email"
          className="text-black block mb-2 text-lg font-semibold"
        >
          Imagen:
        </label>
        <div className="container w-50 h-50 my-3">
          {picture ? (
            <img
              width={200}
              height={200}
              src={URL.createObjectURL(picture)}
              alt="Foto1"
            />
          ) : (
            <span className="text-black">
              No se ha seleccionado todavía una foto
            </span>
          )}
        </div>
        <input
          type="file"
          id="file"
          className="shadow-sm bg-gray-50 border   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Ej. 2.00000,-72.00000"
          name="file_photo"
          onChange={handleChangePicture}
        />
      </div>
      <div className="text-start">
        <button className="btn bg-bgmain text-black font-bold text-end">
          Guardar Arte Urbano
        </button>
      </div>
      <Toaster position="top-center" />
    </form>
  );
}

export default PlaceForm;
