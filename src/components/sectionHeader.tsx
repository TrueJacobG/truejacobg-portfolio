interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeader = ({ title, subtitle, id }: SectionHeaderProps) => {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <div className="flex items-center gap-4 mb-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-500/30" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight whitespace-nowrap">{title}</h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-500/30" />
      </div>
      {subtitle && <p className="text-center text-zinc-400 text-sm max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
