import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className=" p-8 bg-base-200  rounded-lg">
      <figure className=" bg-base-300 rounded-md mb-4 w-16 h-16 flex justify-center items-center">
        <img src={logo} alt={category_name} />
      </figure>
      <div className="">
        <h2 className="text-xl font-bold my-2">{category_name}!</h2>
        <p>{availability}</p>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
