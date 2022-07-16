const pAll = document.querySelectorAll('p')


pAll.forEach(function(p) {
    if (p.textContent.toLowerCase().includes("the")){
        p.remove()
    }
})