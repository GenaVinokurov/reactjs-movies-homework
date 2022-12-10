import React from 'react';
import { Modal } from '@mui/material';
import { useAppSelector } from '../../store/store';
import style from './MovieVideo.module.scss';

interface IMovieModal {
  open: boolean;
  onClose: () => void;
}

function MovieVideo(props: IMovieModal) {
  const { open, onClose } = props;
  const { videoKey, errorVideo } = useAppSelector((state) => state.cardsMovie);

  if (errorVideo !== '') return <div>{errorVideo}</div>;

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {(videoKey && (
        <iframe
          className={style.frame}
          title="youtube"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )) || <div className={style.not_found}>Trailer not found</div>}
    </Modal>
  );
}

export default MovieVideo;
