import React from "react";
import "../header/header.css";


const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fa-sharp fa-solid fa-location-dot location-icon absolute-center"></i>
              <div>Bangalore</div>
            </div>
            <i className="fa-solid fa-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
          <i class="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
          <input placeholder="Search for resturant, cuisine or a dish" className="search-input"/>
          </div>
        </div>
        <div className="profile-wrapper">
          <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="Profile"
          className="header-profile-image"/>
          <span className="header-user-name">Ansh</span>
          <i class="fa-solid fa-angle-down absolute-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
