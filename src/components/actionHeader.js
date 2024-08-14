import React from "react";
import { Button, Select } from "antd";
import { IoAdd } from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";

const Header = ({ showDrawer }) => {
  return (
    <div className="flex justify-between items-center h-[60px] ">
      <div>
        <h2 className="text-2xl font-bold ">CNAPP Dashboard</h2>
      </div>
      <div className="flex items-center gap-2 ">
        <Button
          onClick={showDrawer}
          icon={<IoAdd size={18} />}
          iconPosition="end"
        >
          Add widget
        </Button>
        <Button>
          <BiRefresh size={24} />
        </Button>
        <Button>
          <CiMenuKebab size={20} />
        </Button>
        <Select
          style={{
            width: 120,
            border: "1px solid #14147d",
            borderRadius: "5px",
          }}
          suffixIcon={
            <div className="w-full flex items-center gap-2 ">
              <FaClock color="#14147d" size={17} />
              <p className="text-[#14147d] text-[14px] ">| Last 2 days</p>
            </div>
          }
        >
          <Select.Option value="option1">Last 2 days | </Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
        </Select>
      </div>
    </div>
  );
};

export default Header;
