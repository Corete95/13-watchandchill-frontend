import React, { Component } from "react";
import "./Profile.scss";
import Gear from "./Gear";

const API = "http://10.58.5.157:8000/user/profile";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      ratingCount: 0,
      users: "",
      gearModalOpen: false
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    fetch(API, {
      headers: {
        AUTHORIZATION: token
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.NAME,
          ratingCount: res.COUNT
        });
      });
  }

  isGearOpen = () => {
    this.setState({ gearModalOpen: true });
  };
  isGearClose = () => {
    this.setState({ gearModalOpen: false });
  };
  render() {
    const { users, gearModalOpen } = this.state;
    console.log(this.state.users);
    return (
      <>
        <div className="profile">
          <div className="profile_top">
            <div className="profile_margin">
              <div className="profie_box">
                <div className="box_first">
                  <button
                    className="box_top_gear"
                    onClick={this.isGearOpen}
                  ></button>
                </div>
                <div className="box_second">
                  <div className="box_center">
                    <div className="box_center_profile">
                      <div className="profile_circle">
                        <div className="circle"></div>
                      </div>
                      <h1>{users}</h1>
                      <div className="text">프로필이 없습니다.</div>
                    </div>
                    <div className="taste_analysis">
                      <a
                        title="taste_analysis"
                        onClick={() => window.open("/users/analysis")}
                      >
                        <span className="icon"></span>
                        <span className="text">취향분석</span>
                      </a>
                    </div>
                  </div>
                  <div className="box_bottom">
                    <a>
                      <ul>
                        <li>영화</li>
                        <li>
                          ★ <strong>{this.state.ratingCount}</strong>
                        </li>
                        <li className="imissyou">
                          보고싶어요
                          <strong></strong>
                        </li>
                      </ul>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {gearModalOpen && (
          <Gear open={gearModalOpen} close={this.isGearClose} />
        )}
      </>
    );
  }
}
export default Profile;
