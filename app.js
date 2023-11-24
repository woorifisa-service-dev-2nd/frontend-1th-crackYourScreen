/**DOM */
const changePointerBtn = document.getElementById('change-pointer');
const htmlBody = document.getElementsByTagName('body')[0];
const mousPointer = window.getComputedStyle(htmlBody).cursor;
/**마우스 호버 CSS 초기화 */
document.styleSheets[0].insertRule('html,button:hover{cursor : url(mouse-pointer/simple-hammer.png), pointer}', 0);
//console.log(document.styleSheets[0].cssRules[0]);



/************마우스 커서 바꾸기 버튼 이벤트 콜백 함수 *********************/
/** 마우스 커서 바꾸기
 * @returns {void} CSS객체를 수정해 마우스 커서를 바꿈
 * @author 'mimimya'
 */
let changePointerCounter = 0;
const changePointer = () => {
    /**0.CSS value */
    const pointerNameList = [
        "url(mouse-pointer/simple-hammer.png), pointer",
        "url(mouse-pointer/yellow-hammer.png), pointer",
    ]

    /** 1. 순차로 pointerNameList에서 css값 변수를 가져오는 함수
     * @returns {string} 'url(mouse-pointer/simple-hammer.png), pointer;'
     * @author 'mimimya'
     */
    const getPointer = () => {
        if (changePointerCounter === pointerNameList.length) {
            changePointerCounter = 0;
        }
        console.log(changePointerCounter);
        return pointerNameList[changePointerCounter++];
    }

    /**2.(사용 안하는 중)랜덤으로  pointerNameList에서 css값 변수를 가져오는 함수
    * @returns {string} 'url(mouse-pointer/simple-hammer.png), pointer;'
    * @author 'mimimya'
    */
    const getPointerRandom = () => {
        return pointerNameList[Math.floor(Math.random() * pointerNameList.length)];
    }

    //getPointer()-순차 OR getPointerRandom()-랜덤

    const val = getPointer();
    document.styleSheets[0].deleteRule(0);//생성할때 만들어진 CSS 객체를 삭제
    document.styleSheets[0].insertRule(`html,button:hover{cursor : ${val}}`, 0); //다시 생성
    //document.styleSheets[0].cssRules[0].style.cursor = val;
    console.log(document.styleSheets[0].cssRules[0]);
    return;
}


/************마우스 커서 바꾸기 버튼 이벤트 콜백 함수 (끝) *********************/

/**Event */
changePointerBtn.addEventListener('click', changePointer);