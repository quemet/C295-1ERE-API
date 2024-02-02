const sucess = (message, data) => {
  return {
    message: message,
    data: data,
  };
};

const getUniqueId = (products) => {
  const productsIds = products.map((product) => product.id);
  const maxId = productsIds.reduce((a, b) => Math.max(a, b));
  return maxId + 1;
}

export { sucess };
