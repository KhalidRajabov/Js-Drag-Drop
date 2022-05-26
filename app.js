const draggable = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(`.container`)

draggable.forEach(draggable=>{
    draggable.addEventListener("dragstart", _=>{
        

    //Sürüşdürdüyüm elementin opasitisini azaldacaq bir class verirəm ki 
    //bilinsin hansı elementi aparıram.    
    draggable.classList.add(`dragging`)
})

    draggable.addEventListener("dragend", _=> {

        //Drag bitəndə opasitini də silirəm.
        draggable.classList.remove(`dragging`)
    })
})

containers.forEach(container=>{
    container.addEventListener("dragover", e=>{
        e.preventDefault();
        //üstündə olduğum konteynerin bilinməsi
        //üçün class verirəm
        container.classList.add("dragover")

        //sürüşdürməkdə olduğum elementi seçirəm
        const draggable = document.querySelector('.dragging')

        //sürüşdürdüyüm elementin ilə konteynerin
        //idlərinin eyni olub olmadğını yoxlayıram.
        let dragged = draggable.getAttribute("id")
        let contId = container.getAttribute("id")
        if (parseInt(dragged)!=parseInt(contId)) {

            //əgər element ilə konteynerin idsi bərabər 
            //deyilsə onda konteynerə qırmızı
            //arxa fon verirəm ki başa düşülsün
            //ki o element bura getməz
            container.classList.add("red")
        }
    })
    container.addEventListener("drop", _=>{
        //yenidən sürüşən elementi, onun idsini və
        //konteynerin idsini götürürəm
        const draggable = document.querySelector('.dragging')
        let dragged = draggable.getAttribute("id")
        let contId = container.getAttribute("id")


        //bir birinə bərabərdirlərsə onda 
        //içinə atmaq olar
        if (parseInt(dragged)==parseInt(contId)) {
            container.append(draggable)
            container.classList.remove("dragover")
        }
        if (parseInt(dragged)!=parseInt(contId)) {
            container.classList.remove("red")
        }

        
        
    })
    //və əgər içəri atmaq olmazsa və
    //curson konteynerdən kənara çıxarsa 
    //onda konteyneri seçərkən yaranan
    // arxa fonu və elementi konteynerə ata
    // bilmədiyimiz zaman yaranan 
    //qırmızı arxa fonu silirik
    
    container.addEventListener("dragleave", _=>{
        container.classList.remove("dragover")
        container.classList.remove("red")
    })
    
    
})
