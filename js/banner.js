// 4. 전체 실행
document.addEventListener("DOMContentLoaded", () => {
  // 1. API 데이터 (예시)
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

  // 2. 배너 슬라이드 DOM에 삽입
  function renderBanners(banners) {
    const wrapper = document.querySelector(".swiper-wrapper");
    if (!wrapper) return;

    wrapper.innerHTML = banners
      .map(
        (banner) => `
    <div class="swiper-slide">
    <div class="swiper-slide_item">
      <a href="${banner.link}">
        <img src="${banner.image}" alt="${banner.alt}" />
      </a>
      </div>
    </div>
  `
      )
      .join("");
  }

  // 3. Swiper 초기화
  function initSwiper() {
    return new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".banner_slide_next",
        prevEl: ".banner_slide_prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }

  renderBanners(apiData);
  initSwiper();
});
