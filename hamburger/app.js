//Класс, который создает объект с выбранными пользователем параметрами
class Param {
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}

// Класс Бургер, который создает объкт Бургер (размер, добавка, топпинг)
//и выполняет расчет стоимости бургера и количества калорий
class Burger {
    constructor(size, add, topping){
        this.size = new Param(this.select(size));
        this.add = new Param(this.select(add));
        this.topping = this.getToppings(topping);
    }

    //метод выбора элемента radio (для размера и добавки)
    select(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }

    getToppings(name) {
        let result = [];
        this.selectAll(name).forEach(el => result.push(new Param(el)));
        return result;
    }

    //метод, выбирающий все элементы по имени
    selectAll(name) {
        return document.querySelectorAll(`input[name="${name}"]:checked`);
    }

    //метод, расчитывающий общую стоимость
    sumPrice() {
        let result = this.size.price + this.add.price;
        this.topping.forEach(topping => result += topping.price);
        return result;
    }

    //метод, расчитывающий общую калорийность
    sumCalories() {
        let result = this.size.calories + this.add.calories;
        this.topping.forEach(topping => result += topping.calories);
        return result;
    }

    //метод, выводящий общую стоимость и калории
    showSum(price, calories) {
        document.querySelector(price).textContent = this.sumPrice();
        document.querySelector(calories).textContent = this.sumCalories();
    }
}

