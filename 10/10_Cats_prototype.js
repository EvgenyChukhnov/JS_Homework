function Animal(name) {
  this.name = name;
};

this._foodAmount = 50;
    
Animal.prototype.formatFoodAmount = function() {
           return this._foodAmount + ' гр.';
};
    
Animal.prototype.dailyNorm = function(amount) {
  if (!arguments.length) return this.formatFoodAmount();
    
  if (amount < 50 || amount > 500) {
    return 'Недопустимое количество корма.';
  }
    
  this._foodAmount = amount;
};
    
Animal.prototype.feed = function() {
  console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};
    
function Cat(name) {
  Animal.apply(this, arguments);
}; 
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {  
  Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
      return this;
};
    
Cat.prototype.stroke = function() {
  console.log('Гладим кота.');
    return this;
};
    
    
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