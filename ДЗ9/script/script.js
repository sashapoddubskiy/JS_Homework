function Animal(name) {
    var self = this;
    self._foodAmount = 50;

    function formatFoodAmount() {
        return self._foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name){
    Animal.apply(this, arguments);
    var parentFeed = this.feed;

    
    this.feed = function() {
        parentFeed();
        console.log('Кот доволен ^_^');
        return this;
    };



    this.stroke = function(){
        console.log('Гладим кота');
        return this;
    }

}


console.log(Cat);
var barsik = new Cat('bars');


console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());
console.log(barsik.stroke());
console.log(barsik.Obj);

var animal = new Animal(2);
console.log(animal.feed());