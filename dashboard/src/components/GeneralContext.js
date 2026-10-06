import React, { createContext, useMemo } from 'react';

const GeneralContext = createContext({
  openBuyWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const value = useMemo(
    () => ({
      openBuyWindow: (uid) => {
        console.log('openBuyWindow:', uid);
      },
    }),
    []
  );

  return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>;
};

export default GeneralContext;
