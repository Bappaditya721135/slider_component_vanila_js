const allSlider = document.querySelectorAll(".slider")
const rightBtn = document.querySelector(".right-btn")
const leftBtn = document.querySelector(".left-btn")

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


// right click 
rightBtn.addEventListener("click", () => {
    currentSlide++;
    slide(currentSlide)
})


// leftBtn click 
leftBtn.addEventListener("click", () => {
    currentSlide--;
    slide(currentSlide)
})