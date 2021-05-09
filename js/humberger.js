function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
}
  

document.getElementById('hamburger').addEventListener('click' , function () {
    hamburger();
});


let list = document.getElementsByClassName('list');

for (let i = 0; i < list.length; i++) {
　　list[i].addEventListener('click', function () {
　　　　hamburger();
    });
}



document.getElementById("nobita").style.display ="none";

document.getElementById("botan").addEventListener("click",function(){
    clickBtn1();
});
function clickBtn1(){
	const p1 = document.getElementById("nobita");

	if(p1.style.display=="block"){
		// noneで非表示
		p1.style.display ="none";
	}else{
		// blockで表示
		p1.style.display ="block";
	}
}
