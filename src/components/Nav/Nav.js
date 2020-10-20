import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "antd";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <img className="navbar_log" src="/watcha.png" alt="whatcha_log" />
          <Link to="/contents" className="navbar_movie">
            영화
          </Link>
          <input
            className="search"
            type="text"
            placeholder="작품 제목,배우,감독을 검색해보세요."
          />
          <Link to="/rating" className="navbar_rating">
            평가하기
          </Link>
          <Link to="">
            <UserOutlined />
            {/* <img
              className="navbar_profile"
              src="profile.png"
              alt="profile_img"
            /> */}
          </Link>
        </nav>
      </>
    );
  }
}

export default Nav;
