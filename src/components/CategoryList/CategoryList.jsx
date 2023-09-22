import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto my-20 ">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-3">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
