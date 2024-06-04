import {RootStore} from 'stores';
import {mockedPopUpStore} from './PopUpStore.mock';

export const mockedRootStore: RootStore = {
  popUpStore: mockedPopUpStore,
};

export * from './hooks.mock';
