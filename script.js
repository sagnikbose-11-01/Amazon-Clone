

const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");


let n = 0;


function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none"; //setting the display of all the slide images to none 
    }
    imgs[n].style.display = "block"; // showing only one image at a time by displaying it when its index is equal to 'n'
}

changeSlide();

prev_btn.addEventListener("click", (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener("click", (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})



const scrollContainer = document.querySelectorAll(".products")

for(const item of scrollContainer){

    item.addEventListener("wheel", (evt)=>{
        evt.preventDefault(); //The evt.preventDefault() function is used to prevent the default behavior associated with an event from occurring.
        
        item.scrollLeft += evt.deltaY; // it enables horizontal scrolling of the element (item) in response to vertical mouse wheel movements.
    })
}