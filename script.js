const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");

const addProductButton = document.getElementById("add-product");
const cartList = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;
let item_Cart = [];

addProductButton.addEventListener("click", addProduct);

function addProduct() {
  const itemsInCart = {
    inputName: productNameInput.value,
    inputPrice: parseFloat(productPriceInput.value),
  };
  if (!productNameInput.value || !productPriceInput.value) {
    alert("Please fill in all field");
    return;
  }

  if(!isNaN(productNameInput.value))
  {
    alert("Please enter valid Product Name!");
  }else{
    item_Cart.push(itemsInCart);
  updateTotalPrice(itemsInCart.inputPrice);
  clearInputs();
  displayCart();
  }
    
    
}

//Clear Inputs
function clearInputs() {
  productNameInput.value = "";
  productPriceInput.value = "";
}

function displayCart() {
  cartList.innerHTML = "";

  //creating new list
  item_Cart.forEach((item, index) => {
    const itemList = document.createElement("li");
    itemList.textContent = `${item.inputName} ${item.inputPrice}`;
    itemList.classList.add("item", "product-name", "product-price");

    itemList.dataset.price = item.inputPrice;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove");
    removeBtn.addEventListener("click", removeItem);
    itemList.appendChild(removeBtn);
    cartList.appendChild(itemList);
  });
}
// Function to update the total price
function updateTotalPrice(price) {
  if (isNaN(price)) return;
  totalPrice += price;
  totalPriceSpan.textContent = parseFloat(totalPrice.toFixed(2));
}

// Function to remove an item

function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
