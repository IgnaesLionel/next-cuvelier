export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
  ADD_MODAL: "ADD_MODAL",
  ADD_ORDERS: "ADD_ORDERS",
  ADD_USERS: "ADD_USERS",
  ADD_CATEGORIES: "ADD_CATEGORIES",
};

export const addToCart = (product, cart, number) => {
  const checkId = cart.every((item) => {
    // retour true si l'id des objets du panier son egale à l'id du produit
    return item._id !== product._id;
  });

  if (product.inStock === 0)
    return {
      type: "NOTIFY",
      payload: { error: "Ce produit n'est plus en stock." },
    };

  if (!checkId)
    //si pas trouvé de doublon->
    return {
      type: "NOTIFY",
      payload: { error: "Ce produit à été ajoué au panier." },
    };

  return {
    type: "ADD_CART",
    payload: [...cart, { ...product, quantity: number }],
  };
};

export const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item._id === id) item.quantity -= 1;
  });

  return { type: "ADD_CART", payload: newData };
};

export const increase = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item._id === id) item.quantity += 1;
  });

  return { type: "ADD_CART", payload: newData };
};

export const refreshNumber = (data, id, number) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item._id === id) item.quantity = number;
  });

  return { type: "ADD_CART", payload: newData };
};

export const deleteItem = (data, id, type) => {
  const newData = data.filter((item) => item._id !== id);
  return { type, payload: newData };
};

export const updateItem = (data, id, post, type) => {
  const newData = data.map((item) => (item._id === id ? post : item));
  return { type, payload: newData };
};
