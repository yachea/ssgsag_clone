window.addEventListener("load", function () {
  //데이터
  const kokApiData = [
    {
      link: "images/box1.png",
      alt: "환경닷컴",
      cgct: "교육/강연",
      cgad: "AD",
      title:
        "[한경닷컴] 실시간 데이터 처리 자바 웹 서비스 개발 과정 (채용지원)",
      day: "오늘마감",
    },
    {
      link: "images/box2.png",
      alt: "스포츠윤리센터",
      cgct: "공모전",
      cgad: "AD",
      title: "[스포츠윤리센터] 스포츠윤리센터 성희롱성폭력 숏폼 영상 공모전",
      day: "D-30",
    },
    {
      link: "images/box3.png",
      alt: "롯데홈쇼핑",
      cgct: "인턴십",
      cgad: "AD",
      title: "[롯데홈쇼핑] 2025년 6월 롯데홈쇼핑 신입사원 채용(인턴전형)",
      day: "D-9",
    },
    {
      link: "images/box4.png",
      alt: "천재교육",
      cgct: "교육/강연",
      cgad: "AD",
      title: "[천재교육] 중견기업 AI 기반 실무 FIT 풀스택 개발자 취업과정 13기",
      day: "D-37",
    },
  ];

  // html 태그 만들기
  const kokPose = this.document.querySelector(".kok_detail");
  html = "";
  for (let i = 0; i < kokApiData.length; i++) {
    let tag = `
    <div class="kok_detail_box">
                <div class="detail_img">
                  <img src="${kokApiData[i].link}" alt="${kokApiData[i].alt}" />
                </div>
                <div class="detail_cg">
                  <div class="detail_cg_ct">${kokApiData[i].cgct}</div>
                  <div class="detail_cg_ad">${kokApiData[i].cgad}</div>
                </div>
                <div class="detail_title">
                  <p>
                    ${kokApiData[i].title}
                  </p>
                </div>
                <div class="detail_day">${kokApiData[i].day}</div>
              </div>
    `;
    html = html + tag;
  }
  kokPose.innerHTML = html;
});
