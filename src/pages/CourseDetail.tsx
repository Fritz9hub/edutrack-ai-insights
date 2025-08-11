import SiteLayout from "@/components/layout/SiteLayout";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { QRCodeCanvas } from "qrcode.react";

function downloadCanvasImage(canvas: HTMLCanvasElement, filename: string) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function toCSV(rows: Record<string, any>[]): string {
  if (!rows.length) return '';
  const header = Object.keys(rows[0]);
  const escape = (v: any) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const lines = [header.join(',')].concat(rows.map(r => header.map(h => escape(r[h])).join(',')));
  return lines.join('\n');
}

const mockAttendance = [
  { student_id: 'S001', name: 'Alex Chen', date: '2025-03-05', status: 'Present' },
  { student_id: 'S002', name: 'Maria Lopez', date: '2025-03-05', status: 'Late' },
  { student_id: 'S003', name: 'Samir Patel', date: '2025-03-05', status: 'Absent' },
];

const CourseDetail = () => {
  const { id } = useParams();
  const [sessionTitle, setSessionTitle] = useState('Lecture 1');
  const [expiresMinutes, setExpiresMinutes] = useState(10);

  const payload = useMemo(() => {
    const expiresAt = Date.now() + expiresMinutes * 60_000;
    const sessionId = `${id}-${Math.random().toString(36).slice(2, 8)}`;
    return { type: 'attendance', courseId: id, sessionId, sessionTitle, expiresAt };
  }, [id, sessionTitle, expiresMinutes]);

  const csv = useMemo(() => toCSV(mockAttendance), []);

  return (
    <SiteLayout>
      <h1 className="text-3xl font-bold mb-6">{id} — Course Detail</h1>

      <section className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-start">
        <div className="rounded-lg border p-6 bg-card/70 space-y-4">
          <h2 className="text-xl font-semibold">Generate Attendance QR</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Session title</span>
              <input
                value={sessionTitle}
                onChange={(e) => setSessionTitle(e.target.value)}
                className="h-10 rounded-md border bg-background px-3"
                placeholder="e.g., Week 3 Lecture"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Expires (minutes)</span>
              <input
                type="number"
                min={1}
                max={60}
                value={expiresMinutes}
                onChange={(e) => setExpiresMinutes(parseInt(e.target.value) || 1)}
                className="h-10 rounded-md border bg-background px-3"
              />
            </label>
          </div>
          <div className="flex flex-col items-center gap-3 py-4">
            <div className="rounded-xl border p-4 bg-background">
              <QRCodeCanvas value={JSON.stringify(payload)} size={192} includeMargin />
            </div>
            <Button
              variant="outline"
              onClick={() => {
                const canvas = document.querySelector<HTMLCanvasElement>('canvas');
                if (canvas) downloadCanvasImage(canvas, `${id}-${payload.sessionId}.png`);
              }}
            >
              Download PNG
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Share this QR in class. It encodes course, a one-time session id, and expiry.</p>
        </div>

        <aside className="rounded-lg border p-6 bg-card/70 space-y-3">
          <h3 className="font-semibold">Attendance (sample)</h3>
          <ul className="space-y-2 text-sm">
            {mockAttendance.map((r) => (
              <li key={r.student_id} className="flex justify-between border-b pb-2 last:border-b-0 last:pb-0">
                <span>{r.name}</span>
                <span className="text-muted-foreground">{r.status}</span>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            onClick={() => {
              const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
              const link = document.createElement('a');
              link.href = URL.createObjectURL(blob);
              link.download = `${id}-attendance.csv`;
              link.click();
            }}
          >
            Export CSV
          </Button>
        </aside>
      </section>
    </SiteLayout>
  );
};

export default CourseDetail;
