import React, { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const [searchParams] = useSearchParams();
  const [request, setRequest] = useState('');
  const intl = useIntl();
  const query = searchParams.get('q');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRequest(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      handleChange(e);
    }
  };

  useEffect(() => {
    setRequest(query || '');
  }, [query]);

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, m: '0 15px' }}
    >
      <InputBase
        placeholder={intl.formatMessage({ id: 'search' })}
        sx={{ ml: 1, flex: 1 }}
        value={request}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <IconButton style={{ width: 45, height: 45 }}>
        <Link to={`/search?q=${request}`}>
          <SearchIcon color="primary" />
        </Link>
      </IconButton>
    </Paper>
  );
}

export default Search;
