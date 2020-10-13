const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
   
    get appetizers() {
      return this.appetizers;
    },
    
    set appetizers(appetizersIn) {
      this.appetizers.push(appetizersIn)
    },
      
    get mains() {
      return this.mains;
    },
      
    set mains(mainsIn) {
      this.mains.push(mainsIn);
    },
      
    get desserts() {
      return this.desserts;
    },
      
    set desserts(dessertsIn) {
      this.desserts.push(dessertsIn);
    },
  
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        deserts: this._courses.deserts
      }
    },
  
   addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price:dishPrice
    }
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    
    const randomIndex = Math.floor(Math.random() * dishes.length);
    
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    
     const main = this.getRandomDishFromCourse('mains');
    
    const dessert = this.getRandomDishFromCourse('desserts');
    
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is £${totalPrice}.
    Adios!`;
    
  }
  
  };
  
  menu.addDishToCourse('appetizers','Vodka',4.50);
  menu.addDishToCourse('appetizers','Cigarette',2.50);
  menu.addDishToCourse('appetizers','Cold looks',6.90);
  //adds three appetizers to the array
  
  menu.addDishToCourse('mains','Veal',16.50);
  menu.addDishToCourse('mains','Tuna',22.50);
  menu.addDishToCourse('mains','Caviar',29.00);
  //adds three mains
  
  menu.addDishToCourse('desserts','Tequila',2.00);
  menu.addDishToCourse('desserts','Coffe',3.00);
  menu.addDishToCourse('desserts','Good-bye look',5.00);
  //adds three desserts
  
  let meal = menu.generateRandomMeal();
  console.log(meal);