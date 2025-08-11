import SiteLayout from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LecturerDashboard = () => {
  const stats = [
    { label: "Active Courses", value: 3 },
    { label: "This Week Attendance", value: "89%" },
    { label: "At-risk Alerts", value: 2 },
  ];

  return (
    <SiteLayout>
      <h1 className="text-3xl font-bold mb-6">Lecturer Dashboard</h1>
      <section className="grid gap-4 md:grid-cols-3 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border p-5 bg-card/70">
            <p className="text-muted-foreground text-sm">{s.label}</p>
            <p className="text-2xl font-semibold mt-1">{s.value}</p>
          </div>
        ))}
      </section>
      <section className="flex flex-wrap gap-3">
        <Button asChild variant="hero">
          <Link to="/courses">Manage Courses</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/insights">View AI Insights</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/reports">Admin Reports</Link>
        </Button>
      </section>
    </SiteLayout>
  );
};

export default LecturerDashboard;
