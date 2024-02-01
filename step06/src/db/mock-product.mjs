const getProduct = (productId) => {
  return products.find((product) => product.id == productId);
};

const removeProduct = (productId) => {
  products = products.filter((product) => product.id != productId);
};

const updateProduct = (productId, updatedProduct) => {
  products = products.map((product) =>
    product.id == productId ? updatedProduct : product
  );
};

const getUniqueId = () => {
  const productIds = products.map((product) => product.id);
  const maxId = productIds.reduce((a, b) => Math.max(a, b));
  const uniqueId = maxId + 1;

  return uniqueId;
};

let products = [
  {
    id: 1,
    name: "Big Mac",
    price: 5.99,
    created: new Date(),
  },
];

export { products, getProduct, removeProduct, updateProduct, getUniqueId };
