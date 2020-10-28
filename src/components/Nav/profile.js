import React, { Component } from "react";
import "./Profile.scss";
import Gear from "./Gear";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      gearModalOpen: false
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
  goToAnalysis = () => {
    const test = this.props.location.search.name;
    const token = window.localStorage.token;

    fetch(`http:// ?/?/?/${test}`, {
      headers: { AUTHORIZATION: token }
    })
    .then(response => response.json())
    .then(response=>{
      this.setState({
        
      })
    })
  };

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
                      <h1>{users.length && users[0].name}</h1>
                      <div className="text">프로필이 없습니다.</div>
                    </div>
                    <div className="taste_analysis">
                      <a title="taste_analysis" onClick={()=> this.props.history("")}>
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

        {gearModalOpen && (
          <Gear open={gearModalOpen} close={this.isGearClose} />
        )}
      </>
    );
  }
}

export default Profile;
