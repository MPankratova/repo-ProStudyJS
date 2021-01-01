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
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
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
      this.isVisibleCart = !this.isVisibleCart;
    },
  },

  computed: {
    totalPrice() {
      let totalPrice = 0;
      this.cartProducts.forEach((product) => {
        if (product.price !== undefined) {
          totalPrice += product.price;
        }
      });
      return totalPrice;
    },
  },

  created() {
    this.filteredProducts = this.products;
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
        }
      });
  },

  mounted() {},


});