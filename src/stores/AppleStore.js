import { observable } from "mobx";
class AppleItem {
  @observable test = 11;
}

const apple = new AppleItem();

export default apple;
