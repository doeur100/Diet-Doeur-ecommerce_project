
const cardContainer = document.querySelector("#card-container");

function loadProducts() {
    let ProductsStorage = JSON.parse(localStorage.getItem("listProducts"));
    if (ProductsStorage !== null) {
        listProducts= ProductsStorage;
    }
};

function showProduct(){
    loadProducts();
    let main_card = document.querySelector(".main-card");
    main_card.remove();
    let mainCard = document.createElement("div");
    mainCard.className = "main-card";
    cardContainer.appendChild(mainCard);
    
    for( let i = 0; i< listProducts.length;i++){
        listProduct = listProducts[i]
        let imgCard1 = document.createElement("div");
        imgCard1.className = "img-card";
        mainCard.appendChild(imgCard1);

        img1 = document.createElement("img");
        img1.src = listProduct.image;
        imgCard1.appendChild(img1);
        
        let name1 = document.createElement("h2");
        name1.className = "name-search"
        name1.textContent = listProduct.Name;
        imgCard1.appendChild(name1);
        
        
        let price = document.createElement("h4");
        price.textContent = "$" + listProduct.Price;
        imgCard1.appendChild(price);
        
        
        let button =  document.createElement("button");
        button.className = "detail";
        button.textContent = "Detail"
        button.dataset.index =i
        button.addEventListener("click",detailProduct)
        imgCard1.appendChild(button);

        let cart_img = document.createElement("div");
        cart_img.id = "cart-img";
        let cart_shopping = document.createElement("img");
        cart_shopping.src = "/Costomer/image/cart.png";
        cart_img.appendChild(cart_shopping);
        cart_img.dataset.index =i;
        imgCard1.appendChild(cart_img);


    } 
} ;
// =================================part detail of products==============================

let ProductsStorage = JSON.parse(localStorage.getItem("listProducts"));

function detailProduct(event){
    let i = event.target.dataset.index;
    let container= document.getElementById('container')
    container.style.display='none'
  

    let ProductsStorages = ProductsStorage[i]
    
    let img_detail = document.createElement("img");
    img_detail.src = ProductsStorages.image;
    
    
    let detail_title = document.createElement("div");
    detail_title.className = "detail-title";
    
    let h1 = document.createElement("h1");
    h1.textContent = ProductsStorages.Name
    detail_title.appendChild(h1);
    
    let price_product = document.createElement("div");
    price_product.className = "price-product";
    
   
    
    let h2 = document.createElement("h2");
    h2.textContent = "$" + ProductsStorages.Price;
    price_product.appendChild(h2);


    let description = document.createElement("div");
    description.className = "description-product";
    
    let h3 = document.createElement("h3");
    h3.textContent = ProductsStorages.Description ;
    description.appendChild(h3);

    let button = document.createElement("button");
    button.id = "button-back";
    button.textContent = "Back";

    
    let detail_container = document.createElement("div");
    detail_container.className = "detail-container";
    detail_container.id='detail-container'


    detail_container.appendChild(img_detail);
    detail_container.appendChild(detail_title);
    detail_container.appendChild(price_product);
    detail_container.appendChild( description);
    detail_container.appendChild(button);
    
    

    main_detail.appendChild(detail_container);
    

    let buttonBacks = document.querySelector("#button-back");
    buttonBacks.addEventListener("click",buttonBack)
   
}

function  buttonBack(){
    let detail_container = document.createElement("div");
    detail_container=''

    let container= document.getElementById('container')
    container.style.display='block'

    let detile= document.getElementById('detail-container')
    detile.remove()


}

showProduct();
loadProducts()

//seach-product//
function searchProduct(event){
    let searchProduct = searchProductInput.value.toLocaleLowerCase()
    productList = document.querySelectorAll(".name-search");
    for(i in productList){
        productList[i].parentNode.style.display = "none";
        if(productList[i].textContent.toLocaleLowerCase()===productList[i] || productList[i].textContent.toLowerCase().includes(searchProduct) )
         productList[i].parentNode.style.display = "block";
    }

}

let searchProductInput = document.querySelector("#search-product").querySelector("input");
searchProductInput.addEventListener("keyup", searchProduct);



// =====================par of show cart=====================//


let show_cart = document.querySelector(".show-cart");


function show(e){
    e.style.display = "block";
}

function hideCart(){
    show_cart.style.display = "none";
}


function showCart(){
    show_cart.textContent = ""
    show(show_cart)
    let button = document.createElement("button");
    button.id = "back_home";
    button.textContent = "Back";
    button.addEventListener("click",hideCart)
    show_cart.appendChild(button);

    let div = document.createElement("div");
    div.className = "main-cart";
    show_cart.appendChild(div);

    let cart_img = document.createElement("img");
    cart_img.src = "https://www.kramakrama.com/en/wp-content/uploads/2022/09/krama-blue-red-2022-350x435.jpg";
    div.appendChild(cart_img);

    let h4 = document.createElement("h4");
    h4.textContent = "Krama";
    div.appendChild(h4);

    let span = document.createElement("span");
    span.textContent = "Total";
    span.textContent = "$45";
    div.appendChild(span);

}


// img cart to click show cart//
let bar_right = document.querySelector(".bar-right"); 
    function clickCart(){
    let click_cart = document.createElement("img");
    click_cart.src = "/Costomer/image/cart.png";
    click_cart.addEventListener("click",showCart)
    bar_right.append(click_cart);
}
clickCart();







