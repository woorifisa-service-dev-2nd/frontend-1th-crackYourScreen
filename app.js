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