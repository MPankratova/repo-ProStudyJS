const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
    {id: 5, price: 5000},
];

const renderProduct = (title, price, image = 'https://placeimg.com/640/480/any') => 
    `<div class="product-item">
        <h3>${title}</h3>
        <img src=${image} class="img-thumbnail">
        <p>${price}</p>
        <button class="by-btn">Добавить в корзину</button>
    </div>`;


const renderProducts = (list) => {
    const productList = list.map((product) => {
        return renderProduct(product.title, product.price);
    });
    document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);
