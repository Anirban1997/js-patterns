// Class example
// let instance;

// class ShoppingBag {
//   constructor() {
//     if (instance) {
//       throw new Error('This instance already exists');
//     }
//     this.bag = [];
//     instance = this;
//   }

//   getBag() {
//     console.log(`Your bag has ${this.bag}`);
//   }

//   addItem(item) {
//     this.bag.push(item);
//   }
// }

// Without class example
let shopping = [];

const ShoppingBag = {
  getBag: () => {
    console.log(`This bag has ${shopping}`);
  },
  addItem: (item) => {
    shopping.push(item);
  },
};

const singletonShopping = Object.freeze(ShoppingBag);

export default singletonShopping;
