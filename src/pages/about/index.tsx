import Metadata from "@/components/metadata";
import PageShell from "@/components/pageShell";
import Image from "next/image";

const opinions = [
  "Typescript over Javascript",
  "Self-hosted over Cloud base",
  "Containers over VMs",
  'Static sites over "react everywhere"',
  "Static typed languages over Dynamic / Duck typing languages",
  "CI/CD pipelines are MUST HAVE",
  "AI is just a tool",
  "Modern Java is fresh and cool",
  "PKL will be huge (mark my words)",
  "Zod is marvelous (Parse, do not validate)",
  "Testcontainers are awesome",
  "Union types are must have (☕😔)",
  "Postgres for (almost) everything",
  "Composition over Inheritance",
  "HTMX over SPAs (in 90% of cases)",
  "Boring technology wins",
  "Small PRs are a superpower",
];

const About = () => {
  return (
    <>
      <Metadata />
      <PageShell>
        <section className="text-center mb-16 animate-fade-up">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 blur-lg" />
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-2 ring-white/10">
              <Image src="/image.png" alt="Jakub Gradzewicz" width={200} height={200} className="object-cover w-full h-full" />
            </div>
          </div>
          <p className="text-emerald-400/80 text-sm font-mono tracking-widest uppercase mb-3">About Me</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Fullstack Developer · <span className="gradient-text">Java & React</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I am a Fullstack Software Developer dedicated to building scalable, high-performance systems and intuitive
            user experiences.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-6 sm:p-8 mb-12 animate-fade-up-delay-1">
          <p className="text-zinc-300 leading-relaxed text-center sm:text-left">
            My core expertise lies in architecting robust backend solutions using Java 21 and Spring Boot. I thrive in
            microservices environments, managing complex data across PostgreSQL and MySQL while ensuring system
            reliability through Jenkins CI/CD pipelines and comprehensive testing with JUnit, Spock, and Cucumber. On the
            frontend, I bridge the gap between logic and design using TypeScript and React. I am a firm believer in the
            clean code philosophy, constantly exploring emerging technologies to solve complex problems with elegant,
            maintainable solutions. Currently experimenting with AI agentic tools.
          </p>
        </section>

        <section className="animate-fade-up-delay-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-500/30" />
            <h2 className="text-2xl font-bold tracking-tight">IT Opinions</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-500/30" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {opinions.map((opinion) => (
              <div
                key={opinion}
                className="glass-card rounded-lg px-4 py-3 text-sm text-zinc-400 italic hover:text-zinc-300 transition-colors"
              >
                {opinion}
              </div>
            ))}
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default About;
