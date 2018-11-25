/*
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
 
function poll(){
    document.getElementById("pollit").innerHTML = "polling";
}


function filterSelection(c){
    var filter, i;
    filter = documet.getElementsByClassName("list-group-item");
    if ()
} */

/* Add to cart Function */


/*var cartBtn = document.getElementById("cart-btn");
var cartIcon = document.getElementById('shopping-cart');
var notifyIcon = document.getElementById('notification');
var clickCount = 0;

document.addEventListener('click', function(event){
  if (event.target.classList.contains( 'add-items' ) ) {
        clickCount += 1;
       
        notifyIcon.style.display = "block";
        notifyIcon.innerHTML = clickCount;
        notifyIcon.className = "badge";
        
    }
});

*/

var cartBtn = document.querySelectorAll('.add-items');
//var clickCount = 0;
var notifyIcon = document.getElementById('notification');
var test = document.getElementById('test');

notifyIcon.innerHTML = "";
cartBtn.forEach(function(btn){
	
	btn.addEventListener('click', function(event){
		
		event.preventDefault();
		
		if(localStorage.clickcount){
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		} else {
			localStorage.clickcount = 1;
		}
		
				
        //var itemName = event[0].previousElementSibling.previousElementSibling.innerHTML;
       var itemName = event.target.previousElementSibling.previousElementSibling.innerHTML;
       
       console.log(itemName);
       test.innerHTML = itemName;
       
       displayNotification();
	});
});

function displayNotification(){
	
		if (localStorage.clickcount >= 1){
			notifyIcon.style.display = "block";
			notifyIcon.innerHTML = localStorage.clickcount;
			notifyIcon.className = "notify"; 
			
		}
}


