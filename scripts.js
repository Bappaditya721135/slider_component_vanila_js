const allSlider = document.querySelectorAll(".slider")
const rightBtn = document.querySelector(".right-btn")
const leftBtn = document.querySelector(".left-btn")
const dotBtnParent = document.querySelector(".dot-btns")

// adding translate property to all slider 

// allSlider.forEach((slide, i) => {
//     slide.style.transform = `translateX(${100 * i}%)`
// })


// let currentSlide = 0;
// const maxSlide = allSlider.length;


// const transform = (activeSlide) => {
//     console.log(activeSlide)
//     if(activeSlide === maxSlide) {
//         currentSlide = 0
//     }
//     if(activeSlide < 0) {
//         currentSlide = 3;
//     }

//     allSlider.forEach((el, i) => {
//         el.style.transform = `translateX(${100 * (i - currentSlide)}%)`
//     })
// }
// // right arrow btn functionality 

// rightBtn.addEventListener("click", () => {
//     currentSlide++;
//     transform(currentSlide)
// })


// // left arrow btn functionality 
// leftBtn.addEventListener("click", () => {
//     currentSlide--;
//     transform(currentSlide)
// })

// -100 0 100 200
// 0 100 200 300

let currentSlide = 0;


// asigning initial translate values 
allSlider.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * i}%)`
})


// slide function 
const slide = (activeSlide) => {
    if(activeSlide< 0) {
        currentSlide = 3;
    }
    if(activeSlide > 3) {
        currentSlide = 0;
    }
    allSlider.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`
    })
}


// checking which dot is active 
const activeDot = (activeElement) => {
    const activeDot = activeElement + 1;
    const allDots = document.querySelectorAll(".dot-btn")
    allDots.forEach(dot => {
        dot.classList.remove("active-dot-btn")
    })
    document.querySelector(`.dot-btn-${activeDot}`).classList.add("active-dot-btn")

}



// right click 
rightBtn.addEventListener("click", () => {
    currentSlide++;
    slide(currentSlide)
    activeDot(currentSlide)
})


// leftBtn click 
leftBtn.addEventListener("click", () => {
    currentSlide--;
    slide(currentSlide)
    activeDot(currentSlide)
})



// dot btn functionality 
dotBtnParent.addEventListener("click", (e => {
    if(!e.target.classList.contains("dot-btn")) return;
    currentSlide = Number(e.target.dataset.index)
    slide(currentSlide)
    activeDot(currentSlide)
}))


// slider arrow button function 
document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowRight") {
        currentSlide++;
        slide(currentSlide)
        activeDot(currentSlide)
    }
    if(e.key === "ArrowLeft") {
        currentSlide--;
        slide(currentSlide)
        activeDot(currentSlide)
    }
})



// automatic slider functionality 
setInterval(() => {
    currentSlide++;
    slide(currentSlide)
    activeDot(currentSlide)
}, 2000)