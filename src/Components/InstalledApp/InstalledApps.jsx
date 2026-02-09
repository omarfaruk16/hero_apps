import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp, removeFromDB } from "../../utility/addToDB";

const parseSizeToMB = (size) => {
  if (size == null) return 0;
  const s = String(size).trim().toUpperCase();
  const num = parseFloat(s.replace(/[^\d.]/g, "")) || 0;
  if (s.includes("GB")) return num * 1024;
  return num; 
};

const InstalledApps = () => {
  const allApps = useLoaderData(); 
  const [refresh, setRefresh] = useState(0);
  const [sortBySize, setSortBySize] = useState(false);

  const storedIds = useMemo(() => getStoreApp(), [refresh]);

  const installedApps = useMemo(() => {
    if (!Array.isArray(allApps)) return [];

    const idSet = new Set(storedIds.map((id) => Number(id)));

    let list = allApps.filter((app) => idSet.has(Number(app.id)));

    if (sortBySize) {
      list = [...list].sort(
        (a, b) => parseSizeToMB(b.size) - parseSizeToMB(a.size)
      );
    }

    return list;
  }, [allApps, storedIds, sortBySize]);

  const handleUninstall = (id) => {
    removeFromDB(id);
    setRefresh((n) => n + 1);
  };

  return (
    <div className="p-2 md:p-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-lg">{installedApps.length} Apps Found</h2>

        <button
          onClick={() => setSortBySize((v) => !v)}
          className="btn btn-sm bg-base-200 border border-base-300"
        >
          Sort by Size {sortBySize ? "↓" : ""}
        </button>
      </div>

      <div className="space-y-3">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="bg-base-100 rounded-xl p-3 md:p-4 flex items-center justify-between shadow-sm border border-base-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-base-200 overflow-hidden flex items-center justify-center">
                {app.image ? (
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-gray-500">No Image</span>
                )}
              </div>

              <div>
                <h3 className="font-semibold text-base md:text-lg leading-tight">
                  {app.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                  <span className="text-green-600 font-medium">↓ {app.downloads || "—"}</span>
                  <span className="text-orange-500 font-medium">★ {app.ratingAvg ?? app.ratings ?? "—"}</span>
                  <span>{app.size ?? "—"} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="btn btn-sm bg-[#00D390] text-white hover:bg-[#00bd80] border-none"
            >
              Uninstall
            </button>
          </div>
        ))}

        {installedApps.length === 0 && (
          <div className="bg-base-100 rounded-xl p-6 border border-base-200 text-gray-500">
            No apps installed yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default InstalledApps;
