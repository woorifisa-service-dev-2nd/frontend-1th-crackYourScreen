
# frontend-2th-crackYourScreen
***
<br>
<p align="center">
  <img src = "https://github.com/woorifisa-service-	dev-2nd/frontend-2th-crackYourScreen/assets/101613808/9224bb9b-76ea-4d58-9658-bda807dd7685">
</p>



<br>


## 팀원 구성
***
> 박지호
> 안성민
> 박선주
> 박은혜


***


## 협업 방식
***

### 1. 기능 정리 :
![image](https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/8b7877c0-a2bd-46da-8ef8-6b820f5bfa34)


### 2. 역할 분담 :

> 박지호 - 배경 클릭 할 때 깨짐 효과, 더블클릭 이미지 다르게 하기, BANG 텍스트 효과
> 안성민 - 페이지 랜덤 교체, 배경 효과
> 박선주 - 마우스 포인터 변경
> 박은혜 - 초기화 버튼, 사용자 이미지 업로드, UI

<br>위와 같이 역할을 분담하여 기능을 구현하고 git을 통해 합치는 과정으로 협업하였습니다.

<br>

***


## 기능 시연
***
<br>
<br>


![총시연](https://github.com/alalai012/IoTflatform_patient/assets/101613808/29863933-edb4-4285-bee6-6231c15c2145)

<br>
<br>

***

## 핵심 기능 설명 및 구현 방법
***


### 1.배경 이미지 변경, 페이지 랜덤 :


<p align="center">
  <img src="https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/c5b92a08-fb0f-4178-b4d3-cf1b6fad6d3c">
</p>

``Math.random()``으로 0에서1사이의 부동소수점 난수를 생성하고 배열의 길이를 곱한 뒤
``Math.floor``로 소수점을 제거하면 랜덤으로 0부터 배열의 길이값중 하나를 반환합니다.
선택된 이미지의 경로를 HTML 엘리먼트의 src 속성에 할당하여 해당 이미지를 표시합니다.
<br>

### 2.사용자 이미지 변경 :

<p align="center">
  <img src="https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/b1b4dfcf-b2fd-458d-a741-50bb8020afc6">
</p>

input 태그에서 사용자가 선택한 파일을 ``File`` 객체로 가져와 이미지가 맞는지 확장자 유효성 검사를 합니다.
이미지 파일이 맞으면 ``FileReader`` 객체로 파일 내용을 읽어 해당 이미지를 표시합니다.

<br>

### 3.마우스 포인터 이미지 변경 :
<p align="center">
  <img src="https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/0f9a2998-b867-47d2-99c9-af5e772193de">
</p>

마우스 호버가 적용되는 DOM은 실제 HTML 태그가 보이지 않는 가상 클래스이기 때문에 JS에서 ``getElementBy~()`` 구현은 어려워, ``document`` 객체 내부에 있는 CSS관련 객체의 값을 바꾸는 방식으로 구현하였습니다.

<br>

### 4.화면 클릭하면 깨짐 효과 :
<p align="center">
  <img src="https://github.com/woorifisa-service-dev-2nd/frontend-2th-crackYourScreen/assets/101613808/90e59bc5-0436-4f28-be9f-370a4874ee1e">
</p>

//클릭 이벤트 설정

1. 한 번 클릭시 작은 크기 crack 이미지를 삽입합니다.
*이때 reset button과 new 버튼을 눌릴 시 발생하지 않게끔 if 문을 활용했습니다.

2. 클릭한 좌표를 가져오고 기존 이미지의 위치는 클릭 위치의 오른쪽 아래에 있습니다. 그래서 마우스 좌표와 - img 절반 크기를 가로와 세로로 각각 빼주어 이미지가 중앙에 오게 만드는 준비를 합니다.

ex)
const imageX = clickX - imageSize / 2 - 50;
const imageY = clickY - imageSize / 2 + 50;
이때 +- 50은 그림 형태에 따라 정확도를  높이기 위해 넣어준 값입니다.

3. 우선 image의 객체를 구하고 스타일에 위에서 구한 imageX와 imageY를 대입하여 버튼 클릭시 이미지 삽입 위치를 설정해줍니다.

ex)
image.style.position = 'absolute';
image.style.left = `${imageX}px`;
image.style.top = `${imageY}px`;
image.style.width = `${imageSize}px`;
image.style.height = `${imageSize}px`;
이로써 이미지 가 중앙에 오게 설정 할 수 있다.

4. document.body.appendChild(image); 이를 사용해 body안에 이미지가 삽입 되게 합니다.

5. document.addEventListener('click', insertImageOneClickCenter);로 만들면 최종적으로 이벤트 발생시 위에서 정의한 함수가 작동하게 끔 설정합니다.

6. 두 번 클릭은 document.addEventListener('dblclick', insertImageTwoClickCenter); 이렇게 click -> dblclick으로 바꿔 설정합니다. 나머지는 동일한 구조를 가집니다.

//Bang 설정

1. getElentId로 boomText1 선택자를 가져옵니다. 그다음 innerHTML을 활용해서 bang!!! 이라는 단어를 추가합니다.

ex)
document.getElementById('boomText1').innerHTML = 'bang!!!';

2. 그리고 기존 설정해뒀던 bang의 크기를 1.2배 증가시키는 작업을 합니다.

ex)
onst newSize = (parseFloat(currentSize) * 1.2) + 'px'; 이를 활용해서 원래 크기에 1.2배를 합니다.

3.그 다음 원래 크기로 바꾸는 작업을 합니다. 이때 함수에 두 개의 인수를 줘서 진행하는데 하나는 원래 크기로 돌아가기 위한 설정 값이고 또 다른 값은 돌아가기 까지의 시간을 의미합니다. 원래 크기는     50px로 설정했고 200ms시간으로 설정했기 때문에 0.2초 후에 원래 크기 50px가 됩니다.

ex)
setTimeout(() => {
        boomText1.style.fontSize = '50px'; // 원래 크기로 설정
    }, 200);
200은 200ms이므로 0.2초만 커졌다가 작아진다.

4. 그 다음 글자를 없애기 위해 글자 숨김을 진행하는데 이 역시 두가지 인자를 줘서 시행한다. 하나는 글자를 숨기는 거고 또 다른 것은 숫자 1000ms을 넣어 진행한다 이는 1초 뒤에 글자가 숨겨진다는 것을 의미합니다.

ex)
 setTimeout(() => {
        boomText1.style.display = 'none'; // 글자 숨기기
    }, 1000);

5. 이후, 다시 이벤트 발생할 때 숨겨진 글자가 다시 나타나게끔 하는데 이전에 설정했던 boomText1.style.display = 'none'의 none 부분을 block으로 설정해서 글자가 다시 나타날 수 있게끔 했습니다.

ex)
boomText1.style.display = 'block'; 이렇게 설정한다.

6.  더 큰 BANG 역시 click이 dblclick으로 바뀐거 외에는 동일합니다.

***

## 트러블 슈팅
***
### 1. Git 사용법
git branch 사용법을 정확하게 알지 못하여 git을 통해 서로 작성한 부분을 합치는데 어려움이 있었습니다.

### 2. 마우스 포인터 변경
마우스 커서 이미지는 원본의 크기가 너무 크면 나타나지 않는 문제가 있었습니다.
원본 이미지를 [이미지 크기 조절 사이트] (https://www.iloveimg.com/ko/resize-image/resize-jpg) 에서 크기를 줄여 사용했습니다.


### 3. 클릭 효과가 화면 범위를 벗어나는 현상
모서리 부분에 클릭으로 화면이 깨지는 효과를 주었을 때, 깨짐효과 이미지가 배경이미지 크기를 벗어나는 문제가 발생했었습니다.
body 태그에 overflow 속성을 추가하여 배경 이미지 크기를 벗어나는 효과를 잘라내는 방식으로 해결했습니다.
```
body {
  overflow : hidden; 
}
```
### 4. 이미지 추가 기능
사용자가 업로드 버튼을 눌렀을 때 선택한 파일을 자바스크립트에서 ``File`` 객체로 받아올 수 있는데, 이 파일의 바이너리 값을 가져오는 방법을 몰라 배경화면으로 보여주는 것에 어려움이 있었습니다.
찾아보니 ``FileReader`` 객체를 통해 파일 데이터를 가져올 수 있다는 것을 알게됐고 onload 이벤트핸들러를 등록하여 해결했습니다.


<br>

***
## 회고
***

> **박지호:** 
처음으로 웹 디자인 협업을 해보았습니다. 아직 처음이라 너무 어려웠지만, 어떤 흐름으로 협업이 이뤄지는지 워크플로우를 볼 수 있었습니다. 또한 html, css 그리고 js가 아직 미숙하지만 전체적인 것을 배웠기에 꾸준히 공부를 이어나가 실력을 늘리도록 하겠습니다. 무엇보다 협업을 하기위해서는 깃을 잘해야겠다는 생각을 가집니다.

> **안성민:** 
css에 대한 이해가 부족하여 사진을 화면 크기에 맞게 채우는데 시간이 오래걸렸습니다. git 사용법이 미숙하여 merge하는 과정에서 어려움을 겪었고, 협업에서 git의 중요성을 느끼게 되었습니다.

> **박선주:** 
가상 클래스의 개념이 생소했지만 자료를 보며 차근차근 이해하니 완성 할 수 있었습니다. 변수명을 짓는데 '호버, 포인터, 커서'등 혼란이 있어 변수명을 미리 생각해두는것이 중요하고 추가로 git사용을 연습해야겠다고 느꼈습니다.

> **박은혜:** 
주제를 정할 때만 해도 너무 금방 끝날 수도 있겠다 생각했는데 예상치 못한 이슈가 많았습니다. 하지만 팀원들과 같이 찾아가며 잘 마무리 할 수 있었습니다. 협업을 위해 코드 컨벤션, 원활한 의사소통, GIT 의 중요성을 체감했습니다.
