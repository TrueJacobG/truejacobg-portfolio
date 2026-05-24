import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface Props {
  title: string;
  description: string;
  link: string;
  linkText?: string;
  badge?: string;
  featured?: boolean;
}

const SquareBox = ({ title, description, link, linkText = "View Project", badge, featured = false }: Props) => {
  return (
    <article className={`glass-card rounded-xl p-6 ${featured ? "sm:p-8" : ""}`}>
      <div className="flex flex-col h-full gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-bold tracking-tight text-zinc-100 ${featured ? "text-xl sm:text-2xl" : "text-lg"}`}>
            {title}
          </h3>
          {badge && (
            <span className="shrink-0 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400 border border-amber-500/20">
              {badge}
            </span>
          )}
        </div>
        {description && <p className="text-zinc-400 text-sm leading-relaxed flex-1">{description}</p>}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group w-fit"
        >
          {linkText}
          <FaArrowUpRightFromSquare className="text-xs opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </Link>
      </div>
    </article>
  );
};

export default SquareBox;
