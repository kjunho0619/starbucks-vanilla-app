# vanilla Starbucks web Homepage
- 프로젝트에서 사용한 라이브러리
  - open graph protocol
  - reset library
  - google Meterial Icon
  - google Font
  - loadsh library
  - gsap & ScrollToPlugin library
  - swiper.js library
  - scrollMagic library

# 오픈 그래프(The Open Graph protocol)
웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```
- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

# reset cdn
기본 브라우저의 스타일 초기화
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
```

# google Meterial Icon
```html
<link rel="stylesheet"
    href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
```

# google Font
## NanumGodic import
### HTML
```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
```
### CSS
```css
font-family: 'Nanum Gothic', sans-serif;
```

# loadsh
프로젝트 사용 예) 스크롤 할때 수십개의 함수가 동시에 실행 되지 않게 제어
### HTML
```html
<!-- loadsh cdn -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
### JAVASCRIPT
_.throttle(함수, 시간)
```javascript
window.addEventListener('scroll', _.throttle(function () {
  }, 300));
```

# gsap & ScrollToPlugin
## gsap : javascript 애니매이션 효과 라이브러리  
### HTML
```html
<!-- gsap cdn import -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js" integrity="sha512-VEBjfxWUOyzl0bAwh4gdLEaQyDYPvLrZql3pw1ifgb6fhEvZl9iDDehwHZ+dsMzA0Jfww8Xt7COSZuJ/slxc4Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
### JAVASCRIPT
```javascript
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(badgeEl, .6, {
    opacity: 0,
    display: 'none'
  });
```
## ScrollToPlugin : 페이지 스크롤 제어
### HTML
```html
<!-- ScrollToPlugin cdn import -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollToPlugin.min.js" integrity="sha512-lZACdYsy0W98dOcn+QRNHDxFuhm62lfs8qK5+wPp7X358CN3f+ml49HpnwzTiXFzETs4++fADePDI+L2zwlm7Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

### JAVASCRIPT
```javascript
//ScrollToPlugin 라이브러리 cdn import 필수
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})
```

# swiper.js
프로젝트 사용 예) 정보 넘김 슬라이드 생성 시 사용
### HTML
```html
<!-- swiperjs cdn import -->
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
```

### JAVASCRIPT
```javascript
// notice 수직 스와이프 로직
new Swiper('.notice-line .swiper', {
  direction: 'vertical', // swipe 옵션(수직, 수평 등)
  autoplay: true,// 자동 목록 넘김 옵션
  loop: true // 반복 여부 옵션
});
```
# ScrollMagic

프로젝트 사용 예) 정보 넘김 슬라이드 생성 시 사용
### HTML
```html
<!-- ScrollMagic cdn import -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

### JAVASCRIPT
```javascript
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
```
