const API="https://fakestoreapi.com/products/";
const API_CATEGORIES="https://fakestoreapi.com/products/categories";

    async function  getdata(){
    let data=await (await fetch(API)).json();
    return await data;
}

window.addEventListener('load',function(){
    document.getElementById("load").classList.remove("hideorshow");


})

async function getcategories(){
    let data=await (await fetch(API_CATEGORIES)).json();
    return await data;   
}
// categories
//<li class="list-group-item item-category"> Men's clothes</li>
getcategories().then(function(categories){
    document.getElementById("load").classList.add("hideorshow");
        categories.forEach(function(category){
        const categoryItem=document.createElement("li");
        categoryItem.classList.add(...["list-group-item","item-categoriry"])
        categoryItem.innerHTML=category;
    document.getElementById("category-container").appendChild(categoryItem)
  })
});
// products
/* <div class="card product-item">
                  <img src="img/img1.jpg" alt="product image">
                  <h4>20000 RWF</h4>
                  <P>Men cotton Jacket</P>
                  <span>-34%</span>
              </div>  */
getdata().then((products)=>{
    products.forEach(function (product){

        const productItem=document.createElement("div");
        productItem.classList.add(...["card","product-item"])
        const productImg=document.createElement("img");
        productImg.src=product.image;
        productImg.alt="product image";
        const productTitle=document.createElement("p");
        productTitle.innerHTML=product.title; 
        const productprice=document.createElement("h4");
        productprice.innerHTML="$"+product.price;
        
        const productDiscount=document.createElement("span");
        productDiscount.innerHTML=product.rating.rate;

        productItem.appendChild(productImg)
        productItem.appendChild(productprice)
        productItem.appendChild(productTitle)
        productItem.appendChild(productDiscount)

        document.getElementById("product-container").appendChild(productItem);
        
        productItem.addEventListener('click' ,function (){
             location.href="details.html"
             
             sessionStorage.setItem("product",JSON.stringify(product))
             
         })
    
  });
}).catch((error)={
})
