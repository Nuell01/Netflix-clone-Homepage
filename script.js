const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

const scrollAmount = 220;

next.addEventListener("click", () => {
     carousel.scrollBy({
    left: carousel.clientWidth,
    behavior: "smooth"
     });
});

prev.addEventListener("click", () => {
    carousel.scrollBy({
    left: -carousel.clientWidth,
    behavior: "smooth"
  });
})



accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        //selecting the accordion-item-header which currently have active and store it into the variable
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");

     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader){
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     }
        
     accordionItemHeader.classList.toggle("active");
      
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     
     if(accordionItemHeader.classList.contains("active")){
     
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
     
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});


