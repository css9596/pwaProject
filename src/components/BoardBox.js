import React from 'react';

function BoardBox() {
  return (
    <div className="box_board">
      <div className="tab_top">
        <span className="btn_left boardBtn swiper-button-disabled"></span>
        <span className="btn_right boardBtn swiper-button-disabled"></span>
        <span className="btn_more"></span>
        <div className="swiper-container swiper-container-horizontal" id="board_swiper">
          <div id="BOARD_PORTLET" className="swiper-wrapper">
            <div className="swiper-slide swiper-slide-active" style={{width: '80.1667px'}}>
              <span id="tab0" className="on">통합</span>
            </div>
            <div className="swiper-slide swiper-slide-next" style={{width: '80.1667px'}}>
              <span id="tab1">전사공지</span>
            </div>
            <div className="swiper-slide" style={{width: '80.1667px'}}>
              <span id="tab2">IT</span>
            </div>
            <div className="swiper-slide" style={{width: '80.1667px'}}>
              <span id="tab3">DX라운지</span>
            </div>
            <div className="swiper-slide" style={{width: '80.1667px'}}>
              <span id="tab4">성장</span>
            </div>
            <div className="swiper-slide" style={{width: '80.1667px'}}>
              <span id="tab5">사우동정</span>
            </div>
          </div>
        </div>
      </div>
      <div className="board_list">
        <ul id="boardPostList">
          <li><a href="#"><span className="txt_alim ">전사공지</span> <span className="txt_title" style={{width:'55%'}}><span style={{maxWidth:'85%', float:'left', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>[인사] 신규 입사자를 소개합니다 (영업2팀 이혜성)</span>&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>[2]</span></span> <span className="txt_user">이유림</span> <span className="txt_date">2025-06-30</span> <span style={{width:'55px',display:'inline-block',verticalAlign:'middle',textAlign:'left',color:'#686868'}}><i className="fa fa-eye"></i> 35</span></a></li>
          <li><a href="#"><span className="txt_alim ">전사공지</span> <span className="txt_title" style={{width:'55%'}}><span style={{maxWidth:'85%', float:'left', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>[인사] 신규 입사자를 소개합니다 (영업2팀 김성관)</span>&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>[1]</span></span> <span className="txt_user">이유림</span> <span className="txt_date">2025-06-30</span> <span style={{width:'55px',display:'inline-block',verticalAlign:'middle',textAlign:'left',color:'#686868'}}><i className="fa fa-eye"></i> 31</span></a></li>
        </ul>
      </div>
      <div id="paging" className="board_paging"><span className="paging_num"><strong>1</strong>/321</span><ul className="util_btn"><li className="btn_prev" style={{opacity:0.3}}></li><li className="btn_next no_br_r" style={{opacity:1}}></li></ul></div>
    </div>
  );
}

export default BoardBox;
