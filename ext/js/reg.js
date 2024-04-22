/*For the Mobile Hamburger*/
    /*Declaring Variables*/
    var drop_container = document.querySelector('.drop_container');
    var mobile_drop = document.querySelector('.mobile_drop');
    var burger = document.querySelector('.burger');
    var burger1 = document.querySelector('.burger1');
    var burger2 = document.querySelector('.burger2');
    var mobile_nav = document.querySelector('.mobile_nav');

    /*Declaring Single Variables*/
    var a = 0;


    drop_container.addEventListener('click',()=>{
        a++;
        burger.classList.toggle('burgeri'); 
        burger1.classList.toggle('burger1i'); 
        burger2.classList.toggle('burger2i'); 

        if (a%2 == 1){
            mobile_drop.style.height = "75px";
            burger.style.background ="#FF812F";
            burger2.style.background ="#FF812F";
            mobile_nav.style.right ="0%";
        }
        else{mobile_drop.style.height = "80px";
        burger.style.background ="#201E1E";
        burger2.style.background ="#201E1E";
        mobile_nav.style.right ="-100%";}

    })

/*End of Hamburger*/

/*For the Scroll Top Button*/
var scroll_top = document.querySelector('.scroll_top');
var second_header = document.querySelector('.second_header');
var logocol = document.getElementById('logocol');
var small3 = document.querySelector('.small3');

window.addEventListener('resize', ()=>{
    if (window.innerWidth > 800){
        second_header.style.top ="40px";
    }

   else if (window.innerWidth <= 800){
        second_header.style.top ="70px";
    }
    else{}
})


window.onscroll = function(){scrollme()}

function scrollme(){
    if (window.innerWidth > 800 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)){
        scroll_top.style.right ="10px";
        second_header.style.background ="rgba(255, 255, 255, 0.97)";
        small3.style.background = "rgba(255, 255, 255, 0.8)";
        second_header.style.top ="0";
        second_header.style.borderBottom ="1px solid rgba(154, 153, 154, 0.3)";
        logocol.src ="icons/main_logo2.png";

    }

    else if (window.innerWidth > 800 && (document.body.scrollTop <= 20 || document.documentElement.scrollTop <= 20)){
        scroll_top.style.right ="-50px";
        second_header.style.background ="";
        small3.style.background = "";
        second_header.style.top ="40px";
        second_header.style.borderBottom ="";
        logocol.src ="icons/main_logo1.png";
    }

  else if (window.innerWidth <= 800 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)){
        scroll_top.style.right ="20px";
        second_header.style.background ="rgba(255, 255, 255, 0.97)";
        small3.style.background = "rgba(255, 255, 255, 0.8)";
        second_header.style.top ="0";
        second_header.style.borderBottom ="1px solid rgba(154, 153, 154, 0.3)";
        logocol.src ="icons/main_logo2.png";  
    }

    else if (window.innerWidth <= 800 && (document.body.scrollTop <= 20 || document.documentElement.scrollTop <= 20)){
        scroll_top.style.right ="-50px";
        second_header.style.background ="";
        small3.style.background = "";
        second_header.style.top ="70px";
        second_header.style.borderBottom ="";
        logocol.src ="icons/main_logo1.png";
    }

    else{}
}


    /*Scroll Onclick*/
    scroll_top.addEventListener('click', ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    
/*End of Scroll Top Button*/

/*For The Register Form*/
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var submit1 = document.getElementById('submit1');
var form_flex = document.querySelector('.form_flex');

next.addEventListener('click', ()=>{
    form_flex.style.marginLeft ="-100%";
    next.style.cursor ="not-allowed";
    next.style.opacity ="40%";
    next.disabled = true;

    prev.style.cursor ="default";
    prev.style.opacity ="100%";
    prev.disabled = false;
    submit1.style.cursor ="pointer";
    submit1.style.opacity ="100%";
    submit1.disabled = false;
})

prev.addEventListener('click', ()=>{
    form_flex.style.marginLeft ="0%";
    next.style.cursor ="default";
    next.style.opacity ="100%";
    next.disabled = false;

    prev.style.cursor ="not-allowed";
    prev.style.opacity ="40%";
    prev.disabled = true;

    submit1.style.cursor ="not-allowed";
    submit1.style.opacity ="40%";
    submit1.disabled = true;


})

/*End of Register Form*/

/*For Form Submit*/

/*End of Form Submit*/