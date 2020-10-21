import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="navbar_left">
            <Link to="/main">
              <img
                className="navbar_logo"
                src="/watcha.png"
                alt="whatcha_log"
              />
            </Link>
            <Link to="/contents" className="navbar_movie">
              영화
            </Link>
          </div>
          <div className="navbar_right">
            <SearchOutlined className="search_icon" alt="search_icon" />
            <input
              className="search"
              type="search"
              placeholder="작품 제목,배우,감독을 검색해보세요."
            />

            <Link to="/rating" className="navbar_rating">
              평가하기
            </Link>
            <Link to="">
              <UserOutlined className="user_profile" alt="profile_icon" />
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
