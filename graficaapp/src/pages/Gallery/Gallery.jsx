import { useNavigate } from "react-router-dom";
import CompleteFileCard from "../../components/CompleteFile/CompleteFileCard";
import { completefiledata } from "../../utilities/completefiledata";
import { useGraficaPopular } from "../../hooks/useGraficaPopular";
import { useEffect } from "react";
import { getAllUrbanArtsCategories } from "../../services/urbanarts";

const Gallery = () => {
  const nagivate = useNavigate();
  const { state, fetchUrbanArtsCategories } = useGraficaPopular();

  useEffect(() => {
    getAllUrbanArtsCategories().then((categories) => {
      fetchUrbanArtsCategories(categories.data);
    });
  }, []);

  const categories = state.urbanartscategories;

  return (
    <div className="min-h-screen mx-auto px-8 py-12 bg-bgmain">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-2 place-items-center">
        {categories.map((category, index) => (
          <CompleteFileCard
            onClick={() => nagivate(`/urbanarts/${category.id}`)}
            url_image={category.url_photo}
            title={category.name}
            description={category.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
