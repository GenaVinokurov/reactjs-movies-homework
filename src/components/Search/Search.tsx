import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const [result, setResult] = useState('');
  const intl = useIntl();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      navigate(`/search?search=${result}&page=1`);
    }
  };

  useEffect(() => {
    setResult(search || '');
  }, [search]);
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, m: '0 15px' }}
    >
      <InputBase
        placeholder={intl.formatMessage({ id: 'search' })}
        sx={{ ml: 1, flex: 1 }}
        value={result}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <IconButton style={{ width: 45, height: 45 }}>
        <Link to={`/search?search=${result}&page=1`}>
          <SearchIcon color="primary" />
        </Link>
      </IconButton>
    </Paper>
  );
}

export default Search;
