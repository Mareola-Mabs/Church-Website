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


drop_container.addEventListener('click', () => {
    a++;
    burger.classList.toggle('burgeri');
    burger1.classList.toggle('burger1i');
    burger2.classList.toggle('burger2i');

    if (a % 2 == 1) {
        mobile_drop.style.height = "75px";
        burger.style.background = "#FF812F";
        burger2.style.background = "#FF812F";
        mobile_nav.style.right = "0%";
    } else {
        mobile_drop.style.height = "80px";
        burger.style.background = "#201E1E";
        burger2.style.background = "#201E1E";
        mobile_nav.style.right = "-100%";
    }

})

/*End of Hamburger*/

/*For First Slider*/
/*Declaring Variables*/
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var slider_texta = document.getElementById('slider_texta');
var slider_fit = document.getElementById('slider_fit');
var slider_fit1 = document.getElementById('slider_fit1');
var slider_fit2 = document.getElementById('slider_fit2');
var slider_fit3 = document.getElementById('slider_fit3');

/*Declaring Single Variables*/
var b = 0;


/*For the First Button*/
button1.addEventListener('click', function () {
    b++;
    switch (true) {
        case b == 1:
            slider_texta.style.marginTop = "-30px";
            slider_fit.style.top = "-490px";
            slider_fit1.style.top = "0px";
            slider_fit2.style.top = "490px";
            slider_fit3.style.top = "980px";
            button2.disabled = false;
            button2.style.background = "#FF812F";
            button2.style.cursor = "pointer";
            break;

        case b == 2:
            slider_texta.style.marginTop = "-60px";
            slider_fit.style.top = "-980px";
            slider_fit1.style.top = "-490px";
            slider_fit2.style.top = "0px";
            slider_fit3.style.top = "490px";

            break;

        case b == 3:
            slider_texta.style.marginTop = "-90px";
            slider_fit.style.top = "-1470px";
            slider_fit1.style.top = "-980px";
            slider_fit2.style.top = "-490px";
            slider_fit3.style.top = "0px";
            button1.disabled = true;
            button1.style.cursor = "default";
            button1.style.background = "none";
            break;

        default:


    }
});

/*For the Second Button*/

button2.addEventListener('click', function () {
    b--;
    switch (true) {
        case b == 0:
            slider_texta.style.marginTop = "0px";
            slider_fit.style.top = "0px";
            slider_fit1.style.top = "490px";
            slider_fit2.style.top = "9800px";
            slider_fit3.style.top = "1470px";
            button2.disabled = true;
            button2.style.background = "none";
            button2.style.cursor = "default";
            break;

        case b == 1:
            slider_texta.style.marginTop = "-30px";
            slider_fit.style.top = "-490px";
            slider_fit1.style.top = "0px";
            slider_fit2.style.top = "490px";
            slider_fit3.style.top = "980px";
            break;

        case b == 2:
            slider_texta.style.marginTop = "-60px";
            slider_fit.style.top = "-980px";
            slider_fit1.style.top = "-490px";
            slider_fit2.style.top = "0px";
            slider_fit3.style.top = "490px";
            button1.disabled = false;
            button1.style.cursor = "pointer";
            button1.style.background = "#201E1E";
            break;

        default:


    }
});

/*First Slider Onload*/
function sliderme() {
    setInterval(() => {
        b++;
        switch (true) {
            case b == 1:
                slider_texta.style.marginTop = "-30px";
                slider_fit.style.top = "-490px";
                slider_fit1.style.top = "0px";
                slider_fit2.style.top = "490px";
                slider_fit3.style.top = "980px";
                button2.disabled = false;
                button2.style.background = "#FF812F";
                button2.style.cursor = "pointer";
                break;

            case b == 2:
                slider_texta.style.marginTop = "-60px";
                slider_fit.style.top = "-980px";
                slider_fit1.style.top = "-490px";
                slider_fit2.style.top = "0px";
                slider_fit3.style.top = "490px";
                break;

            case b == 3:
                slider_texta.style.marginTop = "-90px";
                slider_fit.style.top = "-1470px";
                slider_fit1.style.top = "-980px";
                slider_fit2.style.top = "-490px";
                slider_fit3.style.top = "0px";
                button1.disabled = true;
                button1.style.cursor = "default";
                button1.style.background = "none";
                break;

            case b == 4:
                slider_texta.style.marginTop = "0px";
                slider_fit.style.top = "0px";
                slider_fit1.style.top = "490px";
                slider_fit2.style.top = "9800px";
                slider_fit3.style.top = "1470px";
                button1.disabled = false;
                button1.style.background = "#201E1E";
                button1.style.cursor = "pointer";
                button2.disabled = true;
                button2.style.background = "none";
                button2.style.cursor = "default";
                b = 0;
                break;

            default:


        }
    }, 4500)
}

/*End of First Slider*/

/*For the Scroll Top Button*/
var scroll_top = document.querySelector('.scroll_top');
var second_header = document.querySelector('.second_header');
var logocol = document.getElementById('logocol');
var small1 = document.querySelector('.small1');
var small2 = document.querySelector('.small2');
var small3 = document.querySelector('.small3');

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        second_header.style.top = "40px";
    } else if (window.innerWidth <= 800) {
        second_header.style.top = "70px";
    } else {}
})

window.onscroll = function () {
    scrollme()
}

function scrollme() {
    if (window.innerWidth > 800 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
        scroll_top.style.right = "10px";
        second_header.style.background = "rgba(255, 255, 255, 0.97)";
        second_header.style.top = "0";
        small1.style.background = "rgba(255, 255, 255, 0.8)";
        small2.style.background = "rgba(255, 255, 255, 0.8)";
        small3.style.background = "rgba(255, 255, 255, 0.8)";
        second_header.style.borderBottom = "1px solid rgba(154, 153, 154, 0.3)";
        logocol.src = "ext/icons/main_logo2.png";

    } else if (window.innerWidth > 800 && (document.body.scrollTop <= 20 || document.documentElement.scrollTop <= 20)) {
        scroll_top.style.right = "-50px";
        second_header.style.background = "";
        small1.style.background = "";
        small2.style.background = "";
        small3.style.background = "";
        second_header.style.top = "40px";
        second_header.style.borderBottom = "";
        logocol.src = "ext/icons/main_logo1.png";
    } else if (window.innerWidth <= 800 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
        scroll_top.style.right = "35px";
        second_header.style.background = "rgba(255, 255, 255, 0.97)";
        second_header.style.top = "0";
        small1.style.background = "rgba(255, 255, 255, 0.8)";
        small2.style.background = "rgba(255, 255, 255, 0.8)";
        small3.style.background = "rgba(255, 255, 255, 0.8)";
        second_header.style.borderBottom = "1px solid rgba(154, 153, 154, 0.3)";
        logocol.src = "ext/icons/main_logo2.png";
    } else if (window.innerWidth <= 800 && (document.body.scrollTop <= 20 || document.documentElement.scrollTop <= 20)) {
        scroll_top.style.right = "-50px";
        second_header.style.background = "";
        small1.style.background = "";
        small2.style.background = "";
        small3.style.background = "";
        second_header.style.top = "70px";
        second_header.style.borderBottom = "";
        logocol.src = "ext/icons/main_logo1.png";
    } else {}
}


/*Scroll Onclick*/
scroll_top.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


/*End of Scroll Top Button*/

/*For Second Slider*/
var sliders = document.getElementById('sliders');
var icona = document.getElementById('icona');
var iconb = document.getElementById('iconb');
var iconc = document.getElementById('iconc');
var icond = document.getElementById('icond');
var icone = document.getElementById('icone');
var iconf = document.getElementById('iconf');

/*Grabing the Icon Button*/
var icona1 = document.getElementById('icona1');
var icona2 = document.getElementById('icona2');

var iconb1 = document.getElementById('iconb1');
var iconb2 = document.getElementById('iconb2');

var iconc1 = document.getElementById('iconc1');
var iconc2 = document.getElementById('iconc2');

var icond1 = document.getElementById('icond1');
var icond2 = document.getElementById('icond2');

var icone1 = document.getElementById('icone1');
var icone2 = document.getElementById('icone2');

var iconf1 = document.getElementById('iconf1');
var iconf2 = document.getElementById('iconf2');
/*End of Grabbing Icon Button*/





icona.addEventListener('click', () => {
    sliders.style.marginLeft = "";
    icona1.style.color = "#FF812F";
    icona2.style.color = "#FF812F";

    iconb1.style.color = "";
    iconb2.style.color = "";

    iconc1.style.color = "";
    iconc2.style.color = "";

    icond1.style.color = "";
    icond2.style.color = "";

    icone1.style.color = "";
    icone2.style.color = "";

    iconf1.style.color = "";
    iconf2.style.color = "";


});

iconb.addEventListener('click', () => {
    sliders.style.marginLeft = "-95vw";
    iconb1.style.color = "#FF812F";
    iconb2.style.color = "#FF812F";

    icona1.style.color = "";
    icona2.style.color = "";

    iconc1.style.color = "";
    iconc2.style.color = "";

    icond1.style.color = "";
    icond2.style.color = "";

    icone1.style.color = "";
    icone2.style.color = "";

    iconf1.style.color = "";
    iconf2.style.color = "";

});

iconc.addEventListener('click', () => {
    sliders.style.marginLeft = "-190vw";
    iconc1.style.color = "#FF812F";
    iconc2.style.color = "#FF812F";

    iconb1.style.color = "";
    iconb2.style.color = "";

    icona1.style.color = "";
    icona2.style.color = "";

    icond1.style.color = "";
    icond2.style.color = "";

    icone1.style.color = "";
    icone2.style.color = "";

    iconf1.style.color = "";
    iconf2.style.color = "";
});

icond.addEventListener('click', () => {
    sliders.style.marginLeft = "-285vw";
    icond1.style.color = "#FF812F";
    icond2.style.color = "#FF812F";

    iconb1.style.color = "";
    iconb2.style.color = "";

    iconc1.style.color = "";
    iconc2.style.color = "";

    icona1.style.color = "";
    icona2.style.color = "";

    icone1.style.color = "";
    icone2.style.color = "";

    iconf1.style.color = "";
    iconf2.style.color = "";

});

icone.addEventListener('click', () => {
    sliders.style.marginLeft = "-380vw";
    icone1.style.color = "#FF812F";
    icone2.style.color = "#FF812F";

    iconb1.style.color = "";
    iconb2.style.color = "";

    iconc1.style.color = "";
    iconc2.style.color = "";

    icond1.style.color = "";
    icond2.style.color = "";

    icona1.style.color = "";
    icona2.style.color = "";

    iconf1.style.color = "";
    iconf2.style.color = "";
});

iconf.addEventListener('click', () => {
    sliders.style.marginLeft = "-475vw";
    iconf1.style.color = "#FF812F";
    iconf2.style.color = "#FF812F";

    iconb1.style.color = "";
    iconb2.style.color = "";

    iconc1.style.color = "";
    iconc2.style.color = "";

    icond1.style.color = "";
    icond2.style.color = "";

    icone1.style.color = "";
    icone2.style.color = "";

    icona1.style.color = "";
    icona2.style.color = "";
});

/*For The Responsiveness*/


icona.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
        sliders.style.marginLeft = "";
        icona1.style.color = "#FF812F";
        icona2.style.color = "#FF812F";

        iconb1.style.color = "";
        iconb2.style.color = "";

        iconc1.style.color = "";
        iconc2.style.color = "";

        icond1.style.color = "";
        icond2.style.color = "";

        icone1.style.color = "";
        icone2.style.color = "";

        iconf1.style.color = "";
        iconf2.style.color = "";
    }

});

iconb.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
        sliders.style.marginLeft = "-115vw";
        iconb1.style.color = "#FF812F";
        iconb2.style.color = "#FF812F";

        icona1.style.color = "";
        icona2.style.color = "";

        iconc1.style.color = "";
        iconc2.style.color = "";

        icond1.style.color = "";
        icond2.style.color = "";

        icone1.style.color = "";
        icone2.style.color = "";

        iconf1.style.color = "";
        iconf2.style.color = "";

    }
});

iconc.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
        sliders.style.marginLeft = "-230vw";
        iconc1.style.color = "#FF812F";
        iconc2.style.color = "#FF812F";

        iconb1.style.color = "";
        iconb2.style.color = "";

        icona1.style.color = "";
        icona2.style.color = "";

        icond1.style.color = "";
        icond2.style.color = "";

        icone1.style.color = "";
        icone2.style.color = "";

        iconf1.style.color = "";
        iconf2.style.color = "";
    }
});

icond.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
        sliders.style.marginLeft = "-345vw";
        icond1.style.color = "#FF812F";
        icond2.style.color = "#FF812F";

        iconb1.style.color = "";
        iconb2.style.color = "";

        iconc1.style.color = "";
        iconc2.style.color = "";

        icona1.style.color = "";
        icona2.style.color = "";

        icone1.style.color = "";
        icone2.style.color = "";

        iconf1.style.color = "";
        iconf2.style.color = "";

    }
});

icone.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
        sliders.style.marginLeft = "-460vw";
        icone1.style.color = "#FF812F";
        icone2.style.color = "#FF812F";

        iconb1.style.color = "";
        iconb2.style.color = "";

        iconc1.style.color = "";
        iconc2.style.color = "";

        icond1.style.color = "";
        icond2.style.color = "";

        icona1.style.color = "";
        icona2.style.color = "";

        iconf1.style.color = "";
        iconf2.style.color = "";
    }
});

iconf.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
        sliders.style.marginLeft = "-575vw";
        iconf1.style.color = "#FF812F";
        iconf2.style.color = "#FF812F";

        iconb1.style.color = "";
        iconb2.style.color = "";

        iconc1.style.color = "";
        iconc2.style.color = "";

        icond1.style.color = "";
        icond2.style.color = "";

        icone1.style.color = "";
        icone2.style.color = "";

        icona1.style.color = "";
        icona2.style.color = "";
    }
});
/*End of Responsiveness*/

/*Slider3*/
var slider3a = document.getElementById('slider3a');
var d = 0;

setInterval(() => {
    d++;
    switch (true) {
        case d == 1:
            slider3a.style.marginLeft = "-142vw";
            break;

        case d == 2:
            slider3a.style.marginLeft = "-283vw";
            break;

        case d == 3:
            slider3a.style.marginLeft = "0px";
            d = 0;
            break;

        default:
    }
}, 4000)

/*End of Slider3*/



/*For The Open and Close of Slider2*/
var openme = document.querySelector('.openme');
var content2 = document.querySelector('.content2');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var projects = document.getElementById('projects');
var abouts = document.getElementById('abouts');
var homes = document.getElementById('homes');
var blogs = document.getElementById('blogs');
var donates = document.getElementById('donates');
var tithes = document.getElementById('tithes');
var offerings = document.getElementById('offerings');
var contacts = document.getElementById('contacts');
var volunteers = document.getElementById('volunteers');
var joins = document.getElementById('joins');

var content444 = document.getElementById('content444');
var openme1 = document.querySelector('.openme1');
var plus1 = document.getElementById('plus1');
var minus1 = document.getElementById('minus1');

var c = 0;

function projectme() {
    c = 1;
    if (c % 2 == 1) {
        content2.style.height = "auto";
        content2.style.overflow = "none";
        content2.style.marginBottom = "8%";
        plus.style.display = "none";
        minus.style.display = "flex";

        homes.style.color = "";
        blogs.style.color = "";
        tithes.style.color = "";
        offerings.style.color = "";
        joins.style.color = "";
        volunteers.style.color = "";
        contacts.style.color = "";
        donates.style.color = "";
        connects.style.color = "";

        projects.style.color = "#FF812F";
        abouts.style.color = "#FF812F";



    } else {}


}

abouts.addEventListener('click', () => {
    homes.style.color = "";
    blogs.style.color = "";
    tithes.style.color = "";
    offerings.style.color = "";
    joins.style.color = "";
    volunteers.style.color = "";
    contacts.style.color = "";
    donates.style.color = "";
    projects.style.color = "";
    connects.style.color = "";


    abouts.style.color = "#FF812F";
})

connects.addEventListener('click', () => {
    homes.style.color = "";
    blogs.style.color = "";
    tithes.style.color = "";
    offerings.style.color = "";
    joins.style.color = "";
    volunteers.style.color = "";
    contacts.style.color = "";
    donates.style.color = "";
    projects.style.color = "";
    abouts.style.color = "";


    connects.style.color = "#FF812F";
})

volunteers.addEventListener('click', () => {
    homes.style.color = "";
    blogs.style.color = "";
    tithes.style.color = "";
    offerings.style.color = "";
    connects.style.color = "";
    contacts.style.color = "";
    donates.style.color = "";
    projects.style.color = "";
    abouts.style.color = "";


    volunteers.style.color = "#FF812F";
    joins.style.color = "#FF812F";
})

contacts.addEventListener('click', () => {
    homes.style.color = "";
    blogs.style.color = "";
    tithes.style.color = "";
    offerings.style.color = "";
    joins.style.color = "";
    volunteers.style.color = "";
    connects.style.color = "";
    donates.style.color = "";
    projects.style.color = "";
    abouts.style.color = "";


    contacts.style.color = "#FF812F";
})


openme.addEventListener('click', () => {
    c++;

    if (c % 2 == 1) {
        content2.style.height = "auto";
        content2.style.overflow = "none";
        content2.style.marginBottom = "8%";
        plus.style.display = "none";
        minus.style.display = "flex";

    } else {
        content2.style.height = "0px";
        content2.style.overflow = "hidden";
        content2.style.marginBottom = "0px";
        plus.style.display = "flex";
        projects.style.color = "";
        projects2.style.color = "";
        minus.style.display = "none";
    }

})
/*End of Open and Close of Slider2*/

/*Open of Donate Div*/
var e = 0;

openme1.addEventListener('click', () => {
    e++;
    if (e % 2 == 1) {
        content444.style.height = "auto";
        content444.style.overflow = "none";
        content444.style.paddingTop = "5%";
        plus1.style.display = "none";
        minus1.style.display = "flex";

    } else {
        content444.style.height = "0px";
        content444.style.paddingTop = "0%";
        content444.style.overflow = "hidden";
        plus1.style.display = "flex";
        minus1.style.display = "none";
        tithes.style.color = "";
        offerings.style.color = "";
        donates.style.color = "";
        homes.style.color = "#FF812F";
        homes2.style.color = "#FF812F";
        donates2.style.color = "";
        tithes2.style.color = "";
        connects.style.color = "";
    }
})

/*Click of Bottom Footer Buttons*/
homes1.addEventListener('click', () => {
    abouts.style.color = "";
    blogs.style.color = "";
    tithes.style.color = "";
    offerings.style.color = "";
    joins.style.color = "";
    volunteers.style.color = "";
    contacts.style.color = "";
    donates.style.color = "";
    projects.style.color = "";
    connects.style.color = "";


    homes.style.color = "#FF812F";
})

abouts1.addEventListener('click', () => {
    homes.style.color = "";
    blogs.style.color = "";
    tithes.style.color = "";
    offerings.style.color = "";
    joins.style.color = "";
    volunteers.style.color = "";
    contacts.style.color = "";
    donates.style.color = "";
    projects.style.color = "";
    connects.style.color = "";


    abouts.style.color = "#FF812F";
})

blogs1.addEventListener('click', () => {
    abouts.style.color = "";
    homes.style.color = "";
    tithes.style.color = "";
    offerings.style.color = "";
    joins.style.color = "";
    volunteers.style.color = "";
    contacts.style.color = "";
    donates.style.color = "";
    projects.style.color = "";
    connects.style.color = "";


    blogs.style.color = "#FF812F";
})

contacts1.addEventListener('click', () => {
    homes.style.color = "";
    blogs.style.color = "";
    tithes.style.color = "";
    offerings.style.color = "";
    joins.style.color = "";
    volunteers.style.color = "";
    connects.style.color = "";
    donates.style.color = "";
    projects.style.color = "";
    abouts.style.color = "";


    contacts.style.color = "#FF812F";
})

donates1.addEventListener('click', () => {
    e = 1;
    if (e % 2 == 1) {
        content444.style.height = "auto";
        content444.style.paddingTop = "5%";
        content444.style.overflow = "none";
        plus1.style.display = "none";
        minus1.style.display = "flex";

        homes.style.color = "";
        blogs.style.color = "";
        abouts.style.color = "";
        joins.style.color = "";
        volunteers.style.color = "";
        contacts.style.color = "";
        projects.style.color = "";
        connects.style.color = "";


        tithes.style.color = "#FF812F";
        offerings.style.color = "#FF812F";
        donates.style.color = "#FF812F";


    } else {}
})
/*End of Bottom Footer Buttons*/

/*Clicking Donate, Tithes and Offering Nav*/
tithes.addEventListener('click', () => {
    e = 1;
    if (e % 2 == 1) {
        content444.style.height = "auto";
        content444.style.paddingTop = "5%";
        content444.style.overflow = "none";
        plus1.style.display = "none";
        minus1.style.display = "flex";

        homes.style.color = "";
        blogs.style.color = "";
        abouts.style.color = "";
        joins.style.color = "";
        volunteers.style.color = "";
        contacts.style.color = "";
        projects.style.color = "";
        connects.style.color = "";


        tithes.style.color = "#FF812F";
        offerings.style.color = "#FF812F";
        donates.style.color = "#FF812F";



    } else {}
})


offerings.addEventListener('click', () => {
    e = 1;
    if (e % 2 == 1) {
        content444.style.height = "auto";
        content444.style.paddingTop = "5%";
        content444.style.overflow = "none";
        plus1.style.display = "none";
        minus1.style.display = "flex";

        homes.style.color = "";
        blogs.style.color = "";
        abouts.style.color = "";
        joins.style.color = "";
        volunteers.style.color = "";
        contacts.style.color = "";
        projects.style.color = "";
        connects.style.color = "";


        tithes.style.color = "#FF812F";
        offerings.style.color = "#FF812F";
        donates.style.color = "#FF812F";


    } else {}
})


homes.addEventListener('click', () => {
    abouts.style.color = "";
    blogs.style.color = "";
    tithes.style.color = "";
    offerings.style.color = "";
    joins.style.color = "";
    volunteers.style.color = "";
    contacts.style.color = "";
    donates.style.color = "";
    projects.style.color = "";
    connects.style.color = "";


    homes.style.color = "#FF812F";
})

blogs.addEventListener('click', () => {
    abouts.style.color = "";
    homes.style.color = "";
    tithes.style.color = "";
    offerings.style.color = "";
    joins.style.color = "";
    volunteers.style.color = "";
    contacts.style.color = "";
    donates.style.color = "";
    projects.style.color = "";
    connects.style.color = "";


    blogs.style.color = "#FF812F";
})

/*For Keep_Writing*/
var keep_writing = document.getElementById('keep_writing');
var keep_writing1 = document.getElementById('keep_writing1');
var keep_writing2 = document.getElementById('keep_writing2');

setInterval(() => {
    setTimeout(() => {
        keep_writing.innerText = "S|";
        keep_writing1.innerText = "O|";
        keep_writing2.innerText = "C|";
    }, 200);

    setTimeout(() => {
        keep_writing.innerText = "Sa|";
        keep_writing1.innerText = "Ou|";
        keep_writing2.innerText = "Co|";
    }, 400);

    setTimeout(() => {
        keep_writing.innerText = "Say|";
        keep_writing1.innerText = "Our|";
        keep_writing2.innerText = "Con|";
    }, 600);

    setTimeout(() => {
        keep_writing.innerText = "Say ";
        keep_writing1.innerText = "Our ";
        keep_writing2.innerText = "Con";
    }, 800);

    setTimeout(() => {
        keep_writing.innerText = "Say |";
        keep_writing1.innerText = "Our |";
        keep_writing2.innerText = "Con|";
    }, 1000);

    setTimeout(() => {
        keep_writing.innerText = "Say ";
        keep_writing1.innerText = "Our ";
        keep_writing2.innerText = "Con";
    }, 1200);

    setTimeout(() => {
        keep_writing.innerText = "Say |";
        keep_writing1.innerText = "Our |";
        keep_writing2.innerText = "Con|";
    }, 1400);

    setTimeout(() => {
        keep_writing.innerText = "Say ";
        keep_writing1.innerText = "Our ";
        keep_writing2.innerText = "Con";
    }, 1600);

    setTimeout(() => {
        keep_writing.innerText = "Say |";
        keep_writing1.innerText = "Our |";
        keep_writing2.innerText = "Con|";
    }, 1800);

    setTimeout(() => {
        keep_writing.innerText = "Say ";
        keep_writing1.innerText = "Our ";
        keep_writing2.innerText = "Cona|";
    }, 2000);

    setTimeout(() => {
        keep_writing.innerText = "Say H|";
        keep_writing2.innerText = "Cona|";
    }, 2400);

    setTimeout(() => {
        keep_writing.innerText = "Say He|";
        keep_writing2.innerText = "Conat|";
    }, 2600);

    setTimeout(() => {
        keep_writing.innerText = "Say Hel|";
        keep_writing1.innerText = "Our G|";
        keep_writing2.innerText = "Conat";
    }, 2800);

    setTimeout(() => {
        keep_writing.innerText = "Say Hell|";
        keep_writing1.innerText = "Our Gr|";
        keep_writing2.innerText = "Conat|";
    }, 3000);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello|";
        keep_writing1.innerText = "Our Gro|";
        keep_writing2.innerText = "Cona|";
    }, 3200);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello |";
        keep_writing1.innerText = "Our Grou|";
        keep_writing2.innerText = "Con|";
    }, 3400);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello ";
        keep_writing1.innerText = "Our Group|";
        keep_writing2.innerText = "Cont|";
    }, 3600);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello |";
        keep_writing1.innerText = "Our Group|";
        keep_writing2.innerText = "Cona|";
    }, 3800);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello ";
        keep_writing1.innerText = "Our Group";
        keep_writing2.innerText = "Contac|";
    }, 4000);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello |";
        keep_writing2.innerText = "Contact|";
    }, 4200);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello ";
        keep_writing2.innerText = "Contacts|";
    }, 4400);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello |";
        keep_writing2.innerText = "Contacts";
    }, 4600);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello t|";
        keep_writing2.innerText = "Contacts|";
    }, 5000);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello to|";
        keep_writing2.innerText = "Contacts";
    }, 5200);

    setTimeout(() => {
        keep_writing.innerText = "Say Hello to";
        keep_writing2.innerText = "Contacts";
    }, 5200);

    setTimeout(() => {
        keep_writing.innerText = "";
        keep_writing1.innerText = "";
        keep_writing2.innerText = "";
    }, 6500);


}, 8000);

/*For Rotation of Content7*/
if (window.innerWidth > 1100) {
    var $sun = $('.sun');
    var $win = $(window);

    $win.on('scroll', () => {
        var top = $win.scrollTop() / 10;
        $sun.css('transform', 'rotate(' + top + 'deg)')
        console.log(top);
    })
} else {}

/*For Mobile Navigation*/
var abouts2 = document.getElementById('abouts2');
var homes2 = document.getElementById('homes2');
var projects2 = document.getElementById('projects2');
var blogs2 = document.getElementById('blogs2');
var connects2 = document.getElementById('connects2');
var donates2 = document.getElementById('donates2');
var tithes2 = document.getElementById('tithes2');
var contacts2 = document.getElementById('contacts2');
var volunteers2 = document.getElementById('volunteers2');

homes2.addEventListener('click', () => {
    abouts2.style.color = "";
    projects2.style.color = "";
    blogs2.style.color = "";
    connects2.style.color = "";
    donates2.style.color = "";
    tithes2.style.color = "";
    contacts2.style.color = "";
    volunteers2.style.color = "";

    homes2.style.color = "#FF812F";

})

abouts2.addEventListener('click', () => {
    homes2.style.color = "";
    projects2.style.color = "";
    blogs2.style.color = "";
    connects2.style.color = "";
    donates2.style.color = "";
    tithes2.style.color = "";
    contacts2.style.color = "";
    volunteers2.style.color = "";

    abouts2.style.color = "#FF812F";


})

blogs2.addEventListener('click', () => {
    homes2.style.color = "";
    projects2.style.color = "";
    abouts2.style.color = "";
    connects2.style.color = "";
    donates2.style.color = "";
    tithes2.style.color = "";
    contacts2.style.color = "";
    volunteers2.style.color = "";

    blogs2.style.color = "#FF812F";


})

connects2.addEventListener('click', () => {
    homes2.style.color = "";
    projects2.style.color = "";
    abouts2.style.color = "";
    blogs2.style.color = "";
    donates2.style.color = "";
    tithes2.style.color = "";
    contacts2.style.color = "";
    volunteers2.style.color = "";

    connects2.style.color = "#FF812F";


})

volunteers2.addEventListener('click', () => {
    homes2.style.color = "";
    projects2.style.color = "";
    abouts2.style.color = "";
    blogs2.style.color = "";
    donates2.style.color = "";
    tithes2.style.color = "";
    contacts2.style.color = "";
    connects2.style.color = "";

    volunteers2.style.color = "#FF812F";


})

projects2.addEventListener('click', () => {
    c = 1;
    if (c % 2 == 1) {
        content2.style.height = "auto";
        content2.style.overflow = "none";
        content2.style.marginBottom = "8%";
        plus.style.display = "none";
        minus.style.display = "flex";

        homes2.style.color = "";
        abouts2.style.color = "";
        blogs2.style.color = "";
        connects2.style.color = "";
        donates2.style.color = "";
        tithes2.style.color = "";
        contacts2.style.color = "";
        volunteers2.style.color = "";

        projects2.style.color = "#FF812F";

    } else {}
})

donates2.addEventListener('click', () => {
    e = 1;
    if (e % 2 == 1) {
        content444.style.height = "auto";
        content444.style.paddingTop = "5%";
        content444.style.overflow = "none";
        plus1.style.display = "none";
        minus1.style.display = "flex";

        homes2.style.color = "";
        abouts2.style.color = "";
        blogs2.style.color = "";
        connects2.style.color = "";
        projects2.style.color = "";
        tithes2.style.color = "";
        contacts2.style.color = "";
        volunteers2.style.color = "";

        donates2.style.color = "#FF812F";

    } else {}
})

tithes2.addEventListener('click', () => {
    e = 1;
    if (e % 2 == 1) {
        content444.style.height = "auto";
        content444.style.paddingTop = "5%";
        content444.style.overflow = "none";
        plus1.style.display = "none";
        minus1.style.display = "flex";

        homes2.style.color = "";
        abouts2.style.color = "";
        blogs2.style.color = "";
        connects2.style.color = "";
        projects2.style.color = "";
        contacts2.style.color = "";
        volunteers2.style.color = "";

        donates2.style.color = "#FF812F";
        tithes2.style.color = "#FF812F";

    } else {}
})


/*End of Mobile Navigation*/