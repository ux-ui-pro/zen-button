function createRipple(e) {
    let button = e.currentTarget,
        circle = document.createElement('span'),
        diameter = Math.max(button.clientWidth, button.clientHeight),
        radius = diameter / 2,
        vpOffset = button.getBoundingClientRect()

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.pageX - scrollX - (vpOffset.left + radius)}px`
    circle.style.top = `${e.pageY - scrollY - (vpOffset.top + radius)}px`
    circle.classList.add('ripple')

    let ripple = button.querySelector('.ripple')

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
