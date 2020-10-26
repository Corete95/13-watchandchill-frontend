import React, { Component } from "react";
import "./profile.scss";

class profile extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/dummy/users.json", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res.users
        });
      });
  }
  render() {
    const { users } = this.state;
    console.log(this.state.users);
    return (
      <>
        <div className="profile">
          <div className="profile_top">
            <div className="profile_margin">
              <div className="profie_box">
                <div className="box_first">
                  <button className="box_top_gear"></button>
                </div>
                <div className="box_second">
                  <div className="box_center">
                    <div className="box_center_profile">
                      <div className="profile_circle">
                        <div className="circle"></div>
                      </div>
                      <h1>{users.length && users[0].name}</h1>
                      <div className="text">프로필이 없습니다.</div>
                    </div>
                    <div className="taste_analysis">
                      <a title="taste_analysis">
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
                          ★<strong>{users.length && users[0].star}</strong>
                        </li>
                        <li className="imissyou">
                          보고싶어요
                          <strong>{users.length && users[0].missyou}</strong>
                        </li>
                      </ul>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default profile;
