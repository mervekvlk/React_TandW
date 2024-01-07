import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, fetchSubcategories } from "../slices/categorySlice";
import { Link } from "react-router-dom";

function Category() {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.categories.categories);
  const subcategories = useSelector((state) => state.categories.subcategories);
  const categoryStatus = useSelector((state) => state.categories.status);

  useEffect(() => {
    if (categoryStatus === "idle") {
      dispatch(fetchCategories());
      dispatch(fetchSubcategories());
    }
  }, [categoryStatus, dispatch]);

  const categoryMap = category.map((category) => ({
    ...category,
    subcategories: subcategories.filter(
      (sub) => sub.category_id === category.id
    ),
  }));

  return (
    <div>
      {categoryMap.map((category) => (
        <div className="mega-catagory" >
          <h4>
          <Link to={`/Shop?categoryId=${category.id}`} key={category.id}>
              <span>{category.name}</span>
            </Link>
          </h4>
          <div className="mega-button">
            {category.subcategories.map((sub) => (
              <Link to={`/Shop?subcategory=${sub.id}`} key={sub.id}>
                <span>{sub.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
