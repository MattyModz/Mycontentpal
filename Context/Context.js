import { createContext, useState, useContext } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [dataValue, setDataValue] = useState(0);

  return (
    <Context.Provider value={{ dataValue, setDataValue }}>
      {children}
    </Context.Provider>
  );
};
export const myContext = () => useContext(Context);
export default ContextProvider;
