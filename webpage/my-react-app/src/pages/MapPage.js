// src/pages/MapPage.js
import React, { useEffect } from 'react';

const MapPage = () => {
 useEffect(() => {
   // Kakao Maps 스크립트 로드
   const script = document.createElement('script');
   script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=fbc8e07825a0db2eca7eb57c5b8b19bf&autoload=false`;
   script.async = true;
   document.head.appendChild(script);

   script.onload = () => {
     console.log("Kakao Maps script loaded"); // 스크립트 로드 확인
     if (window.kakao && window.kakao.maps) {
       window.kakao.maps.load(() => {
         const mapContainer = document.getElementById('map'); // 지도를 표시할 div
         const mapOption = {
           center: new window.kakao.maps.LatLng(37.486817215626395, 126.7989112176815), // 연구실 위치
           level: 3, // 지도의 확대 레벨
         };

         const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성

         const markerPosition = new window.kakao.maps.LatLng(37.486817215626395, 126.7989112176815); // 마커 위치
         const marker = new window.kakao.maps.Marker({
           position: markerPosition,
         });

         marker.setMap(map); // 마커를 지도에 표시
       });
     } else {
       console.error("Kakao Maps API failed to load");
     }
   };

   script.onerror = () => {
     console.error("Failed to load Kakao Maps script");
   };
 }, []);

  return (
    <div className="map-page">
      <h1>Our Lab Location</h1>
      <p>경기도 부천시 가톨릭대학교 약학대학 임상약료학 연구실</p>
      <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>
    </div>
  );
};

export default MapPage;
