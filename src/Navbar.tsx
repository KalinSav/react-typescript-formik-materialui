import React from "react";

interface IProps {
  showAboutPage: boolean;
  setShowAboutPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<IProps> = ({ showAboutPage, setShowAboutPage }) => {
  return (
    <div className="navbar">
      <div className="logo">reacTravel</div>
      <div className="menu-items">
        <ul>
          <li onClick={() => setShowAboutPage(false)}>Home</li>
          <li onClick={() => setShowAboutPage(true)}>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
