const filterbuttons =document.querySelectorAll(".filter-buttons button");
 const categories=document.querySelectorAll(".items .item");
   filterbuttons.forEach(button=> { 
    button.addEventListener("click",()=>{      
    const filter =button.dataset.filter
      categories.forEach(category =>{             
        if(filter==="all"){               
          category.style.display="";     
                                }       
      else if (category.classList.contains(filter)){               
          category.style.display="";    
        
        }       
        else{         
                category.style.display="none";   
             }   
            }); 
             });
             }); 

const filter =document.querySelectorAll(".filter-buttons button");
const items=document.querySelector(".items");
     window.addEventListener("scroll", () =>{    
     filter.forEach(button => {  
       const rect=button.getBoundingClientRect();   
       if (rect.top < window.innerHeight -100){   
        button.classList.add("animationfilter"); 
        items.classList.add("animationfilter"); 
   }   
       });
             });

const container = document.querySelector('#clients .all-items');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  const scrollAmount = 300; 

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

const menu = document.getElementById("mobile-menu");
const menubtn= document.getElementById("menu-icon");
const menua =document.querySelectorAll(".mobile-menu a");
const icon = document.querySelector("#menu-icon i");
const animation ="animation-menu";
menubtn.addEventListener("click", () => {
 if (menu.style.display === "flex") {
    menu.style.display = "none";
    menua.forEach(link =>{link.style.display="none"});
  }
  else {
    menu.style.display = "flex";
    menua.forEach(link =>{link.style.display="flex"});
    menu.classList.add(animation);
  }
})  
menua.forEach(link => {
  link.style.display = "flex";
  
  link.addEventListener("click", () => {
    menu.style.display = "none";
    icon.style.color="var(--primary-color)";
  });
});
