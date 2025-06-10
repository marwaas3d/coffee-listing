let btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(){
        btns.forEach(function(el){
            el.classList.remove("active")
        })

        this.classList.add("active")
    })
})


/********************************************************* */
let available = document.getElementById("available");
let card = document.querySelectorAll(".card");
let all = document.getElementById("all");
let parent = document.getElementById("parent");

available.addEventListener("click",function(){
    card.forEach((item)=>{
        if(item.innerHTML.includes(`<p class="mb-0 fw-bold sold mt-2">Sold out</p>`)){
        item.parentElement.remove();
        }
    })
})

all.addEventListener("click",function(){
    card.forEach((item)=>{
        parent.appendChild(item.parentElement);
    })
})