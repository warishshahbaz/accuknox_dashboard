import { Input, Modal } from "antd";
import React from "react";

export const AddWidgetModal = ({
  open,
  onClose,
  addWidgetHandler,
  setWidgetName,
  widgetName,
}) => {
  return (
    <div>
      <Modal
        title="Fill the widget category details"
        open={open}
        onOk={addWidgetHandler}
        onCancel={onClose}
      >
        <Input
          placeholder="widget name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
      </Modal>
    </div>
  );
};
