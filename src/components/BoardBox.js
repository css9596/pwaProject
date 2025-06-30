import React from 'react';

function BoardBox() {
  return (
    <div className="box_board">
      <div className="board_tabs">
        <button className="tab active">통합</button>
        <button className="tab">전사공지</button>
        <button className="tab">IT</button>
        <button className="tab">DX라운지</button>
        <button className="tab">성장</button>
        <button className="tab">사우동정</button>
      </div>
      <table className="board_table">
        <thead>
          <tr>
            <th>분류</th>
            <th>제목</th>
            <th>작성자</th>
            <th>일자</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>전사공지</td>
            <td>[인사] 신규 입사자를 소개합니다 (영업2팀 이혜성) [2]</td>
            <td>이유림</td>
            <td>2025-06-30</td>
            <td>35</td>
          </tr>
          <tr>
            <td>전사공지</td>
            <td>[인사] 신규 입사자를 소개합니다 (영업2팀 김성관) [1]</td>
            <td>이유림</td>
            <td>2025-06-30</td>
            <td>31</td>
          </tr>
        </tbody>
      </table>
      <div className="board_paging"><span className="paging_num"><strong>1</strong>/321</span></div>
    </div>
  );
}

export default BoardBox;
