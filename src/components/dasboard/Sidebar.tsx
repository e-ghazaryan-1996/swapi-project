import { navigationRoutes } from "@/routes/navigation-routes";
import { IoIosLogOut } from "react-icons/io";
import React from "react";
import { NavLink } from "react-router";
import UserProfile from "./UserProfile";
import useAuthStore from "@/hooks/useAuthStore";

interface ISidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ isOpen }) => {
  const { removeToken } = useAuthStore();

  return (
    <aside
      className={`fixed z-40 md:static w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300`}
    >
      <div className="p-6">
        <UserProfile />

        <nav className="flex flex-col gap-4">
          {navigationRoutes.map((route) => {
            const LinkIcon = route.icon;
            return (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium transition ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`
                }
              >
                <LinkIcon size={20} />
                {route.label}
              </NavLink>
            );
          })}
          <button
            onClick={removeToken}
            className="flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium transition bg-red-500 text-white hover:bg-red-600"
          >
            <IoIosLogOut size={20} />
            Logout
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
