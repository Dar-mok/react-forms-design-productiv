/**creates a counter object. Will be used to keep unique id's and key's for our components */
class Counter {
  constructor(){
    this.num = 0;
  }
  next(){
    return this.num++;
  }
}

export { Counter }