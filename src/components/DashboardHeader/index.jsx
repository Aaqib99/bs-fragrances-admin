import React, { useState } from "react";
import "./dashboardheader.css";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import { useNavigate } from "react-router-dom";

function DashboardHeader({ btnText, onClick }) {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };
  const LogoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    navigate("/");
  };
  const ProfileHandler = () => {
    navigate("/admin-profile");
  };

  return (
    <div className="dashbord-header-container">
      {btnText && (
        <button className="dashbord-header-btn" onClick={onClick}>
          {btnText}
        </button>
      )}

      <div className="dashbord-header-right">
        <img
          src={NotificationIcon}
          alt="notification-icon"
          className="dashbord-header-icon"
        />
        <img
          src={SettingsIcon}
          alt="settings-icon"
          className="dashbord-header-icon"
        />
        <div className="dashbord-header-profile" onClick={handleProfileClick}>
          <div
            className="dashbord-header-avatar"
            style={{
              backgroundImage: `url('https://reqres.in/img/faces/9-image.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
          {isProfileMenuOpen && (
            <div className="profile-menu">
              <p onClick={LogoutHandler}>Logout</p>
              <div className="menu-line" />
              <p onClick={ProfileHandler}>Profile</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
