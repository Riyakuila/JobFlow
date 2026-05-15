"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import JobForm from "@/components/JobForm";
import JobTable from "@/components/JobTable";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const formRef = useRef(null);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("/api/jobs");
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      fetchJobs();
      toast.success("Job deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (job) => {
  setEditingJob(job);

  formRef.current?.scrollIntoView({
    behavior: "smooth",
  });
};

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          JobFlow
        </h1>

        <p className="text-gray-400 mb-8">
          Track and manage your job applications
        </p>

        <JobForm
          fetchJobs={fetchJobs}
          editingJob={editingJob}
          setEditingJob={setEditingJob}
          formRef={formRef}
        />

        <JobTable
          jobs={jobs}
          deleteJob={deleteJob}
          handleEdit={handleEdit}
        />
      </div>
    </main>
  );
}