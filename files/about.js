
//dropdownmenu of header to display it flex from none and vise versa
function dropmenu(){
    const drop=document.querySelector(".dropd");
    const list=document.querySelector(".dropd ul");
    drop.addEventListener("mouseover",()=>{
      list.classList.add("shownav");
      list.style.display="flex"
    })
    drop.addEventListener("mouseout",()=>{
      list.style.display="none"
      })
    }
    dropmenu()
    
    
    //toggle reaction
    const lists=document.querySelector(".lists")
    const list=document.querySelector(".headerItems")
    const toggle=document.querySelector(".header .items")
    const moveline=document.querySelector(".toggle")
    const alllist=document.querySelector(".allList")
    const move=document.querySelector(".b")
    function show(){
    toggle.addEventListener("click",()=>{
      alllist.classList.toggle("slowin")
      moveline.classList.toggle("add")
      if(lists.style.display==="flex"){
        lists.classList.toggle("slowin")
        lists.style.display="none"
      }else{
        lists.style.display="flex";
        lists.classList.toggle("slowin")
      }
    })
    list.addEventListener("mouseleave",()=>{
      moveline.classList.remove("add")
    })
    }
    show();
    
    //navigation behavior on scroll
    function visible(){
    var previousScroll = window.scrollY;//0
    let header=document.querySelector(".header")
    window.addEventListener("scroll",()=>{
    let currentScroll = window.scrollY;
      if (previousScroll > currentScroll) {// 13>0
        header.style.top = "0px";
        header.style.position="fixed"
      } else {
        header.style.top = "-100px";
      }
      previousScroll = currentScroll;//previousScroll=0, currentScroll=
    })
    }
    visible()
    
    function reveal(){
      let movecontent=document.querySelectorAll(".reveal");
      let innerheight=window.innerHeight;
      movecontent.forEach(cont=>{
        let elementpos=cont.getBoundingClientRect().top;
        if(elementpos<=innerheight){
          cont.classList.add("reveal-active")
        }
      })
      }
      document.addEventListener("DOMContentLoaded", reveal);
  
  window.addEventListener('scroll', reveal);  
//number increasing
function numberinc(){
    window.addEventListener("scroll",()=>{
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // The lower the slower
  counters.forEach(counter => {
      function updateCount(){
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
  
          // Lower inc to slow and higher to slow
          const inc = target / speed;
  
          // console.log(inc);
          // console.log(count);
  
          // Check if target is reached
          if (count < target) {
              // Add inc to count and output in counter
              counter.innerText = count + inc;
              // Call function every ms
              setTimeout(updateCount)
          } else {
              counter.innerText = target;
          }
      }
      updateCount();
  })
  })
  }
  numberinc()
  