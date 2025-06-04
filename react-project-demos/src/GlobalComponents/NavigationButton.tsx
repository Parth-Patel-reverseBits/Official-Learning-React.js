import { Link } from "react-router-dom";

interface PathProps {
  path: string;
  left?: string;
  children: string;
  position?: string;
}

const NavigationButton = ({ position, left, path, children }: PathProps) => {
  console.log(position);
  return (
    <div>
      <Link
        to={path}
        className={`${position ? position : "fixed"} bottom-6 ${
          left === "left" ? "left-6" : "right-6"
        } px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center gap-2 group`}
      >
        {left === "left" ? (
          <>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={`${left === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}`}
              ></path>
            </svg>
            <span>{children}</span>
          </>
        ) : (
          <>
            <span>{children}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={`${left === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}`}
              ></path>
            </svg>
          </>
        )}
      </Link>
    </div>
  );
};

export default NavigationButton;
