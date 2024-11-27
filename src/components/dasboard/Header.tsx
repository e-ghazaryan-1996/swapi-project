import React from "react";
import { FiMenu } from "react-icons/fi";

interface IHeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<IHeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md md:hidden">
      <button onClick={onToggleSidebar} className="text-gray-700">
        <FiMenu size={24} />
      </button>
    </header>
  );
};

export default Header;
