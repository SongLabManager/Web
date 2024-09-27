import React, { useState } from 'react';
import '../components/Professors.css';  // 스타일 추가

const ProfessorPage = () => {
  // 경력 사항
  const experiences = [
    "2024.03.01. - 현재: 가톨릭대학교 약학대학, 조교수",
    "2018.03.01. - 2024.03.01: 대구가톨릭대학교 약학대학, 조교수",
    "2017.03.01. - 2018.02.28: 서울대학교 약학대학 BK21 플러스 사업단, 연구원",
    "2015.01.01. - 2018.02.28: 서울대학교병원 혈액종양내과 병동, 임상약사",
    <strong>" 내용 : 다학제 임상약료 서비스 실무 "</strong>,
    "\u00a0\u00a0\u00a0\u00a0 ∙ 의료진 회진참여 및 최적의 약물요법을 위한 중재",
    "\u00a0\u00a0\u00a0\u00a0 ∙ 의사, 간호사, 환자 대상 의약정보 제공",
    "\u00a0\u00a0\u00a0\u00a0 ∙ 퇴원·재원환자 및 특수약물 처방 환자 대상 복약상담",
    "\u00a0\u00a0\u00a0\u00a0 ∙ 전자의무기록(EMR) 기반 약물요법 모니터링 ",
    "\u00a0\u00a0\u00a0\u00a0 ∙ 혈액종양내과-감염내과 컨퍼런스 참여 ",
     <strong>" 내용 : 융복합 임상약료서비스 성과분석 협력 연구 "</strong>,
    "\u00a0\u00a0\u00a0\u00a0 ∙ 혈액종양내과 입원환자 대상 융복합 임상성과 분석 연구",
    "\u00a0\u00a0\u00a0\u00a0 ∙ 경구용항암제 약물상호작용 중증도 분석 임상연구",
    "\u00a0\u00a0\u00a0\u00a0 ∙ 신장내과 입원환자 대상 임상성과 분석 연구",
    "2005.06.13. - 2014.12.31: 식품의약품안전청 식품의약품안전평가원, 보건연구사",
    <strong>" 내용 : 의약품 규제과학 선진화 관련 연구과제 수행 "</strong>,
    "\u00a0\u00a0\u00a0\u00a0 ∙ 식품의약품안전청 의약품심사부 마약신경계의약품팀",
    <strong>" 내용 : 의약품 안전성·유효성 심사(360여개 의약품) 및 관련 연구과제 수행"</strong>,
    "\u00a0\u00a0\u00a0\u00a0 ∙ 대구지방식품의약품안전청 시험분석팀",
  ];

  // 상태 변수 - 더 보기 기능
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  return (
    <div className="professor-container">
      <div className="professor-photo">
        <img src="/images/professor.jpg" alt="Professor 송윤경" />
      </div>
      <div className="professor-info">
        <h1> Principal Investigator 송 윤 경 (宋 胤 京) Ph.D</h1>

        {/* 학력 사항 */}
        <section className="Education">
          <h2>학력 사항</h2>
          <ul>
            <li>2017: 서울대학교 약학과, 약학박사 (예방임상사회약학 전공)</li>
            <li>2005: 서울대학교 제약학과, 약학석사 (약제과학 전공)</li>
            <li>2003: 서울대학교 약학과, 약학사</li>
            <li>1999: 진성고등학교</li>
          </ul>
        </section>

        {/* 경력 사항 */}
        <section className="Career">
          <h2>
            경력 사항
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
            <li>이메일: yksong@catholic.ac.kr, yksong925@gmail.com</li>
            <li>전화번호: 02-2164-5515</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProfessorPage;
