import "@/app/globals.css";
import Menu from "@/components/menu";
import Metadata from "@/components/metadata";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Metadata />
      <main>
        <div className="min-h-screen bg-stone-300">
          <Menu />
          <main className="max-w-4xl mx-auto py-15 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <Image src="/image.png" alt="Image of me" width={200} height={200} className="object-cover" />
              </div>
            </div>
            <div className="space-y-10 text-center mb-8">
              <p>Fullstack Developer specializing in Java & React</p>
              <p>
                I am a Fullstack Software Developer dedicated to building scalable, high-performance systems and intuitive user experiences.
                My core expertise lies in architecting robust backend solutions using Java 21 and Spring Boot. I thrive in microservices
                environments, managing complex data across PostgreSQL and MySQL while ensuring system reliability through Jenkins CI/CD
                pipelines and comprehensive testing with JUnit, Spock, and Cucumber. On the frontend, I bridge the gap between logic and
                design using TypeScript and React. I am a firm believer in the clean code philosophy, constantly exploring emerging
                technologies to solve complex problems with elegant, maintainable solutions. Currently experimenting with AI agentic tools
              </p>
            </div>
            <div className="space-y-1 text-center mb-8 font-semibold">
              <h1 className="bold">IT Opinions</h1>
              <div className="italic">
                <p>Typescript over Javascript</p>
                <p>Self-hosted over Cloud base</p>
                <p>Containers over VMs</p>
                <p>Static sites over {'"react everywhere"'}</p>
                <p>Static typed languages over Dynamic / Duck typing languages</p>
                <p>CI/CD pipelines are MUST HAVE</p>
                <p>AI is just a tool</p>
                <p>Modern Java is fresh and cool</p>
                <p>PKL will be huge (mark my words)</p>
                <p>Zod is marvelous (Parse, do not validate)</p>
                <p>Testcontainers are awesome</p>
                <p>Union types are must have (☕😔)</p>
                <p>Postgres for (almost) everything</p>
                <p>Composition over Inheritance</p>
                <p>HTMX over SPAs (in 90% of cases)</p>
                <p>Boring technology wins</p>
                <p>Small PRs are a superpower</p>
              </div>
            </div>
          </main>
        </div>
        {/* about?? */}
      </main>
    </>
  );
};

export default About;
