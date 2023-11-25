// 화면을 클릭할 때 실행되는 함수
function insertImageOneClickCenter(event) {
    if(event.target.id === 'reset-btn') {
        return;
    }
    
    // 클릭한 위치의 좌표를 가져옵니다.
    const clickX = event.clientX;
    const clickY = event.clientY;

    // 이미지 엘리먼트를 생성하고 설정합니다.
    const image = new Image();
    image.src ='images/crack/cracked-glass-(1).png';

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

    image.className = 'crack-image';
    
    // 이미지를 body 요소에 추가합니다.
    document.body.appendChild(image);
}

function insertImageTwoClickCenter(event) {
    if(event.target.id === 'reset-btn') {
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
    const imageX = clickX - imageSize / 2 -80;
    const imageY = clickY - imageSize / 2 -40;

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