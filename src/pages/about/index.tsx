import Menu from "@/components/menu";
import "@/app/globals.css";
import Metadata from "@/components/metadata"
import Image from 'next/image'

const About = () => {
    return (
        <>
            <Metadata/>
            <main>
                <div className="min-h-screen bg-stone-300">
                    <Menu/>
                    <main className="max-w-4xl mx-auto py-15 px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center mb-8">
                            <div
                                className="w-48 h-48 rounded-full overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <Image
                                    src="/static/image.png"
                                    alt="Image of me"
                                    width={200}
                                    height={200}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-10 text-center">
                            <p>Junior Fullstack Developer specializing in Java & Spring-based applications</p>
                            <p>Experienced with SQL databases (PostgreSQL, MySQL), testing frameworks (JUnit, Spock,
                                Cucumber), and DevOps practices - leveraging Jenkins to manage CI/CD pipelines. I build
                                robust backend solutions and add a touch of frontend expertise with React (especially
                                whole Next.js environment). I enjoy exploring new technologies and solving complex
                                problems with clean, efficient code.</p>
                        </div>
                    </main>
                </div>
            </main>
        </>
    );
};

export default About;