import styled from 'styled-components';
export const AuthWrapper = styled.div`
  background-color: var(--intro-bg-green);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const AuthTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 5px;
  margin-bottom: 20px;
  margin-left: 5px;
`;
export const AuthForm = styled.form`
  width: 80%;
  background-color: var(--intro-form-beige);
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 25%));
`;
export const AuthDefaultBtn = styled.button`
  padding: 15px 20px;
  margin-top: 20px;
  background-color: var(--intro-btn-yellow);
  border: none;
  border-radius: 16px;
  :hover {
    box-shadow: inset 0 0 30px #f8e647cc;
  }
  :active {
    box-shadow: inset 0 0 30px #f8e647cc;
  }
`;
export const AuthLoginBtn = styled(AuthDefaultBtn)`
  align-self: center;
`;
export const AuthLabel = styled.label`
  margin: 10px 0;
  font-weight: 700;
`;
export const AuthInput = styled.input`
  padding: 15px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  &:focus {
    outline: 2px solid #ffbe28;
    background-color: #fff5e6;
  }
`;

export const HBindDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.75rem;
    color: var(--intro-form-darkgreen);
    font-weight: 400;
  }
`;
export const SnsLogin = styled.div`
  width: 50%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 700;
    margin: 5px;
    font-size: 0.8rem;
  }
  span + img {
    width: 188px;
    height: 48px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  img:last-of-type {
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
    cursor: pointer;
  }
`;
export const WayToSignup = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-weight: 700;
    font-size: 14px;
  }
`;
export const InputVisisble = styled(AuthInput)`
  width: 100%;
`;

export const VisibleBind = styled.div`
  position: relative;
  span {
    position: absolute;
    right: 10px;
    top: calc(50% - 5px);
    transform: translateY(-50%);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
  }
`;
