import Link from "next/link";
import "@/app/globals.css";

const Menu = () => {
    return (
        <header className="shadow bg-stone-200 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold">My Portfolio</h1>
                </div>
                <ul className="flex space-x-5">
                    <li>
                        <Link href="/" className="text-gray-700 hover:text-blue-500">Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/about"  className="text-gray-700 hover:text-blue-500">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-500">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Menu;