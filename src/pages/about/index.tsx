import Menu from "@/components/menu";
import "@/app/globals.css";
import Metadata from "@/components/metadata";

const About = () => {
    return (
        <>
            <Metadata/>
            <main>
                <div className="min-h-screen bg-stone-300">
                    <Menu/>
                    <main className="max-w-4xl mx-auto py-15 px-4 sm:px-6 lg:px-8">
                        <div className="space-y-10">
                            <h1>work in progress</h1>
                        </div>
                    </main>
                </div>
            </main>
        </>
    );
};

export default About;