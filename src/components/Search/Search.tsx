import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function Search() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase placeholder="Search" sx={{ ml: 1, flex: 1 }} />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
