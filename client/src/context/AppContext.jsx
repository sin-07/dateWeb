import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";

export const AppContext = createContext();

export const AppContextProvider = ({ Children }) => {
  const [progress, setProgress] = useState(0);

  return (
    <AppContext.Provider value={{ progress, setProgress }}>
      <>
        <Toaster />
        <LoadingBar
          color="#f11946"
          height={3}
        />

        <div>{Children}</div>
      </>
    </AppContext.Provider>
  );
};
