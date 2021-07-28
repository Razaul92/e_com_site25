/*
=============================
Category Products
=============================
*/

//Get Products


const getProducts = async ()=> {
    try{
        const results = await fetch("/data/products.json");
        const data = await results.json();
        const products = data.products;
        return products;
    } catch (err){
        console.log(err);
    }
};

//Load Products
window.addEventListener("DOMContentLoaded", async function () {
  const products = await getProducts();
  displayProductItems(products);
});

const categoryCenter = document.querySelector(".category__center");

//Display Products
const displayProductItems = items => {
  let displayProduct = items.map(
    product => ` 
                  <div class="product category__products">
                    <div class="product__header">
                      <img src=${product.image} alt="product">
                    </div>
                    <div class="product__footer">
                      <h3>${product.title}</h3>
                      <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      </div>
                      <div class="product__price">
                      <h4><sup>&#8377;</sup><span class="new__price">${product.price}</span></h4>
                      </div>
                      <a href="cart.html"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                  <ul>
                  <a href="../productdetail1.html">
                  <i class="far fa-eye"></i> 
                </a>
                <a href="#">
                  <i class="far fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fas fa-sync-alt"></i>
                </a>
                  </ul>
                  </div>    `
  );

  displayProduct = displayProduct.join("");
  if (categoryCenter) {
    categoryCenter.innerHTML = displayProduct;
  }
};

//Filtering
const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.getElementById("category");

if(categoryContainer){
  categoryContainer.addEventListener("click", async e=>{
    const target = e.target.closest(".section__title");
                         //console.log(target); execute
    if(!target) return;

    const id = target.dataset.id;
                        //console.log(id); execute
    const products = await getProducts();
    
    if(id){
      //remove active from buttons
      Array.from(filterBtn).forEach(btn=>{
        btn.classList.remove("active");
      });
      target.classList.add("active");

      //Load Products
      let menuCategory =  products.filter(product=>{
        if(product.category===id){
          return product;
        }
      });

      if(id=== "All Products"){
        displayProductItems(products);
      }else{
        displayProductItems(menuCategory);
      }
    }
  });
}
