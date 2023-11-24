import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { useState } from "react";
const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className=" h-full">
      <div>
        <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
          Collapse
        </button>
      </div>

      <Sidebar
        collapsed={collapsed}
        backgroundColor="rgb(249, 249, 249, 0)"
        rtl
      >
        <Menu>
          <Menu>
            <SubMenu icon={<FaList />} prefix="🔥" label="Charts">
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu icon={<FaList />} label="Maps">
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu icon={<FaList />} label="Theme">
              <MenuItem className="dark:text-red-700 text-teal-700">
                {" "}
                Dark
              </MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
          </Menu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;
