import SiteLayout from "@/components/layout/SiteLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const StudentPortal = () => {
  const [courseCode, setCourseCode] = useState("");
  const [attendanceCode, setAttendanceCode] = useState("");

  return (
    <SiteLayout>
      <h1 className="text-3xl font-bold mb-6">Student Portal</h1>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6 bg-card/70 space-y-3">
          <h2 className="font-semibold">Join a Course</h2>
          <input
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            placeholder="Enter course code (e.g., CSC101)"
            className="h-10 rounded-md border bg-background px-3 w-full"
          />
          <Button variant="hero" onClick={() => alert(`Requested to join ${courseCode}. Connect backend to proceed.`)}>Join</Button>
        </div>
        <div className="rounded-lg border p-6 bg-card/70 space-y-3">
          <h2 className="font-semibold">Mark Attendance</h2>
          <input
            value={attendanceCode}
            onChange={(e) => setAttendanceCode(e.target.value)}
            placeholder="Paste scanned code payload"
            className="h-10 rounded-md border bg-background px-3 w-full"
          />
          <Button variant="outline" onClick={() => alert(`Submitting attendance: ${attendanceCode.slice(0,40)}...`)}>Submit</Button>
          <p className="text-sm text-muted-foreground">Scanning via camera will be enabled after backend integration.</p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default StudentPortal;
