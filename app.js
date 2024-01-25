let input = document.getElementById("user-text")
let add = document.getElementById("add-btn")
let ul = document.getElementById("Toroli")
let delbtna = document.getElementById("delbtns")
let standartli = document.getElementById("standart-li")

delbtna.addEventListener("click", function(){
    ul.removeChild(standartli)
})

add.addEventListener("click", function(){
    if(input.value.trim() !== "") {
        let li = document.createElement("li")
        li.innerText = input.value
        ul.appendChild(li)
    
        let delbtn = document.createElement("button")
        delbtn.innerHTML = `<i class="trash fa-solid fa-trash"></i>`
        li.appendChild(delbtn)
    
        let liclass = document.createAttribute("class")
        liclass.value = "li-class"
        li.setAttributeNode(liclass)
    
        let delbtnclass = document.createAttribute("class")
        delbtnclass.value = "delbtn"
        delbtn.setAttributeNode(delbtnclass)
    
        delbtn.addEventListener("click", function(){
            ul.removeChild(li)
        })

        input.value = ""
    }
    else {
        alert("Enter Text Please!")
    }
})