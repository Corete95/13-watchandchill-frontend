import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <img className="navbar_log" src="public/watcha.png" />
          <Link className="navbar_movie">영화</Link>
          <input
            type="text"
            placeholder="작품 제목,배우,감독을 검색해보세요."
          />
          <Link className="">평가하기</Link>
          <img className="navbar_profile" src="public/profile.png" />
        </nav>
      </>
    );
  }
}

export default Nav;
