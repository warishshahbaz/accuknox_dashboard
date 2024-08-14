import { Checkbox } from "antd";
import React, { useState } from "react";

export const WidgetTab = ({ data, setData }) => {
  const handleChanges = (e, index) => {
    const updatedData = data.map((item, i) =>
      i === index ? { ...item, isChecked: e.target.checked } : item
    );
    console.log(updatedData);
    setData(updatedData);
  };

  return (
    <div className="flex flex-col gap-2">
      {data &&
        data.map((item, index) => {
          return (
            <Checkbox
              onChange={(e) => handleChanges(e, index)}
              key={index}
              checked={item.isChecked}
            >
              {item.name}
            </Checkbox>
          );
        })}
    </div>
  );
};
