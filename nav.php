<div class="logo" style="height: 100px;">
    <center>
    <a href="index.html"><img src="logo.png" alt="get gorgeous" width="380px" style="margin-top: -100px;" ></a>
    </center>
</div>


<nav class="navbar navbar-expand-sm"> 
    <div class="container-fluid">
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a class="sidelinks" href="#"><i class="fa fa-user iconnav" aria-hidden="true"></i>&nbsp;My Account</a>
            <a class="sidelinks" href="#"> <i class="fa fa-heart-o iconnav" aria-hidden="true"></i>&nbsp;My Wish List</a>
            <a class="sidelinks" href="#"><i class="fa fa-shopping-cart iconnav" aria-hidden="true"></i>&nbsp;My Cart</a>
            <a href=""><button style="margin: 5px 10px 0px 0px;" class="btn btn-outline-danger btn-lg" type="submit">Take a Poll</button></a>
        </div>
        <div id="main">
            <span style="font-size:20px; color: white; cursor:pointer" onclick="openNav()">&#9776;</span>
        </div>
        
<!-- Toggler/collapsibe Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon">Menu</span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link" href="index.php">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown" data-toggle="dropdown" href="shop.html">Shop</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="eyes.php">Eyes</a>
                        <a class="dropdown-item" href="lips.php">Lips</a>
                        <a class="dropdown-item" href="face.php">Face</a>
                    </div>
                </li>
                <!--
                <li class="nav-item">
                  <a class="nav-link" href="categories.html">Categories</a>
                </li>
                -->
                <li class="nav-item">
                    <a class="nav-link" href="brand.html">Brand</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact Us</a>
                </li>
                
             </ul>
        </div>
            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item cart" id="shopping-cart">
                  <a class="nav-link tool"  href="cart.php" data-toggle="tooltip" data-placement="bottom" title="My Cart">
	                  <i class="fa fa-shopping-basket fa-2x navIcon" aria-hidden="true"></i>
 
	              </a>
	                  <span id="notification"></span>
                 
                </li>
                <li class="nav-item">
                  <a class="nav-link tool" href="favorite.html" data-toggle="tooltip" data-placement="bottom" title="Favorites"><i class="fa fa-heart-o fa-2x navIcon" aria-hidden="true"></i></a>
                </li>
            </ul>   
       
    </div>
</nav>
 
 