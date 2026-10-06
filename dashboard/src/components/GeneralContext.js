// import React, { createContext, useMemo } from 'react';

// const GeneralContext = createContext({
//   openBuyWindow: () => {},
// });

// export const GeneralContextProvider = ({ children }) => {
//   const value = useMemo(
//     () => ({
//       openBuyWindow: (uid) => {
//         console.log('openBuyWindow:', uid);
//       },
//     }),
//     []
//   );

//   return (
//     <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
//   );
// };

// export default GeneralContext;


import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;