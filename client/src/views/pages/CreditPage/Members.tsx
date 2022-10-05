import React from 'react';
import { Credit } from './CreditPage.style';
import { Icon } from 'views/components/icons/credit/intex';
import github from 'assets/img/github.png';

const Members = () => {
  const [hoverItem, setHoverItem] = React.useState<string | null>('');

  const handleMouseOver = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setHoverItem(e.currentTarget.getAttribute('name'));
  };
  const handleMouseOut = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setHoverItem(null);
  };

  return (
    <Credit.Container>
      <Credit.Mentos>
        🌵 선인장 키우기를 이용해주셔서 감사합니다. <br />
        이용에 불편하신 점은 깃허브 이슈로 남겨주세요. 🌵
      </Credit.Mentos>
      <Credit.Position>
        <Credit.Profile>
          <Icon.My
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            height={hoverItem === 'my' ? '170' : '150'}
            width={hoverItem === 'my' ? '180' : '160'}
            d={hoverItem === 'my' ? 'M0 0h180v170H0z' : 'M0 0h160v150H0z'}
          />
          <Credit.Description>
            김민영
            <a href='https://github.com/y0ungg' target="_blank" rel="noreferrer">
              <img src={github} />
            </a>
            <br /> 프론트엔드
          </Credit.Description>
        </Credit.Profile>
        <Credit.Profile>
          <Icon.Yj
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            height={hoverItem === 'yj' ? '170' : '150'}
            width={hoverItem === 'yj' ? '180' : '160'}
            d={hoverItem === 'yj' ? 'M0 0h180v170H0z' : 'M0 0h160v150H0z'}
          />
          <Credit.Description>
            이윤진
            <a href='https://github.com/sweesweett' target="_blank" rel="noreferrer">
              <img src={github} />
            </a>
            <br />프론트엔드
          </Credit.Description>
        </Credit.Profile>
        <Credit.Profile>
          <Icon.Kh
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            height={hoverItem === 'kh' ? '180' : '160'}
            width={hoverItem === 'kh' ? '190' : '180'}
            d={hoverItem === 'kh' ? 'M0 0h190v180H0z' : 'M0 0h180v160H0z'}
          />
          <Credit.Description>
            나강혁
            <a href='https://github.com/Lego79' target="_blank" rel="noreferrer">
              <img src={github} />
            </a>
            <br />백엔드
          </Credit.Description>
        </Credit.Profile>
        <Credit.Profile>
          <Icon.Jp
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            height={hoverItem === 'jp' ? '160' : '150'}
            width={hoverItem === 'jp' ? '150' : '130'}
            d={hoverItem === 'jp' ? 'M0 0h150v160H0z' : 'M0 0h130v150H0z'}
          />
          <Credit.Description>
            박재환
            <a href='https://github.com/jphwany' target="_blank" rel="noreferrer">
              <img src={github} />
            </a>
            <br />백엔드
          </Credit.Description>
        </Credit.Profile>
        <Credit.Profile>
          <Icon.Ar
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            height={hoverItem === 'ar' ? '160' : '150'}
            width={hoverItem === 'ar' ? '150' : '130'}
            d={hoverItem === 'ar' ? 'M0 0h150v160H0z' : 'M0 0h130v150H0z'}
          />
          <Credit.Description>
            양아롬
            <a href='https://github.com/romcanrom' target="_blank" rel="noreferrer">
              <img src={github} />
            </a>
            <br />백엔드
          </Credit.Description>
        </Credit.Profile >
      </Credit.Position >
      <Credit.Mentos>
        💚 with Linus & Devvy 💚
      </Credit.Mentos>
    </Credit.Container >
  );
};

export default Members;
