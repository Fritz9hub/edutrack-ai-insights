import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded bg-gradient-to-tr from-[hsl(var(--brand))] to-[hsl(var(--brand-2))] shadow-[var(--shadow-glow)]" aria-hidden />
          <span className="font-semibold">EduTrack</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/lecturer" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground transition-colors"}>Lecturer</NavLink>
          <NavLink to="/courses" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground transition-colors"}>Courses</NavLink>
          <NavLink to="/insights" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground transition-colors"}>AI Insights</NavLink>
          <NavLink to="/reports" className={({isActive}) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground transition-colors"}>Reports</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link to="/student">Student Portal</Link>
          </Button>
          <Button asChild variant="hero">
            <Link to="/lecturer">Open Dashboard</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
