import { ButtonGroup } from '@mui/material';
import React from 'react';
import ButtonElem from '../ButtonElem';
import style from './SortBlock.module.scss';

function SortBlock() {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.target as HTMLButtonElement;
    const prevEl = document.getElementById('activeSort') as HTMLButtonElement;
    prevEl.removeAttribute('id');
    el.id = 'activeSort';
  };
  return (
    <ButtonGroup className={style.container} color="secondary">
      <ButtonElem buttonClassName={style.btn} onClick={onClick} id="activeSort">
        Popular
      </ButtonElem>
      <ButtonElem buttonClassName={style.btn} onClick={onClick}>
        Top rated
      </ButtonElem>
      <ButtonElem buttonClassName={style.btn} onClick={onClick}>
        Upcoming
      </ButtonElem>
    </ButtonGroup>
  );
}

export default SortBlock;
