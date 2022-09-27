import React from 'react';
import { ReactComponent as Cactus1 } from '../../components/icons/cactus/cactus1.svg';
import { ReactComponent as Cactus2 } from '../../components/icons/cactus/cactus2.svg';
import { ReactComponent as Cactus3 } from '../../components/icons/cactus/cactus3.svg';
import { ReactComponent as Cactus4 } from '../../components/icons/cactus/cactus4.svg';
import { ReactComponent as Cactus5 } from '../../components/icons/cactus/cactus5.svg';
import { ReactComponent as Cactus6 } from '../../components/icons/cactus/cactus6.svg';
import { ReactComponent as Cactus7 } from '../../components/icons/cactus/cactus7.svg';

const Cactus = ({ percent }: { percent: number }) => {
  if (percent >= 86) {
    return <Cactus7 className="cactus" />;
  } else if (percent >= 71) {
    return <Cactus6 className="cactus" />;
  } else if (percent >= 57) {
    return <Cactus5 className="cactus" />;
  } else if (percent >= 43) {
    return <Cactus4 className="cactus" />;
  } else if (percent >= 29) {
    return <Cactus3 className="cactus" />;
  } else if (percent >= 14) {
    return <Cactus2 className="cactus" />;
  } else {
    return <Cactus1 className="cactus" />;
  }
};

export default Cactus;
