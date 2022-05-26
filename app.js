const draggable = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(`.container`)

// draggable.forEach(item=>{
//     item.addEventListener("dragstart")
//     console.log("started");
// })



draggable.forEach(draggable=>{
    draggable.addEventListener("dragstart", ev=>{
    console.log("dragging")
    
    draggable.classList.add(`dragging`)
})
    draggable.addEventListener("dragend", _=> draggable.classList.remove(`dragging`))
})

containers.forEach(container=>{
    container.addEventListener("dragover", e=>{
        e.preventDefault();
        container.classList.add("dragover")
    })
    container.addEventListener("drop", _=>{
        const draggable = document.querySelector('.dragging')
        let dragged = draggable.getAttribute("id")
        let contId = container.getAttribute("id")
        if (parseInt(dragged)==parseInt(contId)) {
            container.append(draggable)
        }
        
    })
    container.addEventListener("dragleave", _=>container.classList.remove("dragover"))
    
})
