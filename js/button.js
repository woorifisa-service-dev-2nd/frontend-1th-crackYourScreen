import {showImage} from './screen.js';

const ALLOW_EXTENSIONS_LOWER_CASE = ['jpg', 'jpeg', 'png', 'gif'];

const resetBtn = document.getElementById('reset-btn');
const selectBtn = document.getElementById('input-image');


/**
 * RESET 버튼 클릭 이벤트핸들러
 * crack 제거 및 랜덤으로 배경화면 변경
 */
resetBtn.addEventListener('click', () => {
    // crack 제거
    removeCracks();
    
    // 배경화면 랜덤으로 변경
    showImage();
});

/**
 * SELECT 버튼 이미지 선택 이벤트핸들러
 * crack 제거 및 선택한 배경화면으로 변경
 */
selectBtn.onchange = () => {
    const selectFiles = selectBtn.files;

    // 파일 예외처리
    checkValidation(selectFiles);

    const imageFile = selectFiles[0];
    
    // 배경화면 변경
    changeBackground(imageFile);
    
    // crack 제거
    removeCracks();
}

/**
 * crack image 제거
 */
function removeCracks() {
    const crackImages = document.getElementsByClassName("crack-image");
    
    if (crackImages.length === 0) {
        return;
    }

    for(let idx=crackImages.length-1; idx >= 0 ; idx--) {
        crackImages[idx].remove();
    }
}

/**
 * 파일 수, 확장자 유효성 검사
 * @param {FileList} files 
 */
function checkValidation(files) {
    // 파일 수 예외처리
    if (files.length != 1) {
        alert('하나의 이미지 파일을 선택하세요');
    }
 
    const imageFile = files[0];
    const extension = imageFile.type.split('/').pop().toLowerCase();
     
    // 파일 확장자 예외처리
    if (!ALLOW_EXTENSIONS_LOWER_CASE.includes(extension)) {
        alert(ALLOW_EXTENSIONS_LOWER_CASE.join(",") + ' 만 가능!');
    }
}

/**
 * 이미지파일을 배경화면으로 변경
 * @param {File} imageFile 
 */
function changeBackground(imageFile) {
    const fileReader = new FileReader();
 
    fileReader.readAsDataURL(imageFile);
 
    fileReader.onload = function (e) {
        document.getElementById('introImg').src = e.target.result;
    };
}