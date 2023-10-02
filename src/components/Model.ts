export default class Model {
  private count = 0;

  getCount = () => {
    return this.count;
  };

  addCount = () => {
    this.count++;
  };
}
