export default function JobTable({
  jobs,
  deleteJob,
  handleEdit, }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
      <h2 className="text-2xl font-semibold mb-4">
        Applications
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left p-3">Company</th>
              <th className="text-left p-3">Role</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Location</th>
              <th className="text-left p-3">Salary</th>
              <th className="text-left p-3">Applied Date</th>
              <th className="text-left p-3">Notes</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {jobs.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="text-center p-8 text-zinc-500"
                >
                  No job applications found
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr
                  key={job._id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/40 transition"
                >
                  <td className="p-3">{job.company}</td>

                  <td className="p-3">{job.role}</td>

                  <td className="p-3">
                    <span
                      className={`inline-flex whitespace-nowrap px-3 py-1 rounded-full text-sm font-medium
                      ${job.status === "Applied"
                          ? "bg-blue-500/20 text-blue-400"

                          : job.status === "Interview Scheduled"
                            ? "bg-yellow-500/20 text-yellow-400"

                            : job.status === "Rejected"
                              ? "bg-red-500/20 text-red-400"

                              : "bg-green-500/20 text-green-400"
                        }
                    `}
                    >
                      {job.status}
                    </span>
                  </td>

                  <td className="p-3">{job.location}</td>

                  <td className="p-3">{job.salary}</td>

                  <td className="p-3">{job.appliedDate}</td>

                  <td className="p-3 max-w-[250px] truncate">
                    {job.notes}
                  </td>

                  <td className="p-3 flex gap-2">
                    <button
                      className="bg-blue-400 px-3 py-1 rounded cursor-pointer hover:bg-blue-600 transition"
                      onClick={() => handleEdit(job)}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-orange-500 px-3 py-1 rounded cursor-pointer hover:bg-orange-700 transition"
                      onClick={() => deleteJob(job._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )))}
          </tbody>

        </table>
      </div>
    </div>
  );
}