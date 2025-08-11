import SiteLayout from "@/components/layout/SiteLayout";
import heroImage from "@/assets/hero-edutrack.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <SiteLayout>
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          EduTrack — AI-Powered Student Engagement Analytics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Monitor attendance, predict performance, and drive participation with actionable AI insights for higher education.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 items-center">
        <img
          src={heroImage}
          alt="EduTrack dashboard visualization with attendance QR and analytics"
          className="w-full rounded-lg border shadow-[var(--shadow-elegant)]"
        />
        <div className="space-y-6">
          <div className="rounded-lg border p-6 bg-card/50">
            <h2 className="text-2xl font-semibold mb-2">Why EduTrack?</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Generate secure attendance QR codes and automate roll calls.</li>
              <li>Record quizzes and assignments, visualize trends instantly.</li>
              <li>Detect at-risk students early with AI-driven predictions.</li>
              <li>Export clean CSV reports for departments and admins.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/lecturer">Lecturer Dashboard</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/student">Student Portal</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[{
          title: 'Attendance QR', desc: 'Instant QR sessions with expiry and course binding.'
        }, {
          title: 'AI Insights', desc: 'Predict risk and surface engagement trends.'
        }, {
          title: 'Admin Reports', desc: 'Export CSVs for compliance and accreditation.'
        }].map((f) => (
          <article key={f.title} className="rounded-xl border p-6 bg-background/70 hover:shadow-[var(--shadow-elegant)] transition-[box-shadow]">
            <h3 className="font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
};

export default Index;
