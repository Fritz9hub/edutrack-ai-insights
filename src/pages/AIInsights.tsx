import SiteLayout from "@/components/layout/SiteLayout";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from 'recharts';

const attendance = [
  { week: 'W1', rate: 0.92 },
  { week: 'W2', rate: 0.88 },
  { week: 'W3', rate: 0.85 },
  { week: 'W4', rate: 0.82 },
  { week: 'W5', rate: 0.78 },
  { week: 'W6', rate: 0.81 },
];

const performance = [
  { week: 'W1', avg: 72 },
  { week: 'W2', avg: 70 },
  { week: 'W3', avg: 68 },
  { week: 'W4', avg: 67 },
  { week: 'W5', avg: 65 },
  { week: 'W6', avg: 69 },
];

function detectAtRisk(attendance: number, avgScore: number) {
  const risk = attendance < 0.8 || avgScore < 65 ? 'High' : attendance < 0.85 || avgScore < 70 ? 'Medium' : 'Low';
  return risk;
}

const AIInsights = () => {
  const latest = { attendance: attendance[attendance.length-1].rate, score: performance[performance.length-1].avg };
  const risk = detectAtRisk(latest.attendance, latest.score);

  return (
    <SiteLayout>
      <h1 className="text-3xl font-bold mb-6">AI Insights</h1>
      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border p-4 bg-card/70">
          <h2 className="font-semibold mb-4">Attendance Trend</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendance}>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={`hsl(var(--brand))`} stopOpacity={0.6} />
                    <stop offset="95%" stopColor={`hsl(var(--brand))`} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="currentColor" />
                <YAxis domain={[0,1]} tickFormatter={(v) => `${Math.round(v*100)}%`} stroke="currentColor" />
                <Tooltip formatter={(v: number) => `${Math.round(v*100)}%`} />
                <Area type="monotone" dataKey="rate" stroke={`hsl(var(--brand))`} fill="url(#grad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>
        <article className="rounded-lg border p-4 bg-card/70">
          <h2 className="font-semibold mb-4">Average Score Trend</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="currentColor" />
                <YAxis domain={[50,100]} stroke="currentColor" />
                <Tooltip />
                <Line type="monotone" dataKey="avg" stroke={`hsl(var(--brand-2))`} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-4 bg-background/70">
          <p className="text-sm text-muted-foreground">Current attendance</p>
          <p className="text-2xl font-semibold">{Math.round(latest.attendance*100)}%</p>
        </div>
        <div className="rounded-lg border p-4 bg-background/70">
          <p className="text-sm text-muted-foreground">Average score</p>
          <p className="text-2xl font-semibold">{latest.score}</p>
        </div>
        <div className="rounded-lg border p-4 bg-background/70">
          <p className="text-sm text-muted-foreground">AI risk assessment</p>
          <p className="text-2xl font-semibold">{risk}</p>
        </div>
      </section>
      <p className="mt-6 text-sm text-muted-foreground">Note: AI insights use heuristic sample data in this demo. Connect Supabase to enable real, privacy-preserving analytics.</p>
    </SiteLayout>
  );
};

export default AIInsights;
