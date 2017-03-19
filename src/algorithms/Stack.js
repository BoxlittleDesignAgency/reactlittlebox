const Stack = function(){
  this.storage = "";
};
/*eslint-disable no-console */
Stack.prototype.push = function (val) {
  this.storage = this.storage.concat("***", val);
  console.info("===============");
  console.info(this.storage);
  console.info("===============");
};

Stack.prototype.pop = function () {
  //slice off he last characters up until ***
  let str = this.storage.slice(this.storage.lastIndexOf("***") + 3);

  //updating the new stack without the last item
  this.storage = this.storage.substring(0, this.storage.lastIndexOf("***"));

  console.log(this.storage);
  //return the last item
  return str;
};

Stack.prototype.size = function () {

};


let myWeeklyMeal = new Stack();
myWeeklyMeal.push("RedBeans");
myWeeklyMeal.push("Jollof");
myWeeklyMeal.push("achichoke");
console.log(myWeeklyMeal.pop());
