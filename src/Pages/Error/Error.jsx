import React from "react";
import errorImage from "../../assets/error-404.png";
import Navber from "../../Components/Header/Navber";
import Footer from "../../Components/Footer/Footer";

const Error = () => {


  return (
    <>
    <Navber />
    <div className="bg-[#D2D2D2] h-screen flex flex-col justify-center items-center p-2 md:p-20 ">
      <img className="py-2" src={errorImage} alt="Error" />
      <h3 className="text-2xl font-bold">Oops, page not found!</h3>
      <button
        className="btn btn-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-5 py-5 px-4 rounded-lg"
      >
        <p className="font-semibold text-md font-inter">Go Home</p>
      </button>
    </div>
    <Footer />
    </>
  );
};

export default Error;
