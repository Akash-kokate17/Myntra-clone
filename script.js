const cartCount=document.getElementById("cart-count")

const addToCart =document.getElementsByClassName("add-to-cart")

for(i=0; i<addToCart.length; i++)
{
    addToCart[i].onclick=function(){
        cartCount.innerHTML=Number(cartCount.innerHTML)+1
    }
}

cartCount.style.fontSize="30px"