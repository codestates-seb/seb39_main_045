import React from 'react';
import { ImageBox } from 'views/pages/Mypage/mypage.style';
import { TitleIcon } from 'views/components/UI/atoms/icon.style';
import { Title, Content } from 'views/components/UI/molecules/text.style';
import { Layout } from 'views/components/UI/Layout.style';

const PreviousStudy = () => {
  const dummy = [{ day: '2022년 5월 5일', time: '2시간', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' },
    { day: '2022년 5월 5일', time: '2시간', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' },
    { day: '2022년 5월 5일', time: '2시간', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' },
    { day: '2022년 5월 5일', time: '2시간', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' },
    { day: '2022년 5월 5일', time: '2시간', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' },
    { day: '2022년 5월 5일', time: '2시간', img: 'https://yt3.ggpht.com/jNJ6FV83KdlgTHor9nqmxPQi6zDMhXZJl9wBNWHVgixbUUZikFg_TGrxJ9CK7ZXW_2zzWvmi1g=s176-c-k-c0x00ffffff-no-rj' }];

  return (
  <>
    {dummy.map((el, idx) => {
      return (
      <Layout.ChallengeWrapper key={idx}>
        <Title.Day>{el.day}</Title.Day>
        <Content.Diary>
          <TitleIcon className="material-symbols-outlined">edit</TitleIcon>
          {el.time} 공부했어요
        </Content.Diary>
        <ImageBox src={el.img} />
      </Layout.ChallengeWrapper>
      );
    })}
  </>);
};

export default PreviousStudy;
