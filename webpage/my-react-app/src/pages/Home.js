import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 hook
import '../components/Home.css';  // CSS 파일 import


const Home = () => {
  const navigate = useNavigate(); // 페이지 이동 hook
  const [currentSlide, setCurrentSlide] = useState(0);

  // 연구와 관련된 이미지 파일 (동그라미로 선택하거나 10초마다 자동 슬라이드)
  const researchImages = [
    "./images/lab_intro_1.jpg",
    "./images/lab_intro_2.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % researchImages.length);
    }, 10000); // 10초마다 슬라이드 변경

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval 해제
  }, [researchImages.length]);

  return (
    <div>

      {/* 연구와 관련된 이미지 슬라이드 */}
      <section className="research-slider">
        <div className="slider-container">
          <img
            src={researchImages[currentSlide]}
            alt="Research"
            className="circle-image"
            onClick={() => navigate('/research')} // 이미지 클릭 시 Research 페이지로 이동
          />
        </div>
        <div className="slider-controls">
          {researchImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)} // 동그라미 선택 시 슬라이드 이동
            ></span>
          ))}
        </div>
      </section>

      {/* 뉴스 및 공지사항 */}
      <section className="news">
        <h2>News & Announcements</h2>
        <p>Stay updated with the latest news from our lab.</p>
      </section>

      {/* 최근 Publication */}
      <section className="publications">
        <h2>Recent Publications</h2>
        <ul>
          <li>Publication 1 - Example Title</li>
          <li>Publication 2 - Example Title</li>
          <li>Publication 3 - Example Title</li>
        </ul>
        <button onClick={() => navigate('/publications')}>+</button> {/* + 버튼을 눌렀을 때 Publication 페이지로 이동 */}
      </section>
    </div>
  );
}

export default Home;
