window.addEventListener("load", function () {
    // 데이터 api
    const hotNewsApi = [
        {}
    ]
// html 만들기
const hotnewsPose = this.document.querySelector(".hotnews_items ul");
html = "";
for (let i = 0; i < kokApiData.length; i++) {
    let tag =`
    <li>
                  <a href="#">
                    <div class="hotnews_items_img">
                      <img src="images/hotnews1.png" alt="슬기로운인턴생활" />
                    </div>
                    <div class="hotmews_item_p">
                      <span>대외활동</span>
                      <p class="item_p_title">
                        [고용노동부] 2025 미래내일 일경험 인턴십 참여자 모집
                      </p>
                      <p class="item_p_day">D-177</p>
                    </div>
                  </a>
                </li>
    `;


});
