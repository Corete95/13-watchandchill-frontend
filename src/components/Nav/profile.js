import React, { Component } from "react";
import "./profile.scss";

class profile extends Component {
  render() {
    return (
      <>
        <div className="profile">
          <div className="profile_top">
            <div className="profile_margin">
              <div className="profie_box">
                <div className="box_first">
                  <buton className="box_top_gear"></buton>
                </div>
                <div className="box_second">
                  <div className="box_center">
                    <div className="box_center_profile">
                      <div className="profile_circle">
                        <div className="circle"></div>
                      </div>
                      <h1>김정현</h1>
                      <div className="text">프로필이 없습니다.</div>
                    </div>
                    <div className="taste_analysis">
                      <a title="taste_analysis">
                        <span className="icon"></span>
                        <sapn className="text">취향분석</sapn>
                      </a>
                    </div>
                  </div>
                  <div className="box_bottom">
                    <a>
                      <ul>
                        <li>영화</li>
                        <li>★5</li>
                        <li className="imissyou">
                          보고싶어요
                          <strong>2</strong>
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
