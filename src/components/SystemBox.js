import React, { useState } from 'react';

const systems = [
  { name: '전자전표', icon: '/images/cloudporte/e-BIIS.png' },
  { name: '프로젝트손익관리', icon: '/images/cloudporte/e-PPM.png' },
  { name: '프로젝트 타임관리', icon: '/images/cloudporte/e-ProS.png' },
  { name: '전자구매', icon: '/images/cloudporte/e-구매.png' },
  { name: 'DBHELP', icon: '/images/cloudporte/DBHELP.png' },
  { name: '품질포털', icon: '/images/cloudporte/품질포털.png' },
  { name: '인사급여', icon: '/images/cloudporte/인사급여.png' },
  { name: '복리후생', icon: '/images/cloudporte/복리후생.png' },
  { name: 'DB 러닝메이트', icon: '/images/cloudporte/DB러닝메이트.png' },
  { name: '디지털도서관', icon: '/images/cloudporte/디지털도서관.png' },
  { name: '무역시스템', icon: '/images/cloudporte/무역시스템.png' },
  { name: '내부회계관리', icon: '/images/cloudporte/내부회계관리.png' }
];
const SYSTEMS_PER_PAGE = 6;

function SystemBox() {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(systems.length / SYSTEMS_PER_PAGE) - 1;
  const startIdx = page * SYSTEMS_PER_PAGE;
  const visibleSystems = systems.slice(startIdx, startIdx + SYSTEMS_PER_PAGE);

  return (
    <div className="box_system">
      <div className="title_top" style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
        <span className="title">우리 회사 시스템</span>
        <div style={{display:'flex',alignItems:'center',gap:4}}>
          <button type="button" className="btn_prev" onClick={() => setPage(page - 1)} disabled={page === 0} aria-label="이전" />
          <button type="button" className="btn_next" onClick={() => setPage(page + 1)} disabled={page === maxPage} aria-label="다음" />
          <span className="paging_num" style={{marginLeft:8}}><strong>{page + 1}</strong> / {maxPage + 1}</span>
        </div>
      </div>
      <ul className="system_list">
        {visibleSystems.map((sys, idx) => (
          <li key={idx} className="system_item">
            <span className="system_icon_area">
              <img src={sys.icon} alt={sys.name} className="system_icon" />
            </span>
            <div className="sys_title">{sys.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SystemBox;
