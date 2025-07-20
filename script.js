//smooth scrolling

document.querySelectorAll('a[href^="#"').forEach(anchor=>{
    anchor.addEventListener('click',function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

//navbar scroll effect
window.addEventListener('scroll',()=>{
    const navbar=document.querySelector('.navbar');
    window.scrollY>50? navbar.style.backgroundColor='rgba(10,10,10,0.98)':
    navbar.style.backgroundColor='rgba(10,10,10,0.95)';
})