import React, { useState } from "react";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`sidebar offcanvas ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-toggle" onClick={handleToggleSidebar}>
        Toggle Sidebar
      </div>
      <div className="sidebar-content">
        <ul>
          <li>
            Menu Item 1
            <button className="dropdown-toggle" onClick={handleToggleDropdown}>
              Dropdown
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
                <li>Submenu Item 3</li>
              </ul>
            )}
          </li>
          <li>Menu Item 2</li>
          <li>
            Menu Item 3
            <button className="dropdown-toggle" onClick={handleToggleDropdown}>
              Dropdown
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
                <li>Submenu Item 3</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
