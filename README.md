# 퍼블리싱 작업 준비

## 1. 퍼블리싱 폴더 구조 및 프로젝트 생성

- ssg 폴더 : 소문자
- ssg 깃 및 깃허브 셋팅 : 생략
- apis/css/js/assets/bbs 폴더
- index.html

## 2. CSS 설정 시작 (SCSS제외)

- common.css 생성
- layout.css 생성

### 2.1. common.css 에 글꼴 셋팅부터 먼저 진행.

- https://www.jsdelivr.com/package/npm/pretendard
- 정성을 다해서 body 태그를 채워줍니다.

### 2.2. html 에 css 셋팅을 진행함.

- normalize.css 또는 reset.css 배치

```html
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
```

## 3. html 설정

### 3.1. IE 의 렌더링 설정

- `<meta http-equiv="X-UA_Compatible" content="IE=edge"/>` : 필수

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA_Compatible" content="IE=edge" />
    <title>슥삭 | 대학생 대외활동·공모전·인턴·교육 추천 공고</title>
  </head>
</html>
```

### 3.2. 파비콘 및 아이콘 설정

- 디자이너 : `512px * 512px` png 파일을 제공함.
- https://realfavicongenerator.net/

### 3.3. SEO 셋팅

- Meta 태그 작성
- sitemap.xml
- robots.txt

## 4. html 컨텐츠 구조(컴포넌트 고민하면서) 잡기

- 무조건 bodu 태그와 내용은 구분하고 시작한다.
