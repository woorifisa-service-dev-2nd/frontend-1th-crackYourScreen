/**
 * 페이지 시작할 때 한번 배경이미지 랜덤으로 바꾸기
**/

const images = new Array();
images[0]="images/block/block1.jpg";
images[1]="images/block/block2.jpg";
images[2]="images/block/block3.jpg";
images[3]="images/code/code1.png";
images[4]="images/code/code2.jpg";
images[5]="images/glass/glass1.jpg";
images[6]="images/glass/glass2.jpg";
images[7]="images/glass/glass3.jpg";


//console.log(images);

export function showImage() {
    let imgNum = Math.floor(Math.random()*images.length);
    const objImg = document.getElementById("introImg");
    objImg.src = images[imgNum];
}

showImage();