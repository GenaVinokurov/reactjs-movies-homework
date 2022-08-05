import { ButtonGroup } from '@mui/material';
import React from 'react';
import ButtonElem from '../ButtonElem';
import style from './SortBlock.module.scss';

function SortBlock() {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.target as HTMLButtonElement;
    const prevEl = document.getElementById('active-sort') as HTMLButtonElement;
    prevEl.removeAttribute('id');
    el.id = 'active-sort';
  };
  return (
    <ButtonGroup className={style.container} color="secondary">
      <ButtonElem buttonClassName={style.btn} onClick={onClick} id="active-sort">
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
