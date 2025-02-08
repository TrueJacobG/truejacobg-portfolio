import Menu from "@/components/menu";
import "@/app/globals.css";
import Metadata from "@/components/metadata";
import Link from "next/link";
import {FaArrowUp, FaGithub, FaLinkedin} from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <Metadata/>
            <main>
                <div className="min-h-screen bg-stone-300">
                    <Menu/>
                    <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Find me on</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            <Link href="https://github.com/TrueJacobG" target="_blank">
                                    <div className="w-48 h-48 bg-white flex flex-col justify-center items-center rounded-lg shadow-md group transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-200">
                                        <FaGithub className="text-6xl text-gray-800 mb-4" />
                                        <span className="text-xl font-semibold text-gray-700">GitHub</span>
                                        <FaArrowUp className="mt-2 text-gray-500 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ease-in-out" />
                                    </div>
                            </Link>
                            <Link href="https://www.linkedin.com/in/jakub-gradzewicz/" target="_blank">
                                    <div className="w-48 h-48 bg-white flex flex-col justify-center items-center rounded-lg shadow-md group transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-200">
                                        <FaLinkedin className="text-6xl text-blue-700 mb-4" />
                                        <span className="text-xl font-semibold text-gray-700">LinkedIn</span>
                                        <FaArrowUp className="mt-2 text-gray-500 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 ease-in-out" />
                                    </div>
                            </Link>
                        </div>
                    </main>
                </div>
            </main>
        </>
    );
};

export default Contact;