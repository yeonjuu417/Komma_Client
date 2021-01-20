import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { handleEndingModal } from '../modules/timer';
import { loginStabilizer } from '../modules/signin';
import { changeColor } from '../modules/color';
import { handleDarkMode } from '../modules/setting';
import Main from '../component/Main';

const MainContainer: React.FC = () => {
  const backgroundColor = useSelector((state: RootState) => state.color.backgroundColor);
  const isLoginModalOn = useSelector((state: RootState) => state.signin.isLoginModalOn);
  const isEndingModalOn = useSelector((state: RootState) => state.timer.isEndingModalOn);
  const isSettingModalOn = useSelector((state: RootState) => state.setting.isSettingModalOn);
  const isDarkMode = useSelector((state: RootState) => state.setting.isDarkMode);
  const dispatch = useDispatch();

  const handlingEndingModal = () => {
    dispatch(handleEndingModal());
  };
  const loginStabilizing = () => {
    dispatch(loginStabilizer());
  };
  const changingColor = (color: string) => {
    dispatch(changeColor(color));
  };
  const handlingDarkMode = () => {
    dispatch(handleDarkMode());
  }

  return (
    <Main
      color={backgroundColor}
      isLoginModalOn={isLoginModalOn}
      isEndingModalOn={isEndingModalOn}
      isSettingModalOn={isSettingModalOn}
      isDarkMode={isDarkMode}
      handleEndingModal={handlingEndingModal}
      loginStabilizer={loginStabilizing}
      changeColor={changingColor}
      handleDarkMode={handlingDarkMode}
    />
  );
}

export default MainContainer
