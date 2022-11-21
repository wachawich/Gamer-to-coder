window.onload = function() { //only Javascript no framework
    //scroll function
    { 
        const navbar = document.getElementById("navbar");
        
        const text_movement = document.getElementsById("text_movement");

        window.addEventListener('scroll',() => {
            const scrolled = window.scrollY;
    
            if(scrolled >= 100){
                navbar.classList.add("fiexd");
            }else {
                navbar.classList.remove("fiexd");
            }
            
            
            if(scrolled >= 1400){
                text_movement.classList.add("movementfade");
            }else {
                text_movement.classList.remove("movementfade");
            }
            
            console.log(scrolled);
            
        });
    
    }

        
    console.log(scrolled);
}