/**DOM */
const changePointerBtn = document.getElementById('change-pointer');
const cursor = document.querySelector('.custom-cursor');
const cursorImg = cursor.querySelector('img');

/************마우스 커서 바꾸기 버튼 이벤트 콜백 함수 *********************/
/** 마우스 커서 바꾸기
 * @returns {void} CSS객체를 수정해 마우스 커서를 바꿈
 * @author 'mimimya'
 */
let changePointerCounter = 1;
const changePointer = () => {
    /**0.CSS value */
    const pointerNameList = [
        { url: `images/mouse-pointer/simple-hammer.png`, deg: `rotate(0deg)` },
        { url: `images/mouse-pointer/real-hammer.png`  , deg: `rotate(25deg)` },
        { url: `images/mouse-pointer/wood-hammer.png`  , deg: `rotate(25deg)` },
        { url: `images/mouse-pointer/yellow-hammer.png`, deg: `rotate(0deg)` }
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
    let val = getPointer();
    cursorImg.src = val.url;
    cursorImg.style.transform = val.deg;
    return;
}
/************마우스 커서 바꾸기 버튼 이벤트 콜백 함수 (끝) *********************/
// Event
changePointerBtn.addEventListener('click', changePointer);
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursorImg.style.display = 'inline';
});

document.addEventListener('mouseleave', () => {
    cursorImg.style.display = 'none';
});
