import React from 'react';
import ModalPortal from './ModalPortal';
import {
  ModalWrapper,
  ModalContentWrapper,
  ModalBtn,
  Cards,
  Card,
  NavigateRight,
  NavigateLeft
} from '../mainpage/modal.style';
import { MainBtn } from '../mainpage/main.style';

import { DefaultProps } from 'types/mainPageTypes';

const ExplanationModal = ({ setIsOpen }: DefaultProps) => {
  const [active, setActive] = React.useState(0);
  return (
    <ModalPortal>
      <ModalWrapper>
        <div onClick={() => setIsOpen(false)}></div>
        <ModalContentWrapper>
          <h4>선인장 키우기</h4>
          <button className="material-icons" onClick={() => setIsOpen(false)}>
            close
          </button>
          <Cards>
            <Card active={active === 0} key={0}>
              선인장키우기에 대해 설명해 드릴게요!
            </Card>
            <Card active={active === 1} key={1}>
              먼저 하단에 웃는 이모지는 마이페이지로 이동할 수 있어요.
            </Card>
            <Card active={active === 2} key={2}>
              <MainBtn.choose>챌린지 선택하기</MainBtn.choose>
              <p>버튼을 클릭하신 후 챌린지를 선택해주세요</p>
            </Card>
            <Card active={active === 3} key={3}>
              감사, 기상, 공부 챌린지를 선택할 수 있습니다.
            </Card>
            <Card active={active === 4} key={4}>
              챌린지를 선택하면 아기 선인장을 받으실 수 있습니다.
              <br />
              챌린지 성공도에 따라 선인장이 무럭무럭 자랄거에요!
            </Card>
            <Card active={active === 5} key={5}>
              <MainBtn.water className="material-icons">
                water_drop
              </MainBtn.water>
              <p>클릭하면 응원의 메시지를 받으실 수 있어요!</p>
            </Card>
            <Card active={active === 6} key={6}>
              <MainBtn.today className="material-icons">wb_sunny</MainBtn.today>
              <p>
                햇빛 버튼은 일일 챌린지를 등록하고 싶으실 때 폼을 여는
                버튼이랍니다.
              </p>
            </Card>
            <Card active={active === 7} key={7}>
              설명이 잘 되었을까요? 이제 새로운 챌린지를 시작해보세요!
            </Card>
          </Cards>

          <NavigateLeft
            className="material-icons"
            onClick={() => setActive(active > 0 ? active - 1 : active)}
          >
            arrow_back_ios_new
          </NavigateLeft>
          <NavigateRight
            className="material-icons"
            onClick={() => setActive(active < 7 ? active + 1 : active)}
          >
            arrow_forward_ios
          </NavigateRight>
          {active === 7 && (
            <ModalBtn.submit onClick={() => setIsOpen(false)}>
              확인
            </ModalBtn.submit>
          )}
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalPortal>
  );
};
export default ExplanationModal;
