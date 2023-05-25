const containers  =  document.querySelectorAll(".container")


for (const container of containers){
    container.addEventListener('click', function onClick(){
        console.log(container)
    })
}