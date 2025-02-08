import Link from 'next/link';
import Menu from "@/components/menu";
import "@/app/globals.css";
import SquareBox from "@/components/squareBox";

export default function Home() {
    return (
        <div className="min-h-screen bg-stone-300">
            <Menu />
            <main className="max-w-4xl mx-auto py-15 px-4 sm:px-6 lg:px-8">
                <div className="space-y-10">
                    <SquareBox title={"Project one"}
                               description={"A brief description of Project One. This project involved building something amazing."}
                               link={"https://github.com/TrueJacobG"}
                               linkText={"Link text"}
                    />

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2">Project Two</h2>
                        <p className="text-gray-700 mb-4">
                            A brief description of Project Two. This project involved building something amazing.
                        </p>
                        <Link href="/project-two" className="text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>

                    {/* Project Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2">Project Three</h2>
                        <p className="text-gray-700 mb-4">
                            A brief description of Project Three. An innovative project showcasing unique solutions.
                        </p>
                        <Link href="/project-three" className="text-blue-500 hover:underline">
                           Learn more
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}