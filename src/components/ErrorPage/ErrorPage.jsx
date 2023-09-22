import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="max-w-screen-xl h-screen mx-auto px-5 md:px-10 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl text-center mb-8">Oops! Page Not Found. </h1>
        <Link to="/">
          <button className="btn btn-success ">Go to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
