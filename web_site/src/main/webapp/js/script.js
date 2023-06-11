$(".main-menu > li").mouseover(function(){
           $(this).children(".sub").stop().slideDown();
});

$(".main-menu > li").mouseleave(function(){
            $(this).children(".sub").stop().slideUp();
});

function winOpen1(){
	var win1 = window.open('login.html','child1','toolbar = no,location = no, status = no, menubar = no, resizable = no, scrollbars = no, width = 700, height = 700')
}
function winOpen2(){
	var win1 = window.open('join.html','child2','toolbar = no,location = no, status = no, menubar = no, resizable = no, scrollbars = no, width = 1850, height = 1700')
}
var images = document.querySelectorAll('.imgs img');
var currentImageIndex = 0;

function changeImage() {
  // 현재 이미지의 display를 none으로 설정하여 숨김
  images[currentImageIndex].style.display = 'none';

  // 다음 이미지의 인덱스 계산
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // 다음 이미지의 display를 block으로 설정하여 표시
  images[currentImageIndex].style.display = 'block';
}

// 2초마다 changeImage 함수를 호출하여 이미지 변경
setInterval(changeImage, 2000);


