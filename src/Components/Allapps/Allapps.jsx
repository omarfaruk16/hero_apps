import React from "react";

import DownloadIcone from "../../assets/icon-downloads.png";
import StarIcone from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const Allapps = ({ appsData }) => {
  console.log(appsData);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {appsData.map((app) => (
        <Link to={`/apps/${app.id}`}>
          <div key={app.id} className="rounded-xl bg-white">
            <img
              src={app.image}
              alt={app.title}
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="my-4 text-lg font-semibold">{app.title}</h3>
            <div className="flex justify-between items-center">
              <div className="p-2 bg-[#F1F5E8] flex items-center gap-2 rounded-md">
                <img
                  className="w-4 h-4"
                  src={DownloadIcone}
                  alt="Download Icon"
                />
                <p className="text-[#00D390] text-md font-semibold">
                  {app.downloads}
                </p>
              </div>
              <div className="p-2 bg-[#FFF0E1] flex items-center gap-2 rounded-md ">
                <img className="w-4 h-4" src={StarIcone} alt="Star Icon" />
                <p className="text-[#FF8811] text-md font-semibold">
                  {app.ratingAvg}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Allapps;
