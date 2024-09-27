import React, { useState, useEffect } from 'react';
import '../components/Publication.css';

const Publication = () => {
  const [isAdmin, setIsAdmin] = useState(false); // 관리자 여부
  const [domesticPapers, setDomesticPapers] = useState([]);
  const [internationalPapers, setInternationalPapers] = useState([]);
  const [newPaper, setNewPaper] = useState({ type: 'domestic', title: '' }); // 새 논문 추가를 위한 상태

  // 초기 데이터 (localStorage에서 불러오기 또는 초기값 설정)
  useEffect(() => {
    const storedDomesticPapers = JSON.parse(localStorage.getItem('domesticPapers')) || [
      "FDA 부작용 보고 시스템을 이용한 Cyclosporine과 Tacrolimus의 주요 약물이상사례",
      "의약품 허가 규제 국제 협력에서의 허가참조제도",
      "미네랄 골질환 합병증을 가진 투석환자에서 다학제 팀 서비스의 임상적 성과",
    ];
    const storedInternationalPapers = JSON.parse(localStorage.getItem('internationalPapers')) || [
      "Comparative analysis of regulatory system for human medicines between Swissmedic and Korean MFDS",
      "Development of Machine Learning Based Risk Prediction Algorithm for Drug-induced QT Prolongation",
      "Development of Machine Learning Model for Prediction of QT Prolongation through Drug Interactions",
    ];
    setDomesticPapers(storedDomesticPapers);
    setInternationalPapers(storedInternationalPapers);
  }, []);

  // 논문 추가 함수
  const addPaper = () => {
    if (newPaper.title.trim() === '') return;

    if (newPaper.type === 'domestic') {
      const updatedDomesticPapers = [...domesticPapers, newPaper.title];
      setDomesticPapers(updatedDomesticPapers);
      localStorage.setItem('domesticPapers', JSON.stringify(updatedDomesticPapers));
    } else {
      const updatedInternationalPapers = [...internationalPapers, newPaper.title];
      setInternationalPapers(updatedInternationalPapers);
      localStorage.setItem('internationalPapers', JSON.stringify(updatedInternationalPapers));
    }

    setNewPaper({ type: 'domestic', title: '' });
  };

  // 논문 삭제 함수
  const deletePaper = (type, index) => {
    if (type === 'domestic') {
      const updatedDomesticPapers = domesticPapers.filter((_, i) => i !== index);
      setDomesticPapers(updatedDomesticPapers);
      localStorage.setItem('domesticPapers', JSON.stringify(updatedDomesticPapers));
    } else {
      const updatedInternationalPapers = internationalPapers.filter((_, i) => i !== index);
      setInternationalPapers(updatedInternationalPapers);
      localStorage.setItem('internationalPapers', JSON.stringify(updatedInternationalPapers));
    }
  };

  return (
    <div className="publication-container">
      <h1>Publications</h1>

      {/* 관리자 전환 버튼 */}
      <button onClick={() => setIsAdmin(!isAdmin)}>
        {isAdmin ? "Switch to Viewer Mode" : "Switch to Admin Mode"}
      </button>

      {/* 해외 논문 */}
      <section className="international">
      <h2>해외 논문</h2>
      <ul>
        {internationalPapers.map((paper, index) => (
          <li key={index}>
            {paper}
            {isAdmin && (
              <button onClick={() => deletePaper('international', index)}>삭제</button>
            )}
          </li>
        ))}
      </ul>
      </section>

      {/* 국내 논문 */}
      <section className="domestic">
      <h2>국내 논문</h2>
      <ul>
        {domesticPapers.map((paper, index) => (
          <li key={index}>
            {paper}
            {isAdmin && (
              <button onClick={() => deletePaper('domestic', index)}>삭제</button>
            )}
          </li>
        ))}
      </ul>
      </section>



      {/* 관리자일 때만 논문 추가 가능 */}
      {isAdmin && (
        <div className="add-paper-form">
          <h3>새 논문 추가</h3>
          <select
            value={newPaper.type}
            onChange={(e) => setNewPaper({ ...newPaper, type: e.target.value })}
          >
            <option value="domestic">국내 논문</option>
            <option value="international">해외 논문</option>
          </select>
          <input
            type="text"
            value={newPaper.title}
            onChange={(e) => setNewPaper({ ...newPaper, title: e.target.value })}
            placeholder="논문 제목 입력"
          />
          <button onClick={addPaper}>추가</button>
        </div>
      )}
    </div>
  );
};

export default Publication;
