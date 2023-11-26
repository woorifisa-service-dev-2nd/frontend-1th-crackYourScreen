// 화면을 클릭할 때 실행되는 함수
function insertImageOneClickCenter(event) {
    if(event.target.id === 'reset-btn' || event.target.id === 'change-pointer') {
        return;
    }
    
    // 클릭한 위치의 좌표를 가져옵니다.
    const clickX = event.clientX;
    const clickY = event.clientY;

    // 이미지 엘리먼트를 생성하고 설정합니다.
    const image = new Image();
    image.src ='images/crack/cracked-glass-(1).png';

    // 이미지의 크기를 설정합니다. 원하는 크기로 변경하세요.
    const imageSize = 300; // 예: 이미지 크기를 50x50으로 설정

    // 이미지의 중앙 위치 계산
    const imageX = clickX - imageSize / 2 -50;
    const imageY = clickY - imageSize / 2 + 50;

    // 이미지의 위치와 스타일을 설정합니다.
    image.style.position = 'absolute';
    image.style.left = `${imageX}px`;
    image.style.top = `${imageY}px`;
    image.style.width = `${imageSize}px`;
    image.style.height = `${imageSize}px`;

    image.className = 'crack-image';
    
    // 이미지를 body 요소에 추가합니다.
    document.body.appendChild(image);
}

function insertImageTwoClickCenter(event) {
    if(event.target.id === 'reset-btn' || event.target.id === 'change-pointer') {
        return;
    }

    // 클릭한 위치의 좌표를 가져옵니다.
    const clickX = event.clientX;
    const clickY = event.clientY;

    // 이미지 엘리먼트를 생성하고 설정합니다.
    const image = new Image();
    image.src ='images/crack/cracked-glass-(5).png';

    // 이미지의 크기를 설정합니다. 원하는 크기로 변경하세요.
    const imageSize = 500; // 예: 이미지 크기를 50x50으로 설정

    // 이미지의 중앙 위치 계산
    const imageX = clickX - imageSize / 2;
    const imageY = clickY - imageSize / 2 + 50;

    // 이미지의 위치와 스타일을 설정합니다.
    image.style.position = 'absolute';
    image.style.left = `${imageX}px`;
    image.style.top = `${imageY}px`;
    image.style.width = `${imageSize}px`;
    image.style.height = `${imageSize}px`;

    image.className = 'crack-image';

    // 이미지를 body 요소에 추가합니다.
    document.body.appendChild(image);
}

// 화면을 클릭할 때 insertImageAtClickCenter 함수를 호출합니다.
document.addEventListener('click', insertImageOneClickCenter);
document.addEventListener('dblclick', insertImageTwoClickCenter);



//boom!! 

document.addEventListener('click', () => {
    if(event.target.id === 'reset-btn' || event.target.id === 'change-pointer') {
        return;
    }
    
    // 현재 글자 크기 가져오기
    document.getElementById('boomText1').innerHTML = 'bang!!!';
    boomText1.style.display = 'block'; //숨겼던 글자 다시 나오게 하기
    
    const currentSize = window.getComputedStyle(boomText1, null).getPropertyValue('font-size');
    
    // 현재 크기를 숫자로 변환하고 1.2배로 증가시킴
    const newSize = (parseFloat(currentSize) * 1.2) + 'px';

    // 글자 크기 변경
    boomText1.style.fontSize = newSize;

    // 0.2초 후에 다시 원래 크기로 돌아가기
    setTimeout(() => {
        boomText1.style.fontSize = '50px'; // 원래 크기로 설정
    }, 200);

    // 2초 후에 글자 숨기기
    setTimeout(() => {
        boomText1.style.display = 'none'; // 글자 숨기기
    }, 1000);


    
});

document.addEventListener('dblclick', () => {
    if(event.target.id === 'reset-btn' || event.target.id === 'change-pointer') {
        return;
    }
    
    // 현재 글자 크기 가져오기
    document.getElementById('boomText2').innerHTML = 'BANG!!!';
    boomText2.style.display = 'block'; //숨겼던 글자 다시 나오게 하기
    
    const currentSize = window.getComputedStyle(boomText2, null).getPropertyValue('font-size');
    
    // 현재 크기를 숫자로 변환하고 1.2배로 증가시킴
    const newSize = (parseFloat(currentSize) * 1.2) + 'px';

    // 글자 크기 변경
    boomText2.style.fontSize = newSize;

    // 0.2초 후에 다시 원래 크기로 돌아가기
    setTimeout(() => {
        boomText2.style.fontSize = '100px'; // 원래 크기로 설정
    }, 200);

    // 2초 후에 글자 숨기기
    setTimeout(() => {
        boomText2.style.display = 'none'; // 글자 숨기기
    }, 1000);

    
});