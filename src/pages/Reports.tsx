import SiteLayout from "@/components/layout/SiteLayout";

function toCSV(rows: Record<string, any>[]): string {
  if (!rows.length) return '';
  const header = Object.keys(rows[0]);
  const escape = (v: any) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const lines = [header.join(',')].concat(rows.map(r => header.map(h => escape(r[h])).join(',')));
  return lines.join('\n');
}

const data = [
  { course: 'CSC101', metric: 'Attendance', value: '84%' },
  { course: 'MAT202', metric: 'Avg Score', value: 71 },
  { course: 'PHY310', metric: 'At-risk Students', value: 4 },
];

const Reports = () => {
  return (
    <SiteLayout>
      <h1 className="text-3xl font-bold mb-6">Admin Reports</h1>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3">Course</th>
              <th className="text-left p-3">Metric</th>
              <th className="text-left p-3">Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{r.course}</td>
                <td className="p-3">{r.metric}</td>
                <td className="p-3">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="mt-4 inline-flex items-center rounded-md border px-4 py-2 hover:bg-accent transition-colors"
        onClick={() => {
          const blob = new Blob([toCSV(data)], { type: 'text/csv;charset=utf-8;' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `edutrack-reports.csv`;
          link.click();
        }}
      >
        Export CSV
      </button>
    </SiteLayout>
  );
};

export default Reports;
