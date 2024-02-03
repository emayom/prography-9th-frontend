# 프로그라피 9기 React 사전과제
- 사전과제 기간: 2024.01.30 - 2024.02.04

#### 개발 환경
![React](https://img.shields.io/badge/react-ffffff.svg?style=for-the-badge&logo=react&logoColor=#0074a6) 
![ReactQuery](https://img.shields.io/badge/react--query-ffffff.svg?style=for-the-badge&logo=react-query&logoColor=#ef4444)
![tailwindcss](https://img.shields.io/badge/tailwindcss-ffffff.svg?style=for-the-badge&logo=tailwindcss&logoColor=#06B6D4)
![Vite](https://img.shields.io/badge/Vite-ffffff.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MTAiIGhlaWdodD0iNDA0IiB2aWV3Qm94PSIwIDAgNDEwIDQwNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0zOTkuNjQxIDU5LjUyNDZMMjE1LjY0MyAzODguNTQ1QzIxMS44NDQgMzk1LjMzOCAyMDIuMDg0IDM5NS4zNzggMTk4LjIyOCAzODguNjE4TDEwLjU4MTcgNTkuNTU2M0M2LjM4MDg3IDUyLjE4OTYgMTIuNjgwMiA0My4yNjY1IDIxLjAyODEgNDQuNzU4NkwyMDUuMjIzIDc3LjY4MjRDMjA2LjM5OCA3Ny44OTI0IDIwNy42MDEgNzcuODkwNCAyMDguNzc2IDc3LjY3NjNMMzg5LjExOSA0NC44MDU4QzM5Ny40MzkgNDMuMjg5NCA0MDMuNzY4IDUyLjE0MzQgMzk5LjY0MSA1OS41MjQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNMjkyLjk2NSAxLjU3NDRMMTU2LjgwMSAyOC4yNTUyQzE1NC41NjMgMjguNjkzNyAxNTIuOTA2IDMwLjU5MDMgMTUyLjc3MSAzMi44NjY0TDE0NC4zOTUgMTc0LjMzQzE0NC4xOTggMTc3LjY2MiAxNDcuMjU4IDE4MC4yNDggMTUwLjUxIDE3OS40OThMMTg4LjQyIDE3MC43NDlDMTkxLjk2NyAxNjkuOTMxIDE5NS4xNzIgMTczLjA1NSAxOTQuNDQzIDE3Ni42MjJMMTgzLjE4IDIzMS43NzVDMTgyLjQyMiAyMzUuNDg3IDE4NS45MDcgMjM4LjY2MSAxODkuNTMyIDIzNy41NkwyMTIuOTQ3IDIzMC40NDZDMjE2LjU3NyAyMjkuMzQ0IDIyMC4wNjUgMjMyLjUyNyAyMTkuMjk3IDIzNi4yNDJMMjAxLjM5OCAzMjIuODc1QzIwMC4yNzggMzI4LjI5NCAyMDcuNDg2IDMzMS4yNDkgMjEwLjQ5MiAzMjYuNjAzTDIxMi41IDMyMy41TDMyMy40NTQgMTAyLjA3MkMzMjUuMzEyIDk4LjM2NDUgMzIyLjEwOCA5NC4xMzcgMzE4LjAzNiA5NC45MjI4TDI3OS4wMTQgMTAyLjQ1NEMyNzUuMzQ3IDEwMy4xNjEgMjcyLjIyNyA5OS43NDYgMjczLjI2MiA5Ni4xNTgzTDI5OC43MzEgNy44NjY4OUMyOTkuNzY3IDQuMjczMTQgMjk2LjYzNiAwLjg1NTE4MSAyOTIuOTY1IDEuNTc0NFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjYuMDAwMTciIHkxPSIzMi45OTk5IiB4Mj0iMjM1IiB5Mj0iMzQ0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM0MUQxRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkQzNEZFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjE5NC42NTEiIHkxPSI4LjgxODE4IiB4Mj0iMjM2LjA3NiIgeTI9IjI5Mi45ODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRUE4MyIvPgo8c3RvcCBvZmZzZXQ9IjAuMDgzMzMzMyIgc3RvcC1jb2xvcj0iI0ZGREQzNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkE4MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=)

## 실행 방법
```shell
npm run build -- --base /  
npm run preview -- --base /
```

#### 구현 요구사항
- [X] 전체 카테고리 조회 API를 호출하여 카테고리 (`strCategory`)를 노출합니다. 
- [x] 카테고리를 클릭 시, **카테고리별 음식 조회 API**를 호출해 해당하는 카테고리의 음식 목록을 보여줍니다.
- [x] 선택한 카테고리와 선택하지 않은 카테고리의 스타일을 구분해주세요. (디자인은 자유롭게)
- [x] 카테고리는 **복수** **선택**이 가능하며, 클릭한 **모든 카테고리**에 대한 음식을 보여줍니다.   
    선택된 카테고리를 다시 클릭 시, 해당 카테고리에 대한 음식은 제외되어야 합니다.
- [x] 카드의 갯수가 **20개** 초과 시 **인피니트 스크롤**을 통해 데이터를 추가적으로 보여줍니다.  
    이때, 음식 목록에 대한 정보는 프론트 단에 저장하고 있습니다.
- [x] 각각의 썸네일 이미지는 **lazy loading**이 되어야 합니다.
- [x] 음식 목록에 대한 결과를 사용자가 지정한 레이아웃을 통해 보여줍니다.  
- [x] 음식에 대한 결과를 **필터링** 할 수 있습니다. 
- [x] 쿼리스트링
- **필터링** 시 url 쿼리스트링에 `filter=new / asc / desc`  **쿼리스트링**을 저장합니다.
- **카테고리 선택** 시 url 쿼리스트링에 `category=선택된 카테고리 값` **쿼리스트링**을 저장합니다. (복수 선택 시 쉼표(`,`)로 구분)
- 사용자가 `?category=chicken,Seafood&filter=asc` 와 같이 들어왔을 때, 페이지에 진입시, chicken과 seafood에 해당하는 음식을 볼 수 있어야 합니다. 이 때 **필터값**도 동일해야 합니다.
- [x] 이 외에 ux적으로 필요한 기능이 있으면 자유롭게 추가해주세요

#### 미리보기 
https://github.com/emayom/prography-9th-frontend/assets/85545101/d60ed7e5-0707-480f-aa33-5bd056be4b01

