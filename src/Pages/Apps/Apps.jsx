import React, { Suspense, useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import Allapps from "../../Components/Allapps/Allapps.jsx";
import Nodata from "../../Components/Allapps/Nodata.jsx";

const Apps = () => {
  const appsData = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredApps = useMemo(() => {
    return appsData.filter(
      (app) =>
        app.title.toLowerCase().includes(search.toLowerCase()) ||
        app.companyName.toLowerCase().includes(search.toLowerCase()),
    );
  }, [appsData, search]);

  return (
    <section className="p-2 md:p-20">
      <div className="mb-10">
        <h3 className="text-[48px] font-bold text-center mb-2">
          Our All Applications
        </h3>
        <p className="text-[20px] text-[#627382] text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="mt-4 sm:mt-10">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">
              Apps Found: {filteredApps.length}
            </h3>
            <input
              type="text"
              placeholder="Search your app"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {filteredApps.length > 0 ? (
          <Allapps appsData={filteredApps} />
        ) : (
          <Nodata />
        )}
      </Suspense>
    </section>
  );
};

export default Apps;
