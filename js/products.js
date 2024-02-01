var productsContainer = document.querySelector(".sec8 .products")
var products = [
    {id:1 ,imageUrl:"images/item(ring)1.jpg", star:"New", category:"Ring", color:"Yellow Gold", price:"5800",cart:""},
    {id:2 ,imageUrl:"images/item(earing)1.jpg", star:"", category:"Earring", color:"Yellow Gold", price:"7900",cart:""},
    {id:3 ,imageUrl:"images/item(necklace)1.jpg", star:"Best-seller", category:"Necklace", color:"Yellow Gold", price:"6750",cart:""},
    {id:4 ,imageUrl:"images/item(bracelet)1.jpg", star:"Best-seller", category:"Bracelet", color:"Yellow Gold", price:"5250",cart:""},
    {id:5 ,imageUrl:"images/item(necklace)2.jpg", star:"", category:"Necklace", color:"White Gold", price:"9790",cart:""},
    {id:6 ,imageUrl:"images/item(earing)2.jpg", star:"Best-seller", category:"Earring", color:"Yellow Gold", price:"17565",cart:""},
    {id:7 ,imageUrl:"images/item(ring)2.jpg", star:"", category:"Ring", color:"White Gold", price:"20640",cart:""},
    {id:8 ,imageUrl:"images/item(bracelet)2.jpg", star:"New", category:"Bracelet", color:"Multicolor Gold", price:"17670",cart:""},
    {id:9 ,imageUrl:"images/item(earing)3.jpg", star:"Best-seller", category:"Earring", color:"White Gold", price:"39200",cart:""},
    {id:10 ,imageUrl:"images/item(bracelet)3.jpg", star:"", category:"Bracelet", color:"Multicolor Gold", price:"11520",cart:""},
    {id:11 ,imageUrl:"images/item(ring)3.jpg", star:"New", category:"Ring", color:"White Gold", price:"13150",cart:""},
    {id:12 ,imageUrl:"images/item(necklace)3.jpg", star:"New", category:"Necklace", color:"Multicolor Gold", price:"30845",cart:""}
    
]
var showenProducts=[];
var favArray=[] ;
var cartArray = [];
function drawProducts(Products){
    productsContainer.innerHTML = ` `
    showenProducts= Products
    showenProducts.map((product)=>{
        productsContainer.innerHTML +=  `
        <div class="sec8-item">
          <div class="item-img">
            <img src="${product.imageUrl}" alt="${product.category}" width="100%" height="100%">
            <div class="item-overlay py-2">
              <div class="item-prop d-flex justify-content-between ">
                <span class="badge">${product.star}</span>
                <a class="px-2 item-icons"><i class="fas fa-heart icon-fill" onclick="faviroteFilledPress(${product.id})" ></i><i class="far fa-heart icon-empty" onclick="faviroteEmptyPress(${product.id})"></i></a>
              </div>
              <div class="item-buttons d-flex justify-content-between px-1">
                <button class="btn btn-dark mt-1 btn-cart" onclick="changeAdd(${product.id})">Add To Cart</button>
                <button class="btn btn-outline-dark mt-1 btn-buy ">Buy Now</button>
              </div>
              
            </div>
          </div>
          <div class="item-info ps-1 pb-1">
            <h5 class="mt-2 Category" >${product.category}</h3>
            <p class="color ">${product.color}</p>
            <P class="price">${product.price} EGP</P>
  
          </div>
        </div>`
    })

    if(localStorage.getItem("favArray")===""||localStorage.getItem("favArray")===null){
      localStorage.setItem("favArray",favArray)
    }
    else{
      favArray = localStorage.getItem("favArray").split(",")
      favArray.map((id)=>{
        fillFavorite(Number(id),showenProducts)
      })

    }

    if(localStorage.getItem("cartArray")===""||localStorage.getItem("cartArray")===null){
      localStorage.setItem("cartArray",cartArray)
    }
    else{
      cartArray = localStorage.getItem("cartArray").split(",")
      cartArray.map((id)=>{
        setAddState(Number(id), showenProducts)
      })

    }
    
 
}

window.addEventListener("load", drawProducts(products))

// window load ////////////////////////////////////////////////////////////////////////////////

var signinCheck;
function checked(){
    if(localStorage.getItem("email")==="" || localStorage.getItem("email")===null){
        window.location = "login.html"
        signinCheck=0
    
    }
    else{
        signinCheck=1
    }
}
function fillFavorite(i,showenProducts){
  let index = showenProducts.map((product)=> product.id).indexOf(i)
  if(index!==-1){
    document.querySelectorAll(".icon-empty")[index].style.display ="none"
    document.querySelectorAll("i.icon-fill")[index].style.display ="inline"  
  
  }
  
}

function faviroteEmptyPress(i){
  checked()
  if(signinCheck==1){
    fillFavorite(i, showenProducts)
    favArray.push(i)
    localStorage.setItem("favArray",favArray)
  }
    
    
}
function faviroteFilledPress(i){
  let index = showenProducts.map((product)=> product.id).indexOf(i)
  document.querySelectorAll(".icon-empty")[index].style.display ="inline"
  document.querySelectorAll("i.icon-fill")[index].style.display ="none"  
  favArray.splice(favArray.indexOf(String(i)),1)
  localStorage.setItem("favArray",favArray)

}
// favirote button ///////////////////////////////////////////////////////////////////

var cartBadge = document.querySelector(".badge-cart")

function setAddState(i,showenProducts){
  let index = showenProducts.map((product)=> product.id).indexOf(i)
  if(index!==-1){
    document.querySelectorAll(".btn-cart")[index].innerHTML= "Remove"
    document.querySelectorAll(".btn-cart")[index].classList.remove("btn-dark");
    document.querySelectorAll(".btn-cart")[index].classList.add("btn-danger");
    cartBadge.innerHTML = cartArray.length
    cartBadge.style.display="block"

  }  

}
function changeAdd(i){
  checked()
  let index = showenProducts.map((product)=> product.id).indexOf(i)
  if(document.querySelectorAll(".btn-cart")[index].innerHTML==="Add To Cart"){
    setAddState(i,showenProducts)
    cartArray.push(i)
    localStorage.setItem("cartArray",cartArray)
    cartBadge.innerHTML = cartArray.length
    cartBadge.style.display="block"

  }
  else{
    document.querySelectorAll(".btn-cart")[index].innerHTML= "Add To Cart"
    document.querySelectorAll(".btn-cart")[index].classList.add("btn-dark");
    document.querySelectorAll(".btn-cart")[index].classList.remove("btn-danger");
    cartArray.splice(cartArray.indexOf(String(i)),1)
    localStorage.setItem("cartArray",cartArray)
    cartBadge.innerHTML = cartArray.length
  }

}
// add cart ///////////////////////////////////////////////////////////////////////

var targetProducts

function getOption() {
  var sortedproducts=[]
  var selectElementCategory = document.querySelector( `#category`);
  var selectElementColor = document.querySelector( `#color`);
  var selectElementSort = document.querySelector( `#sort`);

  var selectedCategory = selectElementCategory.options[selectElementCategory.selectedIndex].value;
  var selectedColor = selectElementColor.options[selectElementColor.selectedIndex].value;
  var selectedSort = selectElementSort.options[selectElementSort.selectedIndex].value;


  if(selectedCategory!=="All Categories"&&selectedColor!=="All Colors"){
    targetProducts= products.filter((product)=>product.category===selectedCategory && product.color===selectedColor)
  }
  else if(selectedCategory==="All Categories"&&selectedColor==="All Colors"){
    targetProducts = products
  }
  else{
    targetProducts= products.filter((product)=>product.category===selectedCategory || product.color===selectedColor)
  }

  switch(selectedSort){
    case "New":
      var filteredProducts= targetProducts.filter((product)=> product.star==="New" )
      var restProducts= targetProducts.filter((product)=> product.star!=="New" )
      targetProducts=filteredProducts.concat(restProducts) 
      break;

    case "Best-seller":
      var filteredProducts= targetProducts.filter((product)=> product.star==="Best-seller" )
      var restProducts= targetProducts.filter((product)=> product.star!=="Best-seller" )
      targetProducts=filteredProducts.concat(restProducts) 
      break;
    
    case "desPrice":
      var prices = targetProducts.map((product)=> product.price)
      var sortedprices= prices.sort((x,y)=>x-y)
      for(let i=0; i<sortedprices.length;i++){
        sortedproducts.push(targetProducts.find((product)=>product.price===sortedprices[i])) 
      }
      targetProducts = sortedproducts
      break;
    
    case "AcePrice":
      var prices = targetProducts.map((product)=> product.price)
      var sortedprices= prices.sort((x,y)=>y-x)
      for(let i=0; i<sortedprices.length;i++){
        sortedproducts.push(targetProducts.find((product)=>product.price===sortedprices[i])) 
      }
      targetProducts = sortedproducts

      break;

    default:
      targetProducts= targetProducts

  }
  drawProducts(targetProducts)  
}

// sort products /////////////////////////////////////////////////////////////////