import { createContext, useState, useContext } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [dataValue, setDataValue] = useState(0);
  const [isOn, setIsOn] = useState(false);

  return (
    <Context.Provider value={{ dataValue, setDataValue, isOn }}>
      {children}
    </Context.Provider>
  );
};
export const myContext = () => useContext(Context);
export default ContextProvider;
