const arrow = document.querySelector(".arrow");
const userInfo = document.querySelector(".user-info");
const socialMedia = document.querySelector(".social-media");
const media = document.querySelector(".media");
const socialMediaDesktop = document.querySelector(".social-media.desktop");
//-----------------------------

socialMedia.style.display = "none";
socialMediaDesktop.style.visibility = "hidden";


arrow.addEventListener("click", ()=> {
    
    if (window.innerWidth < 670){
        if (socialMedia.style.display == "none"){
        userInfo.style.display = "none";
        socialMedia.style.display = "flex";
        media.style.backgroundColor = "hsl(217, 19%, 35%)";
        arrow.classList.add("active");
        }else{
            socialMedia.style.display = "none";
            userInfo.style.display = "block";
            media.style.backgroundColor = "white";
            arrow.classList.remove("active");
        }
    }
    
    else{
        if(socialMediaDesktop.style.visibility == "hidden"){
            socialMediaDesktop.style.visibility = "visible";
            socialMediaDesktop.style.opacity = "1";
            arrow.classList.add("active");
        }else{
            socialMediaDesktop.style.visibility = "hidden";
            socialMediaDesktop.style.opacity = "0";
            arrow.classList.remove("active");
        }
    }
})

window.addEventListener("resize", ()=> {
    if(window.innerWidth > 670){
        socialMedia.style.display = "none";
        userInfo.style.display = "block";
        media.style.backgroundColor = "white";
        arrow.classList.remove("active");
    }
})