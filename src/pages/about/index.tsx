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
              <p>Junior Fullstack Developer specializing in Java & Spring-based applications</p>
              <p>
                Experienced with SQL databases (PostgreSQL, MySQL), testing frameworks (JUnit, Spock, Cucumber), and DevOps practices -
                leveraging Jenkins to manage CI/CD pipelines. I build robust backend solutions and add a touch of frontend expertise with
                React (especially whole Next.js environment). I enjoy exploring new technologies and solving complex problems with clean,
                efficient code.
              </p>
            </div>
            <div className="space-y-1 text-center mb-8 font-semibold">
              <h1 className="bold">IT Opinions</h1>
              <div className="italic">
                <p>Typescript over Javascript</p>
                <p>Self-hosted over Cloud base</p>
                <p>Containers over VMs</p>
                <p>Microservices over monoliths</p>
                <p>Static sites over {'"react everywhere"'}</p>
                <p>Static typed languages over Dynamic / Duck typing languages</p>

                <p>CI/CD pipelines are MUST HAVE</p>
                <p>AI is just a tool</p>
                <p>Modern Java is fresh and cool</p>
                <p>PKL will be huge (mark my words)</p>
                <p>Zod is marvelous (Parse, don’t validate)</p>
                <p>Deno 2.0 is game changer</p>
                <p>Testcontainers are awesome</p>
                <p>NextJs could be the final one of them all, but it is still running your backend code in the browser</p>
                <p>Union types are must have (☕😔)</p>
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
