/* ========================= Function: To Add Item in the Database ========================= */

const addToDB = (item) => {
  let cart = {};
  //  Get the Stored Item
  const storedItem = localStorage.getItem("storedItem");
  if (storedItem) {
    cart = JSON.parse(storedItem);
  }

  // Set the actual Value
  const quantity = cart[item];
  quantity ? (cart[item] = quantity + 1) : (cart[item] = 1);

  // Stored the Updated value
  localStorage.setItem("storedItem", JSON.stringify(cart));
};

/* ========================= Function: To Check existense Item in the Database ========================= */

const itemChecker = (item) => {
    const cart = JSON.parse(localStorage.getItem('storedItem'))
    item in cart ? console.log("Yesss, It is exixt in the Cart.") : console.log("Noo, It isn't in the cart.")
};

/* ========================= Function: To Delete Item in the Database ========================= */

const deleteItem = (item) => {
  // Geth the Stored Item
  const storedItem = JSON.parse(localStorage.getItem("storedItem"));
  if (storedItem) {
    delete storedItem[item];
  }

  // Set the Updated Value
  localStorage.setItem("storedItem", JSON.stringify(storedItem));
};
