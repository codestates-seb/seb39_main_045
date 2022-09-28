import styled from 'styled-components';
export const SuccessFailWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px 0;
  z-index: 7;
  color: white;
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  user-select: none;
  h2 {
    font-size: 32px;
    font-weight: 700;
    margin-top: 30px;
  }
  h2 + div {
    font-size: 24px;
    line-height: 36px;
    margin: 40px 0;
  }
`;
export const ModalWrapper = styled.div`
  & > div:first-child {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
    overflow: hidden;
  }
`;
export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px;
  width: 80%;
  max-width: 500px;
  top: 50%;
  left: 50%;
  position: fixed;
  animation: open 0.4s forwards 1 ease-out;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 7;
  border-radius: 10px;
  h4 {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--main-btn-brown);
    font-weight: 700;
  }
  h4 + button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    font-weight: 600;
    color: var(--modal-gray);
    cursor: pointer;
    border: none;
    box-shadow: none;
    font-size: 1.5rem;
  }

  @keyframes open {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
    from {
      transform: translate(-50%, -50%) scale(0.5);
    }
  }
`;

const SubmitBtn = styled.button`
  width: 80%;
  padding: 15px;
  background-color: var(--main-btn-brown);
  align-self: center;
  border-radius: 12px;
  border: none;
  color: white;
  margin: 5px;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  font-weight: 600;
  color: var(--modal-gray);
  cursor: pointer;
  border: none;
  box-shadow: none;
  font-size: 1.5rem;
`;
const SelectBtn = styled.button<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? 'var(--main-emp-green)' : ' var(--main-btn-green)'};
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 0.75rem;
  padding: 8px 10px;
  margin: 5px;
`;
const ConfirmBtn = styled(SubmitBtn)`
  background-color: var(--main-btn-green);
  font-size: 1.7rem;
  :hover {
    background-color: var(--main-emp-green);
  }
`;
export const ModalBtn = {
  submit: SubmitBtn,
  select: SelectBtn,
  close: CloseBtn,
  confirm: ConfirmBtn
};

export const TimeDiv = styled.div`
  padding: 5px 10px;
  font-size: 0.88rem;
  input {
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 0 5px;
    font-weight: 700;
    outline: var(--main-btn-green);
  }
  .desc {
    font-size: 0.7rem;
    padding: 5px;
  }
`;
export const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 80%;
  max-width: 350px;
  height: 250px;
  top: calc(50% - 70px);
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 7;
  animation: open 0.4s forwards 1 ease-out;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  & > button {
    position: absolute;
    top: 5px;
    right: 0;
    background-color: transparent;
    font-weight: 600;
    color: var(--modal-gray);
    cursor: pointer;
    border: none;
    box-shadow: none;
  }
  & > div:nth-last-child(2) {
    margin: 10px;
    padding: 5px;
    word-break: break-all;
    font-weight: 600;
    text-align: center;
    white-space: pre-wrap;
    line-height: 1.3;
    letter-spacing: 1px;
    font-size: 0.85rem;
  }
  & > div:last-child {
    margin-top: 5px;
    padding: 5px;
    display: flex;
    justify-content: center;
    width: 80%;

    button {
      border-radius: 15px;
      border: none;
      color: white;
      font-size: 0.8rem;
      :first-child {
        background-color: var(--modal-green);
        margin-right: 10px;
        padding: 10px 20px;
      }
      :last-child {
        background-color: var(--modal-red);
        padding: 10px 15px;
      }
    }
  }
  @keyframes open {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
    from {
      transform: translate(-50%, -50%) scale(0.5);
    }
  }
`;

// SelectModal
export const Label = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 0.88rem;
  margin-bottom: 5px;
`;
export const SelectModalContent = styled.div`
  padding: 20px 0;
  & > div {
    margin-bottom: 20px;
  }
`;

// TodayChallModal
export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  margin: 10px auto;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: 2px solid #ffbe28;
  }
`;
export const ModalContent = styled.form`
  padding: 20px 0 10px;
  display: flex;
  justify-content: space-between;
  min-height: 300px;
  flex-direction: column;
  label {
    margin: 10px 0;
    font-weight: 600;
    font-size: 0.88rem;
    margin-bottom: 5px;
  }
`;
export const ModalContentDiv = styled.div`
  padding: 20px 0 10px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  justify-content: space-between;
  & div > div {
    margin: 10px;
    text-align: center;
  }
`;

export const ModalContentWithPic = styled(ModalContent)`
  justify-content: unset;
  img {
    width: 80%;
    height: 80%;
    max-width: 400px;
    max-height: 400px;
    margin: 5px auto;
    align-self: center;
    border-radius: 3px;
  }
  input[type="file"] {
    padding: 10px;
  }
`;
// SuccessFailModal
