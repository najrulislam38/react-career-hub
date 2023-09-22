import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { LiaPhoneSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import "./JobDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utilities/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    salary,
  } = job;
  //   console.log(job);

  const handleApplied = () => {
    saveJobApplication(idInt);
    toast("You have Applied successfully.");
  };

  return (
    <div>
      {/* <h2>Job Details of: {job.job_title} </h2> */}
      <div className="grid md:grid-cols-4 gap-5 my-10">
        <div className="md:col-span-3">
          <div className="space-y-5 ">
            <p>
              <span className="text-black">Job Description:</span>{" "}
              {job_description}
            </p>
            <p>
              <span className="text-black">Job Responsibility:</span>{" "}
              {job_responsibility}
            </p>
            <h4 className="text-black">Educational Requirements:</h4>
            <p>{educational_requirements}</p>
            <h4 className="text-black">Experiences:</h4>
            <p>{experiences}</p>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="bg-[#F4F1FF] p-6 rounded-md mb-5">
            <h3 className="text-xl font-bold pb-3">Job Details</h3>
            <hr className="bg-black h-[2px]" />
            <div className="my-3">
              <div className="flex gap-4 my-4">
                <AiOutlineDollar className="text-2xl text-[]" />
                <p>
                  <span className="text-black">Salary:</span> {salary} (per
                  month)
                </p>
              </div>
              <div className="flex gap-4 my-4">
                <FiShoppingBag className="text-2xl text-[]" />
                <p>
                  <span className="text-black">Job Title:</span> {job_title}
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold py-3">Contact Information</h3>
            <hr className="bg-black h-[2px]" />
            <div>
              <div className="flex gap-4 my-4">
                <LiaPhoneSolid className="text-2xl" />
                <p>
                  <span className="text-black">Phone:</span>{" "}
                  {job.contact_information.phone}
                </p>
              </div>
              <div className="flex gap-4 my-4">
                <HiOutlineMail className="text-2xl " />
                <p>
                  <span className="text-black">Email:</span>{" "}
                  {job.contact_information.email}
                </p>
              </div>
              <div className="flex gap-2 my-4">
                <MdOutlineLocationOn className="w-6 text-2xl" />
                <p>
                  <span className="text-black">Address:</span>{" "}
                  {job.contact_information.address}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleApplied}
            className="text-white font-bold bg-purple-500 text-center w-full rounded-md py-2"
          >
            Apply Now
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
