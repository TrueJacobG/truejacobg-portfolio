import Metadata from "@/components/metadata";
import PageShell from "@/components/pageShell";
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://github.com/TrueJacobG",
    label: "GitHub",
    handle: "@TrueJacobG",
    icon: FaGithub,
    accent: "hover:border-zinc-400/30 hover:shadow-zinc-500/10",
    iconColor: "text-zinc-300",
  },
  {
    href: "https://www.linkedin.com/in/jakub-gradzewicz/",
    label: "LinkedIn",
    handle: "jakub-gradzewicz",
    icon: FaLinkedin,
    accent: "hover:border-blue-500/30 hover:shadow-blue-500/10",
    iconColor: "text-blue-400",
  },
];

const Contact = () => {
  return (
    <>
      <Metadata />
      <PageShell>
        <section className="text-center mb-16 animate-fade-up">
          <p className="text-emerald-400/80 text-sm font-mono tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s <span className="gradient-text">connect</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Find me on social platforms — always happy to chat about code, coffee, or fishing.
          </p>
        </section>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-up-delay-1">
          {socialLinks.map(({ href, label, handle, icon: Icon, accent, iconColor }) => (
            <Link key={href} href={href} target="_blank" rel="noopener noreferrer" className="group">
              <div className={`glass-card rounded-2xl p-8 flex flex-col items-center gap-4 ${accent}`}>
                <Icon className={`text-5xl ${iconColor} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-center">
                  <span className="block text-xl font-semibold text-zinc-100">{label}</span>
                  <span className="block text-sm text-zinc-500 mt-1">{handle}</span>
                </div>
                <FaArrowUpRightFromSquare className="text-xs text-zinc-600 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </PageShell>
    </>
  );
};

export default Contact;
