import React from 'react';
import '../components/Members.css';  // CSS 파일 import

const Members = () => {
  return (
    <div>
      <h1>Lab Members</h1>

      <section className="FullTime">
      {/* Full-Time Members */}
      <h2>Full-Time Members</h2>
      <div className="member-container full-time">
        <div className="member">
          <img src="./images/ParkDY.jpg" alt="박동영"/>
          <div className="member-info">
            <h3>석박사통합 박동영</h3>
            <p>galoistheory@catholic.ac.kr</p>
          </div>
        </div>

        <div className="member">
          <img src="./images/ParkSM.jpg" alt="박상민"/>
          <div className="member-info">
            <h3>석박사통합 박상민</h3>
            <p>smp.dg.rok@gmail.com</p>
          </div>
        </div>

        <div className="member">
          <img src="./images/OhSH.jpg" alt="오세훈"/>
          <div className="member-info">
            <h3>석사 오세훈</h3>
            <p>osh9807@gmail.com</p>
          </div>
        </div>
      </div>
      </section>

      <section className="PartTime">
      {/* Part-Time Members */}
      <h2>Part-Time Members</h2>
      <div className="member-container part-time">

        <div className="member">
          <img src="./images/default.jpg" alt="윤선희"/>
          <div className="member-info">
            <h3>박사 윤선희</h3>
            <p>example@example.com</p>
          </div>
        </div>

        <div className="member">
          <img src="./images/default.jpg" alt="이수연"/>
          <div className="member-info">
            <h3>석사 이수연</h3>
            <p>example@example.com</p>
          </div>
        </div>

        <div className="member">
          <img src="./images/default.jpg" alt="최윤희"/>
          <div className="member-info">
            <h3>석사 최윤희</h3>
            <p>example@example.com</p>
          </div>
        </div>
      </div>
      </section>

      <section className="Alumni">
      {/* Alumni */}
      <h2>Alumni</h2>
      <div className="member-container alumni">
        <div className="member">
          <img src="./images/ChaSH.jpg" alt="차승현"/>
          <div className="member-info">
            <h3>차승현</h3>
            <p>Current : 유나이티드 제약</p>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Members;
