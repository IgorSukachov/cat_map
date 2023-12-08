window.onload = function () {
    document.querySelector('.arrow-down').onclick = function () {
        document.querySelector('.description').classList.toggle('hide')
        document.querySelector('#close-arrow').classList.toggle('close')
    }
}