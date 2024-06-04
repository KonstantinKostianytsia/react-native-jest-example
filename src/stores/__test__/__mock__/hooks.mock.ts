import {mockedPopUpStore} from './PopUpStore.mock';
import {mockedRootStore} from './index.mock';

jest.mock('stores/hooks', () => ({
  useStore: jest.fn(() => mockedRootStore),
  usePopUpStore: jest.fn(() => mockedPopUpStore),
}));
