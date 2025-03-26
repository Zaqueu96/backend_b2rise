/* 
function processItems(items: any[]) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].price > 100) {
      console.log(items[i].name + ' is expensive');
    }
  }
}
*/

type Product = { price: number, name: string }

function checkIfProductIsExpensive(listProducts: Product[]) {
  for (let product of listProducts) {
    if (product.price > 100)
      console.log(product.name + ' is expensive');
  }
}
