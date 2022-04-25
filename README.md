# 오늘의 하루를 기록하는 일기장 HARU

## 개요

- 개요 :오늘의 하루를 기록하는 나만의 일기장 (웹 어플리케이션/ 반응형 구현)
- 진행 : 개인프로젝트
- 기간 : 4.14~ 4.25

**Diary Demo**

<a href = "https://62663d252fa9644db0fd8a0e--haru-diary-js.netlify.app">다이어리 데모 (다이어리 리스트 & 다이어리 작성 & 메인 캘린더)</a>

## skills

- react.js
- Recoil
- Router
- styled-components
- postman
- Firebase
- cloudinary

## 기능

**미리보기**
<br>
<img src="https://user-images.githubusercontent.com/90666180/165034642-1c519e3c-3118-4035-b00f-d1e7d6ccbb16.gif" width='350px'/>
<br>
주요 기능
<br>
<br>
<img src="https://user-images.githubusercontent.com/90666180/165034908-28b51d60-bd02-43f8-a96a-a6c8ba9501f6.png" width='400px'>
<br>
반응형-main
<br>
<img src="https://user-images.githubusercontent.com/90666180/165034921-c81d9273-7da2-4753-a090-2b3563a811bb.png" width='400px'>
<br>
반응형-diarylist
<br>
<img src="https://user-images.githubusercontent.com/90666180/165034928-e5750c96-e141-4ac2-ae4d-3b965879c3c5.png" width='400px'>
<br>
반응형-diaryAdd
<br>

**Login UI**
<br>
-> 구글을 통한 로그인
-> 직접 원하는 이메일과 비밀번호를 등록해 가입할 수 있음
-> 맞는 형식이 아닐시 경고창 출력

**MainPage1: Calender UI / TodayPlan UI**
<br>

1. 로그인 후 메인페이지 달력 UI

- 오늘의 날짜 붉은색으로 표시 (달마다 각각 다르게 날짜 표시)
- today버튼 클릭시 오늘의 날짜로 돌아감
- 달력의 원하는 날짜 클릭시 일정 등록 가능
- 날짜 클릭시 그날에 등록한 일정 오늘의 할일 항목에 표시
- 일정이 있는 날엔 아이콘과함께 해당하는 날 표시
  <br>
  <br>

2. 로그인 후 메인페이지 오늘의 일정 UI

- today버튼 클릭시 오늘의 날짜로 돌아감
- 달력의 원하는 날짜 클릭시 일정 등록 가능
- 날짜 클릭시 그날에 등록한 일정 표시
- 완료 버튼 클릭시 완료 체크
- 삭제 클릭시 firebaseDB에서도 해당하는 데이터 삭제

**MainPage2: Diary UI**
<br>
<br>

1. 다이어리 리스트

- 다이어리 카드 리스트 나열
- 생성날짜/ 날씨 / 기분 / 사진/ 타이틀/ 내용 으로 구성
- 카드 hover시 수정 및 삭제버튼
- 카드 클릭시 text내용 자세히보기

2. 다이어리 추가

- 타이틀
- 날짜 (선택안할시 자동적으로 오늘날짜로 저장)
- 날씨 ( 선택에 따라 미리보기 제공)
- 기분 ( 선택에 따라 미리보기 제공)
- 포토 프레임 : 다이어리 카드 테마 ( 선택에 따라 미리보기 제공)
- 마스킹 테이프 : 다이어리 카드 마스킹 테이프 테마 ( 선택에 따라 미리보기 제공)
- 내용
- 키워드
- 사진등록하기 : cloudinary로 연동되어 저장
- 일기 생성하기 : firebaseDB에 유저에 맞게 저장

**MainPage3: Free Memo**
<br>
-> 준비중

## Data 구조

    User ID
    ├ diary
    ⎟   ├ id : key (uuid)
    ⎟     ├ id
    ⎟     ├ publishedDate
    ⎟     ├ title
    ⎟     ├ keyword
    ⎟     ├ tapeTheme
    ⎟     ├ photoTheme
    ⎟     ├ photoURL
    ⎟     ├ wheather
    ⎟     ├ feeling
    ⎟     ├ text
    ⎟     ├ freeMemo
    ├ todayPlan
    ⎟   ├ id
    ⎟      ├ id
    ⎟      ├ publishedDate
    ⎟      ├ text
    ├ memo
        ├ id : key (uuid)
           ├ text

## 추가하고싶은 기능

- Free Memo 기능 추가 완성
- Free Memo에 그림판 기능 추가
- 달력에 자동으로 등록된 일기의 기분에따른 아이콘 표시

## 개선해야할 점

- code refactoring
  - 기본적인 state만 Recoil로 관리하려했는데, API부분도 전역state에서 관리하게 바꾸기 (불필요한 props 전달 최소화)
  - reflow 성능 개선하기
  - code 깔끔하게 정리
- 달력 일정 등록시 무조건 등록창 뜨는것 버튼을 추가해서 옮기기ㄴ
- 키워드 및 다이어리 등록날짜를 통한 검색기능 추가
- 모바일에서 실행해봤을때 google 인증 오류 개선
- 다이어리 삭제시 cloudinary 사진도 같이 삭제시키게 로직 변경하기
- 다이어리 내용 수정기능
- 미숙한 TypeScript 코드 수정

## 어려웠던 점

- 처음부터 끝까지 혼자힘으로 구현해야했는것
- Firebase의 활용 및 다이어리 기능에 대한 CRUD의 적용이 어려웠음!
- 타입스크립트 적용
