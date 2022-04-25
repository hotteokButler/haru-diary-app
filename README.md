# 오늘의 하루를 기록하는 일기장 HARU

## 개요

- 개요 :오늘의 하루를 기록하는 나만의 일기장
- 진행 : 개인프로젝트
- 기간 : 4.14~

## skills

- react.js
- typescript
- Recoil
- Router
- postman
- Firebase
- cloudinary

## 기능

Calender UI

<img src="https://user-images.githubusercontent.com/90666180/163660851-2be93bb9-cf37-403c-ac14-4820595c4eb5.gif" width='350px'/>

**지금까지 진행사항**

1. MainCalender
2. DiaryList
3. DiaryAdd(Edit)Form

<img src="https://user-images.githubusercontent.com/90666180/163992723-250c936d-1df5-4539-b88c-5b13c2709e4b.gif" width='350px'/>

**Diary Demo**

<a href = "https://6260d676634cc37a08345781--haru-diary-js.netlify.app/">다이어리 데모 (다이어리 리스트 & 다이어리 작성 & 메인 캘린더)</a>

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
