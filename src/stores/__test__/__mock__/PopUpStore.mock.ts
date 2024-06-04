import {PopUpStore} from 'stores/PopUpStore';

export const mockedPopUpStore: PopUpStore = {
  isShown: false,
  showPopUp: jest.fn(),
  closePopUp: jest.fn(),
};
