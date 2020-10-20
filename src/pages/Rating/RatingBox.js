import React, { Component } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

class RatingBox extends Component {
  render() {
    const { handleModal } = this.props;
    return (
      <div className="RatingBox">
        <div>
          <h2 className="pick_count">0</h2>
          <p>제가 취향을 알 수 있게, 15개 이상의 작품을 평가해주세요.</p>
          <ul>
            <li className="focus_list">영화</li>
            <li className="normal_list">TV 프로그램</li>
            <li className="normal_list">책</li>
          </ul>
          <div>
            <div className="categoray_selecter" >
              <button onClick={handleModal}>
                <CaretDownOutlined className="down_bar" />
                <span>랜덤 영화</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingBox;
