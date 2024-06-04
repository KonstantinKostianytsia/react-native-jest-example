import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import MenuScreen from 'screens/MainFlow/MenuScreen';
import {mockedPopUpStore} from 'stores/__test__/__mock__/PopUpStore.mock';
import {usePopUpStore} from 'stores/hooks';
import {MenuScreenTestIDs} from 'constants/testIDs/screens/MainFlow/MenuScreen';

describe('MenuScreen:', () => {
  it('Screen renders correctly', () => {
    const screen = render(<MenuScreen />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
  it('Label appears on click on `toogle button`', async () => {
    const screen = render(<MenuScreen />);
    // Fire event
    const toggleButton = screen.getByTestId(MenuScreenTestIDs.mainButton);
    fireEvent.press(toggleButton);

    expect(mockedPopUpStore.showPopUp).toHaveBeenCalled();
  });

  it('Label appears if `isShown` equals true', () => {
    (usePopUpStore as jest.Mock).mockImplementationOnce(() => ({
      ...mockedPopUpStore,
      isShown: true,
    }));

    const screen = render(<MenuScreen />);
    const popUpLabel = screen.queryAllByTestId('PopUpLabel');
    expect(popUpLabel.length).toBe(1);
  });
});
