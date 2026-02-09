import React from "react";
import noDataImage from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const Nodata = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img src={noDataImage} alt="No Data" />
      <h3 className="text-2xl font-semibold text-gray-700 mt-4">
        OPPS!! APP NOT FOUND
      </h3>
      <p className="mt-2 text-gray-500">
        The App you are requesting is not found on our system. please try
        another apps
      </p>

      <button
        onClick={() => navigate(-1)}
        className="btn btn-sm bg-gradient-to-r mt-3 from-[#632EE3] to-[#9F62F2] text-white py-5 px-6 rounded-lg"
      >
        <p className="font-semibold text-md font-inter">Go Back</p>
      </button>
    </div>
  );
};

export default Nodata;
