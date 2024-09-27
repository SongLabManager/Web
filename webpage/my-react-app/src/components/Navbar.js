import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false); // 드롭다운 메뉴 상태

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="navbar-container">
      {/* 로고 (중앙에 배치) */}
      <div className="navbar-logo">
        <img src="/images/logo_0.jpg.png" alt="School Logo" className="school-logo" /> {/* 학교 로고 이미지 */}
      </div>
      <div className="navbar-logo">
        <h1>Lab for Clinical Pharmacy and Therapeutics @ CUK</h1>
      </div>

      <div className="navbar-menu">
        <ul className="menu-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/professors">Professors</Link></li>
          <li><Link to="/members">Lab Members</Link></li>

          {/* Research 메뉴에 드롭다운 추가 */}
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/research">Research</Link>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/publications">Publications</Link></li>
                <li><Link to="/conference">Conference</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/location">Our Location</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;