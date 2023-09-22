import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  console.log(job);
  return (
    <div className="border border-gray-200 rounded-md p-8 my-7  md:flex justify-between items-center">
      <div>
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
          <div className="flex gap-6 text-xl text-[#757575] font-medium mb-6">
            <div className="flex gap-2 items-center">
              <MdOutlineLocationOn className="text-2xl" />
              <span>{location}</span>
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineDollar className="text-2xl" />
              <span className="text-xl">{salary}</span>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="text-xl font-semibold  text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:opacity-90 py-2 px-4 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object,
};

export default AppliedJob;
