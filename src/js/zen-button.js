const ripple = (e) => {
    let button = e.currentTarget,
        circle = document.createElement('span'),
        diameter = Math.max(button.clientWidth, button.clientHeight),
        radius = diameter / 2,
        vpOffset = button.getBoundingClientRect()

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.pageX - scrollX - (vpOffset.left + radius)}px`
    circle.style.top = `${e.pageY - scrollY - (vpOffset.top + radius)}px`
    circle.classList.add('ripple')

    const ripple = button.querySelector('.ripple')

    ripple && ripple.remove()

    button.insertAdjacentElement('afterbegin', circle)
}

const ZenButton = () => {
    const buttons = document.querySelectorAll('.btn--ripple')

    for (const button of buttons) {
        button.addEventListener('click', ripple)
    }
}

export {
    ZenButton
}
