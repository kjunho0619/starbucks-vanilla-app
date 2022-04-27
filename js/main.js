// scroll 애니메이션
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// loadsh, gsap 오픈소스 사용
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  // console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기!
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    //버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)

//버튼 클릭시 최상단으로 이동
//ScrollToPlugin 라이브러리 cdn import 필수
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

// visual 화면 이미지 순차적 나타내기
// gsap 애니매이션 delay 효과 소스
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,//0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});

// swiper.js
// notice 수직 스와이프 로직
new Swiper('.notice-line .swiper', {
  direction: 'vertical', // swipe 옵션(수직, 수평 등)
  autoplay: true,// 자동 목록 넘김 옵션
  loop: true // 반복 여부 옵션
});

// promotion 수평 스와이프 로직
new Swiper('.promotion .swiper', {
  // 기본값 direction: horizontal
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복 여부 옵션
  autoplay:{ //자동 목록 넘김 옵션
    dalay:5000 // 자동 넘김 시간 지정 옵션
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable:true// 사용자의 베이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

//업로드 토글 클릭 시 프로모션 내용 숨김/보임 로직
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 토글 상태 변수
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function (){
  isHidePromotion = !isHidePromotion;
  //토글 조건
  if (isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
  }else{
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
//floating 이미지 애니매이션 함수
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { // 옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: random(0, delay)
  });
}
//floating 이미지 애니매이션 실행
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //내가 감시하는 요소가 뷰포트에서 어느 지점에 트리거 되는지 지정
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

//AWARDS swiper 소스
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});