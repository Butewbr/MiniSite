/*icon toggle*/ 
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
//console.log(toggle);

for (const element of toggle)
{
    element.addEventListener("click", function() 
    {
        nav.classList.toggle("show");
    });
}

/*menu item click*/
const links = document.querySelectorAll("nav ul li a");

for(const link of links)
{
    link.addEventListener("click", function()
    {
        nav.classList.remove("show");
    })
}

//mudar header da pagIna quando der scroll
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll()
{
    if(window.scrollY >= navHeight)
    {
        header.classList.add("scroll");
    }
    else 
    {
        header.classList.remove("scroll");
    }
}

/*TESTIMONIALS CAROUSEL SLIDER SWIPER*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    //mousewheel: true,
    keyboard: true,
    breakpoints:
    {
        767: 
        {
            slidesPerView: 2,
            setWrapperSize: true
        },
        1200:
        {
            slidesPerView: 3,
            setWrapperSize: true
        }
    }
  });

  /*SCROLL REVEAL*/
  const scrollReveal = ScrollReveal(
{
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
    breakpoints:
    {
        1200:
        {
            distance: `60px`
        }
    }
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonial,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, {interval: 100})

/*BACK TO TOP BUTTON*/
const backToTopButton = document.querySelector(".back-to-top");

function backToTop()
{
    if(window.scrollY >= 560)
    {
        backToTopButton.classList.add("show");
    }
    else
    {
        backToTopButton.classList.remove("show");
    }
}

/*active section*/
const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for(const section of sections)
    {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
        
        if(checkpointEnd && checkpointStart){
            document.querySelector("nav ul li a[href*=" + sectionId + ']')
            .classList.add("active");
        }
        else
        {
            document.querySelector("nav ul li a[href*=" + sectionId + ']')
            .classList.remove("active");
        }
    }
}

window.addEventListener("scroll", function()
{
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
});

