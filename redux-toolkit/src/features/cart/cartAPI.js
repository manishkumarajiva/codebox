async function fetchCartItem() {
  const response = await fetch("http://localhost:8000/cart",{
    method: "GET",
  });
  const carts = await response.json();
  return carts;
}

async function addCartItem(item) {
  const response = await fetch("http://localhost:8000/cart", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(item),
  });
  const carts = await response.json();
  return carts;
}

async function updateCartItem({id, cart}) {
  const response = await fetch(`http://localhost:8000/cart/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  });
  const carts = await response.json();
  return carts;
}

async function deleteCartItem(id) {
  const response = await fetch(`http://localhost:8000/cart/${id}`, {
    method: "DELETE",
  });
  const carts = await response.json();
  return carts;
}

export {fetchCartItem, addCartItem, updateCartItem, deleteCartItem};
