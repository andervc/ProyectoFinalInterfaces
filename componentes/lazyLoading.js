const lazyLoading = ()=>{

const images = document.querySelectorAll('img');

// const lazyImage = (entries, observer) => {
//     entries
//     .filter(entry => entry.isIntersecting)
//     .forEach((entry) => {
//         const img = entry.target;
//         const src = img.getAttribute('data-lazy');

//         img.setAttribute('src', src);
//         observer.disconnect();
//         console.log('load');
//     })
// }

// images.forEach((img) _> {
//     const observer = new IntersectionObserver(lazyImage);
//     observer.observe(img);
// });
const options ={
    threshold: .5
}
const callback = (images, observer)=> {
    images.forEach((entry) =>{
        if(entry.isIntersecting){
            const img= entry.target
            img.setAttribute('src', img.getAttribute('data-lazy'))
            observer.unobserve(img)
        }
    })
}
const observer = new IntersectionObserver(callback, options)
images.forEach(element => observer.observe(element))
}