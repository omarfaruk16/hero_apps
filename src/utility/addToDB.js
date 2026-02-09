const getStoreApp = () => {
  const storeApp = localStorage.getItem("storeApp")
    ? JSON.parse(localStorage.getItem("storeApp"))
    : [];
  return storeApp;
};

const addToDB = (id) => {
  const storeApp = getStoreApp();
  const appId = Number(id);

  if (!storeApp.map(Number).includes(appId)) {
    storeApp.push(appId);
    localStorage.setItem("storeApp", JSON.stringify(storeApp));
    return true; // installed successfully
  }

  return false; // already installed
};

const removeFromDB = (id) => {
  const appId = Number(id);
  const updated = getStoreApp()
    .map(Number)
    .filter((storedId) => storedId !== appId);

  localStorage.setItem("storeApp", JSON.stringify(updated));
};

export { addToDB, getStoreApp, removeFromDB };
