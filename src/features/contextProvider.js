import { createContext, useContext, useState } from "react";

const contextApi = createContext();

const ContextProvider = ({ children }) => {
  const [cspmCard, setCspmCard] = useState([
    {
      type: "",
      name: "Cloud Account",
      isChecked: true,
      children: <div>card body</div>,
    },
    {
      type: "",
      name: "Cloud Account Risk Assessment ",
      isChecked: true,
      children: <div>card body</div>,
    },
  ]);

  const [cwppCard, setCwppCard] = useState([
    {
      type: "",
      name: "Top 5 Namespaces Speccific Alerts ",
      isChecked: true,
      children: <div>card body</div>,
    },
    {
      type: "",
      name: "Workload Alerts",
      isChecked: true,
      children: <div>card body</div>,
    },
  ]);

  const [registryCard, setRegistryCard] = useState([
    {
      type: "",
      name: "Image Risk Assessment",
      isChecked: true,
      children: <div>card body</div>,
    },
    {
      type: "",
      name: "Image Security Issues",
      isChecked: true,
      children: "",
    },
  ]);

  return (
    <contextApi.Provider
      value={{
        cspmCard,
        setCspmCard,
        cwppCard,
        setCwppCard,
        registryCard,
        setRegistryCard,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};

const useContextApi = () => {
  return useContext(contextApi);
};

export { ContextProvider, useContextApi };
