const sections = document.querySelectorAll("section");
const nextButton = document.querySelectorAll("#next");
const previousButton = document.querySelectorAll("#previous");
const sidebarTag = document.querySelectorAll("ul>li");

// remove hovering effect of side bar li

const removeHovering = () => {
    for(var i = 0; i < sidebarTag.length; i++){
        sidebarTag[i].classList.remove("hovering_li");
    }
}

// jumping to the next section
const proceedNext = (prev,next) => {
    prev.style.display = "none";
    next.style.display ="block";
    
}

// displaying personal information

nextButton[0].addEventListener("click", () => {
    proceedNext(sections[0],sections[1]);
    removeHovering();
    sidebarTag[1].classList.add("hovering_li");
})


// jumping to the previous section

const goBack = (prev,next) =>{
     next.style.display = "none";
     prev.style.display = "block";
}

// moving back to personal information from organization

previousButton[0].addEventListener("click", () => {
    goBack(sections[0],sections[1]);
    removeHovering();
    sidebarTag[0].classList.add("hovering_li");
    
})

// moving to third section [payment mode]

nextButton[1].addEventListener("click",() => {
    proceedNext(sections[1],sections[2]);
    removeHovering();
    sidebarTag[2].classList.add("hovering_li");
})


// moving back to previous section [organization]

previousButton[1].addEventListener("click", () => {
    goBack(sections[1],sections[2]);
    removeHovering()
    sidebarTag[1].classList.add("hovering_li");
})

// moving to password

nextButton[2].addEventListener("click", () => {
    proceedNext(sections[2],sections[3]);
    removeHovering();
    sidebarTag[3].classList.add("hovering_li");
})

// moving to payment 

previousButton[2].addEventListener("click",() => {
    goBack(sections[2],sections[3]);
    removeHovering();
    sidebarTag[2].classList.add("hovering_li");
})