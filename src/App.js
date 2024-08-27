import React, { useState } from "react";
import "./App.css";
import Header from "./components/actionHeader";
import Card from "./components/card";
import { DrawerComp } from "./components/drawer";
import { AddWidgetModal } from "./components/addWidgetModal";
import { Alert } from "antd";
import { useContextApi } from "./features/contextProvider";

function App() {
  const [categoryType, setCategoryType] = useState("");
  const [open, setOpen] = useState(false);
  const [openAddWidgetModal, setOpenAddWidgetModal] = useState(false);
  const [widgetName, setWidgetName] = useState("");

  const {
    cwppCard,
    registryCard,
    cspmCard,
    setCspmCard,
    setCwppCard,
    setRegistryCard,
  } = useContextApi();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const openAddWidgetModalHandler = (name) => {
    setOpenAddWidgetModal(true);
    setCategoryType(name ?? "");
  };

  // create a new widget
  const addWidgetHandler = () => {
    if (categoryType) {
      if (categoryType === "cspm") {
        setCspmCard([
          ...cspmCard,
          { type: "", name: widgetName, isChecked: true },
        ]);
      } else if (categoryType === "cwpp") {
        setCwppCard([
          ...cwppCard,
          { type: "", name: widgetName, isChecked: true },
        ]);
      } else if (categoryType === "registry") {
        setRegistryCard([
          ...registryCard,
          { type: "", name: widgetName, isChecked: true },
        ]);
      } else {
        return <Alert message="No widget define" type="warning" />;
      }
    }
    setWidgetName("");
    setCategoryType("");
    setOpenAddWidgetModal(false);
  };

  // delete widget
  const deleteWidgetHandler = (name, item) => {
    console.log(name, item);
    if (name === "cspm") {
      setCspmCard(cspmCard.filter((i) => i.name !== item.name));
    } else if (name === "cwpp") {
      setCwppCard(cwppCard.filter((i) => i.name !== item.name));
    } else if (name === "registry") {
      setRegistryCard(registryCard.filter((i) => i.name !== item.name));
    }
  };

  return (
    <div className="w-full p-4 bg-[#f0f5fa]  ">
      <Header showDrawer={showDrawer} />

      <Widgets
        data={cspmCard}
        openAddWidgetModalHandler={openAddWidgetModalHandler}
        deleteWidgetHandler={deleteWidgetHandler}
        title="CSPM Executive Dashboard"
        name="cspm"
      />

      <Widgets
        data={cwppCard}
        openAddWidgetModalHandler={openAddWidgetModalHandler}
        deleteWidgetHandler={deleteWidgetHandler}
        title="CWPP Dashboard"
        name="cwpp"
      />

      <Widgets
        data={registryCard}
        openAddWidgetModalHandler={openAddWidgetModalHandler}
        deleteWidgetHandler={deleteWidgetHandler}
        title="Registry Scan"
        name="registry"
      />

      {Boolean(open) && <DrawerComp open={open} onClose={onClose} />}
      {Boolean(openAddWidgetModal) && (
        <AddWidgetModal
          open={openAddWidgetModal}
          onClose={() => setOpenAddWidgetModal(false)}
          addWidgetHandler={addWidgetHandler}
          setWidgetName={setWidgetName}
          widgetName={widgetName}
        />
      )}
    </div>
  );
}

export default App;

const Widgets = ({
  data,
  openAddWidgetModalHandler,
  title,
  name,
  deleteWidgetHandler,
}) => {
  return (
    <div className="bg-[#f0f0f5] mb-2 px-4 py-4 rounded-md">
      <p className="text-[15px] font-semibold text-[#14147d] pb-2">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data &&
          data.map((item, index) => (
            <Card
              item={item}
              key={index}
              deleteWidgetHandler={deleteWidgetHandler}
              name={name}
            />
          ))}
        <Card
          type="add_widget"
          name={name}
          openAddWidgetModalHandler={openAddWidgetModalHandler}
        />
      </div>
    </div>
  );
};
