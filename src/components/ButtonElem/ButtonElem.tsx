import React from 'react';
import { Button } from '@mui/material';
import classNames from 'classnames';
import { TypeButton } from '../types';
import style from './ButtonElem.module.scss';

function ButtonElem({
  buttonClassName,
  colorType = 'primary',
  variant,
  children,
  onClick,
  id,
  title,
}: TypeButton) {
  const btnClass = classNames(style.btn, buttonClassName);
  return (
    <Button
      className={btnClass}
      type="button"
      color={colorType}
      onClick={(e) => onClick(e)}
      id={id}
      variant={variant}
      title={title}
    >
      {children}
    </Button>
  );
}

export default ButtonElem;
