// Model.ts

export default class Model {
  private static instance: Model | null = null;
  private count = 0;
  private observers: Function[] = [];

  private constructor() {}

  static getInstance(): Model {
    if (!Model.instance) {
      Model.instance = new Model();
    }
    return Model.instance;
  }

  getCount = () => {
    return this.count;
  };

  addCount = () => {
    this.count++;
    this.notifyObservers();
  };

  addObserver(observer: Function) {
    this.observers.push(observer);
  }

  removeObserver(observer: Function) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  private notifyObservers() {
    this.observers.forEach(observer => observer());
  }
}
