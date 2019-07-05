$(document).ready(function(){

	var storageCheck = localStorage.getItem("Total order(s)");
	
	if( storageCheck == null || storageCheck == 0 ){
		console.log("storage is null");
	}else{
		var x = storageCheck;
		cart = document.querySelector('#cartNum');
		cart.dataset.count = x;
	}
	
	$("#btn-scount, #btn-crf,#btn-g400c,#btn-ghost,#btn-mesarati,#btn-kawasaki,#btn-pico,#btn-yamaha,#btn-cbr").click(function(){
		var motorType = $(this);
		countOrder();
		orderType(motorType);
	});
	
	$("#clearStorage").click(function(){
		localStorage.clear();
		cart = document.querySelector('#cartNum');
		cart.dataset.count = 0;
		loopStorage();
	});
	
	$("#btn-cart").click(function(){
		loopStorage();
	});

	$("#btn-buyNow").click(function(){
		var storageCheck = localStorage.length;
		if(storageCheck == 0 || storageCheck == null ){
			alert("Sorry! Your cart is empty.");
		}else{alert("INSUFFICIENT FUNDS! :)");}
	});
	
	function countOrder(){
		var storageCheck = localStorage.getItem("Total order(s)");
		cartNum = $('#cartNum');
	
		if( storageCheck === 0  || storageCheck === null ){
			var click = $(cartNum).data("count");
			click++;
	
			cart = document.querySelector('#cartNum');
			cart.dataset.count = click;
	
			localStorage.setItem("Total order(s)", click);
			alert('1 Order is successfully added to your cart.\r\nClick the "Add to Cart" button again to place multiple orders.');
		}else{        
			var num = storageCheck;
			num++;
	
			cart = document.querySelector('#cartNum');
			cart.dataset.count = num;
	
			localStorage.setItem("Total order(s)", num);
			alert('1 Order is successfully added to your cart.\r\nClick the "Add to Cart" button again to place multiple orders.');
		}
	}
	
	function orderType(motorType){
		type = motorType.attr("id");
		switch(type){
			
			case "btn-scount":
				var x = 1;
				var n;
				if(localStorage.getItem("Scount Sixty Thunder" == null )){
					localStorage.setItem("Scount Sixty Thunder", x);
				}else{
					n = localStorage.getItem("Scount Sixty Thunder");
					n++;
					localStorage.setItem("Scount Sixty Thunder", n);
				}
			break;
	
			case "btn-crf":
				var x = 1;
				var n;
				if(localStorage.getItem("CRF" == null )){
					localStorage.setItem("CRF", x);
				}else{
					n = localStorage.getItem("CRF");
					n++;
					localStorage.setItem("CRF", n);
				}
			break;
	
			case "btn-g400c":
				var x = 1;
				var n;
				if(localStorage.getItem("G400C" == null )){
					localStorage.setItem("G400C", x);
				}else{
					n = localStorage.getItem("G400C");
					n++;
					localStorage.setItem("G400C", n);
				}
			break;
	
			case "btn-ghost":
				var x = 1;
				var n;
				if(localStorage.getItem("Ghost Rider" == null )){
					localStorage.setItem("Ghost Rider", x);
				}else{
					n = localStorage.getItem("Ghost Rider");
					n++;
					localStorage.setItem("Ghost Rider", n);
				}
			break;
	
			case "btn-mesarati":
				var x = 1;
				var n;
				if(localStorage.getItem("Mesarati" == null )){
					localStorage.setItem("Mesarati", x);
				}else{
					n = localStorage.getItem("Mesarati");
					n++;
					localStorage.setItem("Mesarati", n);
				}
			break;
	
			case "btn-kawasaki":
				var x = 1;
				var n;
				if(localStorage.getItem("Kawasaki Ninja" == null )){
					localStorage.setItem("Kawasaki Ninja", x);
				}else{
					n = localStorage.getItem("Kawasaki Ninja");
					n++;
					localStorage.setItem("Kawasaki Ninja", n);
				}
			break;
	
			case "btn-pico":
				var x = 1;
				var n;
				if(localStorage.getItem("Pico Mustang Distress" == null )){
					localStorage.setItem("Pico Mustang Distress", x);
				}else{
					n = localStorage.getItem("Pico Mustang Distress");
					n++;
					localStorage.setItem("Pico Mustang Distress", n);
				}
			break;
	
			case "btn-yamaha":
				if(localStorage.getItem("Yamaha" == null )){
					localStorage.setItem("Yamaha", x);
				}else{
					n = localStorage.getItem("Yamaha");
					n++;
					localStorage.setItem("Yamaha", n);
				}
			break;
	
			case "btn-cbr":
				if(localStorage.getItem("CBR 650F" == null )){
					localStorage.setItem("CBR 650F", x);
				}else{
					n = localStorage.getItem("CBR 650F");
					n++;
					localStorage.setItem("CBR 650F", n);
				}
			break;
		}    
	}

	function loopStorage(){
		var storageCheck = localStorage.length;
	
		if(storageCheck == 0 || storageCheck == null ){
			$("#show-local-storage").css({"display" : "block"});
			$("#show-local-storage").html("<p class='showText2'>There is no order yet. </p>");
			$(".showText").replaceWith("");
		}else{

			//PROBLEM: Shows built-in key value pairs of Local Storage
			// $.each(localStorage, function(key, value){
			// 	//console.log(localStorage.length);
			// 	//console.log(localStorage);
			// 	console.log(value);
			// 	$("#show-local-storage").append(
			// 		"<div class='showText'>" + key + ": " + value + "</div>"
			// 	);
			// 	//console.log(key + " " +  value );
			// });

			$("#show-local-storage").css({"display" : "none"});

			var scount = localStorage.getItem("Scount Sixty Thunder");
			var crf = localStorage.getItem("CRF");
			var g400c= localStorage.getItem("G400C");
			var ghost = localStorage.getItem("Ghost Rider");
			var mesarati = localStorage.getItem("Mesarati");
			var kawasaki = localStorage.getItem("Kawasaki Ninja");
			var pico = localStorage.getItem("Pico Mustang Distress");
			var yamaha = localStorage.getItem("Yamaha");
			var cbr = localStorage.getItem("CBR 650F");
			var total = localStorage.getItem("Total order(s)");

			if( scount !== null){
				$("#show-scount").html("<div class='showText'>Scount Sixty Thunder: &nbsp&nbsp<b>" + scount + "</b></div>");
			}

			if( crf !== null){
				$("#show-crf").html("<div class='showText'>CRF: &nbsp&nbsp<b>" + crf  + "</b></div>");
			}

			if( g400c !== null){
				$("#show-g400c").html("<div class='showText'>G400C: &nbsp&nbsp<b>" + g400c+ "</b></div>");
			}

			if( ghost !== null){
				$("#show-ghost").html("<div class='showText'>Ghost Rider: &nbsp&nbsp<b>" + ghost+ "</b></div>");
			}

			if( mesarati !== null){
				$("#show-mesarati").html("<div class='showText'>Mesarati: &nbsp&nbsp<b>" + mesarati+ "</b></div>");
			}

			if( kawasaki !== null){
				$("#show-kawasaki").html("<div class='showText'>Kawasaki Ninja: &nbsp&nbsp<b>" + kawasaki+ "</b></div>");
			}

			if( pico !== null){
				$("#show-pico").html("<div class='showText'>Pico Mustang Distress: &nbsp&nbsp<b>" + pico + "</b></div>");
			}

			if( yamaha !== null){
				$("#show-yamaha").html("<div class='showText'>Yamaha: &nbsp&nbsp<b>" + yamaha + "</b></div>");
			}

			if( cbr !== null){
				$("#show-cbr").html("<div class='showText'>CBR 650F: &nbsp&nbsp<b>" + cbr + "</b></div>");
			}

			if( total !== null){
				$("#show-total").html("<div class='showText'><br></div><div class='showText showText3'><h5>Total order(s): &nbsp&nbsp" + total + "</h5></div>");
			}
		}
	}
});