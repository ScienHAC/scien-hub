let type_script = document.createElement('script');
type_script.setAttribute('type', 'text/javascript');
type_script.setAttribute('src', 'https://s3.amazonaws.com/myadvobuck/static/libs/typed.min.js');
document.head.appendChild(type_script);
var typed = new Typed('.type_ty', {  
    strings: [  
        "Welcome to ScienHAC",  
        "Learn coding",  
        "machine learning",  
        "web development",  
        "ethical hacking",  
        "and other awesome useful content :) "
        ],  
    typeSpeed: 15,  
    backSpeed: 10,  
    loop: true,  
    showCursor: false,  
    backDelay: 1500,  
   });  
