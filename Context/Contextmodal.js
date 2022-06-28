import { createContext, useState, useContext } from "react";

const Contextmodal = createContext({});

const ContextProvidermodal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  <></>;

  return (
    <Contextmodal.Provider value={{ showModal, setShowModal }}>
      {children}
    </Contextmodal.Provider>
  );
};
export const myContextmodal = () => useContext(Contextmodal);
export default ContextProvidermodal;
