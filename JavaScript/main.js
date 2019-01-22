
document.addEventListener('DOMContentLoaded', function(){

/* Sticky Top Nav when scrolled */

var navbar = document.querySelector('.navbar');
var navTop = navbar.offsetTop;

function myFunction(){
  
	if(window.scrollY >= navTop) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

window.addEventListener('scroll', myFunction)


/* Add to cart Function */

/*
var cartBtn = document.getElementById("cart-btn");
var cartIcon = document.getElementById('shopping-cart');
var notifyIcon = document.getElementById('notification');
var clickCount = 0;

document.addEventListener('click', function(event){
			        clickCount += 1;

			localStorage.setItem('clicks', clickCount);
			
			//const clicks = localStorage.getItem('clicks');
  if (event.target.classList.contains( 'add-items' ) ) {
       
        notifyIcon.style.display = "block";
        notifyIcon.innerHTML = clickCount;
        notifyIcon.className = "notify";
        
    }

});

*/





var cartBtn = document.querySelectorAll('.add-items');
//var clickCount = 0;
var notifyIcon = document.getElementById('notification');
var test = document.getElementById('test');

//notifyIcon.innerHTML = "";
cartBtn.forEach(function(btn){
	
	btn.addEventListener('click', function(event){
		
		event.preventDefault();
		
		//localStorage.setItem('clicks', clickcount.value);
		
		if(localStorage.clickcount){
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		} else {
			localStorage.clickcount = 1;
		}
		
				
        //var itemName = event[0].previousElementSibling.previousElementSibling.innerHTML;
       var itemName = event.target.previousElementSibling.previousElementSibling.innerHTML;
       
       //console.log(itemName);
       //test.innerHTML = itemName;
       
       //this generates alert everytime the item is added to the cart
       alert("You have " + itemName + " in your cart.");
       
       // calling the notifcation display function
       displayNotification();
       
       
       //displaying cart in the cart page
       const cartInfo = document.createElement('div');
       cartInfo.classList.add('row');
       cartInfo.innerHTML = "hey";
       
       
	});
});

//this below if statement is to make the notification display even after refreshing the page using local storage
		if (localStorage.clickcount >= 1){
			notifyIcon.style.display = "block";
			notifyIcon.innerHTML = localStorage.clickcount;
			notifyIcon.className = "notify"; 
			
		}
		
// notification display function
function displayNotification(){
	
		if (localStorage.clickcount >= 1){
			notifyIcon.style.display = "block";
			notifyIcon.innerHTML = localStorage.clickcount;
			notifyIcon.className = "notify"; 
			
		}
		else {
						notifyIcon.innerHTML = "click";

		}
};

/* Quick View Modal usign JS createEelement -- does not open the modal*/



/*
	var modalBtn = document.querySelector('.btn-modal');
	var modalWindow = document.createElement("div");
	var modalContent = document.createElement("div")
	var contentDetails = document.querySelector('.content-details');
	var content = document.createTextNode("");
	//var finalContent = modalWindow.appendChild(content);
	

	modalBtn.addEventListener('click', function(event){
	if(event.target.classList.contains('btn-modal')){
		var content = document.createTextNode(event.target.textContent);
		modalWindow.classList.add("modal"); //adding style to modal window
		modalContent.classList.add("modal-content"); //adding style to modal content box
		modalContent.appendChild(content);
		modalWindow.appendChild(modalContent);

		console.log(modalWindow);
	}
	
}, false);
	
	
});
*/

	var modalBtn = document.querySelectorAll('.btn-modal');
	var modal = document.querySelector('.modal-window');
	var close = document.querySelectorAll('.close');
	
/* displays the modal when btn is clicked */	
	modalBtn.forEach(function(btn)
	{
		btn.addEventListener('click', function(event){
			
			let modalContainer = this.parentNode.parentNode.nextElementSibling;
			
			modalContainer.style.display = "block";
/*
			for(let i = 0; i < modal.length; i++){
				modal[i].style.display = "block";
				console.log(modal[0]);
			}
*/
			
			
		
		});

	});
	
/* hides the modal when the close btn is clicked */
close.forEach(function(closeBtn){
	closeBtn.addEventListener('click', function(){
		
		var modalContainer = this.parentNode.parentNode;
			
		modalContainer.style.display = "none";
	});
});


/* Displaying cart info in Cart page 
const name = document.querySelectorAll('.content-text');
const price = document.querySelector('.item-price').innerHTML;
const finalPrice = price.slice(1)
console.log(finalPrice);
console.log(name[0].innerHTML);


const cartInfo = document.createElement('div');
cartInfo.classList.add('row');
*/
});
