import React, { Component } from "react";
import { FacebookOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { SmileOutlined } from "@ant-design/icons";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="userData">
          <div>
            지금까지
            <span className="ratingCount"> ★ 581,563,067 개의 평가가 </span>
            쌓였어요.
          </div>
        </div>
        <div className="footer">
          <div className="footerBox">
            <div className="footerLeft">
              <ul className="policyList">
                <li>서비스 이용약관 ⎮</li>
                <li> 개인정보 처리방침 ⎮</li>
                <li> 회사 안내</li>
              </ul>
              <ul className="csList">
                <li>고객센터 ⎮</li>
                <li>cs@watchapedia.co.kr,02-515-9985</li>
              </ul>
              <ul className="companyNumber">
                <li>제휴 및 대외 협력 ⎮ </li>
                <li>contact@watcha.com,070-7554-9696</li>
              </ul>
              <ul className="companyInfo">
                <li>주식회사 왓챠 ⎮ </li>
                <li>대표 조혜미 ⎮ </li>
                <li>서울특별시 서초구 강남대로 343 신덕빌딩 3층</li>
              </ul>
              <div className="RegistrationNumber">
                <span>사업자 등록 번호 211-88-66013</span>
              </div>
              <div className="companyLogo">
                <span>왓챠로고이미지 </span>
                <span>2011 Watcha. Inc</span>
              </div>
            </div>
            <div className="footerRight">
              <div className="snsBox">
                <button>
                  한국어<span className="in_button">▾</span>
                </button>

                {/* <select>
                  <option value="한국어" selected="selected">
                    한국어
                  </option>
                  <option value="English">English</option>
                  <option value="日本語">日本語</option>
                </select> */}
                <div className="icons">
                  <FacebookOutlined />
                  <TwitterOutlined />
                  <SmileOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
