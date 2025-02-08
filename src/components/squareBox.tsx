import Link from "next/link";

interface Props {
    title: string,
    description: string,
    link: string,
    linkText: string
}

const SquareBox = ({title, description, link, linkText}: Props) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
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