
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
  
//addto
  // function addto(){
  //   const addto=document.querySelectorAll(".addto")
  //   addto.forEach(add=>{
  //     add.addEventListener("click",()=>{
        
  //     })
  //   })
  // }
   ///////////////////////////////////////////CCCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRRRRRRRRRRRRRTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT////////////////////////
   let addtocart=document.getElementsByClassName("AllcartItem");
   let cartContainer=document.getElementsByClassName('cart-container')[0];
   let remove=document.querySelectorAll('.remove');
   let noOFQuant=document.querySelectorAll('.qnt');
   let cartTotals=document.getElementsByClassName('cartTotals')[0];
     
   const shopping=document.querySelector(".shopicon")
   let cartItemIncrease=document.getElementsByClassName('cartItemIncrease')[0];
   let increase=parseInt(cartItemIncrease.innerText);
   increase=0;//show the number of items aed to the cart
 let btm=document.getElementsByClassName('bottom-container')[0];
 let totalamnt=document.getElementsByClassName("total-amt")[0];
 let amounttobeshow=totalamnt.getElementsByClassName('text')[3];
 let amounttotal=amounttobeshow.getElementsByClassName('subTotals')[0]
 let amountactual=parseFloat(amounttotal.innerText.replace('$',''))
 let checkout=document.querySelector(".checkout")
 console.log(amountactual)
 btm.style.display="none"
 
 
 checkout.addEventListener('click',function proceed(){
     if(amounttotal.innerText=="$ 0"){
       console.log(checkout)
       alert('please add something')
     }
     else{
       
       alert('successfully')
       amounttotal.innerText="$ 0"
     }
   }
 )
   //close
   function close(){
     const close=document.querySelector(".close");
     const cart=document.querySelector(".cart");
     const shopping=document.querySelector(".shopicon")
     close.addEventListener("click", ()=>{
       cart.classList.remove("cartShow")
       cart.classList.toggle("cartAnimate")
       shopping.style.display="block"
       cartItemIncrease.style.display="block"
       updateCartTotals()
     })
     shopping.addEventListener("click",()=>{
       cart.classList.add("cartShow")
       cart.classList.toggle("cartAnimate")
       shopping.style.display="none"
       cartItemIncrease.style.display="none"
       updateCartTotals()
     })
   }
 
 
 
   // let downContent=document.getElementsByClassName('down-content')[0];
   // let proceedItem=downContent.getElementsByClassName('checkout')[0];
   // let createdDiv=downContent.getElementsByClassName('createdDiv')
   // proceedItem.addEventListener('click,'proceed)
   // function proceed(){
   //   if(cartContainer.hasChildNodes()){
   //     alert('thank you')
   //     cartContainer.remove(cartContainer.lastElementChild)
   //   }
   //   cartItemIncrease.style.display="none";
   //   addedtoCart()
   //   updateCartTotals()
   //   removeFromCart()
   // }
   
 
 for(let i=0; i<remove.length; i++){
   remove[i].addEventListener('click',removeFromCart);
 }
 for(let i=0; i<noOFQuant.length; i++){
 noOFQuant[i].addEventListener('change', quantityChanged)
 }
 for(let i=0;i<addtocart.length;i++){
   let adding=addtocart[i].getElementsByClassName('adding')
   for(let i=0; i < adding.length; i++){
     adding[i].addEventListener('click', addedtoCart);  
    }
 }
 
   function addedtoCart(event){  
     btm.style.display="block"
     close(); 
     shopping.style.display="block"
     let added=event.target;
    let itemRow=added.parentElement.parentElement;
    let imageElement=itemRow.getElementsByClassName('cartimage')[0].src;
    let priceElement=itemRow.getElementsByClassName('price')[0].innerText;
    let headingElement=itemRow.getElementsByClassName('heading')[0].innerText;
    updateTOCArt(imageElement,priceElement,headingElement)
    increase++//increase the number of item as soon as hit the add to cart button
    cartItemIncrease.style.display="block";
    cartItemIncrease.innerText=increase;
   }
   function updateTOCArt(imageElement,priceElement,headingElement){
    let newDiv=document.createElement('div');    
    newDiv.className='createdDiv'
    
    let cartItems=document.getElementsByClassName('cart-container')[0]
    let cartRow=`<div class="cart-items targeted">
    <div class="remove">Remove</div>
    <div class="product"><img src="${imageElement}">
    <div class="heading">${headingElement}</div></div>
    <div class="price">${priceElement}</div>
    <div class="quantity"><input type="number" class="qnt" value="1"></div>
 </div>`
    newDiv.innerHTML=cartRow;
    cartItems.append(newDiv);
    newDiv.getElementsByClassName('remove')[0].addEventListener('click',removeFromCart)
    newDiv.getElementsByClassName('qnt')[0].addEventListener('change',quantityChanged)
   }
 
 
   function quantityChanged(event){
     let inputchanged=event.target;
     if(isNaN(inputchanged.value) || inputchanged.value<=1){
       inputchanged.value=1;
     }
     updateCartTotals()
   }
 
 function removeFromCart(event){
   let removed=event.target;
   removed.parentElement.parentElement.remove()
   updateCartTotals()
   increase--//decrease the number of item as soon as hit the add to cart button
   cartItemIncrease.innerText=increase
   cartItemIncrease.style.display='none'
   shopping.style.display="none"
 }
 
 
 function updateCartTotals(){
   let total=0;
   let cartContainer=document.getElementsByClassName('cart-container')[0]
   let cartRow=cartContainer.getElementsByClassName('targeted');
   let Subtotal=document.getElementsByClassName('subTotals')[0];
   for(i=0; i<cartRow.length; i++){
     let currentcartRow= cartRow[i];
     let quantityofProduct=currentcartRow.getElementsByClassName('qnt')[0].value;
     let priceOfProduct=currentcartRow.getElementsByClassName('price')[0];
     let amount=parseFloat(priceOfProduct.innerText.replace('$', ''));
    total=total+(amount*quantityofProduct);
   }
   total=Math.round(total*100)/100;
   Subtotal.innerText=`$ ${total}`;
 }
 
 