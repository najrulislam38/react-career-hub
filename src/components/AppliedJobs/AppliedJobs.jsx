import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../../utilities/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleDisplayJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoreJobApplication();
    if (jobs.length > 0) {
      // const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));

      const jobApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
      // console.log(jobs, storedJobIds, jobApplied);
    }
  }, [jobs]);

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10">
      <div className="md:flex justify-between items-start">
        <h2 className="text-3xl">Jobs I applied: {appliedJobs.length}</h2>
        <details className="dropdown mb-3">
          <summary className="m-1 btn">Filter The Jobs</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleDisplayJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleDisplayJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleDisplayJobsFilter("onsite")}>
              <a>Onside</a>
            </li>
          </ul>
        </details>
      </div>
      <section>
        <div>
          {displayJobs.map((job) => (
            <li key={job.id}>{job.job_title}</li>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AppliedJobs;
