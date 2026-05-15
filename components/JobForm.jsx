"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function JobForm({
  fetchJobs,
  editingJob,
  setEditingJob,
  formRef,
}) {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    location: "",
    salary: "",
    appliedDate: "",
    notes: "",
  });

  useEffect(() => {
  if (editingJob) {
    setFormData(editingJob);
  }
}, [editingJob]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editingJob) {
      await axios.put(
        `/api/jobs/${editingJob._id}`,
        formData
      );
      setEditingJob(null);
      toast.success("Job updated successfully");
    } else {
      await axios.post("/api/jobs", formData);
      toast.success("Job added successfully");
    }

    setFormData({
      company: "",
      role: "",
      status: "Applied",
      location: "",
      salary: "",
      appliedDate: "",
      notes: "",
    });

    fetchJobs();

  } catch (error) {
    console.log(error);
    toast.error("Error occurred while saving job");
  }
};

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8"
    >
      <h2 className="text-2xl font-semibold mb-6">
        {editingJob ? "Update Job Application" : "Add Job Application"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg outline-none"
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg outline-none"
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg outline-none"
        >
          <option>Applied</option>
          <option>Interview Scheduled</option>
          <option>Rejected</option>
          <option>Offer Received</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg outline-none"
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg outline-none"
        />

        <input
          type="date"
          name="appliedDate"
          value={formData.appliedDate}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg outline-none [color-scheme:dark]"
        />

      </div>

      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
        className="bg-zinc-800 p-3 rounded-lg outline-none w-full mt-4"
        rows="4"
      />

      <button
        type="submit"
        className="bg-white text-black px-6 py-3 cursor-pointer rounded-lg mt-4 font-semibold"
      >
        {editingJob ? "Update Job" : "Add Job"}
      </button>

    </form>
  );
}