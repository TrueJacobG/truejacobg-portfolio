import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { href: "/", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Menu = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">
          <Link href="/" className="group flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-sm font-bold text-zinc-950">
              JG
            </span>
            <span className="text-lg font-semibold tracking-tight group-hover:text-emerald-400 transition-colors">
              TrueJacobG
            </span>
          </Link>
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map(({ href, label }) => {
              const isActive = router.pathname === href || (href !== "/" && router.pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link href={href} className={`nav-link px-3 py-2 text-sm font-medium ${isActive ? "nav-link-active" : ""}`}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
