import styled from 'styled-components';
import { Layout } from 'views/components/UI/Layout.style';
import { SmallTrackScroll, BigTrackScroll } from 'views/components/UI/Animation.style';
import { Statics } from 'views/components/UI/atoms/static.style';

const IntroContainer = styled(Layout.FlexColumn)`
	background-color: var(--intro-bg-green);
	height: 100%;
	text-align: center;
	justify-content: center;
`;

const EnterBtn = styled.button`
	${Statics.Border1}
	${Statics.Trans}
	background-color: var(--intro-btn-yellow);
	padding: 12px 24px;
	align-self: center;
	margin: 30px 0;
	font-size: 32px;
	z-index: 1;
	&:hover {
		padding: 16px 32px;
	}
`;

const DefaultWrapper = styled.div`
	overflow: hidden;
	width: 100%;
	position: absolute;
	top: 0;
`;

const Wrapper = styled(DefaultWrapper)`
	height: 100px;
	@media only screen and (min-width: 480px) {
		display: none;
	}
`;

const BigWrapper = styled(DefaultWrapper)`
	height: 150px;
	@media only screen and (max-width: 479px) {
		display: none;
	}
`;

const BtmWrapper = styled(Wrapper)`
	top: auto;
	bottom: 0;
`;

const BigBtmWrapper = styled(BigWrapper)`
	top: auto;
	bottom: 0;
`;

const Track = styled.div`
	width: calc(60px * 8);
	animation: 2s linear infinite ${SmallTrackScroll};
	> * {
		margin: 20px;
	}
`;

const BigTrack = styled.div`
	width: calc(120px * 8);
	animation: 2s linear infinite ${BigTrackScroll};
	> * {
		margin: 30px;
	}
`;

export {
  IntroContainer,
  EnterBtn,
  Wrapper,
  BtmWrapper,
  Track,
  BigTrack,
  BigWrapper,
  BigBtmWrapper
};
