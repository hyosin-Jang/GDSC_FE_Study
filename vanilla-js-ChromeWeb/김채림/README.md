# 📖ToDoList Web(for mobile)
### VanillaJS을 이용한 toy project

[ToDoList Web(for mobile) 바로가기](https://chaaerim.github.io/)
<br>모바일 크롬앱이나 컴퓨터 웹의 모바일 사이즈에서 보는 것을 추천합니다. 

[프로젝트 정리 바로가기](https://velog.io/@chaeerim?tag=%EB%B0%94%EB%8B%90%EB%9D%BC-JS)
<br>더 자세한 내용을 보고 싶으시다면 공부한 내용을 정리한 벨로그를 방문해주세요. 

<br>

## ✔️ 구현목록
### 1. 로그인 기능
<p align="center"><img src="https://user-images.githubusercontent.com/89721027/141806132-2ea4ae1b-0bd9-4313-863a-b5c399436857.png"></p>
<p align="center"><img src="https://user-images.githubusercontent.com/89721027/141806780-441cc8d1-6aab-4217-a9ff-fec2dc6b4ded.png"></p>

- 유저 이름을 받고 엔터키를 누르면 `username+'s to do list` 문구가 나타나게 구현. 
- `localstorage`를 이용하여 새로고침을 해도 유저 정보가 날아가지 않도록 구현. 
- form을 submit하면 브라우저가 기본적으로 페이지를 새로고침하는 것을 `preventDefault()` 함수를 통해 막음. 
- 새로고침이 되지 않도록 막은 다음, css에 구현한 `hidden`을 더해줘서 로그인 form을 숨김.

<br>

---

<br>

### 2. clock 기능
<p align="center"><img src="https://user-images.githubusercontent.com/89721027/141809256-0c905b9e-ec47-408e-9226-8dd0a20c0c2b.png"></p>

- `00:00:00`의 구조로 매 초마다 시간이 업데이트 되게끔 시계를 구현
- `Date object`를 이용하여 오늘 날짜와 시간을 가져옴. Date의 함수를 이용하여 시간, 분, 초를 가져올 수 있음.
- 시계를 1:1:1이 아닌 01:01:01로 표현하기 위해 `padStrat()`를 이용하여 string이 적어도 두자리를 가지게 만듦.
<br>

---

<br>

### 3. 랜덤 노래 추출
<p align="center"><img src="https://user-images.githubusercontent.com/89721027/141810075-20fa11b8-ac0f-4cfa-86af-6f9d13a28643.png"></p>

- 새로고침을 할 때마다 랜덤으로 노래를 추출해주는 기능 구현. 
- 배열에 노래와 가수를 저장.
- Math module의 `Math.random()`함수를 이용하여 랜덤 넘버를 인덱스로 사용. 
<br>

---

<br>

### 4. to-do-list 구현
<p align="center"><img src="https://user-images.githubusercontent.com/89721027/141811568-b1ce0af0-428f-46d9-9e87-8317524b09a4.png"></p>

- ✖️를 누르면 할 일이 완전히 삭제되고, ✔️를 누르면 한 일을 토글할 수 있도록 구현. 
- 클릭된 버튼의 target을 이용하여 parentNode나 parentElement를 이용해서 무엇을 삭제해야하는 지 알 수 있는데, 여기서는 `event.target.parentElement`을 이용하여 클릭된 버튼으로 어떤 to-dos를 삭제 해야하는 지 알아냄. 
- 체크 버튼은 누른다고 해서 할 일을 localstorage에서 삭제하는 것이 아니므로 element를 따로 만들어 css로 줄을 긋는 작업을 해줌. 

<br>

---

<br>

### 5. 고민한 내용 🤔
- 컴퓨터에서 사용하는 To-do list 가 아닌 모바일에서 사용하고자 하는 To-do list를 만들고 싶어 고려해야야 할 사항들이 몇가지 있었다. 컴퓨터에서 모바일 용 디자인을 어떻게 할 것인가, 각각의 모바일 디바이스에 맞게 어떻게 크기를 맞출 것인가. 와 같은 것들이었는데 이는 크롬에서 제공하는 기능을 이용하여 해결할 수 있었다. 
<p align="center"><img src="https://user-images.githubusercontent.com/89721027/141811949-f140923c-be00-45e8-9f2a-dcae84a8521b.png"></p>

- 마우스 옆의 아이콘을 누르면 모바일 사이즈에 맞게 웹을 보여준다. 심지어 상단에서 웹을 돌아가게 할 기기의 종류를 선택할 수도 있다. (핸드폰 뿐만 아니라 아이패드도 선택 가능) 이를 잘 활용한다면 앞으로도 모바일용 웹을 구현할 때 편리할 것 같다. 
<br>

---

<br>

### 6. 보완할 점 🔎
- 실제로 github를 이용하여 배포를 하고 난 뒤 모바일에서 테스트해 본 결과 아이폰의 보안 때문인지 weather api를 사용한 것이 제대로 나타나지 않았다. (분명 노트북에서는 잘만 돌아가는데..!) 따라서 모바일용 웹으로 만든만큼 모바일에서 구현한 내용이 제대로 돌아갈 수 있도록 수정이 필요해보인다. 또한 to-do-list를 구현할 때 css에 미숙하여 list를 보기 좋게 나열하는 데 에러가 발생하여 이를 고치는데 시간이 오래 걸렸다.(css의 상속 문제 때문에) 이후에 css를 제대로 공부한 뒤에 css의 상속을 활용하여 코드를 리팩토링할 필요가 있어보인다.
  
