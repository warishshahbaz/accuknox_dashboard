import { Button } from "antd";
import React from "react";
import { FaChartArea } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Card = ({
  item,
  openAddWidgetModalHandler,
  type,
  name,
  deleteWidgetHandler,
}) => {
  return (
    <div className="w-[400px] max-w-[380px] h-[230px] bg-white rounded-md  ">
      {type === "add_widget" ? (
        <div className="w-full h-full flex justify-center items-center ">
          <Button
            onClick={() => openAddWidgetModalHandler(name ?? "")}
            icon={<IoAdd />}
          >
            Add Widget
          </Button>
        </div>
      ) : (
        <div className="w-full max-w-full h-[230px]  p-2 ">
          <div className="flex h-[30px] justify-between items-center">
            <p className="text-[15px] font-bold ">{item?.name ?? ""}</p>
            <p className="cursor-pointer ">
              <RxCross2 onClick={() => deleteWidgetHandler(name, item)} />
            </p>
          </div>
          <div className="w-full h-[calc(100%-30px)] flex justify-center items-center ">
            {item?.children ? (
              item?.children
            ) : (
              <div className="w-full h-[calc(100%-30px)] flex justify-center flex-col items-center ">
                <FaChartArea size={30} color="gray" />
                <p className="text-[14px] font-semibold">No Graph Data Found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
