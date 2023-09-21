import PropTypes from "prop-types";

const Job = ({ job }) => {
  console.log(job);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border border-gray-200 rounded-md p-8">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="">
        <h2 className="text-[#474747] text-3xl font-extrabold my-2">
          {job_title}
        </h2>
        <p className="text-xl text-[#757575] font-semibold mb-4">
          {company_name}
        </p>
        <div>
          <button className="text-xl font-semibold  bg-white   text-[#7E90FE] hover:opacity-90 py-2 px-4 rounded border border-[#7E90FE] mr-4 mb-4">
            {remote_or_onsite}
          </button>
          <button className="text-xl font-semibold  bg-white   text-[#7E90FE] hover:opacity-90 py-2 px-4 rounded border border-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-3 text-xl text-[#757575] font-semibold mb-6">
          <div>
            <span></span>
            <span>{location}</span>
          </div>
          <div>
            <span></span>
            <span>{salary}</span>
          </div>
        </div>
        <div>
          <button className="text-xl font-semibold  text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:opacity-90 py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
