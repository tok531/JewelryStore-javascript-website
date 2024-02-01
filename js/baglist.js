var flagEmpty = document.querySelector(".flagemtybag")
var bagProducts = document.querySelector(".bag-products")
var subTotalPrice = document.querySelector(".sec10")

var products = [
    {id:"1" ,imageUrl:"images/item(ring)1.jpg", star:"New", category:"Ring", color:"Yellow Gold", price:"5800",cart:""},
    {id:"2" ,imageUrl:"images/item(earing)1.jpg", star:"", category:"Earring", color:"Yellow Gold", price:"7900",cart:""},
    {id:"3" ,imageUrl:"images/item(necklace)1.jpg", star:"Best-seller", category:"Necklace", color:"Yellow Gold", price:"6750",cart:""},
    {id:"4" ,imageUrl:"images/item(bracelet)1.jpg", star:"Best-seller", category:"Bracelet", color:"Yellow Gold", price:"5250",cart:""},
    {id:"5" ,imageUrl:"images/item(necklace)2.jpg", star:"", category:"Necklace", color:"White Gold", price:"9790",cart:""},
    {id:"6" ,imageUrl:"images/item(earing)2.jpg", star:"Best-seller", category:"Earring", color:"Yellow Gold", price:"17565",cart:""},
    {id:"7" ,imageUrl:"images/item(ring)2.jpg", star:"", category:"Ring", color:"White Gold", price:"20640",cart:""},
    {id:"8" ,imageUrl:"images/item(bracelet)2.jpg", star:"New", category:"Bracelet", color:"Multicolor Gold", price:"17670",cart:""},
    {id:"9" ,imageUrl:"images/item(earing)3.jpg", star:"Best-seller", category:"Earring", color:"White Gold", price:"39200",cart:""},
    {id:"10" ,imageUrl:"images/item(bracelet)3.jpg", star:"", category:"Bracelet", color:"Multicolor Gold", price:"11520",cart:""},
    {id:"11" ,imageUrl:"images/item(ring)3.jpg", star:"New", category:"Ring", color:"White Gold", price:"13150",cart:""},
    {id:"12" ,imageUrl:"images/item(necklace)3.jpg", star:"New", category:"Necklace", color:"Multicolor Gold", price:"30845",cart:""} 
]

function checkbag(){
    if(localStorage.getItem("cartArray")===null || localStorage.getItem("cartArray")===""){
        flagEmpty.classList.remove("d-none")
        flagEmpty.style.display ="block"

    }
    else{
        bagProducts.classList.remove("d-none")
        bagProducts.style.display ="block"
        subTotalPrice.classList.remove("d-none")
        var productsId = localStorage.getItem("cartArray").split(",")
        drawProducts(productsId)
    }
}
window.addEventListener("load",checkbag)

// window-load ///////////////////////////////////////////////////////////

var totalprice= document.querySelector("p.totalprice-data")
var price;

async function drawProducts(ProductsId){
    var i=0
    let showenProducts=[]
    price= 0
    bagProducts.innerHTML = ` `

    for(let i=0; i< ProductsId.length; i++){
        showenProducts.push(products.find((product)=> product.id===ProductsId[i])) 
    }

    showenProducts.map((product)=>{
        bagProducts.innerHTML +=  `
     <div class="bag-item d-flex p-4 mb-3">
        <div class="bag-item-img">
            <img src=${product.imageUrl} alt="" width="100%" height="100%">
        </div>
        <div class="bag-item-info mx-3 row">
            <p class="col-6">${product.category}</p>
            <p class="col-6">${product.price} EGP</p>
            <p class="small-p text-secondary">${product.color}</p>
            <button class="btn btn-dark mt-4 removeBtn" onclick="confirmMessage(${i})" >remove</button>
        </div>

        <div class="confirmMessage d-none p-5 m-auto">
          <p>you will remove this product from the cart. are you sure?</p>
          <div class="text-end row ps-3">
            <button class="btn text-white mt-4 col-5 me-5" style="background-color:rgb(139, 98, 49)" onclick="removeProduct(${i},${product.id})">Remove</button>
            <button class="btn btn-dark mt-4 col-5" onclick="cancelRemove(${i})">Cancel</button>
          </div>
          
        </div>
     </div>
        `
        price += Number(product.price)
        i++
    })   
    totalprice.innerHTML = price +" EGP"
}   
// draw products /////////////////////////////////////////////////////////////

function confirmMessage(i){
    var allProducts = bagProducts.children
    allProducts[i].children[0].classList.add("d-none")
    allProducts[i].children[1].classList.add("d-none")
    allProducts[i].children[2].classList.remove("d-none")
    
}
function removeProduct(i, id){
    var allProducts = bagProducts.children
    console.log(allProducts[i])
    allProducts[i].remove()
    var idProducts= localStorage.getItem("cartArray").split(",")
    var index= idProducts.indexOf(String(id))
    idProducts.splice(index,1)
    localStorage.setItem("cartArray",idProducts)
    window.location.reload()
}
function cancelRemove(i){
    var allProducts = bagProducts.children
    allProducts[i].children[0].classList.remove("d-none")
    allProducts[i].children[1].classList.remove("d-none")
    allProducts[i].children[2].classList.add("d-none")
}