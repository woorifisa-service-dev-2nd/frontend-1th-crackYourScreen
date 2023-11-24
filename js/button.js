import {showImage} from './screen.js';

const ALLOW_FILE_EXTENSIONS = ['jpg', 'png'];

const resetBtn = document.getElementById('reset-btn');
const uploadBtn = document.getElementById('input-image');


/**
 * crack image 제거
 */
function removeCracks() {
    const crackImages = document.getElementsByClassName("crack-image");

    if (crackImages.length != 0) {
        while(crackImages.length > 0) {
            crackImages[0].remove();
        }
    }
}


/**
 * RESET 버튼 클릭 이벤트핸들러
 * crack 제거 및 랜덤으로 배경화면 변경
 */
resetBtn.addEventListener('click', () => {
    
    removeCracks();
    
    // 배경화면 랜덤으로 변경
    showImage();
});


/**
 * UPLOAD 버튼 이미지 선택 이벤트핸들러
 * crack 제거 및 선택한 배경화면으로 변경
 */
uploadBtn.onchange = () => {
    const uploadFiles = uploadBtn.files;
    
    // 파일 수 예외처리
    if (uploadFiles.length != 1) {
        alert('하나의 이미지 파일을 업로드하세요');
    }

    const imageFile = uploadFiles[0];
    const fileType = imageFile.type;
    const extension = fileType.split('/').pop().toLowerCase();
    
    // 파일 확장자 예외처리
    if (!ALLOW_FILE_EXTENSIONS.includes(extension)) {
        alert(ALLOW_FILE_EXTENSIONS.join(" ") + ' 만 가능!');
        return;
    }

    // 배경화면 변경
    const fileReader = new FileReader();

    fileReader.readAsDataURL(imageFile);

    fileReader.onload = function (e) {
        document.getElementById('introImg').src = e.target.result;
      };
    
      removeCracks();
}