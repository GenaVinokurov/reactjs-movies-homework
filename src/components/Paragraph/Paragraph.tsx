import React from 'react';
import { Typography } from '@mui/material';

type ParagraphProps = {
  title: string;
  content: string;
};

function Paragraph({ title, content }: ParagraphProps) {
  return (
    <div>
      <Typography variant="subtitle2" component="span">
        {title}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {content}
      </Typography>
    </div>
  );
}

export default Paragraph;
