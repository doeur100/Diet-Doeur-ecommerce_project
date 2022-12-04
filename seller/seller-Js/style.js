
// =========================== Get Element==========================
const table_view = document.querySelector("table");
const dom_products_dialog = document.querySelector("#products-dialog");
const btn_create = document.querySelector("#Create");
const btn_edit = document.querySelector("#edit");
const dialog_element = document.querySelector("dialog");
const header1_element =document.querySelector(".header1");
const header2_element =document.querySelector(".header2");



let listProducts = []
// ============================HIDE / SHOW ==========================
function hide(element){
    element.style.display = "none";
  };
  
  function show(element) {
    element.style.display = "block";
  };

show(dom_products_dialog );
hide(dialog_element );


// =======================function render product=====================
function renderProducts(){
 
    let tableOfBody_container = document.querySelector(".tbody");
    tableOfBody_container.remove();
    let tableContainer = document.createElement("tbody");
    tableContainer.className = "tbody";

    table_view.appendChild(tableContainer);

for(let i = 0; i < listProducts.length; i++) {
    let list = listProducts[i]
        
    let tr1 = document.createElement("tr");
    tr1.dataset.i = i;
    tableContainer.appendChild(tr1);

    
    let img1 = document.createElement("img");
    img1.src = list.image;
    tr1.appendChild(img1);

       
    let td2 = document.createElement("td");
    td2.textContent = list.Name;
    tr1.appendChild(td2);


    let td3 =document.createElement("td");
    td3.textContent = list.Description;
    tr1.appendChild(td3);


    let td4 =document.createElement("td");
    td4.textContent = "$" + list.Price;
    tr1.appendChild(td4);

    let td5 = document.createElement("td");
    td5.className = "edit-delete";


    let button1 = document.createElement("button");
    button1.className = "edit";
        
    button1.textContent = list.button1;
    button1.addEventListener("click",editProduct)
    td5.appendChild(button1);
        
    let button2 = document.createElement("button");
    button2.className = "delete";
  
    button2.addEventListener("click",removeProduct)
    td5.appendChild(button2);
    button2.textContent = list.button2;
    tr1.appendChild(td5);

  }    
}
// ====================================LOCAL STORAGE =================================//
function loadProducts() {
  let ProductsStorage = JSON.parse(localStorage.getItem("listProducts"));
  if (ProductsStorage !== null) {
    listProducts   = ProductsStorage;
  }
};

function saveProducts() {
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
  };
function removeProduct(event){
  //  Get the question index using the dataset
   let i = event.target.parentElement.parentElement.dataset.i;
// Remove Product
  listProducts.splice(i, 1);
 // Save to local storage
 saveProducts();
 // Update the view
 renderProducts();
}

// ============================function add product===========================
function add() {
    show(dom_products_dialog);
    show(dialog_element);
    hide(btn_edit);
    show(btn_create);
    show(header1_element);
    hide(header2_element);
    document.querySelector("#image").value ="";
    document.querySelector("#name").value="";
    document.querySelector("#description").value="";
    document.querySelector("#price").value="";
  };
  
function onCancel(e) {
    hide(dialog_element);
  };
function Onedit(){
  hide(dialog_element);
};
// ======================Create new product======================
function onCreate() {
  let inputImage = document.querySelector("#image").value;
  let inputName = document.querySelector("#name").value;
  let inputDescription = document.querySelector("#description").value;
  let inputPrice = document.querySelector("#price").value;


  if (!(inputImage && inputName && inputDescription && inputPrice)){
   alert("Please complete all information !");
  }else{
    hide(dialog_element );
    // Create new Product//
    let newProduct = {};
    newProduct.image = document.querySelector("#image").value;
    newProduct.Name = document.querySelector("#name").value;
    newProduct.Description= document.querySelector("#description").value;
    newProduct.Price = document.querySelector("#price").value;
    newProduct.button1 ="edit";
    newProduct.button2= "delete";
    listProducts.unshift(newProduct);
    
    // // 2- Save Product
    saveProducts();
  
    // 3 - Update the view
    renderProducts();
  }
   
  };

// ============================function edit product=========================
function editProduct(event){
    show(dialog_element);
    hide(btn_create);
    show(btn_edit);
    hide(header1_element);
    show(header2_element);
    let i = event.target.parentElement.parentElement.dataset.i;
  

    let new_product = listProducts[i];
    document.querySelector("#image").value = new_product.image;
    document.querySelector("#name").value = new_product.Name;
    document.querySelector("#description").value = new_product.Description;
    document.querySelector("#price").value = new_product.Price;


    document.querySelector("#edit").addEventListener("click",function(){
      changeProduct(i);
      i = null;
      show(dom_products_dialog );

    })
  }

  // ===========================function change product========================

  function changeProduct(i){
    hide(dom_products_dialog);
    let newProduct = {};
    newProduct.image = document.getElementById("image").value;
    newProduct.Name = document.getElementById("name").value;
    newProduct.Description = document.getElementById("description").value;
    newProduct.Price = document.getElementById("price").value;
    newProduct.button1 ="edit";
    newProduct.button2= "delete";
   
    listProducts[i] = newProduct;
    
    saveProducts();

    renderProducts();
  }
loadProducts();
renderProducts(); 




