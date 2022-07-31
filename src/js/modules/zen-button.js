function createRipple(e) {
    let button = e.currentTarget

    let circle = document.createElement('span')
    let diameter = Math.max(button.clientWidth, button.clientHeight)
    let radius = diameter / 2

    let vpOffset = button.getBoundingClientRect()

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.pageX - scrollX - (vpOffset.left + radius)}px`
    circle.style.top = `${e.pageY - scrollY - (vpOffset.top + radius)}px`
    circle.classList.add('ripple')

    let ripple = button.querySelectorAll('.ripple')[0]

    if (ripple) {
        ripple.remove()
    }

    button.insertAdjacentElement('afterbegin', circle)
}

export function ZenButton() {
    let buttons = document.querySelectorAll('.btn--ripple')

    for (let button of buttons) {
        button.addEventListener('click', createRipple)
    }
}


