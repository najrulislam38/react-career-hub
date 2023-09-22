import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("./data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div id="features" className="my-20">
      <div className="text-center ">
        <h2 className="text-5xl font-bold text-[#1A1919] ">Featured Jobs</h2>
        <p className="my-7 text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={`text-center my-5 ${
          dataLength === jobs.length ? "hidden" : ""
        }`}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className=" text-xl font-semibold  text-white  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:opacity-90 py-3 px-7 rounded"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
