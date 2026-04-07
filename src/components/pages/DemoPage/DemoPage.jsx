// import { useHistory } from "react-router-dom";

import { NavLink } from "react-router";

const DemoPage = () => {
//   const history = useHistory();

//   const goBackToHome = () => {
//     history.push("/"); 
//   };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Site is working fine
        </h2>
        <p className="text-gray-600 mb-6">
          Everything is up and running smoothly. You can continue browsing our
          site.
        </p>
        <NavLink to='/'>
            <button
         
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300"
        >
          Back to Home
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DemoPage;
