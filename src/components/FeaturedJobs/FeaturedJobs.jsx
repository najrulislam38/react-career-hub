import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("./data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="my-20">
      <div className="text-center ">
        <h2 className="text-5xl ">Featured Jobs</h2>
        <p className="my-7">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
