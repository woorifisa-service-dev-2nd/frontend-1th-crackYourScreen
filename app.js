/**DOM */
const changePointerBtn = document.getElementById('change-pointer');
/**마우스 호버 CSS 초기화 */
document.styleSheets[0].insertRule('html,button:hover{cursor : url(mouse-pointer/simple-hammer.png), pointer}', 0);




/************마우스 커서 바꾸기 버튼 이벤트 콜백 함수 *********************/
/** 마우스 커서 바꾸기
 * @returns {void} CSS객체를 수정해 마우스 커서를 바꿈
 * @author 'mimimya'
 */
let changePointerCounter = 1;
const changePointer = () => {
    /**0.CSS value */
    const pointerNameList = [
        { url: `url(mouse-pointer/simple-hammer.png), pointer`, deg: `rotate(deg: 0)` },
        { url: `url(mouse-pointer/real-hammer.png), pointer`, deg: `rotate(deg: 25)` },
        { url: `url(mouse-pointer/wood-hammer.png), pointer`, deg: `rotate(deg: 25)` },
        { url: `url(mouse-pointer/yellow-hammer.png), pointer`, deg: `rotate(deg: 0)` },
    ];

    /** 1. 순차로 pointerNameList에서 css값 변수를 가져오는 함수
     * @returns {object} {url, deg}
     * @author 'mimimya'
     */
    const getPointer = () => {
        if (changePointerCounter === pointerNameList.length) {
            changePointerCounter = 0;
        }
        console.log(changePointerCounter);
        return pointerNameList[changePointerCounter++];
    }

    //getPointer()-순차 OR getPointerRandom()-랜덤

    const val = getPointer();
    document.styleSheets[0].deleteRule(0);//생성할때 만들어진 CSS 객체를 삭제
    document.styleSheets[0].insertRule( //다시 생성
        `html,button:hover{
            cursor : ${val.url};
            transform: ${val.deg};
        }`, 0);
    //document.styleSheets[0].cssRules[0].style.cursor = val;
    console.log(document.styleSheets[0].cssRules[0]);
    return;
}


/************마우스 커서 바꾸기 버튼 이벤트 콜백 함수 (끝) *********************/

/**Event */
changePointerBtn.addEventListener('click', changePointer);
/**
 * 페이지 시작할 때 한번 배경이미지 랜덤으로 바꾸기
**/

const images= new Array();
images[0]="images/block/block1.jpg";
images[1]="images/block/block2.jpg";
images[2]="images/block/block3.jpg";
images[3]="images/glass/code1.png";
images[4]="images/glass/code2.jpg";
images[5]="images/glass/glass1.jpg";
images[6]="images/glass/glass2.jpg";
images[7]="images/glass/glass3.jpg";


console.log(images);

function showImage() {
    let imgNum = Math.floor(Math.random()*images.length);
    const objImg = document.getElementById("introImg");
    objImg.src = images[imgNum];
}

showImage();

//========================================


 // 화면을 클릭할 때 실행되는 함수
 function insertImageOneClickCenter(event) {
    // 클릭한 위치의 좌표를 가져옵니다.
    const clickX = event.clientX;
    const clickY = event.clientY;

    // 이미지 엘리먼트를 생성하고 설정합니다.
    const image = new Image();
    image.src ='glass-images/cracked-glass-(1).png';

    // 이미지의 크기를 설정합니다. 원하는 크기로 변경하세요.
    const imageSize = 500; // 예: 이미지 크기를 50x50으로 설정

    // 이미지의 중앙 위치 계산
    const imageX = clickX - imageSize / 2 -90;
    const imageY = clickY - imageSize / 2 -1;

    // 이미지의 위치와 스타일을 설정합니다.
    image.style.position = 'absolute';
    image.style.left = `${imageX}px`;
    image.style.top = `${imageY}px`;
    image.style.width = `${imageSize}px`;
    image.style.height = `${imageSize}px`;

    // 이미지를 body 요소에 추가합니다.
    document.body.appendChild(image);
}

function insertImageTwoClickCenter(event) {
    // 클릭한 위치의 좌표를 가져옵니다.
    const clickX = event.clientX;
    const clickY = event.clientY;

    // 이미지 엘리먼트를 생성하고 설정합니다.
    const image = new Image();
    image.src ='glass-images/cracked-glass-(5).png';

    // 이미지의 크기를 설정합니다. 원하는 크기로 변경하세요.
    const imageSize = 500; // 예: 이미지 크기를 50x50으로 설정

    // 이미지의 중앙 위치 계산
    const imageX = clickX - imageSize / 2 -80;
    const imageY = clickY - imageSize / 2 -40;

    // 이미지의 위치와 스타일을 설정합니다.
    image.style.position = 'absolute';
    image.style.left = `${imageX}px`;
    image.style.top = `${imageY}px`;
    image.style.width = `${imageSize}px`;
    image.style.height = `${imageSize}px`;

    // 이미지를 body 요소에 추가합니다.
    document.body.appendChild(image);
}

// 화면을 클릭할 때 insertImageAtClickCenter 함수를 호출합니다.
document.addEventListener('click', insertImageOneClickCenter);
document.addEventListener('dblclick', insertImageTwoClickCenter);


