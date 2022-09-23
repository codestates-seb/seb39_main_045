import React from 'react';
import { ReactComponent as Cactus1 } from '../../components/icons/cactus/cactus1.svg';
import { ReactComponent as Cactus2 } from '../../components/icons/cactus/cactus2.svg';
import { ReactComponent as Cactus3 } from '../../components/icons/cactus/cactus3.svg';
import { ReactComponent as Cactus4 } from '../../components/icons/cactus/cactus4.svg';
import { ReactComponent as Cactus5 } from '../../components/icons/cactus/cactus5.svg';
import { ReactComponent as Cactus6 } from '../../components/icons/cactus/cactus6.svg';
import { ReactComponent as Cactus7 } from '../../components/icons/cactus/cactus7.svg';

const Cactus = (props: { percent: number }) => {
  if (props.percent >= (6 / 7) * 100) {
    return <Cactus7 className="cactus" />;
  } else if (props.percent >= (5 / 7) * 100) {
    return <Cactus6 className="cactus" />;
  } else if (props.percent >= (4 / 7) * 100) {
    return <Cactus5 className="cactus" />;
  } else if (props.percent >= (3 / 7) * 100) {
    return <Cactus4 className="cactus" />;
  } else if (props.percent >= (2 / 7) * 100) {
    return <Cactus3 className="cactus" />;
  } else if (props.percent >= (1 / 7) * 100) {
    return <Cactus2 className="cactus" />;
  } else {
    return <Cactus1 className="cactus" />;
  }
};

export default Cactus;
