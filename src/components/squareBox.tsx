import Link from "next/link";

const SquareBox = ({ title, description, link, linkText }: {title: string, description: string, link: string, linkText: string}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">w
            <p className="text-gray-700 mb-4">
                {description}
            </p>
            <Link href={link} className="text-blue-500 hover:underline">
                {linkText}
            </Link>
        </div>
    );
}

export default SquareBox;