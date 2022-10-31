const products = [
  {
    id: '1',
    name: 'Dinner with me!',
    description: 'Once in a lifetime',
    price: 1000,
    rating: 5,
    photo:'/assets/1.jpg'
  },
  {
    id: '2',
    name: 'iPad Air',
    description: 'An apple product',
    price: 40000,
    rating: 3,
    photo:'/assets/2.jpg'
  },
    {
    id: '3',
    name: 'Tesla Model 3',
    description: 'Electric Car',
    price: 1000000,
    rating: 4,
    photo:'/assets/3.jpg'
  }
];

export function getProducts() { //backend simulation
  return products;
}

export function getProductById(id:string) {
  for (let product of products) {
    if (product.id === id) {
      return product;
    }
  }
  return null;
}
