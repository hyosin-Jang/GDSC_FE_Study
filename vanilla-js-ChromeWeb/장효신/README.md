
# ✅ VanillaJS로 Todo-list 만들기  

[1. 체크 토글 버튼을 두어서 달성한 계획은 지우기](#1.-체크-토글-버튼으로-달성한-계획-토글하기)  
[2. 로그인 기능](#2.-로그인-기능)  
[3. 반응형 웹](#3.-반응형-웹)  
[4. 사이드 메뉴바](#4.-사이드-메뉴바)  
[5. 새로고침시, 배경과 명언 랜덤 변경](#5.-새로고침시,-배경과-명언-랜덤-변경)  
[6. 현재 시간과 현재 위치의 날씨 표시](#6.-현재-시간과-현재-위치의-날씨-표시)  
  
     
## 1. 체크 토글 버튼으로 달성한 계획 토글하기
<p align="center">
<img src="https://user-images.githubusercontent.com/71035113/141255343-36ed747d-a27e-40a5-b665-483fab711a07.png" width="300" height="500">
  </p>

 체크 버튼을 이용해서 달성한 목록에 줄을 그으려면 todolist 목록에서 클릭 이벤트가 일어난 li를 알아내야 한다. 그래서 체크 버튼에 addEventListerner를 연결해서 클릭 이벤트가 발생하면, 해당 li 태그에 줄을 긋고 달성율을 계산하는 checkTodo라는 함수를 연결해줬다. 
먼저, event.target.parseElement로 클릭 이벤트가 발생한 li 태그를 찾았다.  
  
  다음, 체크 버튼은 한 번 누르면 줄이 생기지만, 다시 누르면 줄이 없어지기 때문에 반복되는 행위에 따라 css를 변경해야 했다. 이때, li.classList.toggle 메소드를 이용했다. 
  toggle 메소드는 클래스가 존재한다면, 해당 클래스를 제거하고 클래스가 존재하지 않는다면 클래스를 추가하는 메소드이다. click 클래스의 text-decoration에 line-through 속성을 줬다. 


다음은 달성율을 표시하기 위해 사용자가 해당 토글 버튼을 on 한 건지, off 한 건지 알아내는 작업이 필요했다. 
그래서 item 오브젝트에 check라는 key를 두어서 true면 on, false면 off를 기록했다. 
toDos 목록에 있는 id 값이 li.id값과 같은지를 비교해서 방금 클릭 이벤트가 발생한 li 태그를 찾았고, 
!item.check로 해당 item의 check 속성을 바꿨다. 그리고 check가 true인 상태면 체크된 목록의 
개수를 표시하는 clickLength의 값을 하나 증가시켰고, check가 false인 상태면 clickLength의 값을 하나 감소시켰다. 
이렇게 clickLength를 변경한 다음, paintPercent() 를 호출해서 변경된 달성율을 다시 화면에 표시하도록 했다. 
마지막으로 새로고침 했을 때, 변경된 toggle 상태가 유지될 수 있도록 localStorage에 현재 상태를 저장하는 
saveToDos() 함수를 호출했다.  


## 2. 로그인 기능

<p align="center"><img src="https://user-images.githubusercontent.com/71035113/141255387-ff935479-5fce-434b-93b0-8b9748e9d451.png" width="400" height="300"></p>

사용자가 처음 이 사이트에 방문하면, 자신의 이름을 적을 수 있고, 두번째 방문부터는 처음에 기입한 이름을 기억해서 불러오도록 구현했다. index.html에 input을 만들었고 새로고침해도 로그인 상태를 유지하기 위해 입력 받은 이름을 localStorage의 username 키에 저장했다.


이때 로그인 상태가 되면 이름을 입력받은 창은 사라지고, "Hello 사용자 이름" 이 보여지도록 하기 위해 input 태그의 css에 display:none 속성을 줬다.


## 3. 반응형 웹
<p align="center"><img src="https://user-images.githubusercontent.com/71035113/141255410-e6eb4581-eaf6-4685-9eec-f0e293e5d21d.png" width="250" height="300"><img src="https://user-images.githubusercontent.com/71035113/141255420-b21650ed-a6c5-4c9a-9283-999c501a3b2c.png" width="600" height="300"></p>


다음 목표 기능은 반응형 웹으로 구현하는 것이었다. 아마 구현하면서 제일 애를 먹었던 부분인 것 같다.  

<p align="center"><img src="https://user-images.githubusercontent.com/71035113/141255436-84cc3979-32a9-4313-b607-cfc17b2fcaab.png" width="300" height="300"></p>  


웹페이지 중앙의 이름, 날씨와 시계, 명언 부분은 2 x 3의 그리드 레이아웃을 이용해서 표현했다. 
grid-template-columns와 grid-template-rows에 repeat 함수를 이용해서 각각 2번, 3번 반복했다. 
브라우저가 최소 cell의 내용만큼은 사이즈를 유지할 수 있도록 하기 위해 minmax의 min값에 min-content 속성을
적용하고 최대는 1fr로 설정해서 상대적인 비율은 1:1로 유지했다.  


## 4. 사이드 메뉴바
다음은 우측 상단에 햄버거 메뉴 버튼을 클릭했을 때, todo-list를 기록할 수 있는 메뉴가 나오게 하고 싶었다. 
DOMContentLoaded를 이용해서 HTML 문서가 완전히 로딩된 다음에 햄버거 버튼에 클릭 이벤트가 발생했을 때, 
메뉴를 보여지거나 사라지게 하는 "on" class 속성을 적용했다. on 상태일 때는 right에 0값을 주어서 메뉴가 
오른쪽에 딱 붙어서 나타나고, off 상태일 때는 right에 -300px값을 주어서 메뉴의 가로 길이만큼 오른쪽으로 
이동해서 사라지는 것처럼 보이게 구현했다. 또한, transition 효과를 주어서 나타나거나 사라질 때, 0.3초 동안 
이동하도록 속도를 조절했다.  


## 5. 새로고침 시, 배경과 명언 랜덤 변경
<p align="center">
  <img align="center" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb919nk%2Fbtrkuj1NGjE%2FXatwXwI3w9jJxye8W0xtnk%2Fimg.png" width="350" height="300">
</p>  


  
  
새로고침할 때마다, 배경과 명언이 미리 지정해놓은 배열 중에서 임의의 값으로 바뀌게 하기 위해서 
Math.random() 함수를 사용했다. quote의 길이만큼 Math.random() 함수로 0~1 사이의 난수를 발생시킨 다음 q
utoe 배열의 길이만큼 곱하고 Math.floor를 적용해서 quote의 길이 내의 임의의 정수를 발생시키도록 했다. 다
음, index.html에 미리 만들어 놓은 quote와 author 태그에 랜던하게 생성된 배열에 해당하는 값을 넣어줬다.   


## 6. 현재 시간과 현재 위치의 날씨 표시
<p align="center">
 <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoxGY7%2FbtrkwnhQf93%2FK3Px5kqcRSyKjC7vYyDNs1%2Fimg.png" width="400" height="250"> 
</p> 
현재 시각을 표시하는 데에는 자바스크립트의 빌트인 오브젝트인 Date 객체를 이용했다. new Date()를 호출
해서 새로운 Date 객체를 호출하면 현재 날짜와 시간이 저장된 Date 객체가 반환된다. 다음, Date 객체의 ge
tHours, getMinutes, getSeconds 메서드를 이용해서 시간, 분, 초 값을 얻었다.  
  
디지털 시계처럼 보이기 위해 한자리 숫자일 때는 앞
에 '0'이 채워지도록 String 함수의 padStart 메서드를 이용해서 좌측에 0을 채워넣었다.  
  
  
다음, 날씨 정보를 가져올 때는 openweathermap의 API를 사용했다. 원격 API를 
호출할 때는 request나 axios, jQuery와 같은 라이브러리를 사용할 수도 있지만 굳이 
이러한 라이브러리의 도움 없이도 브라우저에 내장된 fetch() 함수를 이용하면 쉽게 구현할 수 있다.  
  
fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고 Pr
omise 타입의 객체를 반환한다. API 호출이 성공했을 때는 응답 객체를 resol
ve하고, 실패했을 경우에는 예외 객체를 reject한다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/71035113/141255508-c8f15078-849a-49a3-9b8b-6d710d856af7.png" width="600" height="300">
  </p>

openweathermap API를 호출할 때는, openweathermap 홈페이지에서 회원 가입 후, API 키를 발급받아서 사용한다.
API docs 탭에 들어가면 API를 호출하는 방법을 알려준다. {city name}과 {API key} 자리에 내가 찾아볼 지역의 
이름과 내 API key를 넣어서 호출하면 된다.
  
아래 메서드를 호출하면, 응답 객체로부터 JSON 포멧의 응답을 자바스크립트 객체로 변환해서 얻을 수 있다. 
data.name과 data.main.temp 속성으로 현재 지역의 이름과 현재 지역의 온도 값을 불러와서 index.html의 div에 넣어줬다.  
  
    
  
  
## 느낀 점
평소에 라이브러리를 이용해서 사이트를 만들어와서, JS만으로 웹 사이트를 구현해본 것은 처음이었다.
JS에서 classlist.toggle 같이 다양한 기능을 이미 만들어서 제공한다는 것이 놀라웠고, 이런 기능을 알지 못한 채 
구현을 하게 되면, 길고 비효율적인 코드가 될 것 같다는 생각이 들었다. 또한, 코드를 작성할 때 문자열을 직접 입
력하는 것을 피하고, 자주 사용하는 문자열은 변수로 만들기 위해서 const NAME과 같이 대문자 상수로 따로 빼서 작
성한다는 것을 알게 되었다. 아직은 익숙하지가 않지만 클린 코드를 작성하는 방법도 얼른 공부해보고 싶다!!  

## 블로그 정리
[[VanillaJS] Todo-list 만들기](https://codingwiths.tistory.com/172)
  
 
