window.addEventListener("load", function () {
  // 데이터 api
  const hotNewsApi = [
    {
      src: "images/hotnews1.png",
      alt: "슬기로운인턴생활",
      span: "대외활동",
      title: "[고용노동부] 2025 미래내일 일경험 인턴십 참여자 모집",
      day: "D-177",
    },
    {
      src: "images/hotnews2.png",
      alt: "미리캔버스",
      span: "공모전",
      title: "[미리캔버스] 여행 계획만 짜고 1천만원 여행 떠나기",
      day: "D-4",
    },
    {
      src: "images/hotnews3.png",
      alt: "한국언론진흥재단",
      span: "공모전",
      title: "[한국언론진흥재단] 제6회 뉴스읽기 뉴스일기 공모전",
      day: "D-177",
    },
    {
      src: "images/hotnews4.png",
      alt: "(주)패스프리",
      span: "공모전",
      title: "[(주)패스프리] 패스프리 로고 디자인 공모전",
      day: "D-177",
    },
    {
      src: "images/hotnews5.png",
      alt: "제임스 다이슨 재단",
      span: "공모전",
      title:
        "[제임스 다이슨 재단] 국제 엔지니어링 및 디자인 공모전 제임스 다이슨 어워드 2025",
      day: "D-7",
    },
    {
      src: "images/hotnews6.png",
      alt: "KUDAF",
      span: "공모전",
      title: "[KUDAF] 2025 대한민국 대학생 디지털 광고제",
      day: "D-79",
    },
    {
      src: "images/hotnews7.png",
      alt: "우정산업본부",
      span: "공모전",
      title: "[우정산업본부] 2025 대한민국 편지쓰기 공모전",
      day: "D-12",
    },
    {
      src: "images/hotnews8.png",
      alt: "야놀자리서치",
      span: "공모전",
      title: "[고용노동부] 2025 트래블 이노베이션 아이디어 공모전",
      day: "D-2",
    },
  ];
  // html 만들기
  const hotnewsPose = this.document.querySelector(".hotnews_items ul");
  html = "";
  for (let i = 0; i < hotNewsApi.length; i++) {
    let tag = `
    <li>
                  <a href="#">
                    <div class="hotnews_items_img">
                      <img src="${hotNewsApi[i].src}" alt="${hotNewsApi[i].alt}" />
                    </div>
                    <div class="hotmews_item_p">
                      <span>${hotNewsApi[i].span}</span>
                      <p class="item_p_title">
                        ${hotNewsApi[i].title}
                      </p>
                      <p class="item_p_day">${hotNewsApi[i].day}</p>
                    </div>
                  </a>
                </li>
    `;
    html = html + tag;
  }
  hotnewsPose.innerHTML = html;
});
