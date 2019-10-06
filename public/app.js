function something(){

	var x = window.localStorage.getItem('bbb');

	x = x * 1 + 1;

	window.localStorage.setItem('bbb', x);
 	
 	alert(x);
}

function add_to_cart(id){

	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x); 

	alert('Items in your cart: ' + cart_get_number_of_items());
}

// function howMuchInCart(){
// 	let count = 0;
// 	for (let i = 0; i < localStorage.length; i++){

// 	}
// }

function cart_get_number_of_items(){
	let cnt = 0;
	for(let i = 0; i < window.localStorage.length; i++){

		let key = window.localStorage.key(i);//get key
		let value = window.localStorage.getItem(key); //get value analog in ruby: hh[key] = x

		if(key.indexOf('product_') == 0){
			cnt += value * 1;
		} 
	}
	return cnt; 
}

function cart_get_orders(){
	let orders = '';
	for(let i = 0; i < window.localStorage.length; i++){

		let key = window.localStorage.key(i);//get key
		let value = window.localStorage.getItem(key); //get value analog in ruby: hh[key] = x

		if(key.indexOf('product_') == 0){
			orders += key + '=' + value + ',';
		} 
	}
	return orders; 
}