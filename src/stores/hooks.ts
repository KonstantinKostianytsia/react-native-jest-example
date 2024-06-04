import rootStore, {RootStore} from 'stores';

export const useStore = (): RootStore => rootStore;

export const usePopUpStore = () => useStore().popUpStore;
