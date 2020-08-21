const allFlèches = document.querySelectorAll('visible-panel img');
// const allImg = document.getElementsByTagName('img');

allFlèches.forEach(element => {
    element.addEventListener('click', function() {
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];

        // console.log(this.src);
        if(this.src.includes('flèche bas')) {
            this.src = 'img\top-chevron.png';
            gsap.to(currentChoice, {duration: 0.2, height: height + 32, opacity: 1, padding: '2em 1em'})
        }
        else if(this.src.includes('flèche haut')){
            this.src = 'img\top-chevron.png';
            gsap.to(currentChoice, {duration: 0.2, height: height + 0, opacity: 0, padding: '0em 1em'})
        }
    })
})
