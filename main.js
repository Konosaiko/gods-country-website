var isActive = false;

$('.menu').on('click', function() {
    if (isActive){
        $(this).removeClass('active');
        $('body').removeClass('menu-open');
    } else {
        $(this).addClass('active');
        $('body').addClass('menu-open');
    }

    isActive = !isActive
})

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

const allCross = document.querySelectorAll('.visible-pannel img');
console.log(allCross);


allCross.forEach(element => {

    element.addEventListener('click', function(){

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];

        // console.log(this.src);
        if(this.src.includes('croix')){
            this.src = '/ressources/minus.svg';
            gsap.to(currentChoice, {duration: 0.2, height: height + 40, opacity: 1, padding: '20px 15px'})
        } else if (this.src.includes('minus')){
            this.src = '/ressources/croix__100185.svg';
            gsap.to(currentChoice, {duration: 0.2, height: 0, opacity: 0, padding: '0px 15px'})
        }
        
    })

})

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++) {
    toggles[i].addEventListener('click', ()=>{
        
        if(parseInt(contentDiv[i].style.height)
        != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight +"px"
            toggles[i].style.color = "#0084e9";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
            toggles[j].style.color = "#111130";
            icons[j].classList.remove('fa-minus');
            icons[j].classList.add('fa-plus');
            }
        }
    })
}




