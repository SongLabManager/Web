import React, { useState, useEffect, useRef } from 'react';
import '../components/Professors.css';  // 스타일 추가

const ProfessorPage = () => {
  // 경력 사항
  const experiences = [
    "2024.03.01. - 현재: 가톨릭대학교 약학대학, 조교수",
    "2018.03.01. - 2024.03.01: 대구가톨릭대학교 약학대학, 조교수",
    "2017.03.01. - 2018.02.28: 서울대학교 약학대학 BK21 플러스 사업단, 연구원",
    "2015.01.01. - 2018.02.28: 서울대학교병원 혈액종양내과 병동, 임상약사",
    "2005.06.13. - 2014.12.31: 식품의약품안전청 식품의약품안전평가원, 보건연구사",
  ];

  // 국외 학술 논문
  const internationalPapers = [
    "Comparative analysis of regulatory system for human medicines between Swissmedic and Korean MFDS.",
    "Development of Machine Learning Based Risk Prediction Algorithm for Drug-induced QT Prolongation.",
    "Development of Machine Learning Model for Prediction of QT Prolongation through Drug Interactions.",
    "Impact of Sirolimus on Long-Term Adverse Cardiovascular Outcomes in Kidney Transplant Recipients.",
    "Adverse Events Associated with SARS-Cov-2 Neutralizing Monoclonal Antibodies.",
  ];

  // 국내 학술 논문
  const domesticPapers = [
    "FDA 부작용 보고 시스템 데이터베이스를 이용한 Cyclosporine과 Tacrolimus의 주요 약물이상사례.",
    "의약품 허가 규제 국제 협력에서의 허가참조제도.",
    "미네랄 골질환 합병증을 가진 투석환자에서 다학제 팀 서비스의 임상적 성과.",
    "소아 대상 임상시험 지원 및 의약품 안전성유효성 평가 제도에 대한 국내외 비교분석 연구.",
    "국내외 의약품 시판 후 안전관리 전담 조직의 현황 비교.",
  ];

  // 저서 리스트
  const books = [
    "책1: 책의 제목과 간단한 설명",
    "책2: 책의 제목과 간단한 설명",
    "책3: 책의 제목과 간단한 설명",
    "책4 : ㄷㅇㄹ"
  ];

  // 상태 변수 - 더 보기 기능과 스크롤 상태 관리
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [showAllInternationalPapers, setShowAllInternationalPapers] = useState(false);
  const [showAllDomesticPapers, setShowAllDomesticPapers] = useState(false);


  // 스크롤 트리거 기능
  const intlPapersRef = useRef(null);
  const domPapersRef = useRef(null);
  const booksRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // 스크롤 시 섹션이 나타나도록 visible 클래스 추가
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1, // 섹션이 10% 화면에 보일 때 트리거
    });

    // 각 섹션을 observer에 등록
    const intlPapersSection = intlPapersRef.current;
    const domPapersSection = domPapersRef.current;
    const booksSection = booksRef.current;

    if (intlPapersSection) observer.observe(intlPapersSection);
    if (domPapersSection) observer.observe(domPapersSection);
    if (booksSection) observer.observe(booksSection);

    return () => {
      // cleanup observer
      if (intlPapersSection) observer.unobserve(intlPapersSection);
      if (domPapersSection) observer.unobserve(domPapersSection);
      if (booksSection) observer.unobserve(booksSection);
    };
  }, []);

  return (
    <div className="professor-container">
      <div className="professor-photo">
        <img src="/images/professor.jpg" alt="Professor 송윤경" />
      </div>
      <div className="professor-info">
        <h1> Principal Investigator   송 윤 경   (宋 胤 京)   Ph.D</h1>

        {/* 학력 사항 */}
          <section className="Education">
            <h2>  학력 사항</h2>
                <ul>
                  <li>2017: 서울대학교 약학과, 약학박사 (예방임상사회약학 전공)</li>
                  <li>2005: 서울대학교 제약학과, 약학석사 (약제과학 전공)</li>
                  <li>2003: 서울대학교 약학과, 약학사</li>
                </ul>
          </section>

        {/* 경력 사항 */}
          <section className="Career">
            <h2>경력 사항
              <span className="toggle-btn" onClick={() => setShowAllExperiences(!showAllExperiences)}>
                {showAllExperiences ? "−" : "+"}
              </span>
            </h2>
            <ul>
              {experiences.slice(0, showAllExperiences ? experiences.length : 3).map((experience, index) => (
                <li key={index}>{experience}</li>
              ))}
            </ul>
          </section>

        {/* 연락처 */}
            <section className="Career">
                <h2>연락처</h2>
                <ul>
                  <li>이메일 : yksong@catholic.ac.kr, yksong925@gmail.com,</li>
                  <li>전화번호 : 02-2164-5515</li>
                </ul>
            </section>

        {/* 스크롤 후 보여질 내용 */}
        <div className="scroll-section" ref={intlPapersRef}>
          <h2>
            국외 학술 논문
            <span className="toggle-btn" onClick={() => setShowAllInternationalPapers(!showAllInternationalPapers)}>
              {showAllInternationalPapers ? "−" : "+"}
            </span>
          </h2>
          <ul>
            {internationalPapers.slice(0, showAllInternationalPapers ? internationalPapers.length : 3).map((paper, index) => (
              <li key={index}>{paper}</li>
            ))}
          </ul>
        </div>

        <div className="scroll-section" ref={domPapersRef}>
          <h2>
            국내 학술 논문
            <span className="toggle-btn" onClick={() => setShowAllDomesticPapers(!showAllDomesticPapers)}>
              {showAllDomesticPapers ? "−" : "+"}
            </span>
          </h2>
          <ul>
            {domesticPapers.slice(0, showAllDomesticPapers ? domesticPapers.length : 3).map((paper, index) => (
              <li key={index}>{paper}</li>
            ))}
          </ul>
        </div>

        <div className="scroll-section" ref={booksRef}>
          <h2>
            저서
            <span className="toggle-btn" onClick={() => setShowAllDomesticPapers(!showAllDomesticPapers)}>
              {showAllDomesticPapers ? "−" : "+"}
            </span>
          </h2>
          <ul>
            {books.slice(0, showAllDomesticPapers ? books.length : 3).map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessorPage;
