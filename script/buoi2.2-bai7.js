document.addEventListener("DOMContentLoaded", () => {
    const ratingBoxes = document.querySelectorAll(".rating__review"),
          
          ratingPopup = document.querySelector("#rating-popup"),
          contentPopup = document.querySelector(".popup__content"),
          
          ownerText = document.querySelector("#text"),
          ownerName = document.querySelector("#name"),
          ownerSite = document.querySelector("#site"),

          closePopup = document.querySelector(".popup__close");
    
    ratingBoxes.forEach(box => {        
        box.addEventListener("click", (el) => {                        
            ratingPopup.classList.add("active");

            // Display animations
            contentPopup.classList.add("zoomIn");                        
            contentPopup.classList.remove("zoomOut");

            
            const boxContent = {
                text: box.childNodes[1].innerText,
                name: box.childNodes[3].children[0].innerText,
                site: box.childNodes[3].children[1].innerText
            }
            
            ownerText.innerHTML = boxContent.text;
            ownerName.innerHTML = boxContent.name;
            ownerSite.innerHTML = boxContent.site;
        })        
    })

    closePopup.addEventListener("click", (el) => {
        if(ratingPopup.classList.contains("active")) {
            // Display animations
            contentPopup.classList.add("zoomOut");                        
            contentPopup.classList.remove("zoomIn");

            const time = 600;

            setTimeout(() => {
                ratingPopup.classList.remove("active")                                
            }, time)            
        }
            
    })
})