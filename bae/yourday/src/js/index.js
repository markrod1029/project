let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");

let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);

let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block");
	
	// After showing third canvas, wait 3 seconds then redirect
	setTimeout(function() {
		window.location.href = "../foryou/index.html";
	}, 7000); // 7 seconds delay after third canvas appears
},9800);