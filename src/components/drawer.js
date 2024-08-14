import React from "react";
import { Button, Drawer, Tabs } from "antd";

import { useContextApi } from "../features/contextProvider";
import { WidgetTab } from "./widgetTabs/tabs";
import { RxCross2 } from "react-icons/rx";

export const DrawerComp = ({ open, onClose }) => {
  const {
    cwppCard,
    registryCard,
    cspmCard,
    setCspmCard,
    setCwppCard,
    setRegistryCard,
  } = useContextApi();

  const handleConfirm = () => {
    // filter the all state according the its checked or not
    if (cspmCard.length > 0 || cwppCard.length > 0 || registryCard.length > 0) {
      setCspmCard(cspmCard.filter((item) => item.isChecked));
      setCwppCard(cwppCard.filter((item) => item.isChecked));
      setRegistryCard(registryCard.filter((item) => item.isChecked));
    }
    onClose();
  };

  const items = [
    {
      key: "1",
      label: "CSPM",
      children: <WidgetTab data={cspmCard} setData={setCspmCard} />,
    },
    {
      key: "2",
      label: "CWPP",
      children: <WidgetTab data={cwppCard} setData={setCwppCard} />,
    },
    {
      key: "3",
      label: "Registry",
      children: <WidgetTab data={registryCard} setData={setRegistryCard} />,
    },
    {
      key: "4",
      label: "Ticket",
      children: "Content of Tab Pane 4",
    },
  ];

  return (
    <Drawer
      title={
        <div className="flex justify-between ">
          <p>Add Widget</p>
          <p onClick={onClose} className="cursor-pointer ">
            <RxCross2 />
          </p>
        </div>
      }
      closable={false}
      width={520}
      open={open}
      styles={{
        header: {
          backgroundColor: "#14147d",
          color: "white",
        },
        body: {
          paddingBottom: 80,
        },
      }}
      footer={
        <div className="flex justify-end gap-2">
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={handleConfirm}
            className="bg-[#14147d] text-white "
            type="primary"
          >
            Confirm
          </Button>
        </div>
      }
    >
      <p>Personalize your dashboard by adding the following widgets</p>
      <Tabs defaultActiveKey="1" items={items} />
    </Drawer>
  );
};
