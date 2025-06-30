import React, { useState } from 'react';

const systems = [
  { name: '전자전표', icon: 'https://lh3.googleusercontent.com/vTJcfynkAEr1z0T_mwvUBdDdxsCwmxqi8l8OsdrBf0hAD_t1YQZrtETVH_aaC-baKMKos7oQmZgZndE9I8ufIkXIHw' },
  { name: '프로젝트손익관리', icon: 'https://lh3.googleusercontent.com/NTAmNSjyzPl0XAChVr1q4_wI9INPbbX1gI8Wf0-AsBwKWTzZTjGNLmtunJCASt9knui7xGaFzhRAxTllfOOjpqjzrhA' },
  { name: '프로젝트 타임관리', icon: 'https://lh3.googleusercontent.com/Z_W3OIiY4JOf1yOskoUyUkyDmADXtvB_4FCsDfslE-EMXySqEhdcJaVKktSbuWFI5jbCOOp4Q_zth6yqc71H2V0BNHE' },
  { name: '전자구매', icon: 'https://lh3.googleusercontent.com/NCLRnq7eucKB-HpLTaY9nCBltekRIaJpaQRzbP-6AJY7dhfzzHqecNrW5nvcMped1YmjF8NnWqmS7VfbLww_iSAkNDlP' },
  { name: 'DBHELP', icon: 'https://lh3.googleusercontent.com/u3Jh9gY3N5wfQP0sFOfI6aeJPiNv0NzfNcwapFexPDQDTZusthbA4AbOEbvbVx4nx4yP9WAOyqxEGGasC_XLiTOAw0c' },
  { name: '품질포털', icon: 'https://lh3.googleusercontent.com/zZ7Nbv1VRG1N4AKK-SgoHpSL1BQikbuY6yBGh9UqKeg2fA78rwhrtWX1P0BJE97jB0Rj9RgxrALBbabGwvZcOwwjg6MVWotvWYKnCHg' },
  { name: '인사급여', icon: 'https://lh3.googleusercontent.com/v0t6YC-kqYqp6gFABDArZsVs7TxwmjtzFNDxNS4evBKY9TJFjhOwQ7nbntRm1w22eUny_l5QkSTJv_Fv3tNWJ6EZSj0' },
  { name: '복리후생', icon: 'https://lh3.googleusercontent.com/Hywf2y3FH3aJTVui_63bPAWuLLvGktwVi5dFmI7wIz6c9DYqkSbrxX3WBugkLu4TofjwDL51C0EN7pVvowuTkn0lqw' },
  { name: 'DB 러닝메이트', icon: 'https://lh3.googleusercontent.com/no5DeBUp2uulQtDddN843A3MVaQbfKlJLVSALeYHM7znV2pX66M1wfJpi-dwLJ0WMtq7HCEfBz2MoLvOOkkp8n4r0qHWo587PFUlTCE' },
  { name: '디지털도서관', icon: 'https://lh3.googleusercontent.com/hsy-btyGhgdwK3zt5tt6tDruF4H5tpJ5tD0PW21T8l_lHDbVip3sK3nfag4UG81qg6f8l_kiqXLuHkdOu_W_97OdNbk' },
  { name: '무역시스템', icon: 'https://lh3.googleusercontent.com/Qe1rxR4l_rqlBZ7MTPj4uBMibhUiUe53r6J0Kl6OQX8jwV5hFGpX-6LBZH-nTo0fWNUveqEqVLeeQFg4Je1dEdavOU169oXjXtXKD3I1' },
  { name: '내부회계관리', icon: 'https://lh3.googleusercontent.com/tBZiMOlu2y011A0xDQZKiCKtyUGaXQUvnuvuGqPGSu7al-irbaMR8E5_m_o6_U5RdBW1u_RixCVq2p0wiZ2s-MFjat0' },
  { name: '윤리경영', icon: 'https://lh3.googleusercontent.com/J0I1kHdGZieoMpVM2YQV2GFMOnIjIaGlE9kYmbViM2lk9VRUpmkzpbEe9p-1upVi5T8-9kd52ASOyJrp8LfblCTUD5s' },
  { name: '사내규정', icon: 'https://lh3.googleusercontent.com/m9Y8NYBc8fy5m0um5qZZju0QbVWiZ41GIaqxxTX_dFbte3g51-uN3tod_1HZ_gsnyGXpBsr4iViTzCYbSR-u12bR7leu16O7hYftZfo' },
  { name: '외주인력소싱', icon: 'https://lh3.googleusercontent.com/ssqpUbq2aVVxChO1j-6jcPtI2ovVlhXWBzaQc7i3VvnZsFcUOGXZOPhRp_BW9zwMlx5Hjw1cbROeTqvhqaTSTtkMJ7c0' },
  { name: 'Cloud', icon: 'https://lh3.googleusercontent.com/-WA0QQksh_Bx3vkkjD_wbBwOgBltw8LxzFx5I0VvDkMlG-g5QYFWjXNw22z4S4xs9rkhM4AkkDke_ECFclnE4Y1Thr5ZTmGcB5oB_FOO' },
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
      <ul
        className="system_list"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '16px 0',
          padding: '0 2px',
          minHeight: 270
        }}
      >
        {visibleSystems.map((sys, idx) => (
          <li
            key={idx}
            className="system_item"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: 120,
              padding: '8px 0'
            }}
          >
            <span
              className="system_icon_area"
              style={{
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 8
              }}
            >
              <img
                src={sys.icon}
                alt={sys.name}
                className="system_icon"
                style={{ width: 48, height: 48, objectFit: 'contain' }}
              />
            </span>
            <div
              className="sys_title"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: '#222',
                textAlign: 'center',
                marginTop: 2,
                wordBreak: 'keep-all',
                lineHeight: '1.2',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: 90
              }}
              title={sys.name}
            >
              {sys.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SystemBox;