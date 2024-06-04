import {PopUpStore} from './PopUpStore';

export class RootStore {
  popUpStore: PopUpStore;

  constructor() {
    this.popUpStore = new PopUpStore();
  }
}

const rootStore = new RootStore();

export default rootStore;
