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

	update_orders_input();
	update_orders_button();
}

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

function update_orders_input(){
	let orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function update_orders_button(){
	let text = 'Cart (' + cart_get_number_of_items() + ')';
	$('#orders_button').val(text);
}

function cart_get_orders(){
	let orders = '';
	for(let i = 0; i  < window.localStorage.length; i++){

		let key = window.localStorage.key(i);//get key
		let value = window.localStorage.getItem(key); //get value analog in ruby: hh[key] = x

		if(key.indexOf('product_') == 0){
			orders += key + '=' + value + ',';
		} 
	}
	return orders; 
}