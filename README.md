# 신현호 ICT elice-mini-project

## 시작하며

**본 과제는 `Elice`의 ICT 인턴십 과제이며, 문제에 대한 저작권은 모두 `Elice`에 있습니다.**

### 프로젝트 실행

root에 `.env` 파일을 생성하여 아래와 같이 기입해주세요

```dotenv
VITE_SERVER_URL=https://api-rest.elice.io
```

또한 참조중인 api는 프로덕션 api이기때문에 원활한 실행 환경을 위해 CORS 관련 확장 프로그램 등을 사용해주시기 바랍니다.

## 사용 기술

- React.js
- react-router-dom
- Vite
- React-Query
- TypeScript
- TailwindCSS
- @suspensive/react

## 커밋 컨벤션

- chore : 프로젝트 구조 및 파일 변경
- feat : 새로운 기능의 추가
- fix : 버그 수정 및 오류 해결
- refactor : 기존 코드 리팩토링
- docs : 문서 작업
- style : 스타일링 변경

## 아키텍쳐

![image](https://github.com/user-attachments/assets/928a0983-293a-4eff-bc91-74d87b1edaae)

- 사진은 간략하게 아키텍처를 구성한 참고 그림입니다.

[FSD 아키텍처](https://feature-sliced.design/)를 적용하여 폴더의 구조를 설계했습니다.
이를 통해 단방향적인 제어 흐름을 구성했으며 유지보수성을 높였습니다.

저는 `pages`, `widgets`, `features`, `shared` 총 네 가지로 구성했습니다.

- `pages`: 라우팅을 위한 페이지들을 관리합니다.
- `widgets`: 페이지에 사용되는 독립적인 컴포넌트들을 관리합니다.
- `features`: 비지니스 가치를 지닌 사용자 시나리오와 기능을 다룹니다. (해당 프로젝트는 규모가 작아 .gitkeep으로 디렉토리 생성만 해놓았습니다.) 
- `shared`: 특정 비즈니스 로직에 종속되지 않는 재사용 컴포넌트, 유틸함수, 상수 등을 관리합니다.

## 실행 플로우

![image](https://github.com/user-attachments/assets/48a09267-672d-42c8-8eb4-680cccbf4377)

## 주요 구현 내용

### React-Query를 통한 서버 상태 관리

`axios`를 통해 비동기 요청을 수행하고, 해당 데이터를 React-Query를 사용하여 데이터 로드, 캐싱, 동기화 및 업데이트 처리를 간편하게 수행할 수 있도록 했습니다.
또한, `쿼리키 팩토리` 패턴을 사용하여 쿼리 키를 관리하고 있습니다.

### Suspense & ErrorBoundary를 적용한 선언적인 로딩/에러 처리

@suspensive/react 라이브러리의 Suspense & ErrorBoundary 컴포넌트를 사용하여 선언적으로 로딩/에러처리를 수행합니다.

### 도메인에 종속적이지 않은 shared 컴포넌트와 유틸 함수

`shared` 디렉토리에 존재하는 공용 컴포넌트를 통해 다른 컴포넌트에서도 쉽게 해당 컴포넌트들을 재사용할 수 있습니다.
또한, `shared/Card.tsx`의 경우 컴파운트 패턴을 적용하여 설계했는데, 이를 통해 가독성을 높이고 `prop drilling`을 피할 수 있었습니다.

### 적절한 자료구조의 사용을 통한 성능 최적화

<img width="610" alt="image" src="https://github.com/user-attachments/assets/578ea44a-ffb3-4904-b6e9-0a404166169e">

단순 `Array`와 같은 요소들을 사용하기보단 해당 상황에 맞는 객체를 사용하여 데이터 양이 많아지더라도 효율적으로 데이터를 처리할 수 있도록 구현했습니다.

### debounce 적용을 통한 검색 기능 최적화

input에 입력 될 때마다 해당 내용을 반영하는 것이 아닌, `debouce`를 적용하여 마지막에 입력된 값에 대해서 쿼리 파라미터에 반영하도록 했습니다.

## 추가 구현 내용

### 쿼리 파라미터에 페이지를 추가

쿼리 파라미터에 페이지를 추가하여 새로고침시애도 현재 참조중인 페이지의 데이터를 받아올 수 있도록 구현하였습니다.


