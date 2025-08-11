import { PropsWithChildren } from "react";
import Header from "./Header";

const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-[radial-gradient(60rem_40rem_at_50%_-10%,hsl(var(--brand)/0.08),transparent)]">
      <Header />
      <main className="container py-10">{children}</main>
      <footer className="border-t py-8 mt-12">
        <div className="container text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} EduTrack. All rights reserved.</p>
          <nav className="flex gap-6">
            <a href="#privacy" className="hover:text-foreground">Privacy</a>
            <a href="#security" className="hover:text-foreground">Security</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
