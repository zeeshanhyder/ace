        
            var navbar = document.getElementById("main-nav");
            var navbarTop = navbar.offsetTop;
            document.addEventListener("scroll", function(){
                
                if( document.body.scrollTop >= navbarTop || document.documentElement.scrollTop >= navbarTop){
                    navbar.className = "main-nav main-nav-sticky";
                }else{
                    
                    navbar.className="";
                    navbar.className = "main-nav main-nav-non-sticky";
                }
            });


var hideOverlay = function(){
    var $overlay = document.querySelector(".mask");
    
    var videoFrame = document.querySelector(".video-content");
    videoFrame.src = "";
    $overlay.classList.add("hide-overlay");
    
}

var loadProject = function(vid){
    var url="https://www.youtube.com/embed/";
    url += vid;
    
    var $overlay = document.querySelector(".mask");
    var videoFrame = document.querySelector(".video-content");
    videoFrame.src = url;
    
    $overlay.classList.remove("hide-overlay");
}