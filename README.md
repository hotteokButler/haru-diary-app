# 오늘의 하루를 기록하는 일기장 HARU

## 개요

- 개요 :오늘의 하루를 기록하는 나만의 일기장 (웹 어플리케이션/ 반응형 구현)
- 진행 : 개인프로젝트
- 기간 : 4.14~ 4.25

**Diary Demo**

<a href = "https://626631c1e9167a47820dc455--haru-diary-js.netlify.app/">다이어리 데모 (다이어리 리스트 & 다이어리 작성 & 메인 캘린더)</a>

## skills

- react.js
- Recoil
- Router
- postman
- Firebase
- cloudinary

## 기능

**Login UI**
<br>
-> 구글을 통한 로그인
-> 직접 원하는 이메일과 비밀번호를 등록해 가입할 수 있음
-> 맞는 형식이 아닐시 경고창 출력

**MainPage1: Calender UI / TodayPlan UI**
<br>

- 로그인 후 메인페이지 달력 UI
  <br> - 오늘의 날짜 붉은색으로 표시 (달마다 각각 다르게 날짜 표시) <br> - today버튼 클릭시 오늘의 날짜로 돌아감 <br> - 달력의 원하는 날짜 클릭시 일정 등록 가능 <br> - 날짜 클릭시 그날에 등록한 일정 오늘의 할일 항목에 표시<br> - 일정이 있는 날엔 아이콘과함께 해당하는 날 표시
  <br>
  <br>
- 로그인 후 메인페이지 오늘의 일정 UI
  <br> - today버튼 클릭시 오늘의 날짜로 돌아감 <br> - 달력의 원하는 날짜 클릭시 일정 등록 가능 <br> - 날짜 클릭시 그날에 등록한 일정 표시<br> - 완료 버튼 클릭시 완료 체크 <br> - 삭제 클릭시 firebaseDB에서도 해당하는 데이터 삭제

**MainPage2: Diary UI**
<br>
<br>

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
