# 리액트 기초를 이용한 간단한 ToDoList 만들기

## 앞으로 해야할 작업

1. 컴포넌트화 - 완료
1-1. 날짜 자동으로 변경 -완료
컴포넌트화 하던중 어려웠던점
   1. map함수를 사용하여 생성하던중 TypeError: Cannot read properties of undefined (reading 'map') 에러 나오면서 동작되지않음
       state를 props로 사용해 받아오던 배열이 undefined로 변하는 현상을 발견하여 삼항 연산자를 이용하여 값이 있을경우 동작하고 
       값이 없을경우 null이 나오도록 설정하여 해결하였습니다.

2 .새로고침하면 데이터가 유지되게 하는 방법찾아보기

