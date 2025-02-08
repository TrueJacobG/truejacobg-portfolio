import Menu from "@/components/menu";
import "@/app/globals.css";
import SquareBox from "@/components/squareBox";
import Metadata from "@/components/metadata";

const Home = () => {
    return (
        <>
            <Metadata/>
            <main>
                <div className="min-h-screen bg-stone-300">
                    <Menu/>
                    <main className="max-w-4xl mx-auto py-15 px-4 sm:px-6 lg:px-8">
                        <div className="space-y-10">
                            <SquareBox title={"Project one"}
                                       description={"A brief description of Project One. This project involved building something amazing."}
                                       link={"https://github.com/TrueJacobG"}
                                       linkText={"Link text"}
                            />
                        </div>
                    </main>
                </div>
            </main>
        </>
    );
}

export default Home;