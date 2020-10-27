import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="Nav">
          <div className="navbarBox">
            <div className="navbarLeft">
              <Link to="/main">
                <img
                  className="navbarLogo"
                  src="/watcha.png"
                  alt="whatcha_log"
                />
              </Link>
              <Link to="/contents" className="navbarMovie">
                영화
              </Link>
            </div>
            <div className="navbarRight">
              <SearchOutlined className="searchIcon" alt="search_icon" />
              <input
                className="search"
                type="search"
                placeholder="작품 제목,배우,감독을 검색해보세요."
              />

              <Link to="/rating" className="navbarRating">
                평가하기
              </Link>
              <Link to="">
                <UserOutlined className="userProfile" alt="profile_icon" />
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
