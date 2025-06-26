window.addEventListener("DOMContentLoaded", () => {
  //   가짜 데이터(Dummy 데이터 또는 Mock 데이터)
  const apiData = [
    {
      id: 1,
      link: "#",
      image: "images/b1.png",
      alt: "따끈따끈한 대외활동 보기",
    },
    {
      id: 2,
      link: "#",
      image: "images/b2.png",
      alt: "슈퍼인턴 살펴보기",
    },
    {
      id: 3,
      link: "#",
      image: "images/b3.png",
      alt: "앱으로 확인하기",
    },
    {
      id: 4,
      link: "#",
      image: "images/b4.png",
      alt: "30초만 써주세요!",
    },
  ];

  //  슬라이드 갯수
  const total = apiData.length;
  // 슬라이드 배치 장소
  const bannerPos = document.querySelector(".mySwiper .swiper-wrapper");
  // 아래 코드는 별도로 작성을 한 것입니다. (보관 권장)
  const banner = document.querySelector(".mySwiper");

  //   html 태그 만들기
  const tag = `
<div class="swiper-slide">
    <a href="#" class="banner_slide_item">
        <img src="images/b1.png" alt="이미지" />
    </a>
    </div>
`;
  // 6개 만들기
  let htmlTag = "";

  // html 태그 만드는 기능
  function makeHtml() {
    for (let i = 0; i < total; i++) {
      htmlTag =
        htmlTag +
        `
    <div class="swiper-slide">
    <a href="${apiData[i].link}" class="banner_slide_item">
        <img src="${apiData[i].image}" alt="${apiData[i].alt}" />
    </a>
    </div>
    `;
    }
    // html 장소에 배치하기
    bannerPos.innerHTML = htmlTag;
  }

  // 슬라이드 만들기
  function makeSlide() {
    const swiper = new Swiper(".sw_banner", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".banner_slide_next",
        prevEl: ".banner_slide_prev",
      },
      pagination: {
        el: ".banner_slide_pg",
        // 동글한거 누르면 이동
        clickable: true,
      },
      breakpoints: {
        760: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });
    return swiper;
  }
  makeHtml();
  const swiper = makeSlide(); // 순서가 뒤바뀌면 안됨.

  // 배너 영역에 마우스가 걸친다면
  banner.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });
  // 배너 영역에 마우스가 빠져나간다면
  banner.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
});
