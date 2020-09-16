class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.allProducts = [];
    this.#fetchGoods();
    this.#render();
  }

  #fetchGoods() {
    this.#goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  #render() {
    const block = document.querySelector(this.container);
    for (let product of this.#goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }

  //Метод, определяющий суммарную стоимость всех товаров
  sumPrice() {
    let sum = 0;
    for(let i = 0; i < this.#goods.length; i++) {
      sum += this.#goods[i].price;
    }
    return sum;
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }
  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}


//Класс корзина
class Cart {
// 1. Метод, который слушает все клики по кнопке "Купить"
// 2. Метод, который добавляет товары в объект с товарами корзины
// 3. Метод, который увеличивает количество товара, при клике на кнопку '+'
// 4. Метод, который уменьшает количество товара, при клике на кнопку '-'
// 5. Метод, который удаляет товар из объекта товаров корзины
// 6. Метод, который считает полную стоиомость товаров в корзине
// 7. Метод, который отрисовывает полную стоимость товаров в корзине
}

// Класс элемента корзины
class CartItem {
// 1. Метод-конструктор, который создает объект с товарами корзины
// 2. Метод, который отрисовывает товары в корзине
}


const list = new ProductList();
console.log(list.sumPrice());




