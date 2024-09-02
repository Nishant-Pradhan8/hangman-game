import { useContext } from "react";
import DataContext from "../Context/context";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const navigate = useNavigate();
  const { categories, handelSelctedCategory } = useContext(DataContext);
  
  function handelCategorySelection(selected) {
    console.log(selected);
    handelSelctedCategory(selected);
    navigate("/hangman");
  }

  return (
    <main className="categories-wrapper">
      <div className="categories-main">
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => handelCategorySelection(category)}
              key={index}
              className="primary-btn"
            >
              {category}
            </button>
          );
        })}
      </div>
    </main>
  );
};
export default Categories;
