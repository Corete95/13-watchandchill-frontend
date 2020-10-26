import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import Login from "../../components/Nav/Login";
import Signup from "../../components/Nav/Signup";
import "./Nav.scss";

class Nav extends Component {
  state = {
    isLogin: false,
    loginModalOpen: false,
    signupModalOpen: false
  };

  isLoginTure = () => {
    this.setState({ isLogin: true });
  };
  loginOpen = () => {
    this.setState({ loginModalOpen: true });
  };

  loginClose = () => {
    this.setState({ loginModalOpen: false });
  };

  signupOpen = () => {
    this.setState({ signupModalOpen: true });
  };

  signupClose = () => {
    this.setState({ signupModalOpen: false });
  };

  render() {
    const { loginModalOpen, signupModalOpen } = this.state;
    const {
      loginOpen,
      loginClose,
      signupOpen,
      signupClose,
      isLoginTure
    } = this;
    return (
      <>
        <nav>
          <div className="navbar_box">
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
              {this.state.isLogin ? (
                <>
                  <Link to="/rating" className="navbar_rating">
                    평가하기
                  </Link>
                  <Link to="">
                    <UserOutlined className="user_profile" alt="profile_icon" />
                  </Link>
                </>
              ) : (
                <>
                  <div className="loginFrame">
                    <button onClick={loginOpen}>로그인</button>
                  </div>
                  <div className="singUpFrame">
                    <button onClick={signupOpen}>회원가입</button>
                  </div>
                  <Login
                    isLogin={isLoginTure}
                    open={loginModalOpen}
                    close={loginClose}
                  />
                  <Signup open={signupModalOpen} close={signupClose} />
                </>
              )}
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
