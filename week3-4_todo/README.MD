# Github Projects 구현하기

- [프로젝트 Repo](https://github.com/woowa-techcamp-2020/todo-1) (with [@changicho](https://github.com/changicho))

## 프로젝트 소개
> 더 자세한 건, 프로젝트 README에 담겨있어요.
>
1. MouseEvent를 활용한 Drag & Drop 구현 (+ 이벤트 위임)
2. HTML5 History(State)를 활용한 Router
3. VanilaJS 컴포넌트 구조
```
├── Router  # SPA 라우터 (주소 설정, 이동)
└── Element # DOM과 관련됨 (Render 실행 시, 이벤트 리스너 설정)
    ├── ErrorPage        # 에러 페이지
    ├── LoginPage        # 로그인 페이지
    │   └── UserList     # 유저 목록
    │       └── User     # 유저 목록 아이템
    └── KanbanPage       # 칸반 페이지
    │   ├── Header       # 헤더 (로고, 메뉴)
    │   ├── Column       # 컬럼
    │   │   └── Note     # 노트
    │   ├── Hover        # 드래그&드랍 때, 포인터에 따라다니는 객체
    │   ├── ActivityLog  # 액티비티 로그
    │   └── ModalManager # 모달 매니저
    └── Modal                 # 모달 (Hide, Show 공통)
        ├── EditNoteModal     # 노트 수정 모달
        ├── DeleteNoteModal   # 노트 삭제 모달
        └── RenameColumnModal # 컬럼 이름 수정 모달
```

## 회고
- 저번에 못했던 것을 개선해서 좋았다.
  - 필요한 부분에 적절히 dotenv를 적용했다.
  - 테스트 코드를 작성! 프론트에 대한 테스트 코드는 하지 못했다..
  - PR, 커밋을 상세하게 작성했다.
- 함께 하는 사람이 잘하니, 공부에 대한 자극을 많이 받았다.
  - 나도 다른 사람에게 그런 사람이 되자.
- 다음에 한다면, 이런 부분을 더 신경쓰고 싶다.
  - API 부분에선 상태코드와 메세지는 분리했지만, 프론트에서 하지 못했다.
  - Model, View 간의 종속 관계
    - Observer Pattern을 활용했다면, 더 좋게 구현했을 것 같다.
    - 다음엔, 서로 간의 종속성을 줄여서 테스트 코드를 작성해보자.
  - 애니메이션, 스타일 작업
    - 다른 팀과 달리, 라우팅&로그인 페이지를 구현했으나, 디자인 면에선 아쉬움이 남았다.
  - 라우팅
    - 새로고침하면 저장된 데이터가 사라지니, 서버로부터 필요한 정보를 다시 받아와야 한다.
    - 그 사이 로딩창을 넣어, 사용자 경험을 좋게 만들어보자.

## 더 알아보자

- TypeScript
- CSS Animation
