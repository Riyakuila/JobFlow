export default function DashboardCards({ jobs }) {
  const totalJobs = jobs.length;

  const interviews = jobs.filter(
    (job) => job.status === "Interview Scheduled"
  ).length;

  const offers = jobs.filter(
    (job) => job.status === "Offer Received"
  ).length;

  const rejected = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  const cards = [
    {
      title: "Total Applications",
      value: totalJobs,
      color: "text-blue-400",
    },
    {
      title: "Interviews",
      value: interviews,
      color: "text-yellow-400",
    },
    {
      title: "Offers",
      value: offers,
      color: "text-green-400",
    },
    {
      title: "Rejected",
      value: rejected,
      color: "text-red-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
        >
          <p className="text-white text-sm mb-2">
            {card.title}
          </p>

          <h2 className={`text-3xl font-bold ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}