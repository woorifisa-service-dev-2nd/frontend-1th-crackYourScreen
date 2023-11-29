![header](https://capsule-render.vercel.app/api?type=shark&color=A6453C&height=300&section=header&text=🔨Crack%20Your%20Screen&fontSize=83&fontColor=F2E7DC&animation=fadeIn)

<br>
<p align="center">
  <img src = "https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/192abf21-79c3-483e-8ec5-a51844445fbe">
</p>

<br>

## **Are you get stressed out? Then Try this one!🔨**

#### You can break **Whatever you want.**

On the left of the screen, There is a **NEW Hammer** Button that you can change your mouse cursor.
On the right of the scree, There are **RESET** Button and **SELECT** Button.
You can change background picture randomly By click the **RESET** Button.
And you can select own picture to replace the background Picture by click the **SELECT** Button.

<br>
<br>
<br>

## 🖥️ 프로젝트 소개
화면부수기 프로그램

<br>

## 🧑‍🤝‍🧑 팀원
박선주 박은혜 박지호 안성민

<br>

## 💪 협업 방식

### 1. 역할 분담
- 박선주 - 마우스 포인터 망치로 설정
- 박은혜 - 화면 초기화, 배경 이미지 선택
- 박지호 - 화면 클릭/더블클릭 시 깨짐 효과 및 BANG 텍스트 노출
- 안성민 - 랜덤 배경 이미지 노출

<br>

### 2. 협업 툴
- Git
- Slack
  

<br>

## 🎥 시연 영상
<p align="center">
    <img src ="https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/6d6a885c-7845-48d0-8db7-5036281e243d">
</p>

<br>

## 📌 핵심 기능 및 구현 방법
### 1. 랜덤 배경 이미지 노출


<p align="center">
  <img src="https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/d04810f5-5b22-4a20-81b9-078ae62504c5">
</p>

- 배경이미지 경로를 배열로 선언
- 출력이 필요할때 난수를 생성해서 랜덤으로 인덱싱
- 선택된 이미지의 경로를 img 태그의 src 속성에 할당하여 해당 이미지를 표시합니다.

<br>

### 2.배경 이미지 선택

<p align="center">
  <img src="https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/c35f7352-9451-4ab8-b553-7199db11ff17">
</p>

- input 태그에서 사용자가 선택한 파일을 ``File`` 객체로 가져오기 
- 이미지가 맞는지 확장자 유효성 검사
- 이미지 파일이 맞으면 ``FileReader`` 객체로 파일 내용을 읽어 해당 이미지 표시

<br>

### 3.마우스 포인터 변경
<p align="center">
  <img src="https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/d3790252-d8ed-4e4a-affc-e29f37cf51f8">
</p>

- 마우스 호버가 적용되는 DOM은 실제 HTML 태그가 보이지 않는 가상 클래스 
   -  ``getElementBy~()``로 선택 불가
- ``document`` 객체 내에서 마우스를 움직이는 이벤트가 발생하면 이미지가 따라오도록 구현

<br>

### 4.화면 클릭 시 깨짐 효과 및 BANG 텍스트 노출
<p align="center">
  <img src="https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/3ff5d6d1-9f28-4540-b3e7-1da875ae2ea3">
</p>

#### 4-1. 클릭 crack 이미지 삽입
- 한 번 클릭시 작은 크기, 더블 클릭 시 큰 크기의 crack 이미지를 삽입
  - ``document.body.appendChild(image);`` 사용
- 클릭한 좌표를 가져오고 좌표와 이미지 크기를 고려해 이미지 중앙 배치

```js
// 그림 형태에 따라 정확도를  높이기 위해 넣어준 값 '50'
const imageX = clickX - imageSize / 2 - 50;
const imageY = clickY - imageSize / 2 + 50;
```

<br>

#### 4-2. BANG!! 텍스트 삽입

- innerHTML 을 활용해서 bang!!! 이라는 텍스트 추가

- 텍스트 크기를 1.2배 증가시켰다가 원래 크기로 변경

``const newSize = (parseFloat(currentSize) * 1.2) + 'px';`` 


- 함수에 0.2초 지연시간 인수를 주어 애니메이션 효과

```js
setTimeout(() => {
        boomText1.style.fontSize = '50px'; // 원래 크기로 설정
    }, 200); // 200ms이므로 0.2초만 커졌다가 작아진다.
```

- 일정시간 뒤 텍스트 숨기기
  - 다시 출력할 때 ``boomText1.style.display = 'block';``

```js
setTimeout(() => {
        boomText1.style.display = 'none'; // 글자 숨기기
    }, 1000);
```

<br>

## 🔫 트러블 슈팅
### 1. Git 사용
git 에 미숙하여 git을 통해 서로 작성한 부분을 합치는데 어려움이 있었습니다. <br>
팀원들 모두 검색해서 이해한 사람이 설명해주는 방식으로 사용하였습니다.

<br>


### 2. 클릭 효과가 화면 범위를 벗어나는 현상
모서리 부분에 클릭으로 화면이 깨지는 효과를 주었을 때, 깨짐효과 이미지가 배경이미지 크기를 벗어나는 문제가 발생했었습니다.
body 태그에 overflow 속성을 추가하여 배경 이미지 크기를 벗어나는 효과를 잘라내는 방식으로 해결했습니다.
```css
body {
  overflow : hidden; 
}
```
<br>

### 3. 이미지 추가 기능
사용자가 업로드 버튼을 눌렀을 때 선택한 파일을 자바스크립트에서 ``File`` 객체로 받아올 수 있는데, 이 파일의 바이너리 값을 가져오는 방법을 몰라 배경화면으로 보여주는 것에 어려움이 있었습니다.
찾아보니 ``FileReader`` 객체가 파일 데이터를 가져올 수 있다는 것을 알게됐습니다. 이 객체를 통해 얻은 파일데이터를 img 태그의 src 속성 값으로 사용하여 해결했습니다.

<br>

### 4. 마우스커서로 설정한 이미지가 나타나지 않는 현상
css의 커서옵션으로 이미지를 부여했을때 해당 브라우저의 끝부분으로 마우스를 이동시키면 이미지가 기본 커서로 변경되는 문제가 있었습니다. <br>
이를 해결하기 위해 커서로 사용될 이미지태그를 추가하여 mousemove 이벤트가 발생할 때 이미지를 마우스의 위치로 이동시켜주어 위 문제를 해결하였습니다. <br>
추가로 마우스가 브라우저 영역 바깥으로 벗어날 시 이미지가 사라질 수 있도록 mouseleave 이벤트가 발생했을 때 이미지를 비활성화 하였습니다.

<br>

### 5. 버튼 클릭 시에도 효과가 나타나는 현상
리셋 버튼을 눌렀을 때 화면이 초기화 되어도 클릭 효과 때문에 화면이 완전히 깨끗해지지 않는 문제가 있었습니다. <br>
`event.target.id === 버튼 객체의 id` 통해 이벤트 콜백 함수를 동작없이 리턴시키도록 if 문을 활용했습니다.

<br>

## 📝 회고
> **박선주**
> <br> 
가상 클래스의 개념이 생소했지만 자료를 보며 차근차근 이해하니 완성 할 수 있었습니다. 변수명을 짓는데 '호버, 포인터, 커서'등 혼란이 있어 변수명을 미리 생각해두는것이 중요하고 추가로 git사용을 연습해야겠다고 느꼈습니다.

> **박은혜**
> <br> 
예상치 못한 이슈가 많았지만 팀원들과 같이 찾아가며 의사소통한 덕분에 잘 마무리 할 수 있었습니다. 협업을 위해 코드 컨벤션, 원활한 의사소통, Git 의 중요성을 체감했습니다.

> **박지호**
> <br> 
처음으로 웹 디자인 협업을 해보았습니다. 아직 처음이라 너무 어려웠지만, 어떤 흐름으로 협업이 이뤄지는지 워크플로우를 볼 수 있었습니다. 또한 html, css 그리고 js가 아직 미숙하지만 전체적인 것을 배웠기에 꾸준히 공부를 이어나가 실력을 늘리도록 하겠습니다. 무엇보다 협업을 하기위해서는 깃을 잘해야겠다는 생각을 가집니다.

> **안성민**
> <br> 
css에 대한 이해가 부족하여 사진을 화면 크기에 맞게 채우는데 시간이 오래걸렸습니다. git 사용법이 미숙하여 merge하는 과정에서 어려움을 겪었고, 협업에서 git의 중요성을 느끼게 되었습니다. 또한 프로젝트의 버그를 수정하는 과정에서 원인을 찾고 해결방안을 도출해 내는 과정에서 실력이 향상된 것 같습니다.
