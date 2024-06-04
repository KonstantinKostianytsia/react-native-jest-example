import {makeAutoObservable} from 'mobx';

export class PopUpStore {
  isShown: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  showPopUp() {
    this.isShown = true;
  }

  closePopUp() {
    this.isShown = false;
  }
}
