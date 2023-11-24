 // 화면을 클릭할 때 실행되는 함수
 function insertImageOneClickCenter(event) {
    // 클릭한 위치의 좌표를 가져옵니다.
    const clickX = event.clientX;
    const clickY = event.clientY;

    // 이미지 엘리먼트를 생성하고 설정합니다.
    const image = new Image();
    image.src ='crack-glass/cracked-glass-(1).png';

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

function insertImageTwoClickCenter(event) {
    // 클릭한 위치의 좌표를 가져옵니다.
    const clickX = event.clientX;
    const clickY = event.clientY;

    // 이미지 엘리먼트를 생성하고 설정합니다.
    const image = new Image();
    image.src ='crack-glass/cracked-glass-(5).png';

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





// 화면을 클릭할 때 실행되는 함수



// function insertImageOneClick(event) {
//     // 클릭한 위치의 좌표를 가져옵니다.
//     const x = event.clientX;
//     const y = event.clientY;

//     // 이미지 엘리먼트를 생성하고 설정합니다.
//     const image = new Image();
//     image.src = 'cracked-glass-(1).png';
//     image.style.position = 'absolute';
//     image.style.left = `${x}px`;
//     image.style.top = `${y}px`;
    
    
//     // 이미지를 body 요소에 추가합니다.
//     document.body.appendChild(image);
//     document.getElementById('where').innerHTML = `${x}px ${y}px`
// }

// // 화면을 클릭할 때 insertImageOnClick 함수를 호출합니다.

// function insertImagetwoClick(event) {
//      // 클릭한 위치의 좌표를 가져옵니다.
//      const x = event.clientX;
//      const y = event.clientY;
 
//      // 이미지 엘리먼트를 생성하고 설정합니다.
//      const image = new Image();
//      image.src = 'cracked-glass-(5).png';
//      image.style.position = 'absolute';
//      image.style.left = `${x}px`;
//      image.style.top = `${y}px`;
     
     
     
 
//      // 이미지를 body 요소에 추가합니다.
//      document.body.appendChild(image);
//      document.getElementById('where').innerHTML = `${x}px ${y}px`
// }

// document.addEventListener('click', insertImageOneClick);
// document.addEventListener('dblclick', insertImagetwoClick);



/**
 * 페이지 시작할 때 한번 배경이미지 랜덤으로 바꾸기
**/

const images= new Array();
images[0]="background/block1.jpg";
images[1]="background/block2.jpg";
images[2]="background/block3.jpg";
images[3]="background/glass1.jpg";
images[4]="background/glass2.jpg";
images[5]="background/glass3.jpg";


console.log(images);

function showImage() {
    let imgNum = Math.floor(Math.random()*images.length);
    console.log(imgNum);
    const objImg = document.getElementById("introImg");
    objImg.src = images[imgNum];
}

showImage();