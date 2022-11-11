import React from 'react';
import style from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={style.container}>
      <div className={style.spinner} title="spinner" />
    </div>
  );
}
