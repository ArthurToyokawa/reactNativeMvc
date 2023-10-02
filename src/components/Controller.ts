import Model from './Model';

export default class Controller {
  private model: Model;

  constructor() {
    this.model = new Model();
  }

  test = () => {
    console.log('this.btn');
  };

  getCount = () => {
    return this.model.getCount();
  };

  addCount = () => {
    this.model.addCount();
  };
}
