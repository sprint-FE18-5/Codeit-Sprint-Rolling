# 롤링페이퍼 문화를 웹으로 구현한 커뮤니티형 플랫폼 Rolling
<img width="100%" alt="롤링 커버" src="https://github.com/user-attachments/assets/d99d9c8c-f227-495d-bcf5-65202d5871f8" />
<br><br>

* **배포 URL**: [Rolling](https://roliing-sprint-18-5.netlify.app/)
* **팀 노션**: [Notion | 파트 2 5팀](https://www.notion.so/iamsuuya/24723e7613b58040ad0bd87be25a287b?v=24723e7613b5812188cf000c99e5da6f&pvs=13)

<br><br>


## 💬 프로젝트 소개
`Rolling`은 익숙한 '롤링페이퍼' 문화를 웹으로 구현한 커뮤니티형 플랫폼입니다. <br>
사용자들은 서로에게 따뜻한 메시지를 남기고, 감정과 기억을 공유할 수 있습니다. <br>

<br>

## 📄 개발 기간 및 작업 관리
* **`프로젝트 기간`**: 2025. 8. 9 ~ 2025. 8. 26 <br>
* **`프로젝트 주제 선정 및 논의`**: 2025. 8. 7 ~ 2025. 8. 11
* **`공통 컴포넌트 개발`**: 2025. 8. 12 ~ 2025. 8. 20
* **`개별 페이지 개발`**: 2025. 8. 20 ~ 2025. 8. 25

<br>

## 🧑🏻‍💻 팀원 소개
|<img width="204" height="204" alt="1" src="https://github.com/user-attachments/assets/aa2a80f9-881d-409d-a1da-384538df15bb" />|<img width="204" height="204" alt="2" src="https://github.com/user-attachments/assets/e7839e8a-5499-414e-8d1e-7123ce512255" />|<img width="204" height="204" alt="3" src="https://github.com/user-attachments/assets/8e18475d-92b1-4fd0-b8f1-e1a94431ce08" />|<img width="204" height="204" alt="4" src="https://github.com/user-attachments/assets/b509d4b4-570b-452f-bb15-dfba05511ba6" />|<img width="204" height="204" alt="5" src="https://github.com/user-attachments/assets/64dec40e-ed0f-4947-8bce-1e16c9cc4ed8" />|
|:---:|:---:|:---:|:---:|:---:|
|정상인|노서연|권민영|이연수|송용훈|
| 👑 팀장 `FE` | 팀원 `FE` | 팀원 `FE` | 팀원 `FE` | 팀원 `FE` |

<br>

## 📚 프로젝트 선정 배경
`롤링페이퍼`라는 친숙하고 감성적인 주제를 통해 사용자 중심의 커뮤니티 기능을 구현하고자 했습니다.
1. 다양한 실제 사용자 시나리오를 바탕으로 기능을 설계함으로써, 사용자 경험(UX)을 고려한 개발을 경험할 수 있었습니다.
2. 페이지 단위의 명확한 기능 분할이 가능하여 팀원 간 역할을 효율적으로 분담하고 협업하기에 적합하다고 판단했습니다.
3. 웹 앱 개발의 핵심 개념(CRUD, 라우팅, 상태관리 등)을 실제로 구현한 사례로, 웹 서비스의 전반적인 개발 흐름을 직접 경험하며 역량을 쌓을 수 있는 좋은 기회가 되었습니다.

> 무엇보다도, 따뜻한 메시지를 전하는 감성적인 프로젝트를 통해 팀원 간의 유대감을 형성하고 의미 있는 마무리를 하고자 본 주제를 선택하게 되었습니다.

<br>

## ⚙️ 개발 환경

### 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
<img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7">

### 사용 라이브러리
|UI|<img src=""><img src="">|
|---|---|
|메시지 작성|<img src=""><img src="">|
|기타 기능 관련|<img src=""><img src="">|

<br>

## 📂 프로젝트 구조
```
├── README.md
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── package-lock.json
├── package.json
│
├── 📂 public
│    └── 📄 index.html
└── 📂 src
     ├── 📄 App.jsx

내용 수정..
```

<br>

## 🧩 역할 분담
> UI와 기능을 분리하면 좋을 듯 합니다.(각자 작업했던 깃허브 이슈 참고하면 기재할만한게 많이 나올 것 같아요)

### 👑 정상인
* UI
  * 페이지: 롤링페이퍼 만들기 페이지
  * 공통 컴포넌트: Header, badge 컴포넌트
* 기능
  * axios 설정, Router 설정

### 🐈‍⬛ 노서연
* UI
  * 페이지: 롤링페이퍼 페이지, 롤링페이퍼 수정 페이지
  * 공통 컴포넌트: Card, CardList 컴포넌트
* 기능
  * 기능

### 🫕 권민영
* UI
  * 페이지: 메인 페이지, 롤링페이퍼 목록 페이지
  * 공통 컴포넌트: Button, Modal, Toast 컴포넌트
* 기능
  * 기능

### 🐥 이연수
* UI
  * 페이지: 롤링페이퍼에 메시지 보내기 페이지
  * 공통 컴포넌트: TextField(dropdown, input) 컴포넌트, 메타데이터 관리
* 기능
  * 텍스트 입력 기능, 포커스 이벤트 처리, 상태 변화 관리, 유효성 검사 및 에러 처리, 접근성 고려한 구조 설계, 서비스 SEO 최적화 및 메타데이터와 파비콘 적용

### 🦆 송용훈
* UI
  * 공통 컴포넌트: Color, Font 
* 기능
  * 기능



