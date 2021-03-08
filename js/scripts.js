jQuery( document ).ready(function() {

    $(function() { // Shorthand for $(document).ready(function() { 
        $('.nav li').click(function() { 
            $('.nav li').removeClass('active');  
            $(this).addClass('active'); 
            console.log("hi");
        });
    });

    $('<nav class="navbar-light navbar-expand-lg navbar-fixed-top " style="background: #FFFFFF;  z-index: 9999; border-bottom: black solid 1px; padding: 10px">'+
        '<img src="images/Sammy3.jpg" alt="140x140" style="width:35px"></img><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span></button>'+
        '<div class="collapse navbar-collapse" id="navbarSupportedContent" style="float:right">'+
        '<ul class="navbar-nav mr-auto">'+
            '<li class="nav-item active"> <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a> </li>'+
            '<li class="nav-item"> <a class="nav-link" href="dogs.html">Dogs <span class="sr-only">(current)</span></a> </li>'+
            '<li class="nav-item"> <a class="nav-link" href="updates.html">Updates <span class="sr-only">(current)</span></a> </li>'+
            '<li class="nav-item dropdown">'+
            '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> More&nbsp;&nbsp; </a>'+
            '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
                '<a class="dropdown-item" href="faq.html">FAQ</a><a class="dropdown-item" href="resources.html">Resources</a> <a class="dropdown-item" href="about.html">About Us</a>'+
            '</div>'+
            '</li>'+
        '</ul>'+
        '</div>'+
    '</nav>').appendTo('.customNav');


});

