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
     window.addEventListener("scroll", () =>{    
     filter.forEach(button => {  
       const rect=button.getBoundingClientRect();   
       if (rect.top < window.innerHeight -100){   
        button.classList.add("animationfilter");  
   }   
       });
             });

const container = document.querySelector('#clients .all-items');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

// نحسب عرض الكارت + المسافة اللي بينهم (gap)
function getItemScrollWidth() {
  const item = container.querySelector('.item');
  const itemStyles = window.getComputedStyle(item);
  const itemMargin = parseFloat(itemStyles.marginRight) || 0; // لو فيه margin
  const gap = parseFloat(window.getComputedStyle(container).gap) || 0;
  return item.offsetWidth + gap + itemMargin;
}

// نحسب اتجاه الصفحة
const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

nextBtn.addEventListener('click', () => {
  const scrollAmount = getItemScrollWidth();
  container.scrollBy({ left: isRTL ? -scrollAmount : scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  const scrollAmount = getItemScrollWidth();
  container.scrollBy({ left: isRTL ? scrollAmount : -scrollAmount, behavior: 'smooth' });
});
