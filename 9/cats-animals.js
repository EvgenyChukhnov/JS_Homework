function Animal(name) {
  var self = this;
  this.name = name;
   var foodAmount = 50;

   function formatFoodAmount() {
       return foodAmount + ' гр.';
   }

   self.dailyNorm = function(amount) {
    if (!arguments.length) return formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    foodAmount = amount;
  };

    self.feed = function() {
      console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
  };
}

function Cat(name) {
  Animal.apply(this, arguments);
  this.name = name;

  var animalFeed = this.feed;
  this.feed = function() {
    animalFeed();
    console.log('Кот доволен ^_^');
    return this;
  }

   this.stroke = function() {
    console.log('Гладим кота.');
    return this;
  }
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());

console.log(barsik.stroke().feed().stroke().stroke().feed().stroke());

barsik = null;