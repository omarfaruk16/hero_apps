import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import DownloadIcone from "../../assets/icon-downloads.png";
import StarIcone from "../../assets/icon-ratings.png";
import RatingIcone from "../../assets/icon-review.png";
import RatingsChart from "../RattingChart/RatingsChart.jsx";
import { addToDB, getStoreApp } from "../../utility/addToDB.js";
import Swal from "sweetalert2";

const AppDetails = () => {
  const app = useLoaderData();
  const {
    image,
    description,
    size,
    title,
    ratings,
    reviews,
    companyName,
    downloads,
    ratingAvg,
  } = app;

  const [installedIds, setInstalledIds] = useState(() =>
    getStoreApp().map(Number)
  );

  const isInstalled = useMemo(() => {
    return installedIds.includes(Number(app.id));
  }, [installedIds, app.id]);

  const handleInstalledApp = (id) => {
    const success = addToDB(id);

    if (!success) {
      Swal.fire({
        icon: "info",
        title: "Already Installed",
        text: "This app is already installed on your device.",
        confirmButtonColor: "#00D390",
      });
      return;
    }

    setInstalledIds((prev) => {
      const idNum = Number(id);
      return prev.includes(idNum) ? prev : [...prev, idNum];
    });

    Swal.fire({
      icon: "success",
      title: "Installed Successfully",
      text: "The app has been installed.",
      confirmButtonColor: "#00D390",
    });
  };

  return (
    <div className="p-2 md:p-20">
      <div className="flex gap-10">
        <img className="max-h-[350px] w-fit" src={image} alt={title} />

        <div className="w-full">
          <h2 className="text-2xl font-bold">{title}</h2>

          <p className="mt-1 text-[#627382]">
            Developed by{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
              {companyName}
            </span>
          </p>

          <div className="my-4 border-b-1 border-gray-200 border-dotted"></div>

          <div className="flex items-center gap-10">
            <div>
              <img src={DownloadIcone} alt="Downloads" />
              <p className="text-[#001931]">Downloads</p>
              <h4 className="font-extrabold text-4xl">{downloads}</h4>
            </div>

            <div>
              <img src={StarIcone} alt="Stars" />
              <p className="text-[#001931]">Average Ratings</p>
              <h4 className="font-extrabold text-4xl">{ratingAvg}</h4>
            </div>

            <div>
              <img src={RatingIcone} alt="Rating" />
              <p className="text-[#001931]">Total Reviews</p>
              <h4 className="font-extrabold text-4xl">{reviews}</h4>
            </div>
          </div>

          <button
            onClick={() => handleInstalledApp(app.id)}
            disabled={isInstalled}
            className={`py-[14px] px-5 rounded-md font-semibold mt-3 transition ${
              isInstalled
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#00D390] text-white hover:bg-[#00bd80]"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size}) MB`}
          </button>
        </div>
      </div>

      <div className="my-4 border-b-1 border-gray-200 border-dotted"></div>

      <div>
        <h3 className="font-semibold text-2xl">Ratings</h3>
        <RatingsChart ratings={ratings} />
      </div>

      <div className="my-4 border-b-1 border-gray-200 border-dotted"></div>

      <div>
        <h3 className="font-semibold text-2xl">Description</h3>
        <p className="text-[#627382] pt-2">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
