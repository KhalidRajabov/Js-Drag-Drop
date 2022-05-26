const draggable = document.querySelectorAll(`.draggable`)
const containers = document.querySelectorAll(`.container`)


draggable.forEach(draggable=>{
    draggable.addEventListener("dragstart", ()=>{console.log("dragging")
    draggable.classList.add(`dragging`)
})
    draggable.addEventListener("dragend", ()=> draggable.classList.remove(`dragging`))
})

containers.forEach(container=>{
    container.addEventListener("dragover", ()=>{
        container.classList.add("dragover")
    })
    container.addEventListener("dragleave", ()=>container.classList.remove("dragover"))
    
})