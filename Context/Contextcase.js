import { createContext, useState, useContext } from "react";

const Contextcase = createContext({});

const ContextProvidercase = ({ children }) => {
  const [showModalcase, setShowModalcase] = useState(false);
  <></>;

  return (
    <Contextcase.Provider value={{ showModalcase, setShowModalcase }}>
      {children}
    </Contextcase.Provider>
  );
};
export const myContextcase = () => useContext(Contextcase);
export default ContextProvidercase;
