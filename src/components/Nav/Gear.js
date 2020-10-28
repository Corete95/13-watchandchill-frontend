import React, { Component } from "react";
import "./Gear.scss";

class Gear extends Component {
  gearClose = e => {
    console.log(e.target.className);
    if (e.target.className === "gearOutLine") {
      this.props.close();
    }
  };
  render() {
    return (
      <>
        {this.props.open ? (
          <div className="gearModal">
            <div className="gearOutLine" onClick={this.gearClose}>
              <div className="gearBox">
                <div className="boxHeader">
                  <div className="headerIcon">
                    <button onClick={this.props.close} />
                  </div>
                  <div className="headerText">
                    <span>설정</span>
                  </div>
                </div>
                <div className="boxCenter">
                  <ul className="centerTop">
                    <li>마케팅 정보</li>
                    <li>공개 설정</li>
                  </ul>

                  <section>
                    <div>SNS 연동 설정</div>
                    <ul>
                      <li>페이스북</li>
                      <li>트위터</li>
                    </ul>
                  </section>

                  <section>
                    <div>친구 설정</div>
                    <ul>
                      <li>페이스북 친구 추가</li>
                    </ul>
                  </section>

                  <section>
                    <div>서비스 설정</div>
                    <ul>
                      <li>언어</li>
                      <li>국가 및 지역</li>
                    </ul>
                  </section>

                  <section>
                    <div>고객센터</div>
                    <ul>
                      <li>FAQ</li>
                      <li>문의,피드백 메일보내기</li>
                      <li>DB 수정/추가 요청하기</li>
                    </ul>
                  </section>
                  <div className="boxBottom">
                    <li>공지사항</li>
                    <li>로그아웃</li>
                    <li>탈퇴하기</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Gear;
