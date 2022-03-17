import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom"

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="YouTube Logo"
        />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallSharpIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          className="header__right__avatar"
          alt="user"
          src="https://lh3.googleusercontent.com/W7muoJYAP19hAFBSk4xGIIBRwx5k08SUsSEDsLvz1Js4GQR32cDz1XKZfSxOVysPqat2fIPXRPCmuae_YKuc3hiUkij_gLx6tJxBayv3T_kjx1D2b1ubd9cD1gW42xEBwUZEy7QA6i529YMEckmoJUyfU6nRv4P5vpg2RUwXK1GVr8znCnOTnSDmr-NvhVoKUTvNERR-pN6VzMNAQSUjDPsEMhyipEcEEzInHL4gLokQRdOVNiRRdlmRHO0VQRKQggzJ3K0pcvzFEH9oLW1iKjFALPEfJt0AsCXr_s8oMflLrH-rs6x0MxCN6FEAKHb_cQ2kgNS6Fl350H9-5Hk-7SBgdtqxOghij8FNWAuZnGYnfE5eP8p0Xgsvyk5oegNXhDdSQx1G_et5TSC8y5UjmMwiZT9QfZZeWIholOt9KE94q45LrdxNbXEyaLSKnkQtQVODL-Fwf6vEzkIMG9RHeoeMap048hiIbnSWiakv7JEXffzMThsDn21sbV5bUrDjDX-rPSPxH2OCCy2S3OaokeDA83y4xFR776aR5lJ7Fb6v4FtGamnmIHM9ubKqnYrMep46lmQrZ84rV3ZdrJOIwDxgwz-UXqlZLD6_Ksb59VodX7mpMQ4C6ypRrHqRMqPNplnEu-wpCdH8clBOoqZTvOfHxHnhDZjIZlsfDG7FC4tTNjMv3kptNs-meFImfm_xsPJ-Se-TQmEHEhrx9rQ0acarvA=w173-h230-no?authuser=0"
        />
      </div>
    </div>
  );
}

export default Header;
