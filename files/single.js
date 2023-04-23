
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
        window.addEventListener("scroll",function(){
          let movecontent=document.querySelectorAll(".reveal");
        for(let i=0;i<movecontent.length;i++){
          let windowheight=window.innerHeight;
          let revealtop=movecontent[i].getBoundingClientRect().top;
          let revealpoint=15;
          if(revealtop<windowheight-revealpoint){
            movecontent[i].classList.add("reveal-active")
          }
          else{
            movecontent[i].classList.remove("reveal-active")
          }
        }
        })
        }
        reveal()
            