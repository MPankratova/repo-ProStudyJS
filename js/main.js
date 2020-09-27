const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    seachText: '',
    filteredProducts: [],
    isVisibleCart: false,
    cartProducts: [],
    totalPriceMessage: '',
    totalPriceCoin: ''
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
      console.log(product.id_product);
    },

    filter() {
      const regexp = new RegExp(this.seachText, 'i');
      this.filteredProducts = this.products.filter(product => regexp.test(product.product_name));
      this.products.forEach(el => {
          const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
          if (!this.filteredProducts.includes(el)) {
              block.classList.add('invisible');
          } else {
              block.classList.remove('invisible');
          }
      })
    },

    viewCart() {
      switch(this.isVisibleCart) {
          case(false): {
              this.isVisibleCart = true;
              break;
          }
          case(true): {
              this.isVisibleCart = false;
              break;
          }
      }
    },
    calcAllGoods() {
      let totalPrice = 0;
      this.cartProducts.forEach((product) => {
          if (product.price !== undefined) {
              totalPrice += product.price;
          }
      });
      this.totalPriceMessage = 'Cумма товаров в корзине: ' + totalPrice;
      this.totalPriceCoin = totalPrice;
    }
  },

  created() {
    this.filteredProducts = this.products;
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for(let el of data){
            this.products.push(el);
          }
        });
  },

  mounted(){
    this.calcAllGoods();
  },


});
