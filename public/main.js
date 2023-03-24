// slide img
// const nav_dot = document.getElementsByClassName("nav-dot")
// console.log(nav_dot.slice())
// console.log(nav_dot.length.slice())

// for (let i = 0; i < 3; i++) {
//     nav_dot[i].addEventListener('click', function () {
//         const block_flex2 = document.getElementsByClassName('nav-dot-active')[0]
//         block_flex2.classList.remove('nav-dot-active')
//         nav_dot[i].classList.add('nav-dot-active')
//         index = i
//     })
// }
// import { useEffect } from react;

// function MyComponent() {
//   useEffect(() => {
//     // Các hành động của bạn sẽ được thực hiện tại đây
//   });

// }
// let nav_dot
// let index = 0
// setTimeout(() => {
// }, 900);

// document.addEventListener("DOMContentLoaded", function(event) {
//     nav_dot = document.getElementsByClassName("nav-dot")
//     for (let i = 0; i < 3; i++) {
//         console.log(nav_dot[i])
//         nav_dot[i].addEventListener('click', function () {
//             const block_flex2 = document.getElementsByClassName('nav-dot-active')[0]
//             console.log(block_flex2)
//             console.log('hello')
//             block_flex2.classList.remove('nav-dot-active')
//             nav_dot[i].classList.add('nav-dot-active')
//             index = i
//         })
//     }
// });


// var set_time_slide = setInterval(() => {
//     index = (index + 1) % 3
//     nav_dot[index].click();
// }, 3000);


// // menu reponsive
// function click_nav() {
//     var element = document.getElementById("toggle-nav");
//     var displayStyle = window.getComputedStyle(element).getPropertyValue("display");
//     if (displayStyle == "none") {
//         element.style.display = 'flex';
//     } else {
//         element.style.display = "none";
//     }
// }

// // hover brand_products_item
// const brand_products_item = document.getElementsByClassName('brand_products-item');
// const bp_item_bgr = document.getElementsByClassName('bp-item-bgr');
// const bp_item_img = document.getElementsByClassName('bp-item-img');
// for (let i = 0; i < brand_products_item.length; i++) {
//     brand_products_item[i].addEventListener('mouseover', function () {
//         bp_item_bgr[i].classList.add('bp-item-bgr-hover');
//         bp_item_img[i].classList.add('img-hover');
//     });

//     brand_products_item[i].addEventListener('mouseout', function () {
//         bp_item_bgr[i].classList.remove('bp-item-bgr-hover');
//         bp_item_img[i].classList.remove('img-hover');
//     });
// }


// window.addEventListener('scroll', () => {
//     y_scroll = window.scrollY;
//     if (y_scroll == 0) {
//         set_slide_img = setInterval(auto_slide, 3000);
//     }
//     if (y_scroll > 0) {
//         clearInterval(set_slide_img);
//         console.log(set_slide_img);
//     }
// });