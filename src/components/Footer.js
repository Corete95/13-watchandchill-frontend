import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="user_data">
          <span>지금까지 ★ 123,456,789 개의 평가가 쌓였어요. </span>
        </div>
        <div className="footer">
          <footer className="footer_box">
            <div className="footer_left">
              <div className="policy_list">
                <li>서비스 이용약관 ⎮</li>
                <li> 개인정보 처리방침 ⎮</li>
                <li> 회사 안내</li>
              </div>
              <div className="cs_list">
                <li>고객센터 ⎮</li>
                <li>cs@watchapedia.co.kr,02-515-9985</li>
              </div>
              <div className="company_number">
                <li>제휴 및 대외 협력 ⎮ </li>
                <li>contact@watcha.com,070-7554-9696</li>
              </div>
              <div className="company_info">
                <li>주식회사 왓챠 ⎮ </li>
                <li>대표 조혜미 ⎮ </li>
                <li>서울특별시 서초구 강남대로 343 신덕빌딩 3층</li>
              </div>
              <div className="company_info_list">
                <span>사업자 등록 번호 211-88-66013</span>
              </div>
              <div className="company_logo">
                <span>왓챠로고이미지 </span>
                <span>2011 Watcha. Inc</span>
              </div>
            </div>
            <div className="footer_right">
              <div className="sns_box">
                <button>한국어</button>
                <div>페이스북</div>
                <div>트위터</div>
                <div>notion</div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Footer;
