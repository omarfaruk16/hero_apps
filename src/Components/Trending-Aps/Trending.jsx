import React, { Suspense } from "react";
import TrendingApps from "./tranding_apps.jsx";
import { NavLink } from "react-router";

const fetchAppsPromise = fetch("trending.json").then((res) => res.json());

const Trending = () => {
  return (
    <div className="md:p-20 p-2 bg-[#D9D9D9]">
      <h3 className="text-[48px] font-bold text-center mb-4">Trending Apps</h3>
      <p className="text-center text-[#627382] text-[20px]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="pt-4 sm:p-10">
        <Suspense fallback={<div>Loading...</div>}>
          <TrendingApps fetchAppsPromise={fetchAppsPromise} />
        </Suspense>
      </div>
      <div className="flex justify-center">
        <button className="btn btn-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-5 px-4 rounded-lg">
          <NavLink to="/apps" className="nav-link"><p className="font-semibold text-md font-inter text-white">Show All</p></NavLink>
        </button>
      </div>
    </div>
  );
};

export default Trending;
