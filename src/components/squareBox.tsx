import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

const SquareBox = ({ title, description, link, linkText = "View Project" }: Props) => {
  return (
    <div className="space-y-10 mb-5">
      <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h1 className="text-2xl font-bold mb-2 text-center text-gray-800">{title}</h1>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
        <div className="flex justify-center">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center bg-blue-500 text-white text-sm font-semibold py-1 px-3 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            {linkText}
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SquareBox;
