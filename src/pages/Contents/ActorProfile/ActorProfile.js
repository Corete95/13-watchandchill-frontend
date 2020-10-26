import React, { Component } from "react";
import "./ActorProfile.scss";

class ActorProfile extends Component {
  render() {
    const { actorInfo } = this.props;
    return (
      <div className="ActorProfile">
        <div className="descActor">
          <div className="profile">
            <img className="photo" src={actorInfo.photo} />
            <div className="desc">
              <div className="name">{actorInfo.name}</div>
              <div className="role">{actorInfo.role}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActorProfile;
