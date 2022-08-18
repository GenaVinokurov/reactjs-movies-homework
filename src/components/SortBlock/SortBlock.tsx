import { ButtonGroup } from '@mui/material';
import classNames from 'classnames';
import React, { useState } from 'react';
import ButtonElem from '../ButtonElem';
import style from './SortBlock.module.scss';

function SortBlock() {
  const sort = ['Popular', 'Top rated', 'Upcoming'];
  const [activeSort, setActiveSort] = useState(sort[0]);
  const onClick = (el: string) => {
    setActiveSort(el);
  };

  return (
    <ButtonGroup className={style.container} color="secondary">
      {sort.map((el) => {
        return (
          <ButtonElem
            buttonClassName={classNames(style.btn, { [style.active]: activeSort === el })}
            onClick={() => onClick(el)}
            key={el}
          >
            {el}
          </ButtonElem>
        );
      })}
    </ButtonGroup>
  );
}

export default SortBlock;
