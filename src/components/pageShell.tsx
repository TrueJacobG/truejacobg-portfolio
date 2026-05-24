import Menu from "@/components/menu";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

const PageShell = ({ children, className = "" }: PageShellProps) => {
  return (
    <div className="min-h-screen bg-glow bg-grid">
      <Menu />
      <main className={`max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pb-16 ${className}`}>{children}</main>
    </div>
  );
};

export default PageShell;
