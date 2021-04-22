const lazyLoading = ()=>{

const images = document.querySelectorAll('img');

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