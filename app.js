/**DOM */
const changePointerBtn = document.getElementById('change-pointer');
const htmlBody = document.getElementsByTagName('body')[0];
const mousPointer = window.getComputedStyle(htmlBody).cursor;
/**마우스 호버 CSS 초기화 */
document.styleSheets[0].insertRule('html:hover{cursor : url(mouse-pointer/simple-hammer.png), pointer}', 0);
document.styleSheets[0].cssRules[0].style.cursor = 'url(mouse-pointer/simple-hammer.png), pointer;';




/************마우스 커서 바꾸기 버튼 이벤트 콜백 함수 *********************/
let changePointerCounter = 0;
const changePointer = () => {
    /**0. get CSS value */
    // 반환
    //마우스 커서의 이미지의경로를 넣은 cursor 속성값이 적힌 root{} 객체의 변수들
    const pointerNameList = [
        "url(mouse-pointer/simple-hammer.png), pointer",
        "url(mouse-pointer/yellow-hammer.png), pointer;",
    ]

    /**1. 순차로 pointerNameList에서 css값 변수를 가져오는 함수
    */
    const getPointer = () => {
        console.log(changePointerCounter);
        if (changePointerCounter < pointerNameList.length) {

            changePointerCounter++;
        } else {
            changePointerCounter = 0;
        }
        return pointerNameList[changePointerCounter];
    }

    /**2.(사용 안하는 중)랜덤으로  pointerNameList에서 css값 변수를 가져오는 함수
     * 
    */
    const getPointerRandom = () => {
        return pointerNameList[Math.floor(Math.random() * pointerNameList.length)];
    }

    //getPointer()-순차 OR getPointerRandom()-랜덤
    const cssCursorValue = getPointer();
    //console.log(cssCursorValue);
    document.styleSheets[0].cssRules[0].style.cursor = cssCursorValue;
    //리턴값 예 : url(mouse-pointer/simple-hammer.png), pointer;
}


/************마우스 커서 바꾸기 버튼 이벤트 콜백 함수 (끝) *********************/

/**Event */
changePointerBtn.addEventListener('click', changePointer());