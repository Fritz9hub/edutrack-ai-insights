import SiteLayout from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mockCourses = [
  { id: "csc101", name: "CSC101 - Intro to CS", students: 120 },
  { id: "mat202", name: "MAT202 - Linear Algebra", students: 85 },
  { id: "phy310", name: "PHY310 - Signals & Systems", students: 64 },
];

const Courses = () => {
  return (
    <SiteLayout>
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {mockCourses.map((c) => (
          <article key={c.id} className="rounded-lg border p-5 bg-card/70 flex flex-col gap-3">
            <div>
              <h2 className="font-semibold">{c.name}</h2>
              <p className="text-sm text-muted-foreground">{c.students} students</p>
            </div>
            <div className="mt-auto flex gap-2">
              <Button asChild size="sm" variant="outline"><Link to={`/courses/${c.id}`}>Open</Link></Button>
              <Button asChild size="sm" variant="hero"><Link to={`/courses/${c.id}`}>Attendance QR</Link></Button>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
};

export default Courses;
