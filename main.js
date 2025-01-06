let headerBrand = document.getElementById('header-brand');


const observarHeaderBrand = new IntersectionObserver((element)=>{
    element.forEach(target=>{
        if(target.isIntersecting){
            target.target.classList.add('header-animated')
        }
        else{
            target.target.classList.remove('header-animated')
        }
    })
})

observarHeaderBrand.observe(headerBrand)