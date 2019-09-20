let btn = document.querySelector('.btn');

let x = 1;
	
function something(){
  alert(x);
  x++;
}

btn.onclick = something;