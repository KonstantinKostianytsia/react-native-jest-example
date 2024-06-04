import React from 'react';

import BackgroundView from 'components/atoms/BackgroundView';
import {PrimaryH1Label} from 'components/atoms/Labels';
import {usePopUpStore} from 'stores/hooks';
import {Observer} from 'mobx-react';
import {CustomButton} from 'components/atoms/CustomButton';
import {MenuScreenTestIDs} from 'constants/testIDs/screens/MainFlow/MenuScreen';

const MenuScreen = () => {
  const popUpStore = usePopUpStore();
  return (
    <Observer>
      {() => (
        <BackgroundView>
          <CustomButton
            testID={MenuScreenTestIDs.mainButton}
            title="Toogle pop up"
            onPress={() =>
              popUpStore.isShown
                ? popUpStore.closePopUp()
                : popUpStore.showPopUp()
            }
          />
          {popUpStore.isShown && (
            <PrimaryH1Label testID="PopUpLabel">Pop Up is shown</PrimaryH1Label>
          )}
        </BackgroundView>
      )}
    </Observer>
  );
};

export default MenuScreen;
