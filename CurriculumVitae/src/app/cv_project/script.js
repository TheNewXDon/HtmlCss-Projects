let div = document.querySelector(".all");
let btn = document.querySelector(".download");
btn.addEventListener('click',() =>{
    html2pdf().from(div).save()
})