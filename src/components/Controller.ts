import Model from './Model';

export default class Controller {
  private model: Model;

  constructor() {
    this.model = Model.getInstance();
  }

  getCount = () => {
    return this.model.getCount();
  };

  addCount = () => {
    this.model.addCount();
  };
}
