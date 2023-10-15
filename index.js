let mainHeader = document.getElementById("mainHeader")
let colors = ["blue", "purple", "chocolate", "orange"]
let counter = 0

function slider() {
    if (counter > colors.length){
        counter = 0
    }
    mainHeader.style.color = colors[counter];
    counter++
}
setInterval(slider, 1000)