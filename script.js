const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
    
    button.addEventListener('click', function(e){
//gives the position in x and y axes where we have clicked on the button.
        const x = e.clientX
        const y = e.clientY


//This is used to get the position of the button wrt x and y axes in the viewport.
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft


//calculate where on the button we clicked.
        const xInside = x - buttonLeft
        const yInside = y - buttonTop


//Create a span and add a class of circle
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        this.appendChild(circle)


        //This will clear the DOM
            setTimeout(()=> circle.remove(), 500)
    })
})