var more = document.querySelectorAll('.more')

more.forEach((more_single) => {
    more_single.addEventListener('click', function () {
        more_single.parentNode.classList.toggle('active')
    })
})