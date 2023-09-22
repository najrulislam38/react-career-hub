const getStoreJobApplication = () => {
  const storedJodApplication = localStorage.getItem("Job-applications");
  if (storedJodApplication) {
    return JSON.parse(storedJodApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplications = getStoreJobApplication();
  const exists = storedJobApplications.find((jobId) => jobId === id);

  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "Job-applications",
      JSON.stringify(storedJobApplications)
    );
  }
};

export { getStoreJobApplication, saveJobApplication };
