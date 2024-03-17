// -- JAVASCRIPT CAFE! -- //
let shopStocks = {
  whiteCoffee: {
    stock: 5,
    price: 5,
  },
  blackCoffee: {
    stock: 8,
    price: 5,
  },
  sandwich: {
    stock: 10,
    price: 7.99,
  },
  muffin: {
    stock: 12,
    price: 4.99,
  },
  eggs: {
    stock: 15,
    price: 12.99,
  },
}
//-- display stock--//
//function stockDisplay() {
//document.getElementById('whiteCoffee').innerHTML =
//  'WHITE COFFEE:' + shopStocks.whiteCoffee.stock
//document.getElementById('blackCoffee').innerHTML =
//   'BLACK COFFEE:' + shopStocks.blackCoffee.stock
//document.getElementById('sandwich').innerHTML =
//  'SANDWICH:' + shopStocks.sandwich.stock
//document.getElementById('muffin').innerHTML =
//  'MUFFIN:' + shopStocks.muffin.stock
// document.getElementById('eggs').innerHTML = 'EGGS:' + shopStocks.eggs.stock
//}

//alter the stockDisplay function work for when adding new product.
function stockDisplay() {
  const products = Object.keys(shopStocks)
  for (let i = 0; i < products.length; i++) {
    const productName = products[i]
    const stock = shopStocks[productName].stock
    document.getElementById(productName).innerHTML =
      productName.toUpperCase() + ':' + stock
  }
}
stockDisplay()
let customer = {
  order: [],
}
let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  let orderSize = Math.floor(
    Math.random() * (maxOrderSize - minOrderSize) + minOrderSize
  )
  let customerOrder = []
  for (let i = 0; i <= orderSize; i++) {
    let prodcutIndex = Math.floor(
      Math.random() * Object.keys(shopStocks).length //Object.keys(shopStocks) is array contain objrct shopStocks key items//
    )
    let productName = Object.keys(shopStocks)[prodcutIndex]
    customerOrder.push(productName)
  }
  customer.order = customerOrder
  cash = 0
  displayCustomerOrder()
}
function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML = customer.order
}
document.getElementById('orderButton').onclick = generateCustomerOrder

let cash = 0
function displayCash() {
  const formattedCash = cash.toFixed(2)
  document.getElementById('cash').innerHTML = 'Total Cash: $' + formattedCash
}
displayCash()

function totalCash() {
  cash = 0
  for (let i = 0; i < customer.order.length; i++) {
    if (shopStocks[customer.order[i]].stock > 0) {
      shopStocks[customer.order[i]].stock--
      cash += shopStocks[customer.order[i]].price
    } else {
      alert('Sorry, we are out of ' + customer.order[i])
    }
  }

  stockDisplay()
  customer.order = []
  displayCash()
  displayCustomerOrder()
}
document.getElementById('totalCash').onclick = totalCash
