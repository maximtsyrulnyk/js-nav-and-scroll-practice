window.buttonScroll.onclick = () => 
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
setInterval(() => {
    if (
        window.scrollY > window.innerHeight && isDisplay === false
    ) {
        isDisplay = true
        window.buttonScroll.style.display = 'flex'

        return 
    }

    if (
        window.scrollY <= window.innerHeight && isDisplay === true
    ) {
        isDisplay = false

        window.buttonScroll.style.display = 'none'

        return 
    }
}, 500)