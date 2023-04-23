



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

if(document.readyState="loading"){
  document.addEventListener("DOMContentLoaded", ready)
}
else{
  ready()
}
  function ready(){
    let removebutton=document.getElementsByClassName("cross");
   for(let i=0;i<removebutton.length;i++){
    let button=removebutton[i];
    button.addEventListener("click",removeCartItem)
   }
   var inputValue=document.querySelectorAll(".inp");
   for(let i=0;i<inputValue.length;i++){
    var currentinput=inputValue[i];
   currentinput.addEventListener('change',quantityChanged)
   }
   let total=document.querySelector(".total")
   let confirmed=total.querySelector(".checkout");
   confirmed.addEventListener("click",proceedItem)
  }

  ready()


     function removeCartItem(e) {
     buttonClicked=e.target;
     buttonClicked.parentElement.parentElement.remove();
     updateCartTotal();
     }
    function quantityChanged(e){
      let input=e.target;
      if(isNaN(input.value) ||  input.value<=0){
        input.value=1;
      }
      else{      
        console.log("ac")
      }
      updateCartTotal();
    }
     function proceedItem(e){
      alert("confirmed")
     }
    //update the total price of items
            function updateCartTotal(){
              let total=0;
             let itemcontainer=document.getElementsByClassName("itemcontainer")[0];
            let itemrow=itemcontainer.getElementsByClassName("row");
           for(let i=0; i<itemrow.length;i++){
            let row=itemrow[i];
            let priceElement=row.getElementsByClassName("pp")[0];
            let quantityElement=row.getElementsByClassName("inp")[0];
            let price=parseFloat(priceElement.innerText.replace('$',''));
            let quantity=quantityElement.value;
             total=total+(price*quantity);
             total=Math.round(total*100)/100;
           }
           document.getElementsByClassName("sub")[0].innerText='$'+total;
            }
 
updateCartTotal()